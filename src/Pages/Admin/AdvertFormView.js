import React, { Component } from "react";
import LocalAPI from "./../../apis/local"
import Loader from "./../../components/Loader";
import "./../../assets/styles/BookingSCSS/bookingView.css";

class AdvertFormView extends Component {
  state = {
    title: "",
    body: "",
    link: "",
    fetching: false
  };

  onInputChange = (name, event) => {
    this.setState({ [name]: event.target.value });
  };

  onFormSubmit = async event => {
    event.preventDefault();
    this.setState({ fetching: true });
    const { title, body, link } = this.state;
    const content = {
      title,
      body,
      link
    };
    const response = await LocalAPI.post(`/advert`, content);
    this.setState({
      title: "",
      body: "",
      link: ""
    });
    this.setState({ fetching: false });
  };

  render() {
    const { title, body, link, fetching } = this.state;

    if (fetching) {
      return <Loader />;
    }

    return (
      <>
        <div className="column">
          <div className="box content">
            <div className="column bookForm">
              <h2>
                <b>Homepage Advert</b>
              </h2>
              <form onSubmit={this.onFormSubmit}>
                <div className="field">
                  <label className="label">Heading</label>
                  <div className="control">
                    <input
                      className="input"
                      placeholder="Add a Heading"
                      type="text"
                      name="title"
                      value={title}
                      onChange={event => this.onInputChange("title", event)}
                    />
                  </div>
                </div>

                <div className="field">
                  <label className="label">Content</label>
                  <div className="control">
                    <textarea
                      class="textarea"
                      placeholder="Add Content"
                      name="body"
                      value={body}
                      onChange={event => this.onInputChange("body", event)}
                    />
                  </div>
                </div>

                <div className="field">
                  <label className="label">Link</label>
                  <div className="control">
                    <input
                      className="input"
                      placeholder="URL"
                      type="text"
                      name="link"
                      value={link}
                      onChange={event => this.onInputChange("link", event)}
                    />
                  </div>
                </div>

                <div className="field is-centered">
                  <div className="formButton control">
                    <input
                      className="button is-link"
                      type="submit"
                      value="Update Advert"
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

export default AdvertFormView;
