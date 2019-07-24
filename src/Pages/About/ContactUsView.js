import React, { Component } from "react";
import axios from "axios";
import ContactUsCSS from "./../../assets/styles/AboutSCSS/ContactUsCSS.css";
import ContactUsIMG from "./../../assets/images/contact-us.jpeg";
import Loader from "./../../components/Loader";
import Messages from "./../../components/Messages";

class ContactUsView extends Component {
  state = {
    name: "",
    email: "",
    phone: "",
    suburb: "",
    dogDetails: "",
    details: "",
    fetching: false,
    message: null
  };
  onInputChange = (name, event) => {
    this.setState({ [name]: event.target.value });
  };
  onFormSubmit = event => {
    event.preventDefault();
    this.setState({ fetching: true });
    const { name, email, phone, suburb, dogDetails, details } = this.state;
    const newEnquiry = {
      name,
      email,
      phone,
      suburb,
      dogDetails,
      details
    };
    axios
      .post(`${process.env.REACT_APP_API_URL}/contactus`, newEnquiry)
      .then(response => console.log(response))
      .catch(err => console.log(err));

      //reset form on submission
      this.setState({
        name: "",
        email: "",
        phone: "",
        suburb: "",
        dogDetails: "",
        details: "",
        fetching: false,
        message: "Your enquiry has been sent and will be reviewed. We will be in contact with you shortly."
      });
  };
  render() {
    const { name, email, phone, suburb, dogDetails, details, fetching, message } = this.state;

    if (fetching) {
      return <Loader />;
    }

    return (
      <>
        <section className="section title-heading">
          <div className="container">
            <div className="content has-text-centered">
              <h1>Contact Us</h1>
            </div>
          </div>
        </section>

        {message ? Messages(message) : null}

        <form onSubmit={this.onFormSubmit}>
          <section className="section">
            <div className="box content">
              <div className="columns">
                <div className="column">
                  <div className="field">
                    <label className="label is-small">Name</label>
                    <div className="control">
                      <input
                        className="input"
                        type="text"
                        placeholder="e.g Alex Smith"
                        required
                        value={name}
                        onChange={event => this.onInputChange("name", event)}
                      />
                    </div>
                  </div>

                  <div className="field">
                    <label className="label is-small">Email</label>
                    <div className="control">
                      <input
                        className="input"
                        type="email"
                        placeholder="e.g. alexsmith@gmail.com"
                        required
                        value={email}
                        onChange={event => this.onInputChange("email", event)}
                      />
                    </div>
                  </div>
                  <div className="field">
                    <label className="label is-small">Phone</label>
                    <div className="control">
                      <input
                        className="input"
                        type="tel"
                        placeholder="e.g 0400000000"
                        required
                        value={phone}
                        onChange={event => this.onInputChange("phone", event)}
                      />
                    </div>
                  </div>

                  <div className="field">
                    <label className="label is-small">Suburb</label>
                    <div className="control">
                      <input
                        className="input"
                        type="text"
                        placeholder="e.g Camperdown"
                        required
                        value={suburb}
                        onChange={event => this.onInputChange("suburb", event)}
                      />
                    </div>
                  </div>
                  <div className="field">
                    <label className="label is-small">
                      Name, Age, Breed of Dog
                    </label>
                    <div className="control">
                      <input
                        className="input"
                        type="text"
                        placeholder="Moki, 9 months, Shetland Sheepdog"
                        required
                        value={dogDetails}
                        onChange={event =>
                          this.onInputChange("dogDetails", event)
                        }
                      />
                    </div>
                  </div>

                  <div className="field">
                    <label className="label is-small">Details</label>

                    <div className="field-body">
                      <div className="field">
                        <div className="control">
                          <textarea
                            className="textarea"
                            placeholder="Any further details you would like to add?"
                            value={details}
                            onChange={event =>
                              this.onInputChange("details", event)
                            }
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="field">
                    <div className="control has-text-centered">
                      <input
                        className="button is-link is-center"
                        type="submit"
                        value="Submit"
                      />
                    </div>
                  </div>
                </div>

                <div className="column">
                  <div className="container">
                    <img
                      className="is-centered dognoseimage"
                      src={ContactUsIMG}
                      alt="place-holder"
                    />
                  </div>
                  <div className="container">
                    <p>
                      <b>Address:</b> PO Box 37 Camperdown NSW 1450
                    </p>
                    <p>
                      <b>Email:</b> muttswithmanners1@gmail.com
                    </p>
                    <p>
                      <b>Telephone:</b> 0410 626 677
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </form>
      </>
    );
  }
}

export default ContactUsView;
