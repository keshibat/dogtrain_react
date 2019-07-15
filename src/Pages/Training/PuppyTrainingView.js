import React, { Component } from "react";
import puppy from "./../../assets/images/puppy.png";

class PuppyTrainingView extends Component {
  render() {
    return (
      <>
        <section class="section has-background-white">
          <div class="tile is-ancestor">
            <div class="tile is-vertical is-8">
              <div class="tile">
                <div class="tile is-parent is-vertical">
                  <article class="tile is-child notification is-primary">
                    <p class="title">In-Home Puppy Training (from just 8 weeks of age!)</p>
                    <p class="subtitle">Free follow-up email and telephone puppy training support available</p>
                    <p class="subtitle">from 48 hours after pup arrives home (this gives pup time to settle in)</p>
                    <p class="subtitle">all puppy issues and questions covered with our unique, gentle 'think dog'     technique</p>
                    <p class="subtitle">puppy obedience training too!</p>

                  </article>
                  <article class="tile is-child notification is-warning">
                    <p class="title">Resolve toilet training, play biting and puppy separation anxiety quickly!</p>
                    <p class="subtitle">Puppy training will also cover any other puppy problems that may have come up.</p>

                  </article>
                </div>
                <div class="tile is-parent">
                  <article class="tile is-child notification is-info">
                    <p class="title">Train your puppy early, and ENJOY him</p>
                    <p class="subtitle">A 2 hour in-home puppy training lesson shortly after pup comes home allows us to find the toilet training and separation techniques that suit you! </p>
                    <figure class="image is-4by3">
                      <img src={puppy} alt="puppy picture"/>
                    </figure>
                  </article>
                </div>
              </div>
              <div class="tile is-parent">
                <article class="tile is-child notification is-danger">
                  <p class="title">A two hour puppy training consultation  will include:</p>
                  <p class="subtitle">Our gentle puppy training methods also mean that you can start training your pup in basic dog obedience at this age too!</p>
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
                </article>
                <article class="tile is-child notification is-danger">
                  <p class="title">1 hour follow-up lesson with us to cover:</p>
                  <p class="subtitle">Ideally you will follow puppy training with puppy socialisation before having a 1 hour follow-up lesson with us to cover puppy training on the streets and at the parks.  This will cover:</p>
                  <div class="content is-primary">
                    <ul>
                      <li class="subtitle">Pulling on the leash</li>
                      <li class="subtitle">Barking at other dogs</li>
                      <li class="subtitle">Come when called</li>
                      <li class="subtitle">Appropriate play with other dogs</li>
                      <li class="subtitle">Appropriate “Hello” with people too!</li>
                    </ul>
                  </div>
                </article>
              </div>
            </div>
            <div class="tile is-parent">
              <article class="tile is-child notification">
                <div class="content">
                  <p class="title is-size-3">Puppy Training Referrals</p>
                  <div class="content">
                    <p class="is-size-5">
                      <p class="subtitle is-size-4">Sam, Mike & Indie</p>
                        We made various attempts to take Indie to puppy training school
                        where the classes were more like a battle with our dog
                        as opposed to an enjoyable learning experience.
                        Then we were very happy to meet you and join together to train our beautiful new pup.
                        Your advice and assistance in training was comparable to none and the difference in the behaviour of Indie was noticeable in 2 weeks.
                        We look forward to seeing you soon. Thanks again.
                    </p>
                  </div>
                  <div class="content">
                    <p class="is-size-5">
                      <p class="subtitle is-size-4">Julie, Brent & Misty</p>
                      I would like to start with a big Thank You. Misty and I really enjoyed puppy training.
                      We learnt so much and lots of great tips.
                      What I liked is I felt I could talk to you and ask you anything
                      and you had great advice to help us through. Thanks so much,
                    </p>
                  </div>
                </div>
              </article>
            </div>
          </div>
        </section>
      </>
    );
  }
}

export default PuppyTrainingView;