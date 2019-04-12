

export const getGroupName =(userId,botEngineToken='',recieverId)=>{

let groupId = userId+botEngineToken+recieverId

return groupId.split('').sort().join('')


}


export const getMessages= (userId,chatGroups,receiver)=>{

   if(receiver==null){
     return
   }

  let groupName = getGroupName(userId,'',receiver.uid)

   let messages = {};
   let chatService = '';
           chatGroups.map((chatGroup)=>{

       if(chatGroup.groupName === groupName){

       if(chatGroup.status==='botEngine'){

      // messages = getBotMessage(receiverId)
       }
       else {
         chatGroup.messages? messages = chatGroup.messages: messages = {}
       }

        chatService = chatGroup.status


       }

  })

  return {messages,chatService}










}
