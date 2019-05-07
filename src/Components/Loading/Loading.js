import React from 'react'

import { css } from '@emotion/core';
import { HashLoader } from 'react-spinners';

const override = css`
    display: block;
    margin: 0 auto;
    border-color: red;
`;



const Loading = () =>{

   return (

 <div  style={{marginTop:'200px'}}>

   <HashLoader
    css = {override}
    sizeUnit='px'
    size={150}
    color={'#123abc'}
    Loading = "true"

   />
   <div style={{marginTop:'20px',textAlign:'center'}}>
   <h1 >
   Preparing chat.....

    </h1>

    </div>


 </div>


   )







}

export default Loading
