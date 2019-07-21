import React, { Component } from "react";
import { Link } from "react-router-dom";
import LocalAPI from "./../../apis/local";
// import dashboardViewCSS from "./../../assets/styles/AdminSCSS/dashboardView.css";

class BookingsShowView extends Component {
    state = {
        booking: {}
    }

    //try using filter array to get item, if its faster than querying
    componentDidMount() {
        const { id } = this.props.match.params;
        LocalAPI.get(`/bookings/${id}`)
        .then(res => this.setState({ booking: {...res.data} }));
    }

    // getBooking = async () => {
    //     const id = this.props.match.params.id;
    //     const response = await axios.get(`https://dogsdata.herokuapp.com/bookings/${id}`);   
    //     return response.data;
    // }

    onDeleteClick = async (event) => {
        event.preventDefault();
        const { id } = this.props.match.params;
        const response = await LocalAPI.delete(`/bookings/${id}`);
        return this.props.history.push("/admin");
    }

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

      return (
        <>
            <h1>Booking Details</h1>
            <ul>
                <li><span>Date Created: </span> {date && new Date(date).toLocaleDateString()}</li>
                <li><span>Customer Name: </span> {firstName} {lastName}</li>
                <li><span>Date of Training Session: </span> {bookingDate}</li>
                <li><span>Email: </span> {email}</li>
                <li><span>Status: </span> {status}</li>
                <li><span>Paid: </span> {paid ? "True" : "False"}</li>
                <li><span>Details: </span> {details}</li>
            </ul>
            <p>
                <Link to={`/bookings/${this.props.match.params.id}/edit`}>Edit</Link> | {}
                <a href="" onClick={this.onDeleteClick}>Delete</a> | {}
                <Link to={"/admin"}>Back</Link>
            </p>
        </>
      );
    }
  }
  
export default BookingsShowView