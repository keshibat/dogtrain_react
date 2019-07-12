import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class NavbarTraining extends Component {
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
              <span>Training</span>
              <span className="icon is-small">
                <i className="fas fa-angle-down" aria-hidden="true" />
              </span>
            </button>
          </div>

          <div className="dropdown-menu" id="dropdown-menu" role="menu">
            <div className="dropdown-content">
              <Link to="/puppy">
                <button>Puppy Training</button>
              </Link>
              <Link to="/naughty">
                <button>Naughty Dogs</button>
              </Link>
              <Link to="/feaful">
                <button>Fearful Dogs</button>
              </Link>
              <Link to="/rescued">
                <button>Rescue Dogs</button>
              </Link>
              <Link to="/apartment">
                <button>Apartment Dogs</button>
              </Link>
              <Link to="/newfamilymember">
                <button>New Family Member</button>
              </Link>
              <Link to="/obedience">
                <button>Obedience Training</button>
              </Link>
              <Link to="/advanced">
                <button>Advanced Training</button>
              </Link>
            </div>
          </div>
        </div>
      </nav>
    );
  }
}
