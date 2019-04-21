import React,{Component} from 'react'
import {withRouter} from 'react-router-dom'
import {connect} from 'react-redux'
import {Grid,Icon,Header,Button,Image,Label} from 'semantic-ui-react'


class MessagesPanel extends Component{
  render(){
    return(

    <Grid style = {{background:'#E9C893'}}>

   <Grid.Column>



  <Grid.Row style={{padding:'50px'}}>



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
  }
}
export default connect(mapStateToProps,null)(withRouter(MessagesPanel))
