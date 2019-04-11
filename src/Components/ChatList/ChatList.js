import React,{Component} from 'react'
import {connect} from 'react-redux'
import {ChatList as List,ChatListItem, Avatar, Column,Row,Title,Subtitle} from '@livechat/ui-kit'



 class ChatList extends Component {

    onChatClick = (receiver)=>{

      this.props.dispatch({type:'SET_CURRENT_CHAT_REQUEST',receiver:receiver})
   }


render(){

  const list= []

      const chatList = list.map((list)=>{


    if(list.uid === this.props.user.uid){
      return;
    }
    else {
    return(

     <ChatListItem onClick = {()=>{

       this.onChatClick(list)

     }}>
     <Avatar imgUrl='https://livechat.s3.amazonaws.com/default/avatars/male_8.jpg'/>
     <Column full>

      <Row justify>
     <Title ellipsis>{list.name}</Title>
     <Subtitle nowrap>{'14:31 PM'}</Subtitle>


      </Row>
      <Subtitle ellipsis>
      {'Hello can you help me?'}

      </Subtitle>

     </Column>

     </ChatListItem>

    )

}

      })
  return (
    <List style={{ maxWidth: 300 }}>


  </List>
  )
}

}

const mapStateToProps = (state)=>{

  return {

  user: state.authReducer.user
}
}


export default connect(mapStateToProps,null)(ChatList)
