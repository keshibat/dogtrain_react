import React, { Component } from "react";
import { Link } from "react-router-dom";
import LocalAPI from "./../../apis/local";
import "./../../assets/styles/AdminSCSS/dashboardView.css";
import Loader from "./../../components/Loader";

class BookingsIndexView extends Component {
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
            <section className="section title-heading">
            <div className="container">
                <div className="content has-text-centered">
                <h1>Dashboard</h1>
                </div>
            </div>
            </section>

            <div className="tabs is-centered">
                <ul>
                    <li><Link to={`/admin`}>Admin Panel</Link></li>
                    <li className="is-active"><Link to={`/bookings`}>Manage Bookings</Link></li>
                </ul>
            </div>

            <div className="column">
                <div className="box content">
                    <div>
                    {bookings.reverse().map((item, index) => {
                        return (
                        <div className="box content" key={item._id}>
                            <Link
                            to={`/bookings/${item._id}`}
                            className="booking-box"
                            >
                            <span className="bookingDetails">
                                {item.firstName} {item.lastName} for{" "}
                                {new Date(item.bookingDate).toDateString()}
                            </span>

                            <h6
                                className="title is-6 has-text-centered"
                            />

                            <span className="bookingOptions">
                                <p>
                                Status: {item.status}, {}
                                </p>
                                <p>
                                Paid: {`${item.paid}`}, {}
                                </p>
                                <p>
                                Created:{" "}
                                {new Date(item.date).toLocaleDateString()}
                                {/* add this to mongoose schema as getter */}
                                </p>
                                <p>Details: {item.details}</p>
                            </span>
                            </Link>
                        </div>
                        );
                    })}
                    </div>
                </div>
            </div>

        </>
        );
    }
}

export default BookingsIndexView;