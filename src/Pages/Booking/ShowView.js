import React, { Component } from "react";
import { Link } from "react-router-dom";
import LocalAPI from "./../../apis/local";
// import dashboardViewCSS from "./../../assets/styles/AdminSCSS/dashboardView.css";
import Loader from "./../../components/Loader";

class BookingsShowView extends Component {
  state = {
    booking: {},
    fetching: true
  };

  //try using filter array to get item, if its faster than querying
  componentDidMount() {
    const { id } = this.props.match.params;
    LocalAPI.get(`/bookings/${id}`).then(res =>
      this.setState({ booking: { ...res.data }, fetching: false })
    );
  }

  // getBooking = async () => {
  //     const { id } = this.props.match.params;
  //     const response = await LocalAPI.get(`/bookings/${id}`);
  //     return response.data;
  // }

  onDeleteClick = async event => {
    event.preventDefault();
    const { id } = this.props.match.params;
    const response = await LocalAPI.delete(`/bookings/${id}`);
    this.props.history.push("/admin");
  };

  onConfirmClick = async event => {
    event.preventDefault();
    this.setState({ fetching: true });
    const { id } = this.props.match.params;
    await LocalAPI.put(`/bookings/${id}/confirm`);
    //optimize later
    LocalAPI.get(`/bookings/${id}`).then(res =>
      this.setState({ booking: { ...res.data }, fetching: false })
    );
  };

  render() {
    // const { bookings } = this.state;
    // console.log(this.props.match.params.id);
    // console.log(this.props.bookings);
    const {
      bookingDate,
      date,
      details,
      email,
      firstName,
      lastName,
      paid,
      status
    } = this.state.booking;

    if (this.state.fetching) {
      return <Loader />;
    }

    return (
      <>
        <h1>Booking Details</h1>
        <ul>
          <li>
            <span>Date Created: </span>{" "}
            {date && new Date(date).toLocaleDateString()}
          </li>
          <li>
            <span>Customer Name: </span> {firstName} {lastName}
          </li>
          <li>
            <span>Date of Training Session: </span> {bookingDate}
          </li>
          <li>
            <span>Email: </span> {email}
          </li>
          <li>
            <span>Status: </span> {status}
          </li>
          <li>
            <span>Paid: </span> {paid ? "True" : "False"}
          </li>
          <li>
            <span>Details: </span> {details}
          </li>
        </ul>
        <p>
          <a href="" onClick={this.onConfirmClick}>
            Confirm
          </a>{" "}
          | {}
          <Link to={`/bookings/${this.props.match.params.id}/edit`}>
            Edit
          </Link>{" "}
          | {}
          <a href="" onClick={this.onDeleteClick}>
            Delete
          </a>{" "}
          | {}
          <Link to={"/admin"}>Back</Link>
        </p>
      </>
    );
  }
}

export default BookingsShowView;
