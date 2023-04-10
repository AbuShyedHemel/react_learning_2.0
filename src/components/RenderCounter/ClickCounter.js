import React from "react";

class ClickCounter extends React.Component {
  render() {
    const { counter, incrementCount } = this.props;
    return (
      <div>
        <button type="button" onClick={incrementCount}>
          Click :{counter}
        </button>
      </div>
    );
  }
}
export default ClickCounter;
