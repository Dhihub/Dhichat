
import {take,put,select,takeEvery,call} from 'redux-saga/effects'
import {getGroupName,getMessages,getBotGroupName} from '../utils.js'

const  getUser = state=> state.authReducer.user
const getChatGroups = state=>state.chatReducer.chatGroups
const getBotGroups = state=> state.chatReducer.botGroups
const getFirebase = state => state.firebaseReducer.firebase
const getChatService = state => state.chatReducer.chatService

 function* openChatGroup(receiver){


const user = yield select(getUser)
   let chatGroups = yield select(getChatGroups)
   let botGroups = yield select(getBotGroups)
   let firebase = yield select(getFirebase)

  // let chatService = yield select(getChatService)


     const groupId = getGroupName(user.uid,receiver.uid)





    //
    // let readMessages =   Object.values(data.messages).map((message)=>{
    //
    //   message.read = true
    //
    //   })

    //  if(chatService ==='liveChat'){

   //let ref =  yield firebase.database().ref(`groups/${groupId}/messages`).set({messages:readMessages})

 //}

   // firebase.database().ref().child(`groups/${groupId}/messages/`).on('value',(snapshot)=>{
   //  console.log('key',snapshot.val().ref.update({read:true}))
   // })

    firebase.database().ref(`groups/${groupId}/messages`).once('value').then((snapshot)=>{

      let updates ={}
      snapshot.forEach((childSnap)=>{
        let key = childSnap.key
         console.log(childSnap.val())
         if(childSnap.val().senderID === receiver.uid){
        updates[`groups/${groupId}/messages/${key}/read`] = true
      }

      })

     updates[`groups/${groupId}/openedBy/${user.uid}`] = true

     //return firebase.database().ref().update(updates)

   })


let data = getMessages(user.uid,chatGroups,botGroups,receiver)

    yield put({type:'SET_CURRENT_CHAT',payload:{receiver,messages:data.messages,chatService:data.chatService}})




 }




export  function* openChatGroupSaga(){


while(true){




const {payload} = yield take('OPEN_CHAT_GROUP_REQUEST')



yield call(openChatGroup,payload)

}

}
