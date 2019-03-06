import React, { Component } from "react";
import "./App.css";

class App extends Component {
  render() {
    debugger;
    return (
      <div className="App">
        <header className="App-header">
          <span style={{ fontSize: "5em" }} onClick={() => null}>
            {this.props.counter}
          </span>
          <div className="button__group">
            <button className="button">+</button>
            <button className="button">-</button>
          </div>
        </header>
      </div>
    );
  }
}

export default App;
