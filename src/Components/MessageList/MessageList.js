import React,{Component} from 'react'
import {AgentBar,Column,Title,Avatar,FixedWrapper, MessageList as List,Message,MessageGroup,
  MessageText,TextComposer,Row,IconButton,AddIcon,TextInput,SendButton,EmojiIcon

} from '@livechat/ui-kit'



class MessageList extends Component {








  render(){

return(

<div>

<AgentBar>
  <Avatar imgUrl="https://livechat.s3.amazonaws.com/default/avatars/male_8.jpg" />
  <Column>
    <Title>{'Jon Snow'}</Title>
  </Column>
</AgentBar>
<List active>
 <MessageGroup onlyFirstWithMeta>
      <Message date="21:38" isOwn={true} authorName="Jon Snow">
        <MessageText>
          Hi I would like to know about some features
        </MessageText>
      </Message>
      <Message date="21:38" isOwn={true} authorName="Jon Snow">
        <MessageText>This helps me a lot</MessageText>
      </Message>
    </MessageGroup>
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

<TextComposer defaultValue="Hello, can you help me?">
  <Row align="center">
    <IconButton fit>
      <AddIcon />
    </IconButton>
    <TextInput fill />
    <SendButton fit />
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


export default MessageList
