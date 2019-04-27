
let botEngineClientToken = '4cc01931fa302f2b50bcdeb70e961fc47d156face3bdb8b616e3e9f3e18e0cc8'

export const getGroupName =(userId,recieverId)=>{

let groupId = userId+recieverId

return groupId.split('').sort().join('')


}


export const getBotGroupName = (userId,botId,receiverId)=> {

return (userId+botId+receiverId)

}


export const getMessages= (userId,chatGroups,botGroups,receiver)=>{

  console.log('d',userId,chatGroups,botGroups,receiver)

   if(receiver==null){
     return
   }



  let groupName = getGroupName(userId,receiver.uid)
 console.log('grouoname',groupName)
   let messages = {};
   let chatService = '';

           chatGroups.map((chatGroup)=>{

             console.log(chatGroup.groupName)

       if(chatGroup.groupName === groupName){

       if(chatGroup.status==='botEngine'){
         console.log('bot enginee')

       let botMessages = getBotMessage(userId,receiver.uid,botGroups)

       botMessages? messages = botMessages: messages ={}
       }
       else {
         chatGroup.messages? messages = chatGroup.messages: messages = {}
       }

        chatService = chatGroup.status


       }

  })

  return {messages,chatService}




}

function getBotMessage(userId,receiverId,botGroups){

 let groupId = getBotGroupName(userId,botEngineClientToken,receiverId)
 console.log('bo group',groupId)
 let messages ={}
    botGroups.map((botGroup)=>{

      if(botGroup.groupName === groupId){

       console.log('mes',botGroup.messages)
      botGroup.messages? messages = botGroup.messages: messages = {}


      }
    })

return messages


}

export const getChatList = (userId,chatGroups)=>{


        let chatList = chatGroups.filter((chatGroup)=>{

           if(chatGroup.members.member1.uid === userId || chatGroup.members.member2.uid===userId){

          return chatGroup

           }
        })

return chatList


}
