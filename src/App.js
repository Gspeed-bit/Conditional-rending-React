import React, { Component } from 'react'
import Conditional from "./Component/Conditional"


export default class App extends Component {
  constructor(){
    super();
    this.state={
      isLoading:true
    }

  }
  componentDidMount(){
    setTimeout(() =>{
    this.setState({
      isLoading:!this.state.isLoading
    })
  }, 1500)
  }
  render() {
    return (
      <div>
        {this.state.isLoading? <h1>Thanks for waiting..........</h1> :
        <Conditional />} </div>
    ) 
  }
}
