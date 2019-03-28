

 const initial = {

  messageInput: ''


 }

 export default (state = initial,action = {})=>{



   switch(action.type){

  case 'SET_MESSAGE_FIELD':

  return {...state,messageInput:action.payload}

  case 'CLEAR_MESSAGE_FIELD':

  return {...state,messageInput:''}

default: return state

   }

 }
