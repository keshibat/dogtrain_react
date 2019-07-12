import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class NavbarAboutUs extends Component {
  render() {
    return (
      <nav class="navbar" role="navigation" aria-label="main navigation">
        <div class="dropdown is-active">
          <div class="dropdown-trigger">
            <button
              class="button"
              aria-haspopup="true"
              aria-controls="dropdown-menu"
            >
              <span>About Us</span>
              <span class="icon is-small">
                <i class="fas fa-angle-down" aria-hidden="true" />
              </span>
            </button>
          </div>
          <div class="dropdown-menu" id="dropdown-menu" role="menu">
            <div class="dropdown-content">
              <Link to="/aboutus">
                <button>About Us</button>
              </Link>
              <Link to="/areasweservice">
                <button>Areas We Service</button>
              </Link>
              <Link to="/petsitting">
                <button>Pet Sitting Services</button>
              </Link>
              <Link to="/faq">
                <button>Frequently Asked Questions</button>
              </Link>
              <Link to="/accomodation">
                <button>Pet Friendly Accomodation</button>
              </Link>
              <Link to="/contactus">
                <button>Contact Us</button>
              </Link>
            </div>
          </div>
        </div>
      </nav>
    );
  }
}
