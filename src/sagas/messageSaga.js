
import {eventChannel} from 'redux-saga'
import {takeEvery,put,call,take,all,apply,select} from 'redux-saga/effects';


import {getGroupName,getMessages} from '../utils.js'

const getUser = (state)=> state.authReducer.user;
const getFirebase = (state)=> state.firebaseReducer.firebase;
const getCurrentChat = (state)=> state.chatReducer.currentChat
const getReceiver = state=> state.chatReducer.receiver


 function createChatChannel(firebase,user,reciever){








return eventChannel(emit=>{



 const unsubscribe = firebase.database().ref(`groups`).on('value',(chats)=>{

console.log(chats.val());

if(chats.val()){
  emit(Object.values(chats.val()))
}
else
emit([])


})

return unsubscribe

})
}

  let receiver = {name:'david john',uid:'1LePBgFcMrPLd9gA9bP7vBxrkB83'}


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



    yield put({type:'SET_CHAT_GROUPS',payload:chatGroups})

      const reciever = yield select(getReceiver);

      console.log('receiver',receiver)

   let messages = getMessages(user.uid,chatGroups,receiver.uid)


    yield put({type:'UPDATE_MESSAGES',payload:messages})



  }








}
