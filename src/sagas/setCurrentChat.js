
import {take,put,select,takeEvery,call} from 'redux-saga/effects'
import {getGroupName,getMessages,getBotGroupName} from '../utils.js'


const getFirebase = state => state.firebaseReducer.firebase
const  getUser = state=> state.authReducer.user
const getChatGroups = state=>state.chatReducer.chatGroups
const getBotGroups = state=> state.chatReducer.botGroups

const botEngineToken = '4cc01931fa302f2b50bcdeb70e961fc47d156face3bdb8b616e3e9f3e18e0cc8'



// const getMessages = (userId,chatGroups,receiverId)=>{
//
//   let groupName = getGroupName(userId,'',receiverId)
//
//    let messages = {};
//    let chatService = '';
//            chatGroups.map((chatGroup)=>{
//
//        if(chatGroup.groupName === groupName){
//
//        if(chatGroup.status==='botEngine'){
//
//       // messages = getBotMessage(receiverId)
//        }
//        else {
//          chatGroup.messages? messages = chatGroup.messages: messages = {}
//        }
//
//         chatService = chatGroup.status
//
//
//        }
//
//   })
//
//   return {messages,chatService}
//
//
// }


function* setCurrentChat(receiver){

    const user = yield select(getUser)
    let firebase = yield select(getFirebase)

    const botGroupId = getBotGroupName(user.uid,botEngineToken,receiver.uid)

    const groupId = getGroupName(user.uid,receiver.uid)



   yield firebase.database().ref(`BotGroups/${botGroupId}`).update({
     members:{member1:user,member2:receiver},
     groupName:botGroupId,

   })


yield firebase.database().ref(`groups/${groupId}`).update({status:'botEngine',members:{member1:user,member2:receiver},groupName:groupId})

   let chatGroups = yield select(getChatGroups)
   let botGroups = yield select(getBotGroups)

     let data = getMessages(user.uid,chatGroups,botGroups,receiver)
     console.log('data',data)

    yield put({type:'SET_CURRENT_CHAT',payload:{receiver,messages:data.messages,chatService:data.chatService}})


}


export  function* setCurrentChatSaga(){


while(true){




const {payload} = yield take('SET_CURRENT_CHAT_REQUEST')



yield call(setCurrentChat,payload)



}







}
