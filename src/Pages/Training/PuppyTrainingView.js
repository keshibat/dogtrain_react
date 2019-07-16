import React, { Component } from "react";
import puppy from "./../../assets/images/puppy.png";

class PuppyTrainingView extends Component {
  render() {
    return (
      <>
        <section class="hero is-link">
          <div class="hero-body">
            <div class="container">
              <h1 class="title">
                In-Home Puppy Training (from just 8 weeks of age!)
              </h1>
              <h2 class="subtitle">
                Free follow-up email and telephone puppy training support available
                from 48 hours after pup arrives home (this gives pup time to settle in)
                all puppy issues and questions covered with our unique, gentle 'think dog' technique
                puppy obedience training too!
              </h2>
            </div>
          </div>
        </section>

        <section>
          <div class="columns">

            <div class="column">
              <article class="message is-primary">
                <div class="message-header">
                  <p class="title">Train your puppy early, and ENJOY him</p>
                </div>
                <div class="message-body">
                  <div class="content is-primary">
                    <figure class="image is-4by3">
                      <img src={puppy} alt="puppy picture" />
                    </figure>

                  </div>
                </div>
              </article>
            </div>

            <div class="column">
              <article class="message is-primary">
                <div class="message-header">
                  <p class="title">A two hour puppy training consultation will include:</p>
                </div>
                <div class="message-body">
                  <div class="content is-primary">
                    <ul>
                      <li class="subtitle">How to toilet train a puppy</li>
                      <li class="subtitle">Stop play biting and nipping</li>
                      <li class="subtitle">Appropriate games</li>
                      <li class="subtitle">Setting rules and boundaries that work for ALL</li>
                      <li class="subtitle">Chewing, mouthing, destructive behaviour, puppy aggression</li>
                      <li class="subtitle">Whining, barking, crying and yelping (separation 'anxiety')</li>
                    </ul>
                  </div>
                </div>
              </article>
            </div>

            <div class="column">
              <article class="message is-primary">
                <div class="message-header">
                  <p class="title">1 hour follow-up lesson with us to cover:</p>
                </div>
                <div class="message-body">
                  <div class="content is-primary">
                    <ul>
                      <li class="subtitle">Pulling on the leash</li>
                      <li class="subtitle">Barking at other dogs</li>
                      <li class="subtitle">Come when called</li>
                      <li class="subtitle">Appropriate play with other dogs</li>
                      <li class="subtitle">Appropriate “Hello” with people too!</li>
                    </ul>
                  </div>
                </div>
              </article>
            </div>

          </div>
        </section>

        <section class="hero is-link">
          <div class="hero-body">
            <div class="container">
              <h1 class="title">
                Resolve toilet training, play biting and puppy separation anxiety quickly!
              </h1>
              <h2 class="subtitle">
                Puppy training will also cover any other puppy problems that may have come up.
              </h2>
            </div>
          </div>
        </section>


        <section>
          <div class="columns">

            <div class="column">
              <article class="message">
                <div class="message-header">
                  <p>Julie, Brent & Misty</p>

                </div>
                <div class="message-body">
                  We made various attempts to take Indie to puppy training school
                  where the classes were more like a battle with our dog
                  as opposed to an enjoyable learning experience.
                  Then we were very happy to meet you and join together to train our beautiful new pup.
                  Your advice and assistance in training was comparable to none and the difference in the behaviour of Indie was noticeable in 2 weeks.
                  We look forward to seeing you soon. Thanks again.
        </div>
              </article>
            </div>



            <div class="column">
              <article class="message">
                <div class="message-header">
                  <p>Julie, Brent & Misty</p>

                </div>
                <div class="message-body">
                  I would like to start with a big Thank You. Misty and I really enjoyed puppy training.
                    We learnt so much and lots of great tips.
                    What I liked is I felt I could talk to you and ask you anything
                    and you had great advice to help us through. Thanks so much,
        </div>
              </article>
            </div>





          </div>
        </section>
        <section class="hero is-danger">
          <div class="hero-body">
            <div class="container">
              <h1 class="title">
                Missed Appointment and Cancellation Policy
              </h1>
              <h2 class="subtitle">
                If you are unable to keep an appointment
                please give at least 24 hours notice to ensure that
                you will not be charge for the appointment or part-thereof.
              </h2>
              <h2 class="subtitle">
                12 to 24 hours notice of cancellation will require $50 value to be paid,
                less than 12 hours notice will require full payment.
              </h2>
              <h2 class="subtitle">
                Thank you for your consideration in ensuring that adequate notice is given.
              </h2>
            </div>
          </div>
        </section>
      </>
    );
  }
}

export default PuppyTrainingView;
