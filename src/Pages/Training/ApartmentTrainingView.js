import React, { Component } from "react";
import mystyles from "./../../assets/styles/TrainningSCSS/mystyles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ApartmentDog from "./../../assets/images/home/apartment-dog-1.jpeg";

class ApartmentTrainingView extends Component {
  render() {
    return (
      <>
        <section className="hero section">
          <div className="hero-body">
            <div className="container">
              <h1 className="title has-text-centered">
                Private, In-Home Dog Training and Obedience.
              </h1>
              <br />
              <h2 className="subtitle has-text-left">
                <i className="has-text-grey">
                  Apartment dogs need to be calm - no barking, howling or crying
                  and well toilet trained for a happy residents. Our 1 on 1 dog
                  training solves all your dog's issues for a happy and content
                  home.
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
                      Any dog, big or small, can be a perfect apartment dog
                    </p>
                  </div>
                  <div className="message-body">
                    <div className="content">
                      <figure className="image is-4by3">
                        <img src={ApartmentDog} alt="apartment dog" />
                      </figure>
                    </div>
                  </div>
                </article>
              </div>
              <div className="column">
                <article className="message is-info">
                  <div className="message-header listheader color">
                    <p className="title has-text-centered fontcolor">
                      Apartment dogs and their people have a whole different set
                      of rules and circumstances that they need to deal with.
                    </p>
                  </div>
                  <div className="message-body">
                    <div className="content is-primary">
                      <ul>
                        <li className="subtitle">
                          Controlling Barking or whining dog or anxious puppy
                        </li>
                        <li className="subtitle">
                          Appropriate behaviour in common areas
                        </li>
                        <li className="subtitle">
                          Toilet training – setting up an appropriate toilet
                          space and teaching “toilet” on command
                        </li>
                        <li className="subtitle">
                          Keeping your dog amused when you’re not there
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
                      Dog training for apartment dogs still covers dog obedience
                      but will also address:
                    </p>
                  </div>
                  <div className="message-body">
                    <div className="content is-primary">
                      <ul>
                        <li className="subtitle">
                          How to avoid attention seeking behaviours
                        </li>
                        <li className="subtitle">
                          Over-zealous guard dog behaviours (yes, your neighbour
                          IS allowed to walk down the hall!)
                        </li>
                        <li className="subtitle">Dealing with destruction</li>
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
                Free follow-up email and telephone apartment dog training
                support available
              </h1>
              <br />
              <h2 className="subtitle has-text-centered">
                Our 1 on 1 dog training solves all your dog's issues for a happy
                and content home.
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
                  Hi there,I just wanted to thank you for the session with
                  Connie yesterday. Already she is like a different dog! She
                  seems less stressed and is doing as she's told. Also, we
                  didn't have to block off the bedroom last night and she made
                  no attempt to enter! See you next week.
                  <br />
                  <strong>Nadine</strong>
                </div>
              </article>
            </div>

            <div className="column">
              <article className="message is-info is-medium quote">
                <div className="message-body">
                  Hi Maria, thank you again for your help with Prudie, our
                  French Bulldog. I went from being out of my depth as a
                  first-time dog owner to feeling confident in having the right
                  tools and knowledge. Being an aparment dog it's so important
                  for her to know how to behave - it's great to know you're
                  there for us!
                  <br />
                  <strong>Miny</strong>
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

export default ApartmentTrainingView;
