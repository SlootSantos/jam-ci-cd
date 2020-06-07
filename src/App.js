import React from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
 //throw new Error("Broken Again")
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Hello from the blue CI/CD! Stage Branch!</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
