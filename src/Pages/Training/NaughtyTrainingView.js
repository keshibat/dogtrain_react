import React, { Component } from "react";
import mystyles from "./../../assets/styles/TrainningSCSS/mystyles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import DogAggression from "./../../assets/images/home/aggro-dog.jpg";

class NaughtyTrainingView extends Component {
  render() {
    return (
      <>
        <section className="hero section">
          <div className="hero-body">
            <div className="container">
              <h1 className="title has-text-centered">
                Private In-Home Dog Behaviour Training
              </h1>
              <br />
              <h2 className="subtitle has-text-centered">
                <i className="has-text-grey">
                  Resolve separation anxiety, pulling on leash, dog aggression,
                  jumping up, digging, chewing, destruction and much.
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
                      You can have the dog as he naturally is, or you can help
                      him to be the dog you want...
                    </p>
                  </div>
                  <div className="message-body">
                    <div className="content">
                      <figure className="image is-4by3">
                        <img src={DogAggression} alt="angry dog" />
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
                        <li className="subtitle">Barking dog</li>
                        <li className="subtitle">Whining dog/dog crying</li>
                        <li className="subtitle">Separation Anxiety</li>
                        <li className="subtitle">Pulling on the leash/lead</li>
                        <li className="subtitle">
                          Aggression to other dogs or people
                        </li>
                        <li className="subtitle">Jumping up</li>
                        <li className="subtitle">JStealing, counter surfing</li>
                        <li className="subtitle">Digging holes</li>
                        <li className="subtitle">
                          Integration with other pets – cat, rabbit, ferret...
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
                        <li className="subtitle">
                          Destruction/destroying the garden or items{" "}
                        </li>
                        <li className="subtitle">
                          Attention seeking/being demanding
                        </li>
                        <li className="subtitle">
                          Toilet training/Toileting in one spo
                        </li>
                        <li className="subtitle">
                          Pulling washing off the line
                        </li>
                        <li className="subtitle">
                          Chasing bikes, joggers, cars, skateboards, motorbikes,
                          etc
                        </li>
                        <li className="subtitle">Mouthing and nipping</li>
                        <li className="subtitle">
                          Rough play (with people or other dogs)
                        </li>
                        <li className="subtitle">
                          Obsessive/compulsive behaviour – licking, tail
                          chasing, etc
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
                Resolve separation anxiety, pulling on leash, dog aggression,
                jumping up, digging, chewing, destruction and much.
              </h1>
              <br />
              <h2 className="subtitle has-text-centered">
                MUCH more with one-on-one in-home dog training
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
                  We must thank you for putting our problem "child" on the right
                  track. Having traumatic beginnings early in his life, Ben
                  proved to be of a stronger character than the normal large
                  breed. With your humane psychological training it was good to
                  see him toe the line and behave. Thanks again for your hi-tech
                  methods in training up our dog to our acceptable standard.
                  <br />
                  <strong>Nick & Marilyn</strong>
                </div>
              </article>
            </div>

            <div className="column">
              <article className="message is-info is-medium quote">
                <div className="message-body">
                  Thank you for saving our 'pack' from total domination!!!!
                  Before your wonderful dog obedience training, we were the ones
                  sitting and fetching. The change in him is unbelievable. He's
                  transformed from a monster to an angel. Keep up the fabulous
                  work and Ralph would like to give you a big lick and a tail
                  wag. Thanks again.
                  <br />
                  <strong>Yanina, Khufu and Ralph</strong>
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

export default NaughtyTrainingView;
