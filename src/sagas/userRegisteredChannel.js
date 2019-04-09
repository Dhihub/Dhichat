
import {eventChannel} from 'redux-saga'

import {take, put} from 'redux-saga/effects'


const getUser = (state)=> state.authReducer.user;
const getFirebase = (state)=> state.firebaseReducer.firebase;

export function userRegisteredChannel(firebase,user){


  return eventChannel(emit=>{


      const unsubscribe = firebase.getDatabase().ref('users').on('value',users=>{


        console.log('users',users.val());

        emit(users.val())


      })




   return unsubscribe;



  })






}
