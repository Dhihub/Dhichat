
 const initialSocketState = {


   message:''
 }



export default (state=initialSocketState,action ={})=>{

  switch(action.type){

    case 'SET_FIREBASE_DB':

    console.log('db',action.payload)

    return {...state,firebaseDB:action.payload}


 case 'INITIAL_RECIEVED':
  console.log(action)

 return {...state,message:action.payload}
 case 'MESSAGE_RECIEVED':
  console.log(action)

 return {...state,message:action.payload}

 default: return state

}


}
