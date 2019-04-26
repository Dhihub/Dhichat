import React,{Component} from 'react'
import {connect} from 'react-redux'
import ChatList from '../ChatList/ChatList'
import MessageList from '../MessageList/MessageList'
import Info from '../Info/Info.js'
import UserList from '../UserList/UserList'
import {ChatContainer} from './Style.js'
import AppHeader from '../AppHeader/AppHeader'
import SidePanel from '../SidePanel/SidePanel'

class Chat extends Component {




  render(){

    console.log('firebbase',this.props.firebase)


    return(


<ChatContainer>


<div style = {{gridArea:'chatlist', background:'#E9C893',height:'100vh'}}>
<SidePanel/>
</div>
<div style = {{gridArea:'messagelist'}}>
<MessageList />
</div>
<div style = {{gridArea:'info'}}>

</div>




</ChatContainer>






    )
  }
}

const mapStateToProps = (state)=>{
  return {

    firebase: state.firebaseReducer.firebase
  }
}
//<button onClick = {() => this.props.firebase.auth().signOut()}>sign out</button>
export default connect(mapStateToProps,null)(Chat)
