import React, { Component } from "react";
import PetSittingViewCSS from "./../../assets/styles/AboutSCSS/PetSittingView.css";
import PlaceHolder from "./../../assets/images/640x360.png";

class PetSittingView extends Component {
  render() {
    return (
      <>
        <section className="section title-heading">
          <div className="container">
            <div className="content has-text-centered">
              <h1>Pet Sitting and Live-In Dog Training Programs</h1>
              <h5>
                <i className="has-text-grey">
                  "Can't you just move in, Maria?" Is an often heard question
                  and now the answer is "Yes, as a matter of fact, I can!"
                </i>
              </h5>
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
                  Since the passing of her own dog, Rasta, late in 2016 (at the
                  age of almost 19!!) Maria has now decided to make herself
                  available for Pet Sitting and Live In Dog Training (and
                  Behaviour Modification programs). As Maria works primarily in
                  Sydney's Inner Western suburbs, any pet sitting or live in dog
                  training needs to be convenient to this - please contact her
                  below to assess whether your area is manageable.
                </p>
                <p>
                  When you go on holidays you may engage Maria to dog sit/pet
                  sit in your home and care for your pets for a fee similar to
                  what would be charged at a boarding kennel however:
                </p>
                <ul>
                  <li>
                    Your pets are in the familiar surrounds of their own home
                  </li>
                  <li>
                    The food they eat, their routines, games and commands will
                    have the same comforting familiarity
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        <section className="section">
          <div className="box content">
            <div className="columns">
              <div className="column">
                <p>
                  Maria's 25 years experience in the pet care industry (where
                  she also had a dog walking, pet sitting and a grooming
                  business for many years) will come to the fore in providing
                  unsurpassable care for your fur-kids, giving them their very
                  own holiday at home.
                </p>
                <p>
                  But even better! If you have a new pup who can't go into
                  boarding, an older dog who needs obedience, a naughty dog who
                  needs behavioural training, an anxious dog who is distressed
                  by the boarding environment and will benefit from behaviour
                  modification - Maria can do all of this in YOUR home while you
                  have a relaxing holiday.
                </p>
                <p>
                  As a guide - cost will be less than boarding training but with
                  all the added benefits of a secure house for you and a
                  familiar environment for your pets,
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
                <h4>Puppy training</h4>
                <p>
                  A minimum of 1 week will be required for basic puppy training
                  concepts, 2 weeks for more solid and reliable puppy training
                </p>
                <ul>
                  <li>Toilet training</li>
                  <li>
                    Setting rules (not biting, chewing, barking or crying)
                  </li>
                  <li>
                    Setting boundaries (whether/when allowed inside, on
                    furniture, etc)
                  </li>
                  <li>Obedience Training </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        <section className="section five">
          <div className="box content">
            <div className="columns">
              <div className="column">
                <h4>Obedience for older dogs</h4>
                <p>
                  A minimum of 1 week required provided that toilet training and
                  other puppy issues are not relevant and there are no
                  behavioural issues
                </p>
                <ul>
                  <li>Setting rules and boundaries</li>
                  <li>Obedience training</li>
                </ul>
                <h4>Behavioural training</h4>
                <p>A minimum of 2 weeks depending on the issues</p>
                <p>
                  <b>Contact Maria</b> via email with a full list of issues to
                  be resolved including examples of severity for a guide as to
                  what can be offered and the costs involved.
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
      </>
    );
  }
}

export default PetSittingView;
