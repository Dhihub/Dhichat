
 import {getGroupName} from '../utils.js'




  const initialState ={

   chatService: 'botEngine',
    users: [],
    chatSelected: false,
    currentChat:{
    name:'',
   },
  receiver:{},

   messages:[],
   chatList:[],
   chatGroups:[]
  }




export default (state=initialState,action={})=>{

switch(action.type){


case 'SET_CHATSERVICE':

return {...state, chatService:action.payload}


case 'UPDATE_USERS':

return {...state,users:action.payload}


case 'SET_CURRENT_CHAT':


return {...state,currentChat:action.payload.receiver,
  messages:Object.values(action.payload.messages),chatService:action.payload.chatService}

case "SET_CHAT_GROUPS":

return {...state,chatGroups:action.payload}

case 'SET_BOT_GROUPS':

return {...state,botGroups:action.payload}

case 'UPDATE_MESSAGES':

if(state.currentChat.name.length>2){

  return {...state,messages:Object.values(action.payload)}

       }

return {...state}


case 'UPDATE_CHATLIST':

return {...state,chatList:action.payload}

default: return state



}
}
