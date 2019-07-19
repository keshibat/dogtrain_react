import React, { Component } from "react";
import axios from "axios";
import Calendar from 'react-calendar';
import bookingViewCSS from "./../../assets/styles/BookingSCSS/bookingView.css";

class BookingView extends Component {
  state = {
    firstName: "",
    lastName: "",
    email: "",
    details: "",
    bookingDate: new Date(),
    confirmed: {}
  }


  //change this later to not use async, make use of props
  async componentDidMount() {
    const confirmedDates = await this.getConfirmed();
    console.log(confirmedDates);
    this.setState({confirmed:{...confirmedDates}});
  }

  getConfirmed = async () => {
    const response = await axios.get("http://localhost:5000/bookings/confirmed");
    return response.data;
  }

  onChange = bookingDate => {
    this.setState({ bookingDate })
  }

  onInputChange = (name, event) => {
    this.setState({ [name]: event.target.value });
  }

  //have a message display saying a email has been sent and booking will be confirmed by trainer
  onFormSubmit = async (event) => {
    event.preventDefault();

    const {
      firstName,
      lastName,
      email,
      details,
      bookingDate
    } = this.state;

    const newBooking = {
      firstName,
      lastName,
      email,
      details,
      bookingDate
    }

    const response = await axios.post("http://localhost:5000/bookings", newBooking);
    console.log(response);
    this.setState({ 
      firstName: "",
      lastName: "",
      email: "",
      details: "",
      bookingDate: new Date()
    });
    //this.setState, you can update your state with new data and page will also reload
    //clean up later to optimize getting confirmed bookings
    //you want confirmed dates to be given back after form submit (actually not necessary as bookings are confirmed manually)
  }

  render() {
  console.log(this.props);
  console.log(this.props.testing);

    const { 
      firstName,
      lastName,
      email,
      details,
      bookingDate,
    } = this.state;

    const tileContent = ({ date, view }) => {
      const dates = this.state.confirmed;
      //!confirmed[date] && confirmed[date] > 1
      return (view === "month") && (dates[date.toDateString()]) ? 
      <p>Today is booked!</p> : null;
    } 

    const tileClassName = ({ date, view }) => {
      const dates = this.state.confirmed;
      return (view === "month") && (dates[date.toDateString()]) ? 
      "booked" : null;
    } 

    return (
      <>
        <section className="section title-heading">
          <div className="container">
            <div className="content has-text-centered">
              <h1>
                Book An Appointment
              </h1>
            </div>
          </div>
        </section>

        <div className="calendar container">
          <div className="column">
        {/* <div className="columns is-centered"> */}
        {/* <div className="column is-half is-centered calendarGroup"> */}
          <Calendar
            onChange={this.onChange}
            value={this.state.bookingDate}
            // tileContent={tileContent}
            tileClassName={tileClassName}
          />
          <div className="box">
            <ul className="keyList">
              <li className="keyItem">
                <div className="keyBox"></div>
                <p>Free</p>
              </li>
              <li className="keyItem">
                <div className="keyBox keySBusy"></div>
                <p>Slightly Busy</p>
              </li>
              <li className="keyItem">
                <div className="keyBox keyBusy"></div>
                <p>Busy</p>
              </li>
            </ul>
          </div>
        </div>

          <div className="column bookForm">

            <h2>Enter Your Details:</h2>
          <form onSubmit={this.onFormSubmit}>
            <div className="field">
              <label className="label">First Name</label>
              <div className="control">
              <input className="input" type="text" name="firstName" value={firstName} onChange={(event) => this.onInputChange("firstName", event)} />
              </div>
            </div>

            <div className="field">
              <label className="label">Last Name</label>
              <div className="control">
              <input className="input" type="text" name="lastName" value={lastName} onChange={(event) => this.onInputChange("lastName", event)} />
              </div>
            </div>

            <div className="field">
              <label className="label">Email</label>
              <div className="control">
              <input className="input" type="text" name="email" value={email} onChange={(event) => this.onInputChange("email", event)} />
              </div>
            </div>

            <div className="field">
              <label className="label">Date</label>
              <div className="control">
              <input className="input" type="text" name="bookingDate" value={bookingDate.toLocaleDateString()} readOnly />
              </div>
            </div>

            <div className="field">
              <label className="label">Details</label>
              <div className="control">
              <textarea className="textarea" name="details" value={details} onChange={(event) => this.onInputChange("details", event)} />
              </div>
            </div>

            <div className="field is-centered">
              <div className="formButton control">
              <input className="button is-primary" type="submit" value="Book" />
              </div>
            </div>
          </form>

          </div>
        </div>
        {/* </div> */}

        <section className="section">
         <div className="box content">
           <div className="content is-centered">
             <h3>Missed Appointment and Cancellation Policy </h3>
             <p>
               If you are unable to keep an appointment please give at least 24
               hours notice to ensure that you will not be charge for the
               appointment or part-thereof.
             </p>
             <p>
               12 to 24 hours notice of cancellation will require $50 value to
               be paid, less than 12 hours notice will require full payment.
             </p>
             <p>
               Thank you for your consideration in ensuring that adequate
               notice is given.
             </p>
           </div>
         </div>
       </section>
      </>
    );
  }
}

export default BookingView