import React, { Component } from "react";
import LocalAPI from "./../../apis/local"
import Loader from "./../../components/Loader";
import "./../../assets/styles/BookingSCSS/bookingView.css";

class TestimonialsFormView extends Component {
  state = {
    title: "",
    body: "",
    author: "",
    fetching: false
  };

  onInputChange = (name, event) => {
    this.setState({ [name]: event.target.value });
  };

  onFormSubmit = async event => {
    event.preventDefault();
    this.setState({ fetching: true });
    const { title, body, author } = this.state;
    const newPost = {
      title,
      body,
      author
    };
    const response = await LocalAPI.post(`/testimonials`, newPost);
    this.setState({
      title: "",
      body: "",
      author: ""
    });
    this.setState({ fetching: false });
  };

  render() {
    const { title, body, author, fetching } = this.state;

    if (fetching) {
      return <Loader />;
    }

    return (
      <>
        <div className="column">
          <div className="box content">
            <div className="column bookForm">
              <h2>
                <b>Add Testimonial</b>
              </h2>
              <form onSubmit={this.onFormSubmit}>
                <div className="field">
                  <label className="label">Title</label>
                  <div className="control">
                    <input
                      className="input"
                      type="text"
                      name="title"
                      placeholder="Add Testimonial Title"
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
                      placeholder="Add Testimonial"
                      name="body"
                      value={body}
                      onChange={event => this.onInputChange("body", event)}
                    />
                  </div>
                </div>

                <div className="field">
                  <label className="label">Author</label>
                  <div className="control">
                    <input
                      className="input"
                      type="text"
                      name="author"
                      placeholder="Add Testimonial Author"
                      value={author}
                      onChange={event => this.onInputChange("author", event)}
                    />
                  </div>
                </div>

                <div className="field is-centered">
                  <div className="formButton control">
                    <input
                      className="button is-link"
                      type="submit"
                      value="Add Testamonial"
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

export default TestimonialsFormView;
