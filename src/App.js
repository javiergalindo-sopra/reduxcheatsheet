import React, { Component } from "react";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <span style={{ fontSize: "5em" }}>0</span>
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
