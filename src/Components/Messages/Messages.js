import React,{Component} from 'react'
import {connect} from 'react-redux'

import {Segment,Comment} from 'semantic-ui-react'
import MessageHeader from './MessageHeader.js'
import MessageForm from './MessageForm.js'
import Message from './Message.js'
class Messages extends Component{


displayMessages = messages=>(

  messages && messages.length>0 && messages.map((message)=>(

      <Message

     message = {message}
     user = {this.props.user}


      />


  ))

)


  render(){
    return(
<React.Fragment>

<MessageHeader/>

<Segment>

<Comment.Group className = 'messages'>
 {this.displayMessages(this.props.messages)}

</Comment.Group>



</Segment>

<MessageForm/>

</React.Fragment>




    )
  }
}
const mapStateToProps =state =>{
  return {

   messages: state.chatReducer.messages,
   user:state.authReducer.user


  }
}
export default connect(mapStateToProps,null)(Messages)
