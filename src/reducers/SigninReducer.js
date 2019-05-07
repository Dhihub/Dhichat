import {SET_TYPE_FIELD,SET_NAME_FIELD} from '../constants/constants.js'



const initialSigninState = {

  name:'',
  type: '',
  user:{
    displayName:'',
    uid:''
  },
  signedIn:false
}




export default  (state =initialSigninState, action={})=>{


 switch(action.type){

  case SET_NAME_FIELD:

  return {...state,name: action.payload}

  case SET_TYPE_FIELD:

  return {...state,type:action.paylaod}


 case "SIGNIN_SUCCESS":



   return {...state,user:action.payload,signedIn:true}

   case "SIGN_OUT_SUCCESS":
      console.log('action',action)
     return {...state,user:action.payload,signedIn:false}

case "SIGNIN_ERROR":
  return {...state,error:action.payload}

default: return state


 }





}
