import React, { Component } from "react";
import { Link } from "react-router-dom";
import LocalAPI from "./../../apis/local";
// import dashboardViewCSS from "./../../assets/styles/AdminSCSS/dashboardView.css";
import Loader from "./../../components/Loader";

class BookingsEditView extends Component {
  state = {
    bookingDate: "",
    details: "",
    email: "",
    firstName: "",
    lastName: "",
    paid: "",
    status: "",
    fetching: true
  };

  //change later to get props from lifted state
  componentDidMount() {
    const id = this.props.match.params.id;
    LocalAPI.get(`/bookings/${id}`).then(res =>
      this.setState({ fetching: false, ...res.data })
    );
  }

  //convert date that will be displayed on edit form
  convertDate(date) {
    if (Date.parse(date)) {
      return new Date(date).toISOString().slice(0, 10);
    }
    return null;
  }

  convertDate(date) {
    if (Date.parse(date)) {
      return new Date(date).toISOString().slice(0, 10);
    }
    return null;
  }

  onInputChange = (name, event) => {
    console.log(event.target.value);
    this.setState({ [name]: event.target.value });
  };

  onFormSubmit = async event => {
    event.preventDefault();
    this.setState({ fetching: true });

    const {
      bookingDate,
      details,
      email,
      firstName,
      lastName,
      paid,
      status
    } = this.state;

    const updateBooking = {
      bookingDate,
      details,
      email,
      firstName,
      lastName,
      paid,
      status
    };

    const response = await LocalAPI.put(
      `/bookings/${this.props.match.params.id}`,
      updateBooking
    );
    console.log(response);
    this.props.history.push(`/bookings/${this.props.match.params.id}`);
  };

  render() {
    const {
      bookingDate,
      details,
      email,
      firstName,
      lastName,
      paid,
      status,
      fetching
    } = this.state;

    const dateString = new Date(bookingDate).toLocaleDateString() || "";

    if (this.state.fetching) {
      return <Loader />;
    }

    return (
      <>
        <div className="column bookForm">
          <h1>Enter Booking Details:</h1>
          <form onSubmit={this.onFormSubmit}>
            <div className="field">
              <label className="label">First Name</label>
              <div className="control">
                <input
                  className="input"
                  type="text"
                  name="firstName"
                  value={firstName}
                  onChange={event => this.onInputChange("firstName", event)}
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
                  onChange={event => this.onInputChange("lastName", event)}
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
              <label className="label">Date of Training Session</label>
              <div className="control">
                <input
                  className="input"
                  type="date"
                  name="bookingDate"
                  value={new Date(bookingDate).toISOString().slice(0, 10)}
                  onChange={event => this.onInputChange("bookingDate", event)}
                />
              </div>
            </div>

            <div className="field">
              <label className="label">Paid</label>
              <div className="control">
                <div className="select">
                  <select
                    name="paid"
                    value={paid.toString()}
                    onChange={event => this.onInputChange("paid", event)}
                  >
                    <option value="true">True</option>
                    <option value="false">False</option>
                  </select>
                </div>
              </div>
            </div>

            <div className="field">
              <label className="label">Status</label>
              <div className="control">
                <div className="select">
                  <select
                    name="status"
                    value={status}
                    onChange={event => this.onInputChange("status", event)}
                  >
                    <option value="Pending">Pending</option>
                    <option value="Confirmed">Confirmed</option>
                    <option value="Completed">Completed</option>
                    <option value="Cancelled">Cancelled</option>
                  </select>
                </div>
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
                  className="button is-primary"
                  type="submit"
                  value="Save"
                />
              </div>
            </div>
          </form>
        </div>

        <p>
          <Link to={`/bookings/${this.props.match.params.id}`}>Cancel</Link>
        </p>
      </>
    );
  }
}

export default BookingsEditView;
