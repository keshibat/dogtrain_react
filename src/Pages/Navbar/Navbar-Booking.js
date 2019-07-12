import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class NavbarBooking extends Component {
  render() {
    return (
      <Link to="/booking">
        <button>Booking</button>
      </Link>
    );
  }
}
