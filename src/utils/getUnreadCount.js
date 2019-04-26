

export default (chatGroup,userId)=>{

 let messages = [];

 if(chatGroup.messages){


   messages = Object.values(chatGroup.messages).filter((message)=>{

     console.log(message)

     return !messages.read && chatGroup.messages.senderID !== userId



  })




 }



 return messages.length;




}
