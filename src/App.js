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

const uiConfig = {
 // Popup signin flow rather than redirect flow.
 signInFlow: 'popup',
 // Redirect to /signedIn after sign in is successful. Alternatively you can provide a callbacks.signInSuccess function.
 signInSuccessUrl: '/chat',
 // We will display Google and Facebook as auth providers.
 signInOptions: [
   firebase.auth.GoogleAuthProvider.PROVIDER_ID,
   firebase.auth.FacebookAuthProvider.PROVIDER_ID

 ],
 // callbacks: {
 //      // Avoid redirects after sign-in.
 //      signInSuccessWithAuthResult: () => false,
 //      redirect: ()=>{
 //        return <Redirect to ='/signin'/>
 //      }
 //    }
};

class App extends Component {

  constructor(){
    super();




  //this.firebaseDB  = firebase.database();


    this.state = {
      messages: [],
      message:''
    }
  }



  componentDidMount(){


  // var ref = this.firebaseDB.ref();
  // var usersRef = ref.child('users');
  //
  //  console.log(usersRef.push({"name":"alwin","staff":false}))
  //  console.log(usersRef)

  //this.props.setFirebase(firebase)
  // /this.props.setFirebaseDB(firebase.database())



  }


  render() {

console.log('firebase',firebase)

    return (

  <div>


 <Route exact path ='/' render = {()=>{
   return <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()}/>
 }}/>

      <Route exact path ='/chat' component = {Chat}/>

      </div>

    );
  }
}

const mapStateToProps = (state)=>{

  return {
    firebaseDB: state.firebaseReducer.firebaseDB
  }

}

const mapDispatchToProps = (dispatch) =>{
  return {
    setFirebaseDB: (firebaseDB)=> dispatch(setFirebaseDB(firebaseDB)),
    setFirebase: (firebase)=> dispatch(setFirebase(firebase))
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(App);
