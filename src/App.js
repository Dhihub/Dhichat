import React, { Component } from 'react';

import './App.css';
import io from 'socket.io-client';
import {Route} from 'react-router-dom'

import {FixedWrapper,SampleMaximized} from '@livechat/ui-kit'

import Chat from './Components/Chat/Chat'
import Signin from './Components/Auth/Signin'


const socket = io('http://localhost:5000/');

class App extends Component {


  state = {
    messages: [],
    message:''
  }

  componentDidMount(){

socket.on('ack',(message)=>{

 console.log(message)
   let messages = this.state.messages;
   messages.push(message)
   this.setState({messages:messages})
  console.log('message', this.state.message)
})





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
