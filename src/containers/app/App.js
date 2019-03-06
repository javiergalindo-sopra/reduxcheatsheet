import React, { Component } from "react";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <span style={{ fontSize: "5em" }}>{this.props.counter}</span>
          <div className="button__group">
            <button
              className="button"
              onClick={() => this.props.counterIncrement()}
            >
              +
            </button>
            <button
              className="button"
              onClick={() => this.props.counterDecrement()}
            >
              -
            </button>
          </div>
        </header>
      </div>
    );
  }
}

export default App;
