

export const getGroupName =(userId,botEngineToken='',recieverId)=>{

let groupId = userId+botEngineToken+recieverId

return groupId.split('').sort().join('')


}
