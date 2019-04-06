import React, { Component } from 'react';

import './App.css';
import io from 'socket.io-client';
import {Route,Redirect} from 'react-router-dom'
import firebase from 'firebase'

import {FixedWrapper,SampleMaximized} from '@livechat/ui-kit'
import {connect} from 'react-redux'

import config from './firebaseConfig'
import Chat from './Components/Chat/Chat'
import Signin from './Components/Auth/Signin'
import {setFirebase,setFirebaseDB } from './actions/firebaseDBactions.js'

import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';


firebase.initializeApp(config)






class App extends Component {

  constructor(){
    super();




  //this.firebaseDB  = firebase.database();


    this.state = {
      messages: [],
      message:''
    }
  }

   uiConfig = {
   // Popup signin flow rather than redirect flow.
   signInFlow: 'popup',
   // Redirect to /signedIn after sign in is successful. Alternatively you can provide a callbacks.signInSuccess function.
   signInSuccessUrl: '/chat',
   // We will display Google and Facebook as auth providers.
   signInOptions: [
     firebase.auth.GoogleAuthProvider.PROVIDER_ID,
     firebase.auth.FacebookAuthProvider.PROVIDER_ID,


   ],

  };


  componentDidMount(){

 
  const {dispatch} = this.props

   this.props.dispatch({type:'SET_FIREBASE_REQUEST',payload:firebase})







  // var ref = this.firebaseDB.ref();
  // var usersRef = ref.child('users');
  //
  //  console.log(usersRef.push({"name":"alwin","staff":false}))
  //  console.log(usersRef)

  //this.props.setFirebase(firebase)
  // /this.props.setFirebaseDB(firebase.database())


  //  firebase.auth().onAuthStateChanged(
  //     (user) => {
  //       console.log('user',user.displayName)
  //
  //
  //   }
  //
  //   )
  //
  // }
  // componentWillUnmount(){
  //
  }


  render() {



    return (

  <div>


 <Route exact path ='/' render = {()=>{

   return (
     <div style = {{marginTop:'300px',textAlign:'center'}}>
      <h2>please sign in.....</h2>
     <StyledFirebaseAuth  uiCallback={ui => ui.disableAutoSignIn()} uiConfig={this.uiConfig} firebaseAuth={firebase.auth()}/>
    </div>
   )

 }}/>

      <Route exact path ='/chat' component = {Chat}/>

      </div>

    );
  }
}

const mapStateToProps = (state)=>{

  return {
    firebaseDB: state.firebaseReducer.firebaseDB,
    firebase:state.firebaseReducer.firebase
  }

}



export default connect(mapStateToProps,null)(App);
