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
        <section className="section title-heading">
          <div className="container">
            <div className="content has-text-centered">
              <h1>Dashboard</h1>
            </div>
          </div>
        </section>

        <section>
          <div className="content has-text-centered">
            <div className="columns">
              <div className="box content">
                <div className="column">
                  <h5 className="title is-5">Bookings</h5>
                  <ul>
                    {bookings.map((item, index) => {
                      return (
                        <div className="box content">
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
                              key={item._id}
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
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }
}

export default DashboardView;
