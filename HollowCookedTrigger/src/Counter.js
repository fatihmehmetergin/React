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
decrease= ()=>
{
    this.setState({countNumber:this.state.countNumber-1})
  }

render()
{
  return(
    <div>
    <h1> {this.state.countNumber}</h1>
      <button class="button"  onClick={this.increase}>+ </button>
      <button class="button"  onClick={this.decrease}>- </button>
      </div>

  );

}
}


export default Counter;
