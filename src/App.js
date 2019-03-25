import React, { Component } from 'react';

import './App.css';
import io from 'socket.io-client';
//import FixedWrapper from './Components/FixedWrapper/FixedWrapper'
import {FixedWrapper,SampleMaximized} from '@livechat/ui-kit'
import Chat from './Components/Chat/Chat'


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

    <Chat/>





      </div>
    );
  }
}

export default App;
