import React,{Component} from 'react'
import {withRouter} from 'react-router-dom'
import {connect} from 'react-redux'
import {Grid,Icon,Header,Button,Image,Label,Menu,List} from 'semantic-ui-react'
import getUnreadCount from '../../utils/getUnreadCount'
class MessagesPanel extends Component{

displayChatGroups = chatGroups=>{

  return chatGroups.length>0 && chatGroups.map(chatGroup=>{


    let receiver = chatGroup.members.member1.uid ===this.props.user.uid?chatGroup.members.member2:chatGroup.members.member1

 return (
    <List.Item  active={receiver.uid===this.props.currentChat.uid} divided verticalAlign='middle' onClick = {() =>{
      this.props.dispatch({type:'OPEN_CHAT_GROUP_REQUEST',
    payload:receiver})

  }}>

    <Image avatar src = {receiver.photoURL}/>

    <List.Content >
   <List.Header as='' style={{color:'white'}} >
   {receiver.name } {" "}
   <Label  size='tiny' color='red'>{getUnreadCount(chatGroup,this.props.user.uid)}</Label> </List.Header>
   {/*<List.Description>offline</List.Description>*/}
     </List.Content>


    </List.Item>
)

} )

}

  render(){

    return(

    <div >


     <Menu.Menu style ={{paddingBottom:'2em'}}>

       <Menu.Item>

         <span><Icon name = "exchange"/> ongoing chats </span>{"    "}
          <Icon name = 'add'/>


       </Menu.Item>

     </Menu.Menu>



  <List selection divided verticalAlign='middle' size ='big'>

  {this.displayChatGroups(this.props.chatList)}


  </List>







    </div>


    )
  }
}

const mapStateToProps = (state)=>{
  return{
    firebase:state.firebaseReducer.firebase,
    user:state.authReducer.user,
    chatList:state.chatReducer.chatList,
    currentChat:state.chatReducer.currentChat
  }
}
export default connect(mapStateToProps,null)(withRouter(MessagesPanel))
