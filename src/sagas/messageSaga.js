
import {eventChannel} from 'redux-saga'
import {takeEvery,put,call,take,all,apply,select} from 'redux-saga/effects';


import {getGroupName,getMessages,getChatList} from '../utils.js'

const getUser = (state)=> state.authReducer.user;
const getFirebase = (state)=> state.firebaseReducer.firebase;
const getCurrentChat = (state)=> state.chatReducer.currentChat
const getBotGroups = state => state.chatReducer.botGroups



 function createChatChannel(firebase,user,reciever){


return eventChannel(emit=>{

 const unsubscribe = firebase.database().ref(`groups`).on('value',(chats)=>{

 if(chats.val()){
console.log('message groups',Object.values(chats.val()));

  emit(Object.values(chats.val()))

}
else
emit([])


})

return unsubscribe

})
}

  //let receiver = {name:'david john',uid:'1LePBgFcMrPLd9gA9bP7vBxrkB83'}


export function* watchOnMessages(){



    //let {receiver} =  yield take('SET_CURRENT_CHAT_REQUEST')

    let user = yield select(getUser)
    let firebase = yield select(getFirebase)
    let currentChat = yield select(getCurrentChat)


    const chatChannel = yield call(createChatChannel,firebase,user,currentChat)
  //let chats =  yield call(getChat,user,firebase,receiver)


  while(true){

   const chatGroups = yield take(chatChannel)
    console.log('list',chatGroups);
  let botGroups = yield select(getBotGroups)


    yield put({type:'SET_CHAT_GROUPS',payload:chatGroups})

      const currentChat = yield select(getCurrentChat);



   let data = getMessages(user.uid,chatGroups,botGroups,currentChat)
     console.log("messages",data)
    yield put({type:'UPDATE_MESSAGES',payload:data.messages})
    let chatList = getChatList(user.id,chatGroups)
  if(chatList.length>1){

    console.log('chatlist')
    yield put({type:'UPDATE_CHATLIST', payload:chatList})

  }
  }

}
