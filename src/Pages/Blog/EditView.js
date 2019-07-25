import React, { Component } from "react";
import { Link } from "react-router-dom";
import LocalAPI from "./../../apis/local";
import Loader from "./../../components/Loader";

class BlogEditView extends Component {
  state = {
    title: "",
    body: "",
    fetching: true
  };

  //change later to get props from lifted state
  componentDidMount() {
    const id = this.props.match.params.id;
    LocalAPI.get(`/blog/${id}`).then(res =>
      this.setState({ fetching: false, ...res.data })
    );
  }

  convertDate(date) {
    if (Date.parse(date)) {
      return new Date(date).toISOString().slice(0, 10);
    }
    return null;
  }

  onInputChange = (name, event) => {
    this.setState({ [name]: event.target.value });
  };

  onFormSubmit = async event => {
    event.preventDefault();
    this.setState({ fetching: true });

    const { title, body } = this.state;

    const updateBlog = {
      title,
      body
    };

    await LocalAPI.put(
      `/blog/${this.props.match.params.id}`,
      updateBlog
    );
    this.props.history.push(`/blog/${this.props.match.params.id}`);
  };

  render() {
    const { title, body, fetching } = this.state;

    if (this.state.fetching) {
      return <Loader />;
    }

    return (
      <>
        <section className="section title-heading">
          <div className="container">
            <div className="content has-text-centered">
              <h1>Edit Blog Post</h1>
            </div>

            <div className="column bookForm">
              <form onSubmit={this.onFormSubmit}>
                <div className="field">
                  <label className="label">Title</label>
                  <div className="control">
                    <input
                      className="input"
                      type="text"
                      name="title"
                      value={title}
                      onChange={event => this.onInputChange("title", event)}
                    />
                  </div>
                </div>

                <div className="field">
                  <label className="label">Blog Post</label>
                  <div className="control">
                    <textarea
                      className="textarea"
                      placeholder="Edit your blog post"
                      name="body"
                      value={body}
                      onChange={event => this.onInputChange("body", event)}
                    />
                  </div>
                </div>

                <div className="field is-centered">
                  <div className="formButton control">
                    <input
                      className="button is-primary"
                      type="submit"
                      value="Save"
                    />
                  </div>
                </div>
              </form>
            </div>

            <p>
              <Link to={`/blog/${this.props.match.params.id}`}>Cancel</Link>
            </p>
          </div>
        </section>
      </>
    );
  }
}

export default BlogEditView;
