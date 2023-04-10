import React from 'react';

const withCounter =(OriginalComponent)=>{
    class NewComponent extends React.Component{
        constructor(props){
            super(props)
            this.state={
                count:0,
                name:'Hemel'
            }
            this.incrementCount = this.incrementCount.bind(this)
        }
        
         incrementCount = ()=>{
            this.setState((preState)=>({
                count: preState.count+1 
            }));
        }
         render(){
            //const {count} = this.state;
             return <OriginalComponent 
             count ={this.state.count} incrementCount={this.incrementCount} name= {this.state.name}/>;
         }
    }
    return NewComponent;
}
export default withCounter;