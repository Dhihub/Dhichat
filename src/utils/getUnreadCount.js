

export default (chatGroup,userId)=>{

 let messages = [];

console.log(chatGroup)

 if(chatGroup.messages){

       let messagesArray = Object.values(chatGroup.messages)

       console.log('countt',messagesArray)

   messages = messagesArray.filter((message)=>{




           return !message.read && message.senderID !== userId






  })


 }

console.log('count',messages)

 return messages.length;


}
