import React, { Component } from "react";
class Counter extends Component {
  state = { count: 100 };

  onAdd = () => {
    this.setState({ count: this.state.count + 1 });
  };
  onRemove = () => {
    this.setState({ count: this.state.count - 1 });
  };
  render() {
    return (
      <div>
        <button onClick={this.onAdd}>Add</button>
        <p>{this.state.count}</p>
        <button onClick={this.onRemove}>Remove</button>
      </div>
    );
  }
}

export default Counter;
