import React,{Component} from 'react'
import {connect} from 'react-redux'
import {ChatList as List,ChatListItem, Avatar, Column,Row,Title,Subtitle} from '@livechat/ui-kit'



 class ChatList extends Component {



render(){

      const chatList = this.props.chatList.map((list)=>{

    return(

     <ChatListItem>
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



      })
  return (
    <List style={{ maxWidth: 300 }}>

       {chatList}
  </List>
  )
}







}

const mapStateToProps = (state)=>{

  return {
  chatList: state.chatReducer.chatList
}
}


export default connect(mapStateToProps,null)(ChatList)
