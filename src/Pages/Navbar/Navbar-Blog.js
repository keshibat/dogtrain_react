import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class NavbarBlog extends Component {
  render() {
    return (
      <Link to="/blog">
        <button>Blog</button>
      </Link>
    );
  }
}
