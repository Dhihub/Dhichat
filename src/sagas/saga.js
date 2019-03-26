import {SIGNIN_REQUESTED,LOGIN_SUCCESS} from '../constants/constants.js'
import axios from 'axios'

 import {delay} from 'redux-saga'
import {takeEvery,put,call,take,fork,cancelled,cancel} from 'redux-saga/effects';



  export function* authorize(name,type) {


    try{

   const token = yield call(

     ()=>{

  return axios.post('http://127.0.0.1:5000/signin',{name,type})

     }


   )

   yield put({type:'SIGNIN_SUCCESS',payload:token})
   // set token to localStorage

    }
    catch(error){
      yield put({type:'SIGNIN_ERROR',payload:error})
    }finally {

     if(yield cancelled()){

        // dispatch an action to set isLoginPending to false,

     }

    }




    }






export function* loginFlow(){


   while(true){


     const {payload} = yield take('SIGNIN_REQUEST')


     const task = yield fork(authorize,payload.name,payload.type)

    const action =  yield take(['SIGN_OUT',"SIGNOUT_ERROR"])

    if(action.type ==='LOGOUT')
      {
        yield cancel(task)
        //clear the token from localStorage
      }





   }





}
