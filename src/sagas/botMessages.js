import {eventChannel} from 'redux-saga'

import {put,call,take,all,apply,select} from 'redux-saga/effects';
import {getMessages} from '../utils.js'

const getUser = (state)=> state.authReducer.user;
const getFirebase = (state)=> state.firebaseReducer.firebase;
const getCurrentChat = (state)=> state.chatReducer.currentChat
const getChatGroups = state=> state.chatReducer.chatGroups
const getBotGroups = state=> state.chatReducer.botGroups



function createChannel(firebase){


  return eventChannel(emit=>{



const unsubscribe = firebase.database().ref(`BotGroups`).on('value',(chats)=>{

 if(chats.val()){

console.log('bot groups',Object.values(chats.val()));
emit(Object.values(chats.val()))

 }
 else {
   emit([])
 }


})

return unsubscribe

  })

}

export function* watchOnBotMessages(){

  let user = yield select(getUser)
  let firebase = yield select(getFirebase)
  let currentChat = yield select(getCurrentChat)



  const botChannel = yield call(createChannel,firebase)

while(true){


  const botGroups = yield take(botChannel)
  let chatGroups = yield select(getChatGroups)
  let currentChat = yield select(getCurrentChat)

  yield put({type:'SET_BOT_GROUPS',payload:botGroups})



  let data = getMessages(user.uid,chatGroups,botGroups,currentChat)

  yield put({type:'UPDATE_MESSAGES',payload:data.messages})


}




}
