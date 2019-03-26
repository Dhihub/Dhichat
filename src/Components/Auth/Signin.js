import React,{Component} from 'react'
import {connect} from 'react-redux'




const mapStateToProps = (state)=>{

return {

}

}


class Signin extends Component {



render(){

  const {dispatch} = this.props

  return(

  <div style ={{marginTop:"400px",textAlign:'center'}}>

   <input type = 'text' />
   <input type = "text"/>
    <button onClick = {()=> dispatch({type:'SIGNIN_REQUEST',payload:{name:'alwin',type:'staff'}})}

    >send</button>
   <button onClick = {()=> dispatch({type:'SIGN_OUT'})}>sign out</button>


  </div>



  )
}




}


export default connect(mapStateToProps,null)(Signin)
