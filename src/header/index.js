import React, { Component } from "react";
import logo from "./conf-logo.png";

class Header extends Component {
  render() {
    return (
      <header>
        <h1>
          <img src={logo} className="App-logo" alt="react-logo" />
          react performance 101
        </h1>
      </header>
    );
  }
}

export default Header;
