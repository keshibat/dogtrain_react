import React, { Component } from "react";
import { Link } from "react-router-dom";

class TestmonialsView extends Component {
  render() {
    return (
      <nav className="navbar" role="navigation" aria-label="main navigation">
        <Link to="/testimonials" className="navbar-item">
          Testimonials
        </Link>
      </nav>
    );
  }
}

export default TestmonialsView;
