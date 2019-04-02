


import {delay,eventChannel} from 'redux-saga'
import {takeEvery,put,call,take,fork,cancelled,cancel,all,apply,select} from 'redux-saga/effects';


const getUser = (state)=> state.authReducer.user;
const getFirebase = (state)=> state.firebaseReducer.firebase;
const getMessage = (state)=>state.inputfieldReducer.messageInput;
const getCurrentChat = (state)=> state.chatReducer.currentChat;


function sendMessage(firebase,user,currentChat,message){



  let groupID = currentChat.uid+user.uid
  let sortedGroupID = groupID.split('').sort().join('')
  console.log('groupID',groupID)
  console.log('sortedGroupID',sortedGroupID)


  let data = {

    from:user.displayName,
    senderID:user.uid,
    text:message,
    time:"3:30"
  }



    let ref =  firebase.database().ref(`groups/${sortedGroupID}`).push(data)






}

export function* sendMessageSaga(){

while(true){

    yield take('SEND_MESSAGE_REQUEST');

     const user = yield select(getUser);
     const message = yield select(getMessage);
     const currentChat = yield select(getCurrentChat);
     const firebase = yield select(getFirebase);




    try{
      yield call(sendMessage,firebase,user,currentChat,message)
    }catch(e){

    }
}






}
