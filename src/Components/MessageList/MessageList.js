import React,{Component} from 'react'

import {AgentBar,Column,Title,Avatar,FixedWrapper, MessageList as List,Message,MessageGroup,
  MessageText,TextComposer,Row,IconButton,AddIcon,TextInput,SendButton,EmojiIcon,MessageButtons,MessageButton

} from '@livechat/ui-kit'

import {connect} from 'react-redux'
import {Button} from 'semantic-ui-react'

 const mapStateToProps =(state)=>{



   return {

     messageInput: state.inputfieldReducer.messageInput,
     messages: state.chatReducer.messages,
     currentChat:state.chatReducer.currentChat,
     user:state.authReducer.user,
     chatService:state.chatReducer.chatService,
     currentChat:state.chatReducer.currentChat
   }
 }






class MessageList extends Component {


  render(){

  const  {socket,dispatch,messageInput} = this.props;

   let {currentChat,user} = this.props
  let messages =  this.props.messages.map((message)=>{

  return (

    <MessageGroup onlyFirstWithMeta>

         <Message date={message.time} isOwn={user.uid === message.senderID} authorName={message.name}>

           <MessageText>
             {message.text}
           </MessageText>

{message.type ==='button' &&
    <div>
     <MessageButtons onClick = {()=>{
       console.log('clicked')
 this.props.dispatch({type:'CHAT_TRANSFER_REQUEST',payload:'liveChat',messages:this.props.messages})


     }}>
      <MessageButton onClick = {()=>{
        console.log('clicked')
  this.props.dispatch({type:'CHAT_TRANSFER_REQUEST',payload:'liveChat',messages:this.props.messages})


      }} primary label="Confirm" />
      <MessageButton label="Cancel" />
    </MessageButtons>
    </div>

     }



         </Message>

       </MessageGroup>


  )



  })


if(this.props.currentChat.name===""){


  return (<h2 style={{textAlign:"center"}}>no chat selected</h2>)


}


else {
return(



<div style={{height:'650px',boxShadow: '10px -4px 20px -4px rgba(0,0,0,0.27)'}} >






 {
   this.props.chatService === 'liveChat' &&
   (
<AgentBar>
<Avatar imgUrl="https://livechat.s3.amazonaws.com/default/avatars/male_8.jpg" />
   <Column>
  <Title>{this.props.currentChat.name}</Title>

   </Column>

</AgentBar>

)

}
{
  this.props.chatService ==='botEngine' &&
  (
<AgentBar>
<Avatar imgUrl="https://livechat.s3.amazonaws.com/default/avatars/male_8.jpg" />
  <Column>
 <Title>Bot</Title>
  </Column>
  <Column>
 <Button primary style={{marginLeft:'30px'}} onClick = {()=>{

   //this.props.dispatch({type:'CHAT_TRANSFER_REQUEST',payload:'liveChat',messages:this.props.messages})

   this.props.dispatch({type:'CHAT_TRANSFER_REQUEST_MESSAGE'})

 }}>transfer</Button>
  </Column>


</AgentBar>

)

}







<List active>

 {messages}


</List>

<div>
<TextComposer onChange= {
  (e)=> {

    return dispatch({type:'SET_MESSAGE_FIELD',payload:e.target.value})}

}  onClick= {(e)=>{


    console.log('message',messageInput)

    if(messageInput.length>1){

  dispatch({type:'SEND_MESSAGE_REQUEST'})
}

}} onKeyDown = {(e)=>{
  if(e.key ==='Enter'){

    if(messageInput.length>1){

  dispatch({type:'SEND_MESSAGE_REQUEST'})
}



  }



}}>
  <Row align="center">
    <IconButton fit>
      <AddIcon />
    </IconButton>
    <TextInput   />
    <SendButton   fit />
  </Row>

  <Row verticalAlign="center" justify="right">
    <IconButton fit>
      <EmojiIcon />
    </IconButton>
  </Row>
</TextComposer>



</div>

</div>



)
  }
}

}

// <AgentBar>
//   <Avatar imgUrl="https://livechat.s3.amazonaws.com/default/avatars/male_8.jpg" />
//   <Column>
//     <Title>{this.props.currentChat.name}</Title>
//   </Column>
// </AgentBar>
//
// <List active>
//        {messages}
//     <MessageGroup onlyFirstWithMeta
//     avatar="https://livechat.s3.amazonaws.com/default/avatars/male_8.jpg">
//
//          <Message date="21:40" isOwn={false} authorName="staff">
//            <MessageText>
//            Hi I am a bot , still learning but how can I help U!
//            </MessageText>
//          </Message>
//          <Message date="21:42" isOwn={false} authorName="staff">
//            <MessageText></MessageText>
//          </Message>
//
//        </MessageGroup>
//
// </List>
//
// <TextComposer onChange= {
//   (e)=> {
//
//     return dispatch({type:'SET_MESSAGE_FIELD',payload:e.target.value})}
//
// }  onClick= {(e)=>{
//
//
//     console.log('message',messageInput)
//
//     if(messageInput.length>1){
//
//   dispatch({type:'SEND_MESSAGE_REQUEST'})
// }
//
// }} >
//   <Row align="center">
//     <IconButton fit>
//       <AddIcon />
//     </IconButton>
//     <TextInput   />
//     <SendButton   fit />
//   </Row>
//
//   <Row verticalAlign="center" justify="right">
//     <IconButton fit>
//       <EmojiIcon />
//     </IconButton>
//   </Row>
// </TextComposer>

export default connect(mapStateToProps,null)(MessageList)
