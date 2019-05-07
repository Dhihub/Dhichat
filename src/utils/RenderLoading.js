import React,{Component} from 'react'
import connect from 'react-redux'
import {withRouter} from 'react-router-dom'


export default  = childComponent =>{


    class ComposedComponent extends Component {


     redirectToLoading = ()=>{

    const {signedIn,users,chatGroups,botGroups} = this.props

    if(!signedIn || users.length<1 || chatGroups.length<1 || botGroups.length<1)







     }



      render(){
        return(

      <childComponent {...props}/>




        )
      }
    }


const mapStateToProps = (state)=>{

  signedIn: state.SigninReducer.signedIn,
  users:state.chatReducer.users,
  chatGroups:state.chatReducer.chatGroups,
  botGroups:state.chatReducer.botGroups

}

return connect(mapStateToProps,null)(withRouter(ComposedComponent))


}
