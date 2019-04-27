import React,{Component} from 'react'
import {withRouter} from 'react-router-dom'
import {connect} from 'react-redux'
import {Grid,Icon,Header,Button,Image,Label,Menu,List} from 'semantic-ui-react'
import getUnreadCount from '../../utils/getUnreadCount'
class MessagesPanel extends Component{

displayChatGroups = chatGroups=>{

  return chatGroups.length>0 && chatGroups.map(chatGroup=>(

    <List.Item onClick = {() =>{
      this.props.dispatch({type:'OPEN_CHAT_GROUP_REQUEST',
    payload:chatGroup.members.member1.uid ===this.props.user.uid?chatGroup.members.member2:chatGroup.members.member1})

  }}>

    <Image avatar src = {chatGroup.members.member1.uid ===this.props.user.uid?chatGroup.members.member2.photoURL:chatGroup.members.member1.photoURL}/>

    <List.Content>
   <List.Header as='a'>
   {chatGroup.members.member1.uid ===this.props.user.uid?chatGroup.members.member2.name:chatGroup.members.member1.name } {" "}
   <Label  size='tiny' color='red'>{getUnreadCount(chatGroups,this.props.user.uid)}</Label> </List.Header>

     </List.Content>


    </List.Item>


    ))

}

  render(){

    return(

    <Grid style = {{background:'#F7444E'}}>

   <Grid.Column>

  <Grid.Row >
     <Menu.Menu style ={{paddingBottom:'2em'}}>

       <Menu.Item>

         <span><Icon name = "exchange"/> ongoing chats </span>{"    "}
          <Icon name = 'add'/>


       </Menu.Item>

     </Menu.Menu>


  </Grid.Row>

 <Grid.Row>
  <List divided verticalAlign='middle' size ='big'>

  {this.displayChatGroups(this.props.chatList)}


  </List>



 </Grid.Row>


   </Grid.Column>



    </Grid>


    )
  }
}

const mapStateToProps = (state)=>{
  return{
    firebase:state.firebaseReducer.firebase,
    user:state.authReducer.user,
    chatList:state.chatReducer.chatList
  }
}
export default connect(mapStateToProps,null)(withRouter(MessagesPanel))
