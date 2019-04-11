

  const initialState ={

   chatService: 'botEngine',
    users: [],
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


case 'UPDATE_USERS':

return {...state,users:action.payload}


case 'SET_CURRENT_CHAT':

   let messages = action.payload;



return {...state,currentChat:action.payload}


default: return state

}
}
