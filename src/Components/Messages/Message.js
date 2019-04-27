import React from 'react'
import {Comment,Button} from 'semantic-ui-react'
import moment from 'moment'
import './style.css'
import {connect} from 'react-redux'
const isOwnMessage = (message,user)=>{


 return message.senderID === user.uid? 'message_self':''

}

const timeFromNow = timestamp=> moment(timestamp).fromNow();

const Message = ({message,user,dispatch})=>{


  return (

<Comment>

<Comment.Avatar  src = {message.photoURL? message.photoURL: ''}/>

<Comment.Content className = {isOwnMessage(message,user)}>
<Comment.Author as ="a">{message.from}</Comment.Author>
 <Comment.Metadata >{timeFromNow(message.time)}</Comment.Metadata>
 <Comment.Text>{message.text}</Comment.Text>

    {message.type==='button' && (<Button.Group>
   <Button primary content='Accept' onClick = {()=>{
     console.log('clicked')
  dispatch({type:'CHAT_TRANSFER_REQUEST',payload:'liveChat',messages:[]})


   }}/>
   <Button content='Ignore'/>


      </Button.Group>)}
</Comment.Content>


</Comment>




)
}

const mapStateToProps = state=>{
  return{

  }
}
export default connect(mapStateToProps,null)(Message)
