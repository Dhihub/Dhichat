import {SIGNIN_REQUESTED,LOGIN_SUCCESS} from '../constants/constants.js'
import axios from 'axios'


 import {delay,eventChannel} from 'redux-saga'
import {takeEvery,put,call,take,fork,cancelled,cancel,all,apply,select} from 'redux-saga/effects';

import {createWebSocketConnection} from '../socketConnection'

import {watchOnMessages} from './messageSaga.js'
import {sendMessageSaga} from './sendMessage.js'



function createChannel(firebase){
   return eventChannel(emit=>{

     // const userSignedIn =(event)=>{
     //
     //   emit({type:'SIGNED_IN',payload:event})
     // }

    const errorHandler = (errorEvent)=>{

    emit(new Error(errorEvent.reason))


 }


const unsubscribe = firebase.auth().onAuthStateChanged((user)=>{


    if (user != null){

   let users = firebase.database().ref().child('users');

      var ref = firebase.database().ref("users");



         users.update(
           {
        //  [user.uid]
        [user.uid]: {
            name: user.displayName,
            uid:user.uid,
          }})

   //    ref.once('value',(snapshot)=>{
   //      console.log(snapshot.val())
   // let users = snapshot.val();
    //  })

      ref.orderByChild('uid').once('value',(snapshot)=>{
      //  console.log(snapshot.val())
      })

       emit({type:'SIGNIN_SUCCESS',payload:user})


     }
     else {
       emit({type:'SIGN_OUT_SUCCESS',payload:user})
     }
  }
   )

return unsubscribe;
   })
    }

    function chatChannel(firebase){

      return eventChannel(emit=>{


      const db = firebase.database()

      let userRef = db.ref('users');


      let unsubscribe =  userRef.on('value',(snapshot)=>{

    console.log( Object.values(snapshot.val()))



       const users = snapshot.val()

  emit(Object.values(snapshot.val()))

        })

return unsubscribe
      })



      }



export function* watchOnPings(){

     //const socket = yield call(createWebSocketConnection)

     //yield put({type:'SET_SOCKET',payload:socket})
     const {payload} = yield take('SET_FIREBASE_REQUEST')

        yield put({type:'SET_FIREBASE',payload:payload})
        yield put({type:'SET_FIREBASE_DB',payload:payload.database()})

      const authChannel = yield call(createChannel,payload)

      const chatlistChannel = yield call(chatChannel,payload)




     while(true){

    try{

      const data = yield take(authChannel)

      yield put({type:data.type,payload:data.payload})

      const data2 =yield take(chatlistChannel)
      yield put({type:'UPDATE_CHATLIST',payload:data2})



    }catch(err){
      console.error('socket err',err)
    }


     }

}




const getUser = (state)=> state.authReducer.user;
const getFirebase = (state)=> state.firebaseReducer.firebase;

function* getChat(user,firebase,receiver){





//console.log(user,firebase,receiver)

 // let group = firebase.database().ref().child(`groups/1LePBgFcMrPLd9gA9bP7vBxrkB83jLDIo1an9agw6QvsgUNVn4SXoHu2`);
 //
 //  group.once('value',(chats)=>{
 //    console.log('snap',Object.values(chats.val()));
 //
 //     return chats;
 //
 //
 //    //put({type:'SET_CURRENT_CHAT',payload:Object.values(chats.val())})
 //
 //  })
try{
 //const chats = yield call(firebase.database().ref().child(`groups/1LePBgFcMrPLd9gA9bP7vBxrkB83jLDIo1an9agw6QvsgUNVn4SXoHu2`).once,'value')

  const chats= yield apply(firebase.database().ref().child(`groups/1LePBgFcMrPLd9gA9bP7vBxrkB83jLDIo1an9agw6QvsgUNVn4SXoHu2`),firebase.database().ref().child(`groups/1LePBgFcMrPLd9gA9bP7vBxrkB83jLDIo1an9agw6QvsgUNVn4SXoHu2`).once,['value'])

  yield put({type:'SET_CURRENT_CHAT',payload:Object.values(chats.val())})
}  catch(e){
  yield console.log(e)

}

}

export function* getChatSaga(){
    while(true){

    let {receiver} =  yield take('SET_CURRENT_CHAT_REQUEST')
    let user = yield select(getUser)
    let firebase = yield select(getFirebase)
  let chats =  yield call(getChat,user,firebase,receiver)

    //yield put({type:'SET_CURRENT_CHAT',payload:chats})


    }
}



export function* rootSaga(){

   yield all([

  fork(watchOnPings),
  fork(watchOnMessages),
  fork(sendMessageSaga)



   ])

}
