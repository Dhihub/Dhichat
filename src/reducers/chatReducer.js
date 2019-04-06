

  const initialState ={

   chatService: 'botEngine',
    chatList: [],
    chatSelected: false,
    currentChat:{
     name: ''


   },
   messages:[]
  }




export default (state=initialState,action={})=>{

switch(action.type){


case 'CHANGE_CHAT_SERVICE':

return {...state, chatService:action.payload}


case 'UPDATE_CHATLIST':

return {...state,chatList:action.payload}


case 'SET_CURRENT_CHAT':

   let messages = action.payload;



return {...state,messages:action.payload.messages,currentChat:action.payload.receiver}


default: return state

}
}
