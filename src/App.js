import React, { Component } from 'react';

import './App.css';
import io from 'socket.io-client';
import {Route} from 'react-router-dom'
import firebase from 'firebase/app'
import database from 'firebase/database'
import {FixedWrapper,SampleMaximized} from '@livechat/ui-kit'

import config from './firebaseConfig'
import Chat from './Components/Chat/Chat'
import Signin from './Components/Auth/Signin'


const socket = io('http://localhost:5000/');

class App extends Component {


  state = {
    messages: [],
    message:''
  }

  componentDidMount(){

  firebase.initializeApp(config)

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

export default App;
