

  const initialState ={


    chatList: []
  }




export default (state=initialState,action={})=>{

switch(action.type){
case 'UPDATE_CHATLIST':

return {...state,chatList:action.payload}


default: return state


}
}
