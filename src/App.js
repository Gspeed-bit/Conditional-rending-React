import React, { Component } from 'react'
import Conditional from "./Component/Conditional"
import TruthyAndFalsy from "./Component/TruthyAndFalsy"


export default class App extends Component {
  constructor(){
    super();
    this.state={
      isLoading:true,
      unreadMessages: [
        "syxdfgh"
    ]
    }
    

  }
  componentDidMount(){
    setTimeout(() =>{
    this.setState({
      isLoading:!this.state.isLoading,
      unreadMessages:this.state.unreadMessages.length,

    })
  }, 1500)
  }


  renderdiv() { 

if(this.state.unreadMessages.length) {
  return(
 <h1> Am checking if you have an unread..........  </h1>
 )
} else if(this.state.unreadMessages.length === 0) {
  return(
  <h1> Am checking if you have an unread message............... </h1>)
} else {
  return(
 <TruthyAndFalsy unreadMessages={this.state.unreadMessages} />
  )

  }


}
render (){
  return(
    <div>
    {this.state.isLoading ? <h1>Thanks for waiting..........</h1> :
      <Conditional />} 
    
      {this.renderdiv()}
      
   </div> 

  )
}
}