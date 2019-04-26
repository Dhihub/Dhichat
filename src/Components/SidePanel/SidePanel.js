import React,{Component} from 'react'
import {Menu,Tab,Header,Icon,Label,Image,Button} from 'semantic-ui-react'

import {connect} from 'react-redux'

import MessagesPanel from '../MessagesPanel/MessagesPanel'
import UserList from '../UserList/UserList'
import {Container} from './Style.js'
const panes = [
  { menuItem: (
      <Menu.Item key='messages'>
        Messages<Label  color='red'>15</Label>
      </Menu.Item>
    ), render: () => <Tab.Pane attached={true}> <MessagesPanel/> </Tab.Pane> },
  { menuItem: {content:'users',icon: 'users'}, render: () => <Tab.Pane attached={true}><UserList/></Tab.Pane> },

]

const mapStateToProps = (state)=>{

  return {
    user: state.authReducer.user
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
 <Tab menu={{ color:'brown', inverted: false, attached: false, tabular: false }} panes={panes} />
</div>

<div style={{gridArea:'tab',gridArea:'',display:'flex', flexDirection:'column',marginTop:'20px',justifySelf:'center' }} >

<Label as='a' color='black' style={{marginBottom:'1.5em'}}>
    <Image avatar spaced='right' src='https://livechat.s3.amazonaws.com/default/avatars/male_8.jpg' />
    Signed in as {this.props.user.name}
  </Label>

<Button  basic color='red' content='Sign Out' onClick ={()=>{
  this.props.firebase.auth().signOut()

this.props.history.push('/');
}} />

</div>



   </Container>



  )
}



}

export default connect(mapStateToProps,null)(SidePanel)
