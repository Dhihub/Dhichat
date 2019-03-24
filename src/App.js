import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import io from 'socket.io-client';


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



      </div>
    );
  }
}

export default App;
