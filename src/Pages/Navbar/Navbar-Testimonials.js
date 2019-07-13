import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class NavbarTestimonials extends Component {
  render() {
    return (
      <Link to="/shop">
        <button>Testimonials</button>
      </Link>
    );
  }
}
