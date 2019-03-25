import React from 'react'
import {ThemeProvider,darkTheme,elegantTheme,purpleTheme} from '@livechat/ui-kit'
import theme from './chatKitTheme.js'
import App from './App'

export default ()=>{
  return (


<ThemeProvider theme= {purpleTheme}><App/></ThemeProvider>




  )
}
