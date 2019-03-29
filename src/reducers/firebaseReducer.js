
 const initialState = {


   message:'',
   firebase:'',
   firebaseDB:''

 }



export default (state=initialState,action ={})=>{

  switch(action.type){

    case 'SET_FIREBASE_DB':

    console.log('db',action.payload)

    return {...state,firebaseDB:action.payload}

    case 'SET_FIREBASE':

    console.log('firebase',action.payload)

    return {...state,firebase:action.payload}


 case 'INITIAL_RECIEVED':
  console.log(action)

 return {...state,message:action.payload}
 case 'MESSAGE_RECIEVED':
  console.log(action)

 return {...state,message:action.payload}

 default: return state

}


}
