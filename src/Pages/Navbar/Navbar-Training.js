import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class NavbarTraining extends Component {
  render() {
    return (
      <nav className="navbar" role="navigation" aria-label="main navigation">
        <div className="dropdown is-active">
          <div className="dropdown-trigger">
            <div className="navbar-item">
              <b>Puppies</b>
            </div>
            <Link to="/puppy" className="dropdown-item">
              Puppy Training
            </Link>
            <hr className="navbar-divider" />
            <div className="navbar-item">
              <b>Older Dog Training</b>
            </div>
            <Link to="/naughty" className="dropdown-item">
              Naughty Dogs
            </Link>
            <Link to="/feaful" className="dropdown-item">
              Fearful Dogs
            </Link>
            <Link to="/rescued" className="dropdown-item">
              Rescue Dogs
            </Link>
            <Link to="/apartment" className="dropdown-item">
              Apartment Dogs
            </Link>
            <Link to="/newfamilymember" className="dropdown-item">
              Adding a new Family Member
            </Link>
            <Link to="/obedience" className="dropdown-item">
              Obedience Training
            </Link>
            <Link to="/advanced" className="dropdown-item">
              Advanced Training
            </Link>
          </div>
        </div>
      </nav>
    );
  }
}
