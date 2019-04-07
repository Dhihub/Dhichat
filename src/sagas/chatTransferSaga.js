

import {take,select} from 'redux-saga/effects';

import {getGroupName} from '../utils.js'

const getFirebase = state => state.firebaseReducer.firebase
const getUser = state=> state.authReducer.user



export function* transferChat(){



   const {payload} = yield take('CHAT_TRANSFER_REQUEST');
   let user = yield select(getUser)

   let sortedGroupID = getGroupName(user.uid);



  console.log('sorte',sortedGroupID,payload)


   const firebase = yield select(getFirebase);

 console.log('pyload',payload);

   let ref =  firebase.database().ref(`groups/${sortedGroupID}`).update({status:payload})

}
