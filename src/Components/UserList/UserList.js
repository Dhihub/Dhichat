import React,{Component} from 'react'
import {connect} from 'react-redux'
import {List,UserDiv} from './Style.js'

const mapStateToProps = (state)=>{
  return{
    users:state.chatReducer.users,
    user:state.authReducer.user
  }
}

class UserList extends Component {





  render(){

const users = this.props.users.map((user)=>{

if(user.uid!== this.props.user.uid){

  return(

<UserDiv onClick = {()=>{


  this.props.dispatch({type:'SET_CURRENT_CHAT_REQUEST',payload:user})


}}>

{user.name}



</UserDiv>
  )

}

return;



})


    return(


  <List>



   {users}



  </List>





    )
  }
}



export default connect(mapStateToProps,null)(UserList)
