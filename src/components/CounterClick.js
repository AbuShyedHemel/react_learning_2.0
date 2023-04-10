import React from 'react';
import withCounter from './HOC/withCounter';

 class CounterClick extends React.Component{
     render(){

        //const {count} = this.state;
        return (
            <div>
                <h1>Count : {this.props.count} Times {this.props.name}</h1>
                <button type="button" 
                onClick={this.props.incrementCount}>Click  Time</button>
            </div>
        )
     }
}export default withCounter(CounterClick);