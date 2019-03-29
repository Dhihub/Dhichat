import React,{Component} from 'react'

import {connect} from 'react-redux'
import firebase from 'firebase'
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';



const mapStateToProps = (state)=>{

return {

 firebase: state.firebaseReducer.firebase,
 db: state.firebaseReducer.firebaseDB
}

}


    const uiConfig = {
      // Popup signin flow rather than redirect flow.
      signInFlow: 'popup',
      // Redirect to /signedIn after sign in is successful. Alternatively you can provide a callbacks.signInSuccess function.
      signInSuccessUrl: '/chat',
      // We will display Google and Facebook as auth providers.
      signInOptions: [
        firebase.auth.GoogleAuthProvider.PROVIDER_ID,

      ]
    };




class Signin extends Component {



render(){



console.log('firebase',this.props.firebase)
console.log('db',this.props.db)


  return(

  <div >

  <StyledFirebaseAuth uiConfig={this.uiConfig} firebaseAuth={this.props.firebase.auth()}/>



  </div>



  )
}




}

// <input type = 'text' />
// <input type = "text"/>
//  <button onClick = {()=> dispatch({type:'SIGNIN_REQUEST',payload:{name:'alwin',type:'staff'}})}
//
//  >send</button>
// <button onClick = {()=> dispatch({type:'SIGN_OUT'})}>sign out</button>



export default connect(mapStateToProps,null)(Signin)
