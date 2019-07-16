import React, { Component } from "react";

class BlogView extends Component {
  constructor() {
    super()
    this.state = {
      blog: {}
    }
  }

  componentDidMount() {
    fetch("https://swapi.co/api/people/10")
    .then(response => response.json())
    .then(data => {
      this.setState({
        blog: data
      })
    })
  }
  render() {
    const blogContent = this.state.blog.name
    return (
      <div>
        <h1>blog</h1>
        <h1>blog</h1>
        <h1>blog</h1>
        <h1>blog</h1>
        <h1>blog</h1>
        <p>{blogContent}</p>
      </div>
    );
  }
}

export default BlogView;


