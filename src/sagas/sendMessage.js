


import {delay,eventChannel} from 'redux-saga'
import {takeEvery,put,call,take,fork,cancelled,cancel,all,apply,select} from 'redux-saga/effects';


import {getGroupName,getBotGroupName} from '../utils.js'

const getUser = (state)=> state.authReducer.user;
const getFirebase = (state)=> state.firebaseReducer.firebase;
const getMessage = (state)=>state.inputfieldReducer.messageInput;
const getCurrentChat = (state)=> state.chatReducer.currentChat;
const getChatService = (state) => state.chatReducer.chatService;

let botEngineClientToken = '4cc01931fa302f2b50bcdeb70e961fc47d156face3bdb8b616e3e9f3e18e0cc8'
let storyid='5a439b8bb9677d000790134d'

 const sendQueryToBot = (message)=>{



   return fetch('https://api.botengine.ai/query', {
      headers: {
        authorization: `Bearer ${ botEngineClientToken }`,
        'Content-Type': 'application/json',
      },
      method: 'POST',
      body: JSON.stringify({
        sessionId: "iefjiorhjo25",
        query: message,
        storyId: storyid,
      }),
    }).then(response =>{

  //  console.log('resp',response.json())
  const resp = response.json()
    return resp

    })





}


function* handleSendMessage(firebase,user,currentChat,message,chatService){


  //let groupName = getGroupName(user.uid)

let data = {}

if(chatService === 'botEngine'){



 let groupName = getBotGroupName(user.uid,botEngineClientToken,currentChat.uid)
console.log('bot engine',groupName)
    data = {

      from:user.name,
      senderID:user.uid,
      text:message,
      time:"3:30"
    }


     let ref =  firebase.database().ref(`BotGroups/${groupName}/messages`).push(data)


       const botResponse = yield call(sendQueryToBot,message)
        console.log(botResponse.result.fulfillment)
       data = {

         from:'bot',
         senderID:botEngineClientToken,
         text:botResponse.result.fulfillment[0].message || botResponse.result.fulfillment[0].title,
         time:"3:30"
       }
       console.log(data)

 ref =  firebase.database().ref(`BotGroups/${groupName}/messages`).push(data)


} else if(chatService ==='liveChat'){


let groupName = getGroupName(user.uid,currentChat.uid)

      data = {

        from:user.name,
        senderID:user.uid,
        text:message,
        time:"3:30"
      }




let ref =  firebase.database().ref(`groups/${groupName}/messages`).push(data)

}

  yield put({type:'CLEAR_MESSAGE_FIELD',payload:''})



}

export function* sendMessageSaga(){

while(true){

    yield take('SEND_MESSAGE_REQUEST');

     const user = yield select(getUser);
     const message = yield select(getMessage);
     const currentChat = yield select(getCurrentChat);
     const firebase = yield select(getFirebase);
     const chatService = yield select(getChatService)




    try{

      yield call(handleSendMessage,firebase,user,currentChat,message,chatService)



    }catch(e){


    }
}



}
