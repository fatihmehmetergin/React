import React from 'react';

import './App.css';

class Counter extends React.Component 
{
  constructor(props)
  {
        super(props)
        this.state={countNumber :0 };
  }
  increase=()=>{

      this.setState({countNumber:this.state.countNumber+1});
}

render()
{

  return(
      <button onClick={this.increase}>{this.state.countNumber} </button>

  );



}

}


export default Counter;
