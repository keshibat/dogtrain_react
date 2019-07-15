import React, { Component } from "react";
import axios from "axios";
import Calendar from 'react-calendar';


class BookingView extends Component {
  state = {
    firstName: "",
    lastName: "",
    email: "",
    details: "",
    bookingDate: new Date(),
    confirmed: {}
  }

  async componentDidMount() {
    const confirmedDates = await this.getConfirmed();
    console.log(confirmedDates);
    this.setState({confirmed:{...confirmedDates}});
  }

  getConfirmed = async () => {
    const response = await axios.get("http://127.0.0.1:5000/bookings/confirmed");
    return response.data;
  }

  onChange = bookingDate => {
    this.setState({ bookingDate })
  }

  onInputChange = (name, event) => {
    this.setState({ [name]: event.target.value });
  }

  //have a message display saying a email has been sent and booking will be confirmed by trainer
  onFormSubmit = (event) => {
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

    axios.post("http://127.0.0.1:5000/bookings", newBooking)
      .then(response => console.log(response))
      .catch(err => console.log(err));
  }

  render() {
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
        <br />
        <br />
        <br />
        <h1> Booking </h1>
        <Calendar
          onChange={this.onChange}
          value={this.state.bookingDate}
          tileContent={tileContent}
          tileClassName={tileClassName}
        />

        <form onSubmit={this.onFormSubmit}>
          <div>
            <label>First Name</label>
            <input type="text" name="firstName" value={firstName} onChange={(event) => this.onInputChange("firstName", event)} />
          </div>
          <div>
            <label>Last Name</label>
            <input type="text" name="lastName" value={lastName} onChange={(event) => this.onInputChange("lastName", event)} />
          </div>
          <div>
            <label>Email</label>
            <input type="text" name="email" value={email} onChange={(event) => this.onInputChange("email", event)} />
          </div>
          <div>
            <label>Date</label>
            <input type="text" name="bookingDate" value={bookingDate.toLocaleDateString()} readOnly />
          </div>
          <div>
            <label>Details</label>
            <textarea name="details" value={details} onChange={(event) => this.onInputChange("details", event)} />
          </div>
          <div>
            <input type="submit" value="Book" />
          </div>
        </form>

      </>
    );
  }
}

export default BookingView