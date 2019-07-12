import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class NavbarAboutUs extends Component {
  render() {
    return (
      <nav className="navbar" role="navigation" aria-label="main navigation">
        <div className="dropdown is-active">
          <div className="dropdown-trigger">
            <button
              className="button"
              aria-haspopup="true"
              aria-controls="dropdown-menu"
            >
              <span>About Us</span>
              <span className="icon is-small">
                <i className="fas fa-angle-down" aria-hidden="true" />
              </span>
            </button>
          </div>

          <div className="dropdown-menu" id="dropdown-menu" role="menu">
            <div className="dropdown-content">
              <Link to="/aboutme">
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
