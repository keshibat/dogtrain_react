import React, { Component } from "react";
import { Link } from "react-router-dom";
import LocalAPI from "./../../apis/local";
import dashboardViewCSS from "./../../assets/styles/AdminSCSS/dashboardView.css";
import Loader from "./../../components/Loader";

//index view, view all bookings
//CRUD views, edit/update, delete, confirm/change status
class DashboardView extends Component {
  state = {
    bookings: [],
    fetching: true
  };

  componentDidMount() {
    this.getBookings()
      .then(res => {
        console.log(res);
        this.setState({ bookings: [...res], fetching: false });
      })
      .catch(err => console.log(err));
  }

  getBookings = async () => {
    const response = await LocalAPI.get("/bookings").catch(err => {
      console.log(err);
    });
    return response.data;
  };

  render() {
    const { bookings, fetching } = this.state;

    if (fetching) {
      return <Loader />;
    }
    return (
      <>
        <h1>Dashboard</h1>
        <h2>Bookings:</h2>
        <ul>
          {bookings.reverse().map((item, index) => {
            return (
              <li key={item._id}>
                <Link to={`/bookings/${item._id}`}>
                  <span className="bookingDetails">
                    {item.firstName} {item.lastName} for {item.bookingDate}
                  </span>
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

export default DashboardView;
