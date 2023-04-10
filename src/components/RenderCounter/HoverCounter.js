import React from "react";

class HoverCount extends React.Component {
  render() {
    const { counter, incrementCount } = this.props;

    return (
      <div>
        <h1 type="button" onMouseOver={incrementCount}>
          Click : {counter} times
        </h1>
      </div>
    );
  }
}
export default HoverCount;
