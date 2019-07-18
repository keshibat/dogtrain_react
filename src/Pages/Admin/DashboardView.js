import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import dashboardViewCSS from "./../../assets/styles/AdminSCSS/dashboardView.css";

//index view, view all bookings
//CRUD views, edit/update, delete, confirm/change status
class DashboardView extends Component {

    // state = {
    //     bookings: []
    // }

    // componentDidMount() {
    // // async componentDidMount() {
    //     // const bookings = await this.getBookings();
    //     // console.log(bookings);
    //     const testing = this.props.testing;
    //     // console.log(this.props.testing);
    //     this.setState({bookings:[...testing]});
    // }

    //need an array of the bookings https://dogsdata.herokuapp.com/bookings
    // getBookings = async () => {
    //     const response = await axios.get("https://dogsdata.herokuapp.com/bookings");
    //     return response.data;
    // }

    render() {
        // console.log(this.props.testing);
        const { bookings } = this.props;
        console.log(bookings);
      return (
        <>
            <h1> Dashboard </h1>
            <h2>Bookings:</h2>
            <ul>
                {bookings.map((item, index) => {
                    return (
                        <li key={item._id}>
                            <Link to={`/bookings/${item._id}`}>
                                <span className="bookingDetails">{item.firstName} {item.lastName} for {item.bookingDate}</span>
                            </Link>
                            <span className="bookingOptions">
                                Status: {item.status}, {}
                                Paid: {`${item.paid}`}, {}
                                Created: {new Date(item.date).toLocaleDateString()}
                                {/* add this to mongoose schema as getter */}
                            </span>
                        </li>
                    );
                })}
            </ul>
        </>
      );
    }
  }
  
export default DashboardView