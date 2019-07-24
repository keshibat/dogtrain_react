import React, { Component } from "react";
import axios from "axios";
// import LocalAPI from "./../../apis"
import Loader from "./../../components/Loader";
import bookingViewCSS from "./../../assets/styles/BookingSCSS/bookingView.css";

class TestimonialsFormView extends Component {
  state = {
    author: "",
    body: "",
    dog: ""
    // fetching: true
  };

  //change this later to not use async, make use of props
  async componentDidMount() {
    // const response = await axios.get(
    //   `${process.env.REACT_APP_API_URL}/testimonials`
    // );
    // this.setState({ response });
  }

  onInputChange = (name, event) => {
    this.setState({ [name]: event.target.value });
  };

  onFormSubmit = async event => {
    // event.preventDefault();
    // // this.setState({ fetching: true });
    // const { author, body, dog } = this.state;
    // const newBooking = {
    //   author,
    //   body,
    //   dog
    // };
    // const response = await axios.post(
    //   `${process.env.REACT_APP_API_URL}/bookings`,
    //   newBooking
    // );
    // console.log(response);
    // this.setState({
    //   author: "",
    //   body: "",
    //   dog: ""
    // });
  };

  render() {
    const { author, body, dog } = this.state;

    // if (fetching) {
    //   return <Loader />;
    // }

    return (
      <>
        <div className="column">
          <div className="box content">
            <div className="column bookForm">
              <h2>
                <b>Testimonials</b>
              </h2>
              <form onSubmit={this.onFormSubmit}>
                <div className="field">
                  <label className="label">Title</label>
                  <div className="control">
                    <input
                      className="input"
                      type="text"
                      name="dog"
                      value={dog}
                      onChange={event => this.onInputChange("dog", event)}
                    />
                  </div>
                </div>

                <div className="field">
                  <label className="label">Body</label>
                  <div className="control">
                    <textarea
                      class="textarea"
                      placeholder="Create A Testimonial"
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
                      value="Book"
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
