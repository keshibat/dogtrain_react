import React, { Component } from "react";
import NavbarAboutUs from "./Navbar-AboutUs";

export default class Navbar extends Component {
  render() {
    return (
      <nav className="navbar" role="navigation" aria-label="main navigation">
        <NavbarAboutUs />
      </nav>
    );
  }
}
