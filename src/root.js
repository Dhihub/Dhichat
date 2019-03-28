import React from 'react'
import {createStore,applyMiddleware,combineReducers} from 'redux'
import {Provider} from 'react-redux'
import createSagaMiddleware from 'redux-saga'
import {BrowserRouter as Router} from 'react-router-dom'
import SigninReducer from './reducers/SigninReducer'
import socketReducer from './reducers/socketReducer'
import inputfieldReducer from './reducers/inputfieldReducer'
import {ThemeProvider,darkTheme,elegantTheme,purpleTheme} from '@livechat/ui-kit'

import theme from './chatKitTheme.js'
import App from './App'
import {loginFlow,watchOnPings,rootSaga} from './sagas/saga.js'

const rootReducer = combineReducers({SigninReducer,socketReducer,inputfieldReducer})
 const sagaMiddleware = createSagaMiddleware();

 const store =createStore(
  rootReducer,
  applyMiddleware(sagaMiddleware)
)
 sagaMiddleware.run(rootSaga)

export default ()=>{
  return (

<Provider store = {store}>
<ThemeProvider theme= {purpleTheme}>
<Router>
<App/>
</Router>
</ThemeProvider>
</Provider>




  )
}
