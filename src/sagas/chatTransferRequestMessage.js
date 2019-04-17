
import {call,take,select} from 'redux-saga/effects';
import {getBotGroupName} from '../utils.js'

const getUser = (state)=> state.authReducer.user;
const getFirebase = (state)=> state.firebaseReducer.firebase;
const getMessage = (state)=>state.inputfieldReducer.messageInput;
const getCurrentChat = (state)=> state.chatReducer.currentChat;
const getChatService = (state) => state.chatReducer.chatService;

let botEngineClientToken = '4cc01931fa302f2b50bcdeb70e961fc47d156face3bdb8b616e3e9f3e18e0cc8'


export function* chatTransferRequestMessageSaga(){




while(true){

    yield take('CHAT_TRANSFER_REQUEST_MESSAGE');

    const user = yield select(getUser);

    const currentChat = yield select(getCurrentChat);
    const firebase = yield select(getFirebase);
    const chatService = yield select(getChatService)

try{
  yield call(chatTransferRequestMessage,firebase,user,currentChat)
}
catch(e){


}




}


}



function* chatTransferRequestMessage(firebase,user,currentChat){

let groupName = getBotGroupName(currentChat.uid,botEngineClientToken,user.uid)

  let message = {
       type: 'button',
       senderId:user.uid,
       text:`${currentChat.name} would like to contact you`,
       time:'3:30'


  }

  const ref = yield firebase.database().ref(`BotGroups/${groupName}/messages`).push(message)

}
