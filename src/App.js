import React, { Component } from 'react';

import './App.css';
import io from 'socket.io-client';
//import FixedWrapper from './Components/FixedWrapper/FixedWrapper'
import {FixedWrapper,SampleMaximized} from '@livechat/ui-kit'


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

    let messages = this.state.messages.map((message)=>{
      return <div>{message.message}</div>
    })

    return (
      <div>

   <input type = 'text' onChange = {(e)=>{
     this.setState({message:e.target.value})
     console.log("message",this.state.message)
   }}/>
   <br/>
   <button onClick = {()=>{

      socket.emit('message',{message:this.state.message})


   }}>send</button>

    <div>

{messages}

    </div>

<FixedWrapper.Root>

      <p>{'FixedWrapper.Maximized'}</p>
      <p>
        This is sample FixedWrapper component. It shows widget placed as fixed
        on your website. It has two stated - maximized and minimized.
      </p>
  



</FixedWrapper.Root>

      </div>
    );
  }
}

export default App;
