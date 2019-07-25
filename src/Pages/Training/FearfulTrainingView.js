import React, { Component } from "react";
import mystyles from "./../../assets/styles/TrainningSCSS/mystyles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import DogSad from "./../../assets/images/home/sad-dog.jpeg";

class FearfulTrainingView extends Component {
  render() {
    return (
      <>
        <section className="hero section">
          <div className="hero-body">
            <div className="container">
              <h1 className="title has-text-centered">
                Specialists in fearful and reactive dogs
              </h1>
              <br />
              <h2 className="subtitle has-text-left">
                <i className="has-text-grey">
                  Some dogs are born with phobias, many develop them as they
                  experience life. Some choose to attack what they’re worried
                  about, others prefer to run away. We prefer to enable them to
                  relax.
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
                      A fearful dog may run or he may hide - either way we want
                      him to become comfortabe and confident wherever he is.
                    </p>
                  </div>
                  <div className="message-body">
                    <div className="content">
                      <figure className="image is-4by3">
                        <img src={DogSad} alt="sad dog" />
                      </figure>
                    </div>
                  </div>
                </article>
              </div>
              <div className="column">
                <article className="message is-info">
                  <div className="message-header listheader color">
                    <p className="title has-text-centered fontcolor">
                      {" "}
                      Our motivational “Think Dog” approach develops a dog’s
                      confidence with{" "}
                    </p>
                  </div>
                  <div className="message-body">
                    <div className="content is-primary">
                      <ul>
                        <li className="subtitle">Thunder</li>
                        <li className="subtitle">Fireworks</li>
                        <li className="subtitle">Children</li>
                        <li className="subtitle">Men</li>
                        <li className="subtitle">Women</li>
                        <li className="subtitle">Planes</li>
                        <li className="subtitle">Other animals</li>
                        <li className="subtitle">
                          Mechanical sounds (lawn mowers, vacuum cleaners,
                          motorbikes)
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
                      {" "}
                      private dog training to help them deal with fear of:{" "}
                    </p>
                  </div>
                  <div className="message-body">
                    <div className="content is-primary">
                      <ul>
                        <li className="subtitle">Traffic</li>
                        <li className="subtitle">Heavy vehicles</li>
                        <li className="subtitle">
                          Car travel(car sickness, over-protectiveness of car
                          Grooming)
                        </li>
                        <li className="subtitle">being in water</li>
                        <li className="subtitle">being brushed</li>
                        <li className="subtitle">claw clipping</li>
                        <li className="subtitle">hair clippers</li>
                        <li className="subtitle">blow drying</li>
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
                Fear aggression, separation anxiety, chewing, digging, crying
                and howling are some of the many things that can be resolved
                with in-home dog training
              </h1>
              <br />
              <h2 className="subtitle has-text-centered">
                Free follow-up email and telephone support available
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
                  <strong>Dear Maria</strong>
                  <br />
                  Fiona and I want to extend our warm thanks and gratitude for
                  your help with training Peggy (and us!). As you know Peggy
                  (the 2½ year old Fox Terrier X) caused us some concern when we
                  first rescued her. We found her rather timid and submissive
                  and we were troubled by her jumping up, mouthing, and some
                  other undesirable behaviours. We found it most valuable and
                  cost effective to have you consult with us on a one-to-one
                  basis and we were delighted with the results after the first
                  dog training session.
                </div>
              </article>
            </div>
            <div className="column">
              <article className="message is-primary is-medium quote">
                <div className="message-body">
                  We now have a dog that is much more confident and obedient,
                  primarily because we are more confident and consistent with
                  her. We feel that we have managed to achieve these results
                  because you were able to quickly identify the remedial action
                  that was needed and give us clear and easy to apply
                  instructions. Once again, very many thanks and we would
                  recommend you and your approach to anyone seeking help with
                  training their dog.
                  <br />
                  Kind regards
                  <br />
                  <strong>Ian</strong>
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

export default FearfulTrainingView;
