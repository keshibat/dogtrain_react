import React, { Component } from "react";
import NavBarCSS from "./../../assets/styles/NavbarSCSS/NavBarCSS.css";
import NavbarAboutUs from "./Navbar-AboutUs";
import NavbarTraining from "./Navbar-Training";
import MwMLogo from "./../../assets/images/MwM-logo.jpg";

import { Link } from "react-router-dom";

export default class Navbar extends Component {
  render() {
    return (
      <nav
        className="navbar is-fixed-top"
        role="navigation"
        aria-label="main navigation"
      >
        <div className="navbar-brand">
          <Link to="/" className="navbar-item" href="https://bulma.io">
            <img src={MwMLogo} width="112" height="28" />
          </Link>

          <a
            role="button"
            className="navbar-burger"
            aria-label="menu"
            aria-expanded="false"
            data-target="navbarBasicExample"
          >
            <span aria-hidden="true" />
            <span aria-hidden="true" />
            <span aria-hidden="true" />
          </a>
        </div>

        <div id="navbarBasicExample" className="navbar-menu">
          <div className="navbar-start">
            <Link to="/" className="navbar-item">
              Home
            </Link>

            <div className="navbar-item has-dropdown is-hoverable">
              <a className="navbar-link">About Us</a>
              <div className="navbar-dropdown">
                <NavbarAboutUs />
              </div>
            </div>

            <div className="navbar-item has-dropdown is-hoverable">
              <a className="navbar-link">Training</a>

              <div className="navbar-dropdown">
                <NavbarTraining />
              </div>
            </div>

            <div className="navbar-end">
              <Link to="/booking" className="navbar-item">
                Book An Appointment
              </Link>
            </div>

            <div className="navbar-end">
              <Link to="/blog" className="navbar-item">
                Blog
              </Link>
            </div>
          </div>

          <div className="navbar-end">
            <div className="navbar-item">
              <Link to="/contactus" className="navbar-item">
                Contact Us
              </Link>
              <Link to="/testimonials" className="navbar-item">
                Testimonials
              </Link>
              <Link to="/shop" className="navbar-item">
                Shop
              </Link>
            </div>
          </div>
        </div>
      </nav>
    );
  }
}
