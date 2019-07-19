import React, { Component } from "react";
import { Link } from "react-router-dom";

import Puppy from "./../../assets/images/home/puppies.jpeg";
import AdultDog from "./../../assets/images/home/adult-dog-1.jpg";
import BarkingDog from "./../../assets/images/home/barking-dog-1.jpg";
import AdoptionDog from "./../../assets/images/home/new-family-member.jpeg";
import ApartmentDog from "./../../assets/images/home/apartment-dog-1.jpeg";
import DogAggression from "./../../assets/images/home/aggro-dog.jpg";
import DogSad from "./../../assets/images/home/sad-dog.jpeg";
import DogReactive from "./../../assets/images/home/dog-pulling.jpg";
import HomeCSS from "./../../assets/styles/AboutSCSS/HomeCSS.css";

class HomeView extends Component {
  componentDidMount() {
    window.twttr.widgets.load();
  }

  render() {
    return (
      <>
        <section className="section title-heading">
          <div className="container">
            <div className="content has-text-centered">
              <h1>
                Expert Puppy Training, Dog Obedience & Dog Behaviour Training
              </h1>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="columns">
              <div className="column one">
                <Link to="/puppy">
                  <div className="box content home">
                    <div class="content-overlay" />
                    <img class="content-image" src={Puppy} />
                    <div class="content-details fadeIn-bottom">
                      <h3 class="content-title">Puppies</h3>
                      <p class="content-text">
                        Puppy toilet training, play biting, crying, barking,
                        nipping or jumping?
                      </p>
                      <p />
                    </div>
                  </div>
                </Link>
              </div>
              <div className="column one">
                <Link to="/naughty">
                  <div className="box content home">
                    <div class="content-overlay" />
                    <img class="content-image" src={AdultDog} />
                    <div class="content-details fadeIn-bottom">
                      <h3 class="content-title">Older Dogs</h3>
                      <p class="content-text">
                        Your adult dog toilets inside or on furniture, jumps up,
                        won't come when called, pulls on leash or plays too
                        roughly?
                      </p>
                      <p />
                    </div>
                  </div>
                </Link>
              </div>

              <div className="column one">
                <Link to="/naughty">
                  <div className="box content home">
                    <div class="content-overlay" />
                    <img class="content-image" src={BarkingDog} />
                    <div class="content-details fadeIn-bottom">
                      <h3 class="content-title">Noisy Dogs</h3>
                      <p class="content-text">
                        Your dog is noisy, barking, crying, howling or whining?
                      </p>
                      <p />
                    </div>
                  </div>
                </Link>
              </div>
              <div className="column one">
                <Link to="/newfamilymember">
                  <div className="box content home">
                    <div class="content-overlay" />
                    <img class="content-image" src={AdoptionDog} />
                    <div class="content-details fadeIn-bottom">
                      <h3 class="content-title">New Family Introduction</h3>
                      <p class="content-text">
                        Introducing a new baby or pet into the household?
                      </p>
                      <p />
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          </div>
          <div className="container">
            <div className="columns">
              <div className="column one">
                <Link to="/apartment">
                  <div className="box content home">
                    <div class="content-overlay" />
                    <img class="content-image" src={ApartmentDog} />
                    <div class="content-details fadeIn-bottom">
                      <h3 class="content-title">Apartment Training</h3>
                      <p class="content-text">
                        Your dog needs to learn to live in an apartment, use
                        designated toilet area, ​be well behaved in public
                        areas, be quiet and calm?
                      </p>
                      <p />
                    </div>
                  </div>
                </Link>
              </div>
              <div className="column one">
                <Link to="/naughty">
                  <div className="box content home">
                    <div class="content-overlay" />
                    <img class="content-image" src={DogAggression} />
                    <div class="content-details fadeIn-bottom">
                      <h3 class="content-title">Aggression</h3>
                      <p class="content-text">
                        Your dog is aggressive or destructive? Chewing, digging,
                        stealing or tearing?
                      </p>
                      <p />
                    </div>
                  </div>
                </Link>
              </div>
              <div className="column one">
                <Link to="/rescued">
                  <div className="box content home">
                    <div class="content-overlay" />
                    <img class="content-image" src={DogSad} />
                    <div class="content-details fadeIn-bottom">
                      <h3 class="content-title">Fearful</h3>
                      <p class="content-text">
                        Your rescue dog is fearful, insecure, destructive, has
                        separation anxiety and or needs obedience?
                      </p>
                      <p />
                    </div>
                  </div>
                </Link>
              </div>
              <div className="column one">
                <Link to="/feaful">
                  <div className="box content home">
                    <div class="content-overlay" />
                    <img class="content-image" src={DogReactive} />
                    <div class="content-details fadeIn-bottom">
                      <h3 class="content-title">Reactive</h3>
                      <p class="content-text">
                        Your dog is reactive, timid, fear aggressive, insecure,
                        frightened by noises?
                      </p>
                      <p />
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="section title-heading">
          <div className="container">
            <div className="content">
              <div className="columns">
                <div className="column one">
                  <a
                    className="twitter-timeline"
                    data-theme="light"
                    href="https://twitter.com/MuttswithMannrs?ref_src=twsrc%5Etfw"
                    data-width="100%"
                    data-height="320px"
                  >
                    Tweets by MuttswithMannrs
                  </a>
                  <script
                    async
                    src="https://platform.twitter.com/widgets.js"
                    charSet="utf-8"
                  />
                </div>
                <div className="column" />
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }
}

export default HomeView;
