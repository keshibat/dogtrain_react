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
          <Link to="/" className="navbar-item" href="/">
            <img src={MwMLogo} alt="logo" width="112" height="28" />
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
            <Link to="/" className="navbar-item has-text-weight-bold">
              Home
            </Link>

            <div className="navbar-item has-dropdown is-hoverable">
              <a className="navbar-link has-text-weight-bold">About Us</a>
              <div className="navbar-dropdown">
                <NavbarAboutUs />
              </div>
            </div>

            <div className="navbar-item has-dropdown is-hoverable">
              <a className="navbar-link has-text-weight-bold">Training</a>

              <div className="navbar-dropdown">
                <NavbarTraining />
              </div>
            </div>

            <div className="navbar-end">
              <Link to="/booking" className="navbar-item has-text-weight-bold">
                Book An Appointment
              </Link>
            </div>

            <div className="navbar-end">
              <Link to="/blog" className="navbar-item has-text-weight-bold">
                Blog
              </Link>
            </div>
          </div>

          <div className="navbar-end">
            <div className="navbar-item">
              <Link
                to="/admin"
                className="navbar-item has-text-weight-bold"
              >
                Admin
              </Link>
              <Link
                to="/contactus"
                className="navbar-item has-text-weight-bold"
              >
                Contact Us
              </Link>
              <Link
                to="/testmonials"
                className="navbar-item has-text-weight-bold"
              >
                Testimonials
              </Link>
              <a
                href="https://www.muttswithmanners.com.au/shop"
                className="navbar-item has-text-weight-bold"
              >
                Shop
              </a>
            </div>
          </div>
        </div>
      </nav>
    );
  }
}
