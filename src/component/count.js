import React,{ Component } from 'react';
export default class Count extends Component{
    constructor(){
        super()
        this.state = {
            count : 1
        }
    }
    increment(){
        this.setState({count:this.state.count +1})
    }
    decrement(){
        this.setState({count:this.state.count -1})
    }
    render(){
        return(
            <div>
                <h1>
                    count
                </h1>
                <button onClick={()=> this.increment()}>+</button>
                <h4>{this.state.count}</h4>
                <button onClick={()=> this.decrement()}>-</button>
            </div>
        )
    }
}