import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class NavbarTraining extends Component {
  render() {
    return (
      <nav className="navbar" role="navigation" aria-label="main navigation">
        <div className="dropdown is-active">
          <div className="dropdown-trigger">
            <Link to="/puppy" class="dropdown-item">
              <b>Puppy Training</b>
            </Link>
            <hr class="navbar-divider" />
            <div class="navbar-item">
              <b>Older Dog Training</b>
            </div>
            <Link to="/naughty" class="dropdown-item">
              Naughty Dogs
            </Link>
            <Link to="/feaful" class="dropdown-item">
              Fearful Dogs
            </Link>
            <Link to="/rescued" class="dropdown-item">
              Rescue Dogs
            </Link>
            <Link to="/apartment" class="dropdown-item">
              Apartment Dogs
            </Link>
            <Link to="/newfamilymember" class="dropdown-item">
              Adding a new Family Member
            </Link>
            <Link to="/obedience" class="dropdown-item">
              Obedience Training
            </Link>
            <Link to="/advanced" class="dropdown-item">
              Advanced Training
            </Link>
          </div>
        </div>
      </nav>
    );
  }
}
