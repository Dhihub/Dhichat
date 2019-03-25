import React,{Component} from 'react'
import ChatList from '../ChatList/ChatList'
import MessageList from '../MessageList/MessageList'
import Info from '../Info/Info.js'
import {ChatContainer} from './Style.js'


class Chat extends Component {




  render(){
    return(


<ChatContainer>
<ChatList style = {{gridArea:'chatlist'}}/>
<MessageList style = {{gridArea:'messagelist'}}/>
<Info style = {{gridArea:'info'}}/>
</ChatContainer>






    )
  }
}

export default Chat
