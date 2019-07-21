import React, { Component } from "react";
import AccomdationViewCSS from "./../../assets/styles/AboutSCSS/AccomodationView.css";
import PlaceHolder from "./../../assets/images/640x360.png";

class AccomodationView extends Component {
  render() {
    return (
      <>
        <section className="section title-heading">
          <div className="container">
            <div className="content has-text-centered">
              <h1>Dog Friendly Accomodation</h1>
            </div>
          </div>
        </section>
        <section className="section">
          <div className="box content">
            <div className="columns">
              <div className="column">
                <img
                  className="is-centered"
                  src={PlaceHolder}
                  alt="place-holder"
                />
              </div>
              <div className="column">
                <p>
                  Originally an old miner's cottage, Schatzi's on Shalimah is
                  fully renovated and perfect as a quiet, couple's weekender. At
                  a small extra cost, however, the second bedroom can be made
                  available for a small group seeking a Hunter getaway. The
                  large yard is fully enclosed with lovely lawns and shading
                  trees for both pets and owners to while away their time when
                  not busy sampling the wares of the many nearby wineries and
                  flourishing culinary outlets.
                </p>
                <h4>Location </h4>
                <p>
                  A lovely park is just a minute's walk away with Vincent Street
                  (the hub of the town) within 5 minutes walk. Here you can
                  enjoy breakfast or just a coffee at one of the many dog
                  friendly cafes.
                </p>
                <a
                  className="button is-info"
                  href="https://www.schatzisonshalimah.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Visit the Property
                </a>
              </div>
            </div>
          </div>
        </section>
        <section className="section">
          <div className="box content">
            <div className="columns">
              <div className="column">
                <p>
                  Schatzi was our German Shepherd who loved to explore and run
                  which the big land size allows. Named in her honour it's a
                  very rare property in that your beloved pets are most welcome
                  inside when you're there to supervise with throws provided
                  should you choose to have them on the furniture with you.
                </p>
                <p>
                  When you're not at home and if you choose not to take them
                  with you, the large fenced yard gives them room to play and,
                  if you feel that they might be determined diggers or fence
                  climbers (the fences are 150-180cm high all around) they can
                  always be left in the 'doggy space' within the house, safe and
                  sound until you return. Inside
                </p>
              </div>
              <div className="column">
                <img
                  className="is-centered"
                  src={PlaceHolder}
                  alt="place-holder"
                />
              </div>
            </div>
          </div>
        </section>
        <section className="section three">
          <div className="box content">
            <div className="columns">
              <div className="column">
                <img
                  className="is-centered"
                  src={PlaceHolder}
                  alt="place-holder"
                />
              </div>
              <div className="column">
                <p>
                  The cottage has all the mod cons including luxuriously
                  appointed bathroom with heating and spa, the kitchen is well
                  fitted out and includes fridge, microwave, electric oven, gas
                  cooktop and even an espresso machine! The lounge is a cosy
                  space with reverse cycle air con, large LCD TV, DVD player and
                  CD player. ​
                </p>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }
}

export default AccomodationView;
