

import {take,select,put} from 'redux-saga/effects';
import {eventChannel} from 'redux-saga'

import {getGroupName} from '../utils.js'

const getFirebase = state => state.firebaseReducer.firebase
const getUser = state=> state.authReducer.user

const getCurrentChat =state=> state.chatReducer.currentChat

export function* transferChat(){

   const {payload} = yield take('CHAT_TRANSFER_REQUEST');
   let user = yield select(getUser)
   let currentChat = yield select(getCurrentChat);

   let sortedGroupID = getGroupName(user.uid,'',currentChat.uid);



  console.log('sorte',sortedGroupID,payload)


   const firebase = yield select(getFirebase);


 console.log('payload',payload);

   let ref =  firebase.database().ref(`groups/${sortedGroupID}`).update({status:payload})


      yield put({type:'CHANGE_CHAT_SERVICE',payload:payload})

}


// function chatServiceChannel(){
//
//
//
//     return eventChannel(emit=>{
//
//
// const unsubscribe = firebase.database()
//
//
//     })
//
// }
// function* watchOnChatTransferSafa(){
//
//
//    while(true){
//
//
//   const chatService = yield take(chatServiceChannel)
//
//
//
//
//
//
//
//
//    }
//
//
//
//
//
// }
