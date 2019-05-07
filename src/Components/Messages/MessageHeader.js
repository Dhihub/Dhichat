import React,{Component} from 'react'
import {Header,Segment,Input,Icon,Button,Image} from 'semantic-ui-react'
import {connect} from 'react-redux'

class MessageHeader extends Component {
  render(){
    return (

//#002C3E
  <Segment clearing style={{background:'#5568F1',color:'white'}}>



  <Header fluid ='true' as = 'h2' floated="left" style={{marginBottom:0,color:'white'}}>

  <Image avatar src = {this.props.currentChat.photoURL}/>

  {this.props.chatService ==='botEngine'? `${this.props.currentChat.name}'s Bot`: this.props.currentChat.name }

  { this.props.chatService ==='botEngine' && <Button  color='red'   style={{marginLeft:'30px',background:'red'}} onClick = {()=>{

    this.props.dispatch({type:'CHAT_TRANSFER_REQUEST_MESSAGE',payload:'botEngine'})

  }}>transfer</Button> }

  { this.props.chatService ==='liveChat' && <Button primary style={{marginLeft:'30px'}} onClick = {()=>{

  this.props.dispatch({type:'CHAT_TRANSFER_REQUEST',payload:'botEngine',messages:[]})

  }}>Leave convo</Button> }


  </Header>
  <Header floated = 'right' style={{marginBottom:0,color:'white',marginTop:'.7em'}}>
  <Input
  size = 'mini'
  icon ='search'
  name="searchMessage"
  placeholder = 'search Messages'

  />


  </Header>


  </Segment>

    )
  }
}

const mapStateToProps = (state)=>{

  return {

    currentChat:state.chatReducer.currentChat,
    user:state.authReducer.user,
    chatService:state.chatReducer.chatService,
  }
}
export default connect(mapStateToProps,null)(MessageHeader)
