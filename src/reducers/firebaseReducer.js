
 const initialState = {


   message:'',
   firebase:'',
   firebaseDB:''

 }



export default (state=initialState,action ={})=>{

  switch(action.type){

    case 'SET_FIREBASE_DB':





    return {...state,firebaseDB:action.payload}

    case 'SET_FIREBASE':
    let fb = {...action.payload}
    console.log('fb',fb)



    return {...state,firebase:action.payload}


 case 'INITIAL_RECIEVED':
  console.log(action)

 return {...state,message:action.payload}

 case 'MESSAGE_RECIEVED':


 return {...state,message:action.payload}

 default: return state

}


}
