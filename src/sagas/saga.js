import {SIGNIN_REQUESTED,LOGIN_SUCCESS} from '../constants/constants.js'
import axios from 'axios'


 import {delay,eventChannel} from 'redux-saga'
import {takeEvery,put,call,take,fork,cancelled,cancel,all,apply,select} from 'redux-saga/effects';

import {createWebSocketConnection} from '../socketConnection'





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
        console.log(snapshot.val())
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

  emit({type:'UPDATE_CHATLIST',payload:snapshot})

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



    }catch(err){
      console.error('socket err',err)
    }


     }

}

function* sendMessage(payload){



  yield apply(payload.socket,payload.socket.emit,['message',payload.messageInput])

  yield put({type:"CLEAR_MESSAGE_FIELD"})



}
export function* sendMessageListener(){
 while(true){

  const {payload} = yield take('SEND_MESSAGE_REQUESTED')

  yield fork(sendMessage,payload)
}
}

function writeTodb(db){



}

  const getdb = state=>state.firebaseReducer.firebaseDB
export function* writeTodbListener(){

  const db = yield select(getdb);

       yield call(writeTodb,db)


}



export function* rootSaga(){

   yield all([

  fork(watchOnPings),



   ])

}
