
import {take,put} from 'redux-saga/effects'

export  function* setCurrentChat(){


  const {payload} = yield take('SET_CURRENT_CHAT_REQUEST')


   console.log('reciever',payload)


     yield put({type:'SET_CURRENT_CHAT',payload:payload})





}
