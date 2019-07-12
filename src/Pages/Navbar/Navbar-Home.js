import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class NavbarHome extends Component {
  render() {
    return (
      <Link to="/">
        <button>Home</button>
      </Link>
    );
  }
}
