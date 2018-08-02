import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import LoanInfo from "./components/LoanInfo";

class App extends Component {
  render() {
    return (
      <div className="container">
        <LoanInfo />
      </div>
    );
  }
}

export default App;
