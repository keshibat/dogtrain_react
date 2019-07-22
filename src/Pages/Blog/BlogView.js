import React, { Component } from "react";
import BlogCSS from "./../../assets/styles/BlogSCSS/BlogCSS.css";

class BlogView extends Component {
  constructor() {
    super();
    this.state = {
      blog: {},
      fetching: true
    };
  }

  async componentDidMount() {
    await window.mediumWidget();
    console.log("waiting");
  }

  render() {
    const { name, height } = this.state.blog;
    // const blogContent = this.state.blog.name;

    if (this.state.fetching) {
      return <div>testing</div>;
    }
    return (
      <>
        <section className="section title-heading">
          <div className="container">
            <div className="content has-text-centered">
              <h1>Blog</h1>
            </div>
          </div>
        </section>
        <section className="section title-heading">
          <div className="container">
            <div className="content has-text-centered">
              <div className="columns is-centered">
                <div className="column is-half">
                  <div id="medium-widget" />
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="section title-heading">
          <div className="container">
            <div className="content has-text-centered">
              <h1>{name}</h1>
              <h5>
                <i className="has-text-grey">{height}</i>
              </h5>
            </div>
          </div>
        </section>
        <section className="section title-heading">
          <div className="container">
            <div className="content has-text-centered">
              <h1>{name}</h1>
              <h5>
                <i className="has-text-grey">{height}</i>
              </h5>
            </div>
          </div>
        </section>
        <section className="section title-heading">
          <div className="container">
            <div className="content has-text-centered">
              <h1>{name}</h1>
              <h5>
                <i className="has-text-grey">{height}</i>
              </h5>
            </div>
          </div>
        </section>
      </>
    );
  }
}

export default BlogView;
