import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
// import dashboardViewCSS from "./../../assets/styles/AdminSCSS/dashboardView.css";

class BookingsIndexView extends Component {
    state = {
        booking: {}
    }

    //try using filter array to get item, if its faster than querying
    componentDidMount() {
        const id = this.props.match.params.id;
        axios.get(`https://dogsdata.herokuapp.com/bookings/${id}`)
        .then(res => this.setState({ booking: {...res.data} }));
    }

    // getBooking = async () => {
    //     const id = this.props.match.params.id;
    //     const response = await axios.get(`https://dogsdata.herokuapp.com/bookings/${id}`);   
    //     return response.data;
    // }

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
                <li><span>Date Created: </span> {new Date(date).toLocaleDateString()}</li>
                <li><span>Customer Name: </span> {firstName} {lastName}</li>
                <li><span>Day for Training: </span> {bookingDate}</li>
                <li><span>Email: </span> {email}</li>
                <li><span>Status: </span> {status}</li>
                <li><span>Paid: </span> {`${paid}`}</li>
                <li><span>Details: </span> {details}</li>
            </ul>
            <p>
                <Link to={`/bookings/${this.props.match.params.id}/edit`}>Edit</Link> | {}
                <Link to={`/bookings/`}>Delete</Link>
            </p>
        </>
      );
    }
  }
  
export default BookingsIndexView