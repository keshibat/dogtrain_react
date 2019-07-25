import React, { Component } from "react";
import mystyles from "./../../assets/styles/TrainningSCSS/mystyles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ObedienceDog from "./../../assets/images/trainning/obedience_dog.jpg";

class NewFamilyMemberTrainingView extends Component {
  render() {
    return (
      <>
        <section className="hero section">
          <div className="hero-body">
            <div className="container">
              <h1 className="title has-text-centered">
                Personal Dog Obedience Training
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
                      Because a well-trained dog is a happy dog - and they're
                      NEVER too old to learn!
                    </p>
                  </div>
                  <div className="message-body">
                    <div className="content">
                      <figure className="image is-4by3">
                        <img src={ObedienceDog} alt="obedience dog" />
                      </figure>
                    </div>
                  </div>
                </article>
              </div>
              <div className="column">
                <article className="message is-info">
                  <div className="message-header listheader color">
                    <p className="title has-text-centered fontcolor">
                      All dogs can benefit from a little dog obedience training
                      at any age and in-home dog obedience training will help
                      you with issues that are important to YOU.
                    </p>
                  </div>
                  <div className="message-body">
                    <div className="content is-primary">
                      <ul>
                        <li className="subtitle">
                          Come when called – especially when playing with other
                          dogs
                        </li>
                        <li className="subtitle">Sit</li>
                        <li className="subtitle">
                          Stay and Wait - there IS a difference
                        </li>
                        <li className="subtitle">Loose leash walking</li>
                        <li className="subtitle">
                          Settle (on a mat or towel, whatever you choose) – very
                          useful at cafes! Drop/down
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
                      Below are some of the dog obedience training skills that
                      you might like professional help with:
                    </p>
                  </div>
                  <div className="message-body">
                    <div className="content is-primary">
                      <ul>
                        <li className="subtitle">Wait for food</li>
                        <li className="subtitle">
                          Wait at doorways and gateways – no rushing out of the
                          house
                        </li>
                        <li className="subtitle">
                          Road etiquette – not going onto roads unless invited
                        </li>
                        <li className="subtitle">
                          Adjusting to a new member in the house - baby, cat,
                          dog, ferret...
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
                Reliable come when called, loose leash walking and even off
                leash control - one on one dog training gives fast results with
                gentle methods
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
                  Sorry I haven't been in touch, but I have been pretty
                  occupied, settling into our new routine, you know, the stuff
                  you organized with us. We are all getting along famously,
                  since your visits to our house. As you know, us dogs pick up
                  things fairly quickly, and now that my family know how to
                  handle me things are different - it's amazing what your magic
                  did for all of us. Lots of thanks and love.
                  <br />
                  <strong>Angel</strong>
                </div>
              </article>
            </div>

            <div className="column">
              <article className="message is-info is-medium quote">
                <div className="message-body">
                  Thankyou for your help in turning Tiana from an unruly little
                  girl into a puppy who is now easier to handle and a pleasure
                  to take for a walk and have around the home. I am amazed at
                  the great improvement in Tiana after only having 2 lessons
                  with you. At one time I thought I would have to put up with a
                  wild uncontrollable dog, but with your assistance in training
                  her this has now all changed. Once again, thank you for all
                  your help and guidance.
                  <br />
                  <strong>Lisa</strong>
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

export default NewFamilyMemberTrainingView;
