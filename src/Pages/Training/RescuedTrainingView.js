import React, { Component } from "react";
import mystyles from "./../../assets/styles/TrainningSCSS/mystyles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Rescued from "./../../assets/images/trainning/rescue_dog.jpg";

class RescuedTrainingView extends Component {
  render() {
    return (
      <>
        <section className="hero section ">
          <div className="hero-body">
            <div className="container">
              <h1 className="title has-text-centered">
                Training and Rehabilitation for Rescued Dogs, Re-homed Dogs and
                Adopted Dogs - Private Training
              </h1>
              <br />
              <h2 className="subtitle has-text-left">
                <i className="has-text-grey">
                  Learn to understand and guide your rescued dog to handle
                  separation anxiety, fear, aggression and many other issues
                  with our in-home dog training
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
                      Let us help you make your rescue dog's home his 'forever
                      home'
                    </p>
                  </div>
                  <div className="message-body">
                    <div className="content">
                      <figure className="image is-4by3">
                        <img src={Rescued} alt="adoption dog" />
                      </figure>
                    </div>
                  </div>
                </article>
              </div>
              <div className="column">
                <article className="message is-info">
                  <div className="message-header listheader color">
                    <p className="title has-text-centered fontcolor">
                      Using this gentle, confidence-building technique with our
                      Adopted Dog Training we can help with:
                    </p>
                  </div>
                  <div className="message-body">
                    <div className="content is-primary">
                      <ul>
                        <li className="subtitle">
                          Resolving trauma from past ‘lives’ eg. fears and
                          phobias
                        </li>
                        <li className="subtitle">
                          Rehabilitating rescued/re-homed dogs
                        </li>
                        <li className="subtitle">Toilet training</li>
                        <li className="subtitle">
                          Establishing good dog manners in the home
                        </li>
                        <li className="subtitle">Fear aggression</li>
                        <li className="subtitle">Timid behaviours</li>
                      </ul>
                    </div>
                  </div>
                </article>
              </div>
              <div className="column">
                <article className="message is-info">
                  <div className="message-header listheader color">
                    <p className="title has-text-centered fontcolor">
                      Free follow-up email and telephone rescued dog training
                      support available
                    </p>
                  </div>
                  <div className="message-body">
                    <div className="content is-primary">
                      <ul>
                        <li className="subtitle">Snapping or nipping</li>
                        <li className="subtitle">Cringing or cowering</li>
                        <li className="subtitle">
                          Insecurity based behaviours
                        </li>
                        <li className="subtitle">
                          Separation issues (barking, crying, scratching doors,
                          howling)
                        </li>
                        <li className="subtitle">Destruction</li>
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
              <h1 className="title has-text-centered">RESCUE DOG REWARDS!!</h1>
              <br />
              <h2 className="subtitle has-text-centered">
                <i className="has-text-grey">
                  Mutts with Manners likes to support rescue organisations such
                  as the RSPCA, Animal Welfare League and the many, MANY smaller
                  individual ones. We also want to{" "}
                  <strong>support those who adopt!</strong> Therefore we have
                  introduced our <strong>Rescue Dog Rewards</strong> - ANY
                  appointment that you have with your dog within 2 weeks of
                  adoption is discounted by a <strong>MASSIVE 20%!!</strong>
                  Dogs simply need to be 5 months of age or older with adoption
                  paperwork to verify the date of adoption. Mention this when
                  you enquireto get your discount!
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
                  As you know Muttley had become a pain that I nearly had him
                  put to sleep because of his behaviour, biting, digging holes,
                  being aggressive to the other 2 dogs and generally becoming
                  unacceptable. With your guidance, Muttley has now become a
                  good member of our household. Behaving himself, doing as he is
                  told when he is told, being able to groom him, no biting and
                  becoming a little darling. I would recommend you to anyone.
                  <br />
                  <strong>Regards, Betty</strong>
                </div>
              </article>
            </div>

            <div className="column">
              <article className="message is-info is-medium quote">
                <div className="message-body">
                  To Whom It May Concern We have a 7 year old female Boxer,
                  named Holly that we got from Boxer Rescue NSW, a number of
                  years ago. Holly had been badly treated in the early years of
                  her life, and whilst she had a friendly and affectionate
                  disposition, she also came with a few problems, legacy of how
                  other humans had behaved toward her. We had tried a couple of
                  other dog trainers over the years, and even started watching
                  The Dog Whisperer on Foxtel, to pick up some pointers, but the
                  key problem areas remained. Our main issues were:
                  <br />
                  1. erocious stance and barking when anyone came to the front
                  door. This would continue for a few minutes, until she was
                  able to satisfy herself that the visitors weren’t going to
                  hurt her
                  <br />
                  2. incessant pulling on the lead when being taken for a walk
                  <br />
                  3. not coming when called and easily distracted, so no
                  confidence in being able to let her off her leash in the park
                  <br />
                  4. attacking other dogs that she may encounter on a walk
                  <br />
                </div>
              </article>
            </div>

            <div className="column">
              <article className="message is-info is-medium quote">
                <div className="message-body">
                  These problems are not immediately obvious when selecting a
                  dog from a rescue organisation or the RSPCA, but tend to
                  emerge as the dog settles into their new home and realises
                  they are no longer going to be hurt or neglected. We found
                  Maria Cunningham, from Mutts with Manners, whilst searching
                  the internet in yet another attempt to find help. Other
                  options we found on the Internet, involved sending our dog
                  away for 2 weeks intensive training. We were not prepared to
                  do that and had heard one or two horror stories from others
                  that had. The difference with Maria, is that she comes to our
                  home and the dog’s surroundings, so that she can witness first
                  hand, the problem areas and determine the remedial actions
                  that are required.
                </div>
              </article>
            </div>

            <div className="column">
              <article className="message is-info is-medium quote">
                <div className="message-body">
                  Maria was able to tell us what we were doing wrong, and help
                  us change our behaviours, to obtain the behaviours in Holly
                  that we require. After four sessions of dog training, spaced
                  two weeks apart, we are well on our way. Walking Holly is a
                  delight and we have made significant steps in the other areas
                  as well. For us it is now continued practice and ensuring
                  consistency in approach. Maria is always at the end of the
                  phone or email to provide additional pointers and assistance.
                  And of course if we feel that we need another session, she
                  will be there too. We, and Holly can highly recommend Maria to
                  assist with dog (and people) behavioural issues
                  <br />
                  <strong>Vicki, Tony and Holly</strong>
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

export default RescuedTrainingView;
