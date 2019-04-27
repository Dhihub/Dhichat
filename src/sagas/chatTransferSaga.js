

import {take,select,put,call} from 'redux-saga/effects';
import {eventChannel} from 'redux-saga'

import {getGroupName} from '../utils.js'

const getFirebase = state => state.firebaseReducer.firebase
const getUser = state=> state.authReducer.user

const getCurrentChat =state=> state.chatReducer.currentChat
const getMessages = state => state.chatReducer.Messages

export function* transferChatSaga(){

  while(true){

   const {payload,messages} = yield take('CHAT_TRANSFER_REQUEST');
   let user = yield select(getUser)
   let currentChat = yield select(getCurrentChat);
  // let messages = yield select(getMessages)

   let groupName = getGroupName(user.uid,currentChat.uid)
   const firebase = yield select(getFirebase);




 yield call(transferChat,firebase,payload,messages,groupName)

}



}

function* transferChat(firebase,payload,messages,groupName){
//let messages2 = yield select(getMessages)



 yield put({type:'CHANGE_CHAT_SERVICE',payload:payload})

  let ref =  firebase.database().ref(`groups/${groupName}`).update({status:payload})

    //let ref =  firebase.database().ref(`groups/${groupName}`).update({status:payload,messages:{...messages}})





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
