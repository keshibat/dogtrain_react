import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class NavbarShop extends Component {
  render() {
    return (
      <a>
        <Link to="/shop">
          <button>Shop</button>
        </Link>
      </a>
    );
  }
}
