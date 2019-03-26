import {SET_TYPE_FIELD,SET_NAME_FIELD} from '../constants/constants.js'



const initialSigninState = {

  name:'',
  type: ''
}




export default  (state =initialSigninState, action={})=>{


 switch(action.type){

  case SET_NAME_FIELD:

  return {...state,name: action.payload}

  case SET_TYPE_FIELD:

  return {...state,type:action.paylaod}


 case "SIGNIN_SUCCESS":
    console.log(action)
   return {...state,token:action.payload}

case "SIGNIN_ERROR":
  return {...state,error:action.payload}

default: return state


 }





}
