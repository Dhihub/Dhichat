import React,{Component} from 'react'

import {AgentBar,Column,Title,Avatar,FixedWrapper, MessageList as List,Message,MessageGroup,
  MessageText,TextComposer,Row,IconButton,AddIcon,TextInput,SendButton,EmojiIcon

} from '@livechat/ui-kit'

import {connect} from 'react-redux'


 const mapStateToProps =(state)=>{



   return {

     messageInput: state.inputfieldReducer.messageInput,
     messages: state.chatReducer.messages,
     currentChat:state.chatReducer.currentChat
   }
 }






class MessageList extends Component {






  render(){

  const  {socket,dispatch,messageInput} = this.props;
  let messages =  this.props.messages.map((message)=>{

  return (

    <MessageGroup onlyFirstWithMeta>

         <Message date={message.time} isOwn={true} authorName={message.name}>
           <MessageText>
             {message.text}
           </MessageText>
         </Message>

       </MessageGroup>


  )



  })


console.log(messageInput)
return(



<div style={{height:'400px'}}>

<AgentBar>
  <Avatar imgUrl="https://livechat.s3.amazonaws.com/default/avatars/male_8.jpg" />
  <Column>
    <Title>{this.props.currentChat.name}</Title>
  </Column>
</AgentBar>

<List active>
       {messages}
    <MessageGroup onlyFirstWithMeta
    avatar="https://livechat.s3.amazonaws.com/default/avatars/male_8.jpg">

         <Message date="21:40" isOwn={false} authorName="staff">
           <MessageText>
           Hi I am a bot , still learning but how can I help U!
           </MessageText>
         </Message>
         <Message date="21:42" isOwn={false} authorName="staff">
           <MessageText></MessageText>
         </Message>

       </MessageGroup>

</List>

<TextComposer onChange= {
  (e)=> {

    return dispatch({type:'SET_MESSAGE_FIELD',payload:e.target.value})}

}  onClick= {(e)=>{


    console.log('message',messageInput)

    if(messageInput.length>1){

  dispatch({type:'SEND_MESSAGE_REQUEST'})
}

}} >
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



)
  }


}


export default connect(mapStateToProps,null)(MessageList)
