
 import {getGroupName} from '../utils.js'




  const initialState ={

   chatService: 'botEngine',
    users: [],
    chatSelected: false,
    currentChat:{
     name: '',
     status:''
   },


   messages:[]
  }




export default (state=initialState,action={})=>{

switch(action.type){


case 'CHANGE_CHAT_SERVICE':

return {...state, chatService:action.payload}


case 'UPDATE_USERS':

return {...state,users:action.payload}


case 'SET_CURRENT_CHAT':







return {...state,currentChat:action.payload.receiver,messages:Object.values(action.payload.messages)}

case "SET_CHAT_GROUPS":

return {...state,chatGroups:action.payload}


default: return state

}
}
