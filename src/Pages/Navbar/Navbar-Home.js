import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class NavbarHome extends Component {
  render() {
    return (
      <nav className="navbar" role="navigation" aria-label="main navigation">
        <Link to="/">Home</Link>
      </nav>
    );
  }
}
