import React from 'react'
import {ThemeProvider} from '@livechat/ui-kit'
import theme from './chatKitTheme.js'
import App from './App'

export default ()=>{
  return (


<ThemeProvider theme ={theme} ><App/></ThemeProvider>



  )
}
