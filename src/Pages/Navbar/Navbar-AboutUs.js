import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class NavbarAboutUs extends Component {
  render() {
    return (
      <nav className="navbar" role="navigation" aria-label="main navigation">
        <div className="dropdown is-active">
          <div className="dropdown-trigger">
            <Link to="/aboutme" className="dropdown-item">
              About Us
            </Link>
            <Link to="/areasweservice" className="dropdown-item">
              Areas We Service
            </Link>
            <Link to="/faq" className="dropdown-item">
              Frequently Asked Questions
            </Link>
            <hr className="navbar-divider" />
            <div className="navbar-item" />
            <Link to="/accomodation" className="dropdown-item">
              Dog Friendly Accomodation
            </Link>
            <Link to="/petsitting" className="dropdown-item">
              Pet Sitting
            </Link>
          </div>
        </div>
      </nav>
    );
  }
}
