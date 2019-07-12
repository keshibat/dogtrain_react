import React, { Component } from "react";
import NavbarHome from "./Navbar-Home";
import NavbarAboutUs from "./Navbar-AboutUs";
import NavbarTraining from "./Navbar-Training";
import NavbarShop from "./Navbar-Shop";
import NavbarTestimonials from "./Navbar-Testimonials";
import NavbarBooking from "./Navbar-Booking";
import NavbarBlog from "./Navbar-Blog";

export default class Navbar extends Component {
  render() {
    return (
      <nav className="navbar" role="navigation" aria-label="main navigation">
        <NavbarHome />
        <NavbarAboutUs />
        <NavbarTraining />
        <NavbarShop />
        <NavbarTestimonials />
        <NavbarBooking />
        <NavbarBlog />
      </nav>
    );
  }
}
