import { Component } from "react";



class Counter extends Component{
    constructor(props){
        super(props);
        this.state = {count : 10};
    }
    increment = ()=>{
        //console.log(this.state.count);
       // this.state.count += 1;
        //console.log(this.state.count);
        //this.forceUpdate(); // Force React to re-render , we are rerendering onemore immediately, updating in memory and ui
       
        //we use setState
        this.setState({count : this.state.count + 1});
    };


    render() {
        //console.log(this.state);
        return <>
        <h2>Count is : {this.state.count}</h2>  
        <button onClick={this.increment}>Increment</button>
        {/* <button onClick={this.unmount}>Unmount component</button> */}
       
        </>
    }
    componentDidMount(){
        console.log("component mounted")
    }
    componentDidUpdate(prevProps, prevState){
        console.log(prevProps, prevState);
        console.log(this.props, this.state);
        console.log("component did update")
    }
    componentWillUnmount(){
        console.log("component is about to unmount")
    }
}


export default Counter;

//component life cycle
//1. Mounting 2.Updating 3.Unmounting
