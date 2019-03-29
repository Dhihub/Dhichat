import React, { Component } from 'react';

import './App.css';
import io from 'socket.io-client';
import {Route} from 'react-router-dom'
import firebase from 'firebase/app'
import database from 'firebase/database'
import {FixedWrapper,SampleMaximized} from '@livechat/ui-kit'
import {connect} from 'react-redux'

import config from './firebaseConfig'
import Chat from './Components/Chat/Chat'
import Signin from './Components/Auth/Signin'
import {setFirebaseDB } from './actions/firebaseDBactions.js'


const socket = io('http://localhost:5000/');

class App extends Component {

  constructor(){
    super();
  firebase.initializeApp(config)



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

  this.props.setFirebaseDB(firebase.database())




  }
  render() {



    return (

  <div>

    <Route exact path ='/' component = {Signin}/>
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
    setFirebaseDB: (firebaseDB)=> dispatch(setFirebaseDB(firebaseDB))
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(App);
