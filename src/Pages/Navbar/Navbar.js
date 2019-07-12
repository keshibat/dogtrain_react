import React, { Component } from "react";
import NavbarAboutUs from "./Navbar-AboutUs";
import NavbarTraining from "./Navbar-Training";

import { Link } from "react-router-dom";

export default class Navbar extends Component {
  render() {
    return (
      <nav
        class="navbar is-fixed-top"
        role="navigation"
        aria-label="main navigation"
      >
        <div class="navbar-brand">
          <a class="navbar-item" href="https://bulma.io">
            <img
              src="https://bulma.io/images/bulma-logo.png"
              width="112"
              height="28"
            />
          </a>

          <a
            role="button"
            class="navbar-burger"
            aria-label="menu"
            aria-expanded="false"
            data-target="navbarBasicExample"
          >
            <span aria-hidden="true" />
            <span aria-hidden="true" />
            <span aria-hidden="true" />
          </a>
        </div>

        <div id="navbarBasicExample" class="navbar-menu">
          <div class="navbar-start">
            <Link to="/testimonials" class="navbar-item">
              Testimonials
            </Link>

            <div class="navbar-item has-dropdown is-hoverable">
              <a class="navbar-link">About Us</a>
              <div class="navbar-dropdown">
                <NavbarAboutUs />
              </div>
            </div>

            <div class="navbar-item has-dropdown is-hoverable">
              <a class="navbar-link">Training</a>

              <div class="navbar-dropdown">
                <NavbarTraining />
              </div>
            </div>

            <div class="navbar-end">
              <Link to="/booking" class="navbar-item">
                Book An Appointment
              </Link>
            </div>

            <div class="navbar-end">
              <Link to="/blog" class="navbar-item">
                Blog
              </Link>
            </div>
          </div>

          <div class="navbar-end">
            <div class="navbar-item">
              <Link to="/testimonials" class="navbar-item">
                Testimonials
              </Link>
              <Link to="/shop" class="navbar-item">
                Shop
              </Link>
            </div>
          </div>
        </div>
      </nav>
    );
  }
}
