import React, { Component } from "react";
import mystyles from "./../../assets/styles/TrainningSCSS/mystyles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import AdvancedDog from "./../../assets/images/trainning/advancedDog.jpg";

class AdvancedTrainingView extends Component {
  render() {
    return (
      <>
        <section className="hero section">
          <div className="hero-body">
            <div className="container">
              <h1 className="title has-text-centered">
                Advanced Private Dog Obedience & Trick Training
              </h1>
              <br />
              <h2 className="subtitle has-text-left">
                <i>
                  Free follow-up email and telephone puppy training support
                  available from 48 hours after pup arrives home (this gives pup
                  time to settle in) all puppy issues and questions covered with
                  our unique, gentle 'think dog' technique puppy obedience
                  training too!
                </i>
              </h2>
            </div>
          </div>
        </section>

        <section className="has-background-light">
          <div className="box content">
            <div className="columns">
              <div className="column">
                <article className="message is-info">
                  <div className="message-header listheader color">
                    <p className="title has-text-centered fontcolor">
                      Because a well-trained dog is a happy dog - and they're
                      NEVER too old to learn!
                    </p>
                  </div>
                  <div className="message-body">
                    <div className="content">
                      <figure className="image is-4by3">
                        <img src={AdvancedDog} alt="obedience dog" />
                      </figure>
                    </div>
                  </div>
                </article>
              </div>
              <div className="column">
                <article className="message is-info">
                  <div className="message-header listheader color">
                    <p className="title has-text-centered fontcolor">
                      Here are some ideas of what our dog training service can
                      help you with:
                    </p>
                  </div>
                  <div className="message-body">
                    <div className="content is-primary">
                      <ul>
                        <li className="subtitle">
                          Off-leash walking at “Heel”
                        </li>
                        <li className="subtitle">Come from a distance</li>
                        <li className="subtitle">
                          Distance control (sit, drop, stay)
                        </li>
                        <li className="subtitle">
                          Clicker training and targeting
                        </li>
                      </ul>
                    </div>
                  </div>
                </article>
              </div>
              <div className="column">
                <article className="message is-info">
                  <div className="message-header listheader color">
                    <p className="title has-text-centered fontcolor">
                      Trick training can include:
                    </p>
                  </div>
                  <div className="message-body">
                    <div className="content is-primary">
                      <ul>
                        <li className="subtitle">Roll over</li>
                        <li className="subtitle">Commando Crawls</li>
                        <li className="subtitle">Shake paw</li>
                        <li className="subtitle">High Five</li>
                        <li className="subtitle">Beg!</li>
                        <li className="subtitle">Bye Bye</li>
                        <li className="subtitle">Spin</li>
                      </ul>
                    </div>
                  </div>
                </article>
              </div>
            </div>
          </div>
        </section>

        <section className="hero">
          <div className="hero-body">
            <div className="container">
              <h1 className="title has-text-centered">
                Dog obedience is great, advanced dog obedience is better. And
                trick training is a fantastic and fun way for both children and
                adults to interact with their pets
              </h1>
              <br />
              <h2 className="subtitle has-text-centered">
                Free follow-up email and telephone obedience training support
                available
              </h2>
            </div>
          </div>
        </section>

        <section className="quotes">
          <div class="has-text-centered is-size-1">
            <FontAwesomeIcon icon="quote-left" />
          </div>

          <div className="columns">
            <div className="column">
              <article className="message is-primary is-medium quote">
                <div className="message-body">
                  This is a huge THANK YOU for all your help and advice with our
                  dear little Nala. We have seen such a huge change in her (more
                  so us?!) after your visits. Massive thank you and we will tell
                  loads of people about you!
                  <br />
                  <strong>Michaela</strong>
                </div>
              </article>
            </div>
          </div>
        </section>

        <section className="hero has-background-light">
          <div className="hero-body">
            <div className="container">
              <h1 className="title has-text-centered">
                Missed Appointment and Cancellation Policy
              </h1>
              <br />
              <h2 className="subtitle has-text-left">
                <i className="has-text-grey">
                  If you are unable to keep an appointment please give at least
                  24 hours notice to ensure that you will not be charge for the
                  appointment or part-thereof.
                </i>
              </h2>
              <h2 className="subtitle has-text-left">
                <i className="has-text-grey">
                  12 to 24 hours notice of cancellation will require $50 value
                  to be paid, less than 12 hours notice will require full
                  payment.
                </i>
              </h2>
              <h2 className="subtitle has-text-left">
                <i className="has-text-grey">
                  Thank you for your consideration in ensuring that adequate
                  notice is given.
                </i>
              </h2>
            </div>
          </div>
        </section>
      </>
    );
  }
}

export default AdvancedTrainingView;
