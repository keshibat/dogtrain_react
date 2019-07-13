import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class NavbarAboutUs extends Component {
  render() {
    return (
      <nav className="navbar" role="navigation" aria-label="main navigation">
        <div className="dropdown is-active">
          <div className="dropdown-trigger">
            <Link to="/aboutme" class="dropdown-item">
              About Us
            </Link>
            <Link to="/areasweservice" class="dropdown-item">
              Areas We Service
            </Link>
            <Link to="/petsitting" class="dropdown-item">
              Pet Sitting
            </Link>
            <Link to="/faq" class="dropdown-item">
              Frequently Asked Questions
            </Link>
            <Link to="/accomodation" class="dropdown-item">
              Dog Friendly Accomodation
            </Link>
            <Link to="/contactus" class="dropdown-item">
              Contact Us
            </Link>
          </div>
        </div>
      </nav>
    );
  }
}
