import React, { Component } from "react";
import LocalAPI from "./../../apis/local"
import Loader from "./../../components/Loader";
import "./../../assets/styles/BookingSCSS/bookingView.css";

class BlogFormView extends Component {
  state = {
    title: "",
    body: "",
    tags: "",
    fetching: false
  };

  onInputChange = (name, event) => {
    this.setState({ [name]: event.target.value });
  };

  onFormSubmit = async event => {
    event.preventDefault();
    this.setState({ fetching: true });
    const { title, body, tags } = this.state;
    const newPost = {
      title,
      body,
      tags
    };
    const response = await LocalAPI.post(`/blog`, newPost);
    this.setState({
      title: "",
      body: "",
      tags: ""
    });
    this.setState({ fetching: false });
  };

  render() {
    const { title, body, tags, fetching } = this.state;

    if (fetching) {
      return <Loader />;
    }

    return (
      <>
        <div className="column">
          <div className="box content">
            <div className="column bookForm">
              <h2>
                <b>Create Blog Post</b>
              </h2>
              <form onSubmit={this.onFormSubmit}>
                <div className="field">
                  <label className="label">Title</label>
                  <div className="control">
                    <input
                      className="input"
                      placeholder="Add a Post Title"
                      type="text"
                      name="title"
                      value={title}
                      onChange={event => this.onInputChange("title", event)}
                    />
                  </div>
                </div>

                <div className="field">
                  <label className="label">Body</label>
                  <div className="control">
                    <textarea
                      class="textarea"
                      placeholder="Write a Blog Post"
                      name="body"
                      value={body}
                      onChange={event => this.onInputChange("body", event)}
                    />
                  </div>
                </div>

                <div className="field">
                  <label className="label">Tags</label>
                  <div className="control">
                    <input
                      className="input"
                      placeholder="dogs, training, fun..."
                      type="text"
                      name="tags"
                      value={tags}
                      onChange={event => this.onInputChange("tags", event)}
                    />
                  </div>
                </div>

                <div className="field is-centered">
                  <div className="formButton control">
                    <input
                      className="button is-link"
                      type="submit"
                      value="Add Post"
                    />
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default BlogFormView;
