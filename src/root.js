import React from 'react'
import {createStore,applyMiddleware,combineReducers,compose} from 'redux'
import {Provider} from 'react-redux'
import createSagaMiddleware from 'redux-saga'
import {createLogger} from 'redux-logger'
import {BrowserRouter as Router} from 'react-router-dom'
import authReducer from './reducers/SigninReducer'
import firebaseReducer from './reducers/firebaseReducer'
import inputfieldReducer from './reducers/inputfieldReducer'
import chatReducer from './reducers/chatReducer'
import {ThemeProvider,darkTheme,elegantTheme,purpleTheme} from '@livechat/ui-kit'
import customTheme from './chatKitTheme.js'


import theme from './chatKitTheme.js'
import App from './App'
import {loginFlow,watchOnPings,rootSaga} from './sagas/saga.js'

const logger = createLogger()
const rootReducer = combineReducers({authReducer,firebaseReducer,inputfieldReducer,chatReducer})
 const sagaMiddleware = createSagaMiddleware();

 const store =createStore(
  rootReducer,
  compose(applyMiddleware(logger,sagaMiddleware))
)
 sagaMiddleware.run(rootSaga)

export default ()=>{
  return (

<Provider store = {store}>
<ThemeProvider theme = {customTheme}>
<Router>
<App/>
</Router>
</ThemeProvider>
</Provider>




  )
}
