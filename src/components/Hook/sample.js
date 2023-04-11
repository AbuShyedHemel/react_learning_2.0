import React from "react";

class MyComponent extends React.Component {
    
  state = {
    count: 0,
    date: new Date(),
  };
  
  componentDidMount() {
    const { count } = this.state;
    document.title = `Click ${count}`;
    setInterval(this.tick, 1000);
  }
  componentDidUpdate() {
    const { count } = this.state;
    document.title = `Click ${count}`;
  }
  addTitle = () => {
    this.setState(({ count }) => ({
      count: count + 1,
    }));
  };
  tick = () => {
    
    this.setState({
      date: new Date(),
    });
  };
  
  render() {
    const { date } = this.state;
    return (
      <div>
        <h1>Time : {date.toLocaleTimeString()}</h1>
        <button onClick={this.addTitle}>Click</button>
      </div>
    );
  }
}
export default MyComponent;
