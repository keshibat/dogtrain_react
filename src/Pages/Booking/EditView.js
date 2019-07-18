import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
// import dashboardViewCSS from "./../../assets/styles/AdminSCSS/dashboardView.css";

class BookingsEditView extends Component {
    state = {
        booking: {
            bookingDate: "",
            details: "",
            email: "",
            firstName: "",
            lastName: "",
            paid: "",
            status: ""
        }
      }

    //change later to get props from lifted state
    componentDidMount() {
        const id = this.props.match.params.id;
        axios.get(`https://dogsdata.herokuapp.com/bookings/${id}`)
        .then(res => this.setState({ 
            booking: {...res.data} 
        }));
    }
    
    onInputChange = (name, event) => {
        this.setState({ [name]: event.target.value });
    }

    //have a message display saying a email has been sent and booking will be confirmed by trainer
    onFormSubmit = async (event) => {
        event.preventDefault();

        const {
            bookingDate,
            details,
            email,
            firstName,
            lastName,
            paid,
            status
        } = this.state.booking;

        const updateBooking = {
            bookingDate,
            details,
            email,
            firstName,
            lastName,
            paid,
            status
        }

        const response = await axios.put(`https://dogsdata.herokuapp.com/${this.props.match.params.id}`, updateBooking);
        console.log(response);
        // return this.props.history.push(`/bookings/${this.props.match.params.id}`);
    }

    render() {
                // console.log(this.props.history);
        // const { bookings } = this.state;
        // console.log(this.props.match.params.id);
        // console.log(this.props.bookings);
        const {
            bookingDate,
            details,
            email,
            firstName,
            lastName,
            paid,
            status
        } = this.state.booking;

      return (
        <>
            <div className="column bookForm">

            <h1>Enter Booking Details:</h1>
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
                <label className="label">Date of Training Session</label>
                <div className="control">
                <input className="input" type="text" name="bookingDate" value={bookingDate && new Date(bookingDate).toLocaleDateString()} readOnly />
                </div>
                </div>

                <div className="field">
                <label className="label">Paid</label>
                <div className="control">
                <input className="input" type="text" name="paid" value={paid} onChange={(event) => this.onInputChange("paid", event)} />
                </div>
                </div>

                <div className="field">
                <label className="label">Status</label>
                <div className="control">
                <input className="input" type="text" name="status" value={status} onChange={(event) => this.onInputChange("status", event)} />
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
                <input className="button is-primary" type="submit" value="Save" />
                </div>
                </div>
            </form>

            </div>

            <p>
                <Link to={`/bookings/${this.props.match.params.id}/update`}>Save</Link> | {}
                <Link to={`/bookings/${this.props.match.params.id}`}>Cancel</Link>
            </p>


        </>
      );
    }
  }
  
export default BookingsEditView