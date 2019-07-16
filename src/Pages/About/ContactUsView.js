import React, { Component } from "react";
import ContactUsCSS from "./../../assets/styles/AboutSCSS/ContactUsCSS.css";
import ContactUsIMG from "./../../assets/images/contact-us.jpeg";

class ContactUsView extends Component {
  render() {
    return (
      <>
        <section className="section">
          <div className="container">
            <div className="content has-text-centered">
              <h1>Contact Us</h1>
            </div>
          </div>
        </section>

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
                    />
                  </div>
                </div>

                <div className="field">
                  <label className="label is-small">Suburb</label>
                  <div className="control">
                    <input
                      className="input"
                      type="email"
                      placeholder="e.g Camperdown"
                      required
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
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="field">
                  <div className="control has-text-centered">
                    <button className="button is-link is-center">Submit</button>
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
      </>
    );
  }
}

export default ContactUsView;
