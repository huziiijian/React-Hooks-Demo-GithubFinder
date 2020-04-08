import React, { Component } from 'react'

class Test1 extends Component {
  state = {
    name:"initialState"
  }
//说明state的改变规律
  onClick = () => {
    this.state.name = this.state.name + "1";
    console.log(this.state.name)
  }

  render() {
    console.log(this.state.name)
    return (
      <div>
        <h1>{this.state.name}</h1>
        <button onClick={this.onClick}>Test1 Change</button>
      </div>
    )
  }
}

export default Test1

