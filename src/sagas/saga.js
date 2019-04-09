import {SIGNIN_REQUESTED,LOGIN_SUCCESS} from '../constants/constants.js'
import axios from 'axios'


 import {delay,eventChannel} from 'redux-saga'
import {takeEvery,put,call,take,fork,cancelled,cancel,all,apply,select} from 'redux-saga/effects';

import {getGroupName} from '../utils.js'


import {watchOnMessages} from './messageSaga.js'
import {sendMessageSaga} from './sendMessage.js'
import {transferChat} from './chatTransferSaga.js'
import {userRegisteredChannel} from './userRegisteredChannel.js'

const getUser = (state)=> state.authReducer.user;
const getFirebase = (state)=> state.firebaseReducer.firebase;



function createAuthChannel(firebase){
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

    let groups = firebase.database().ref('groups');

       let position = user.displayName==='david john'? 'manager' : 'staff'

         users.update(
           {
        //  [user.uid]
        [user.uid]: {
            name: user.displayName,
            uid:user.uid,
            photoURL:user.photoURL,
            position: position
          }}

        )


     // groups.update({
     //
     //   [getGroupName(user.uid)]:{
     //
     //   status:'botEngine'
     //
     //  }
     //
     //
     // })
     //


       emit({type:'SIGNIN_SUCCESS',payload:{
           name: user.displayName,
           uid:user.uid,
           photoURL:user.photoURL,
           position: position
         }

       })


     }
     else {
       emit({type:'SIGN_OUT_SUCCESS',payload:user})
     }
  }
   )

return unsubscribe;
   })
    }

    function createChatListChannel(firebase){

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
  let receiver = {name:'david john',uid:'1LePBgFcMrPLd9gA9bP7vBxrkB83'}


     const {payload} = yield take('SET_FIREBASE_REQUEST')

        yield put({type:'SET_FIREBASE',payload:payload})
        yield put({type:'SET_FIREBASE_DB',payload:payload.database()})

       let firebase = yield select(getFirebase)

      const authChannel = yield call(createAuthChannel,payload)

      const chatlistChannel = yield call(createChatListChannel,payload)
     while(true){

    try{
      const data = yield take(authChannel)
      yield put({type:data.type,payload:data.payload})
       fork(watchOnMessages)

   let user = yield select(getUser)

     if(user.position ==='manager'){

      // yield put({type:'UPDATE_CHATLIST',payload:data2})

        //yield fork(listenToChatTranfers)

     }
      if(user.position ==='staff'){


     yield fork(watchOnMessages)



     }


    }catch(err){
      console.error('err',err)
    }


     }

}








export function* rootSaga(){

   yield all([

  fork(watchOnPings),
  fork(sendMessageSaga),
  fork(transferChat)



   ])

}
