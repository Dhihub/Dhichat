import React,{Component} from 'react'
import {Segment,Input,Button} from 'semantic-ui-react'
import './style.css'
import {connect} from 'react-redux'
class MessageForm extends Component {

  render(){
  const {dispatch,messageInput} = this.props
    return (


      <Segment className ='message_form'>

       <Input
         fluid
         value = {this.props.messageInput}
         style = {{marginBottom:'0.7em'}}
         label ={<Button icon = "send" onClick= {(e)=>{


             console.log('message',messageInput)

             if(messageInput.length>1){

           dispatch({type:'SEND_MESSAGE_REQUEST'})
         }

         }}/>}
         labelPosition = 'right'
         onChange= {
           (e)=> {
            console.log('cha')
             return dispatch({type:'SET_MESSAGE_FIELD',payload:e.target.value})}

         }

          onKeyDown = {(e)=>{
           if(e.key ==='Enter'){

             if(messageInput.length>1){

           dispatch({type:'SEND_MESSAGE_REQUEST'})
         }



           }



         }}

       />
    <Button

  content = 'upload images'
  color='teal'
  labelPosition ='right'
  icon = 'cloud upload'

    />

      </Segment>

    )
  }
}
const mapStateToProps = (state)=>{
  return {
messageInput: state.inputfieldReducer.messageInput,
  }
}
export default connect(mapStateToProps,null)(MessageForm)
