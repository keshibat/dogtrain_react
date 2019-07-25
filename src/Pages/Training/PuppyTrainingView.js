import React, { Component } from "react";
import "./../../assets/styles/TrainningSCSS/mystyles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Puppy from "./../../assets/images/home/puppies.jpeg";

class PuppyTrainingView extends Component {
  render() {
    return (
      <>
        <section className="hero section">
          <div className="hero-body">
            <div className="container">
              <h1 className="title has-text-centered">
                In-Home Puppy Training (from just 8 weeks of age!)
              </h1>
              <br />
              <h2 className="subtitle has-text-left">
                <i className="has-text-grey">
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
                      Train your puppy early, and ENJOY him
                    </p>
                  </div>
                  <div className="message-body">
                    <div className="content">
                      <figure className="image is-4by3">
                        <img src={Puppy} alt="puppy" />
                      </figure>
                    </div>
                  </div>
                </article>
              </div>

              <div className="column">
                <article className="message is-info">
                  <div className="message-header listheader color">
                    <p className="title has-text-centered fontcolor">
                      A two hour puppy training consultation will include:
                    </p>
                  </div>
                  <div className="message-body">
                    <div className="content is-primary">
                      <ul>
                        <li className="subtitle">
                          How to toilet train a puppy
                        </li>
                        <li className="subtitle">
                          Stop play biting and nipping
                        </li>
                        <li className="subtitle">Appropriate games</li>
                        <li className="subtitle">
                          Setting rules and boundaries that work for ALL
                        </li>
                        <li className="subtitle">
                          Chewing, mouthing, destructive behaviour, puppy
                          aggression
                        </li>
                        <li className="subtitle">
                          Whining, barking, crying and yelping (separation
                          'anxiety')
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
                      1 hour follow-up lesson with us to cover:
                    </p>
                  </div>
                  <div className="message-body">
                    <div className="content is-primary">
                      <ul>
                        <li className="subtitle">Pulling on the leash</li>
                        <li className="subtitle">Barking at other dogs</li>
                        <li className="subtitle">Come when called</li>
                        <li className="subtitle">
                          Appropriate play with other dogs
                        </li>
                        <li className="subtitle">
                          Appropriate “Hello” with people too!
                        </li>
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
                Resolve toilet training, play biting and puppy separation
                anxiety quickly!
              </h1>
              <br />
              <h2 className="subtitle has-text-centered">
                <i className="has-text-grey">
                  Puppy training will also cover any other puppy problems that
                  may have come up.
                </i>
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
                  We made various attempts to take Indie to puppy training
                  school where the classes were more like a battle with our dog
                  as opposed to an enjoyable learning experience. Then we were
                  very happy to meet you and join together to train our
                  beautiful new pup. Your advice and assistance in training was
                  comparable to none and the difference in the behaviour of
                  Indie was noticeable in 2 weeks. We look forward to seeing you
                  soon. Thanks again.
                  <br />
                  <strong>Sam, Mike & Indie</strong>
                </div>
              </article>
            </div>

            <div className="column">
              <article className="message is-info is-medium quote">
                <div className="message-body">
                  I would like to start with a big Thank You. Misty and I really
                  enjoyed puppy training. We learnt so much and lots of great
                  tips. What I liked is I felt I could talk to you and ask you
                  anything and you had great advice to help us through.
                  <br />
                  Thanks so much, <strong>Julie, Brent & Misty</strong>
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

export default PuppyTrainingView;
