import React, { Component } from "react";
import NavbarAboutUs from "./Navbar-AboutUs";
import NavbarTraining from "./Navbar-Training";

export default class Navbar extends Component {
  render() {
    return (
      <nav className="navbar" role="navigation" aria-label="main navigation">
        <NavbarAboutUs />
        <NavbarTraining />
      </nav>
    );
  }
}
