import React,{Component} from 'react'

class Counter extends Component{
    constructor(){
        super();
        this.state={
            count:0
        }
    }
    plusBtn = () =>{
        this.setState({count: this.state.count+1})
    }
    subBtn = () =>{
        this.setState({count: this.state.count-1})
    }
    render(){
        return(
            
            <div>
                <navbar>
                    <button>Bits</button>
                    
                    
                </navbar>
                <h1>This is My counter App</h1>
                <h1>{this.state.count}</h1>
                <button onClick={this.plusBtn}>+</button>
                <button onClick={this.subBtn}>-</button>
                
               
            </div>
        )
    }
}
export default Counter