import React,{Component} from 'react'
import {connect} from 'react-redux'
import ChatList from '../ChatList/ChatList'
import MessageList from '../MessageList/MessageList'
import Info from '../Info/Info.js'
import {ChatContainer} from './Style.js'


class Chat extends Component {




  render(){
    console.log('firebbase',this.props.firebase)
    return(


<ChatContainer>
<ChatList style = {{gridArea:'chatlist'}}/>
<MessageList style = {{gridArea:'messagelist'}}/>
<Info style = {{gridArea:'info'}}/>
<button onClick = {() => this.props.firebase.auth().signOut()}>sign out</button>
</ChatContainer>






    )
  }
}

const mapStateToProps = (state)=>{
  return {

    firebase: state.firebaseReducer.firebase
  }
}
export default connect(mapStateToProps,null)(Chat)
