
import {take,put,select,takeEvery,call} from 'redux-saga/effects'
import {getGroupName,getMessages,getBotGroupName} from '../utils.js'

const  getUser = state=> state.authReducer.user
const getChatGroups = state=>state.chatReducer.chatGroups
const getBotGroups = state=> state.chatReducer.botGroups


 function* openChatGroup(receiver){


const user = yield select(getUser)
   let chatGroups = yield select(getChatGroups)
   let botGroups = yield select(getBotGroups)

     let data = getMessages(user.uid,chatGroups,botGroups,receiver)
     console.log('data',data)

    yield put({type:'SET_CURRENT_CHAT',payload:{receiver,messages:data.messages,chatService:data.chatService}})




 }




export  function* openChatGroupSaga(){


while(true){




const {payload} = yield take('OPEN_CHAT_GROUP_REQUEST')



yield call(openChatGroup,payload)

}

}
