import React,{Component} from 'react'
import {Menu,Tab,Header,Icon,Label,Image,Button} from 'semantic-ui-react'

import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'

import MessagesPanel from '../MessagesPanel/MessagesPanel'
import UserList from '../UserList/UserList'
import {Container} from './Style.js'
const panes = [
  { menuItem: (
      <Menu.Item key='messages'>
        Messages<Label  color='red'>15</Label>
      </Menu.Item>
    ), render: () => <Tab.Pane attached={true} style={{background:'#5568F1'}}> <MessagesPanel/> </Tab.Pane> },
  { menuItem: {content:'users',icon: 'users'}, render: () => <Tab.Pane style={{background:'#5568F1'}} attached={true}><UserList/></Tab.Pane> },

]

const mapStateToProps = (state)=>{

  return {
    user: state.authReducer.user,
    firebase: state.firebaseReducer.firebase
  }
}
class SidePanel extends Component {



render(){
  return(

    <Container>

      <div style={{flexArea:'header', justifySelf:'center'}}>

 <Header inverted floated = "left" as = "h2" style={{alignSelf:'center',marginTop:'1.5em'}}>

 <Icon name="chat"/>

 <Header.Content>DhiChat</Header.Content>

 </Header>
 </div>

<div style={{gridArea:'tab'}}>
 <Tab menu={{ color:'', inverted: true, attached: true, tabular: false }} panes={panes} />
</div>

<div style={{gridArea:'tab',gridArea:'',display:'flex', flexDirection:'column',marginTop:'20px',justifySelf:'center' }} >

<Label as='a' color='black' style={{marginBottom:'1.5em'}}>
    <Image avatar spaced='right' src={this.props.user.photoURL} />
    Signed in as {this.props.user.name}
  </Label>

<Button  basic style={{color:'white'}} content='Sign Out' onClick ={()=>{
  this.props.firebase.auth().signOut()

this.props.history.push('/');
}} />

</div>



   </Container>



  )
}



}

export default connect(mapStateToProps,null)(withRouter(SidePanel))
