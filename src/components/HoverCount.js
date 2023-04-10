import React from "react";
import withCounter from './HOC/withCounter';


const HoverCount = (props) =>{
  const {count , icrement}= props;
      return (
      <div>
        <h1 onMouseOver={icrement}>Hover Count: {count} Time</h1>
      </div>
    );
}

// class HoverCount extends React.Component {
//   render() {
//     //const { count } = this.state;
//     return (
//       <div>
//         <h1 onMouseOver={this.props.incrementCount}>Hover Count: {this.props.count} Time</h1>
//       </div>
//     );
//   }
// }
export default withCounter(HoverCount);
