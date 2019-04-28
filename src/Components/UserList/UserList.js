import React,{Component} from 'react'
import {connect} from 'react-redux'
import {List,Input} from 'semantic-ui-react'


const mapStateToProps = (state)=>{
  return{
    users:state.chatReducer.users,
    user:state.authReducer.user
  }
}

class UserList extends Component {


  state = {
    users:[]
  }
  componentWillReceiveProps(props){
    this.setState({users:props.users})
  }
  componentDidMount(){
    this.setState({users:this.props.users})
  }

  // componentDidUpdate(){
  //   this.setState({users:this.props.users})
  // }



 displayUsers = users =>{

   return users.map((user)=>{


     if(user.uid!== this.props.user.uid){

       return(

     <List.Item onClick = {()=>{

       this.props.dispatch({type:'SET_CURRENT_CHAT_REQUEST',payload:user})
     }}>
     <List.Content><List.Header>{user.name}</List.Header></List.Content>
     </List.Item>
       )
     }
     else return;
   })
}

filterList = (e)=>{



  console.log(e.target.value)
  let updatedList = this.state.users
   updatedList = this.props.users.filter((user)=>{



    return user.name.toLowerCase().search(e.target.value.toLowerCase()) !== -1



  })


  this.setState({users:updatedList})

}

  render(){

    console.log(this.state.users)

return(
  <div>
  <Input icon ='users' iconPosition ='left' placeholder='Search users' onChange ={(e)=>{this.filterList(e)}}/>

  <List selection>
   {this.displayUsers(this.state.users)}

  </List>
  </div>

    )
  }
}



export default connect(mapStateToProps,null)(UserList)
