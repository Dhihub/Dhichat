
 const initialSocketState = {


   message:''
 }



export default (state=initialSocketState,action ={})=>{

  switch(action.type){

    case 'SET_SOCKET':

    console.log('socket',action.payload)

    return {...state,socket:action.payload}


 case 'INITIAL_RECIEVED':
  console.log(action)

 return {...state,message:action.payload}
 case 'MESSAGE_RECIEVED':
  console.log(action)

 return {...state,message:action.payload}

 default: return state

}


}
