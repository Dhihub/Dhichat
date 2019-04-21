import React,{Component} from 'react'
import {Menu,Tab,Grid,Header,Icon,Label,Image,Button} from 'semantic-ui-react'

import {connect} from 'react-redux'

import MessagesPanel from '../MessagesPanel/MessagesPanel'
import UserList from '../UserList/UserList'

const panes = [
  { menuItem: (
      <Menu.Item key='messages'>
        Messages<Label color='red'>15</Label>
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

    <Grid size = 'large'
     inverted
     fixed = 'left'
      vertical
      style={{fontSize:'1.2rem' }}>

      <Grid.Column>

  <Grid.Row style={{padding:'1.2em', margin:0}}>
<Header inverted floated = "left" as = "h2">

<Icon name="chat"/>

<Header.Content>DhiChat</Header.Content>

</Header>

</Grid.Row>


<Grid.Row style ={{margin:'17px'}}>
  <Tab menu={{ color:'brown', inverted: false, attached: false, tabular: false }} panes={panes} />
</Grid.Row>



<Grid.Row>



<Label as='a' color='black' style={{marginLeft:'30px'}} >
    <Image avatar spaced='right' src='https://livechat.s3.amazonaws.com/default/avatars/male_8.jpg' />
    Signed in as {this.props.user.name}
  </Label>




</Grid.Row>


<Grid.Row style={{marginLeft:'70px',marginTop:"10px"}}>
<Button basic color='red' content='SignOut' onClick ={()=>{
  this.props.firebase.auth().signOut()

this.props.history.push('/');
}} />
</Grid.Row>







  </Grid.Column>




         </Grid>

  )
}



}

export default connect(mapStateToProps,null)(SidePanel)
