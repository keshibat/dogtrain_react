import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class NavbarShop extends Component {
  render() {
    return (
      <nav className="navbar" role="navigation" aria-label="main navigation">
        <Link to="/shop">
          <button>Shop</button>
        </Link>
      </nav>
    );
  }
}
