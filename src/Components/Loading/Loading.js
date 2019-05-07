import React from 'react'
import {Redirect} from 'react-router-dom'
import { css } from '@emotion/core';
import { HashLoader } from 'react-spinners';
import {connect} from 'react-redux'


const override = css`
    display: block;
    margin: 0 auto;
    border-color: red;
`;



const Loading = ({users,botGroups,chatGroups,signedIn,chatList}) =>{



  if(signedIn && users.length>0 && chatGroups.length>0 && botGroups.length>0 &&  chatList.length>0){

    return (<Redirect to ='/chat'/>)

  }


   return (



 <div  style={{marginTop:'200px',background:''}}>

   <HashLoader
    css = {override}
    sizeUnit='px'
    size={200}
    color={'#5568F1'}
    Loading = "true"

   />
   <div style={{marginTop:'35px',textAlign:'center' ,color:'#5568F1'}}>
   <h1 >
   Preparing chat.....

    </h1>

    </div>


 </div>


   )







}

const mapStateToProps = (state)=>{

 return {
  signedIn: state.authReducer.signedIn,
  users:state.chatReducer.users,
  chatGroups:state.chatReducer.chatGroups,
  botGroups:state.chatReducer.botGroups,
  chatList:state.chatReducer.chatList
}
}

export default connect(mapStateToProps,null)(Loading)
