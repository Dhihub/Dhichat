
import {delay,eventChannel} from 'redux-saga'
import {takeEvery,put,call,take,fork,cancelled,cancel,all,apply,select} from 'redux-saga/effects';




const getUser = (state)=> state.authReducer.user;
const getFirebase = (state)=> state.firebaseReducer.firebase;





function createChannel(firebase,user,reciever){

  let groupID = reciever.uid+user.uid
  let sortedGroupID = groupID.split('').sort().join('')
  console.log('groupID',groupID)
  console.log('sortedGroupID',sortedGroupID)




return eventChannel(emit=>{




 const unsubscribe = firebase.database().ref().child(`groups/${sortedGroupID}/messages`).on('value',(chats)=>{


  emit(Object.values(chats.val()))

})

return unsubscribe

})
}


export function* watchOnMessages(){



    let {receiver} =  yield take('SET_CURRENT_CHAT_REQUEST')
    let user = yield select(getUser)
    let firebase = yield select(getFirebase)

    const chatChannel = yield call(createChannel,firebase,user,receiver)
  //let chats =  yield call(getChat,user,firebase,receiver)


  while(true){

   const messages = yield take(chatChannel)

  yield put({type:'SET_CURRENT_CHAT',payload:{messages,receiver}})




  }








}
