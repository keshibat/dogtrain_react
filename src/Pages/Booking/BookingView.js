import React, { Component } from "react";
import axios from "axios";
import Calendar from "react-calendar";
import Loader from "./../../components/Loader";
import bookingViewCSS from "./../../assets/styles/BookingSCSS/bookingView.css";
import Messages from "./../../components/Messages";

class BookingView extends Component {
  state = {
    firstName: "",
    lastName: "",
    email: "",
    details: "",
    bookingDate: new Date(),
    confirmed: {},
    fetching: true,
    message: null
  };

  //change this later to not use async, make use of props
  async componentDidMount() {
    const confirmedDates = await this.getConfirmed();
    this.setState({ confirmed: { ...confirmedDates }, fetching: false });
  }

  getConfirmed = async () => {
    const response = await axios.get(
      `${process.env.REACT_APP_API_URL}/bookings/confirmed`
    );
    return response.data;
  };

  onChange = bookingDate => {
    this.setState({ bookingDate });
  };

  onInputChange = (name, event) => {
    this.setState({ [name]: event.target.value });
  };

  onFormSubmit = async event => {
    event.preventDefault();
    this.setState({ fetching: true });
    const { firstName, lastName, email, details, bookingDate } = this.state;

    const newBooking = {
      firstName,
      lastName,
      email,
      details,
      bookingDate
    };

    const response = await axios.post(
      `${process.env.REACT_APP_API_URL}/bookings`,
      newBooking
    );
    this.setState({
      firstName: "",
      lastName: "",
      email: "",
      details: "",
      bookingDate: new Date(),
      fetching: false,
      message:
        "Your booking has been sent and will be reviewed by our trainers. We will be in contact with you shortly."
    });
  };

  render() {
    const {
      firstName,
      lastName,
      email,
      details,
      bookingDate,
      fetching,
      message
    } = this.state;

    if (fetching) {
      return <Loader />;
    }

    const tileClassName = ({ date, view }) => {
      const dates = this.state.confirmed;
      if (view === "month") {
        if (dates[date.toDateString()] >= 2) return "keyBusy";
        if (dates[date.toDateString()] === 1) return "keySBusy";
        return null;
      }
    };

    return (
      <>
        <section className="section title-heading">
          <div className="container">
            <div className="content has-text-centered">
              <h1>Book An Appointment</h1>
            </div>
          </div>
        </section>

        {message ? Messages(message) : null}

        <section className="section">
          <div className="container">
            <div className="content has-text-centered" />
          </div>

          <div className="container">
            <div className="content has-text-centered">
              <div className="columns is-centered">
                <div className="column is-half booking">
                  <div className="box content">
                    <h3>Missed Appointment and Cancellation Policy </h3>
                    <p>
                      If you are unable to keep an appointment please give at
                      least 24 hours notice to ensure that you will not be
                      charge for the appointment or part-thereof.
                    </p>
                    <p>
                      12 to 24 hours notice of cancellation will require $50
                      value to be paid, less than 12 hours notice will require
                      full payment.
                    </p>
                    <p>
                      Thank you for your consideration in ensuring that adequate
                      notice is given.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="calendar container">
            <div className="columns">
              <div className="column calender">
                <h2>
                  <b>Choose a date:</b>
                </h2>
                <Calendar
                  onChange={this.onChange}
                  value={this.state.bookingDate}
                  tileClassName={tileClassName}
                />
                <div className="box calender">
                  <ul className="keyList">
                    <li className="keyItem">
                      <div className="keyBox" />
                      <p>Free</p>
                    </li>
                    <li className="keyItem">
                      <div className="keyBox keySBusy" />
                      <p>Slightly Busy</p>
                    </li>
                    <li className="keyItem">
                      <div className="keyBox keyBusy" />
                      <p>Busy</p>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="column bookForm">
                <h2>
                  <b>Enter Your Details:</b>
                </h2>
                <form onSubmit={this.onFormSubmit}>
                  <div className="field">
                    <label className="label">First Name</label>
                    <div className="control">
                      <input
                        className="input"
                        type="text"
                        name="firstName"
                        value={firstName}
                        onChange={event =>
                          this.onInputChange("firstName", event)
                        }
                      />
                    </div>
                  </div>

                  <div className="field">
                    <label className="label">Last Name</label>
                    <div className="control">
                      <input
                        className="input"
                        type="text"
                        name="lastName"
                        value={lastName}
                        onChange={event =>
                          this.onInputChange("lastName", event)
                        }
                      />
                    </div>
                  </div>

                  <div className="field">
                    <label className="label">Email</label>
                    <div className="control">
                      <input
                        className="input"
                        type="text"
                        name="email"
                        value={email}
                        onChange={event => this.onInputChange("email", event)}
                      />
                    </div>
                  </div>

                  <div className="field">
                    <label className="label">Date</label>
                    <div className="control">
                      <input
                        className="input"
                        type="text"
                        name="bookingDate"
                        value={bookingDate.toLocaleDateString()}
                        readOnly
                      />
                    </div>
                  </div>

                  <div className="field">
                    <label className="label">Details</label>
                    <div className="control">
                      <textarea
                        className="textarea"
                        name="details"
                        value={details}
                        onChange={event => this.onInputChange("details", event)}
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
        </section>
      </>
    );
  }
}

export default BookingView;
