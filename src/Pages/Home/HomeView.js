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
import Advert from "./../../components/Advert";

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
              <h1>Expert Dog Training</h1>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="columns">
              <div className="column one">
                <h5 className="title is-5">Puppies</h5>
                <Link to="/puppy">
                  <div className="box content home">
                    <div className="content-overlay" />
                    <img className="content-image" src={Puppy} alt="puppy" />

                    <div className="content-details fadeIn-bottom">
                      <h3 className="content-title">Puppies</h3>
                      <p className="content-text">
                        Puppy toilet training, play biting, crying, barking,
                        nipping or jumping?
                      </p>
                      <p />
                    </div>
                  </div>
                </Link>
              </div>
              <div className="column one">
                <h5 className="title is-5">Older Dogs</h5>
                <Link to="/naughty">
                  <div className="box content home">
                    <div className="content-overlay" />
                    <img
                      className="content-image"
                      src={AdultDog}
                      alt="adult dog"
                    />
                    <div className="content-details fadeIn-bottom">
                      <h3 className="content-title">Older Dogs</h3>
                      <p className="content-text">
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
                <h5 className="title is-5">Barking</h5>
                <Link to="/naughty">
                  <div className="box content home">
                    <div className="content-overlay" />
                    <img
                      className="content-image"
                      src={BarkingDog}
                      alt="barking dog"
                    />
                    <div className="content-details fadeIn-bottom">
                      <h3 className="content-title">Noisy Dogs</h3>
                      <p className="content-text">
                        Your dog is noisy, barking, crying, howling or whining?
                      </p>
                      <p />
                    </div>
                  </div>
                </Link>
              </div>
              <div className="column one">
                <h5 className="title is-5">New Family Introduction</h5>
                <Link to="/newfamilymember">
                  <div className="box content home">
                    <div className="content-overlay" />
                    <img
                      className="content-image"
                      src={AdoptionDog}
                      alt="adoption dog"
                    />
                    <div className="content-details fadeIn-bottom">
                      <h3 className="content-title">New Family Introduction</h3>
                      <p className="content-text">
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
                <h5 className="title is-5">Apartments</h5>
                <Link to="/apartment">
                  <div className="box content home">
                    <div className="content-overlay" />
                    <img
                      className="content-image"
                      src={ApartmentDog}
                      alt="apartment dog"
                    />
                    <div className="content-details fadeIn-bottom">
                      <h3 className="content-title">Apartment Training</h3>
                      <p className="content-text">
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
                <h5 className="title is-5">Aggression</h5>
                <Link to="/naughty">
                  <div className="box content home">
                    <div className="content-overlay" />
                    <img
                      className="content-image"
                      src={DogAggression}
                      alt="dog aggression"
                    />
                    <div className="content-details fadeIn-bottom">
                      <h3 className="content-title">Aggression</h3>
                      <p className="content-text">
                        Your dog is aggressive or destructive? Chewing, digging,
                        stealing or tearing?
                      </p>
                      <p />
                    </div>
                  </div>
                </Link>
              </div>
              <div className="column one">
                <h5 className="title is-5">Fearful</h5>
                <Link to="/rescued">
                  <div className="box content home">
                    <div className="content-overlay" />
                    <img
                      className="content-image"
                      src={DogSad}
                      alt="rescue dog"
                    />
                    <div className="content-details fadeIn-bottom">
                      <h3 className="content-title">Fearful</h3>
                      <p className="content-text">
                        Your rescue dog is fearful, insecure, destructive, has
                        separation anxiety and or needs obedience?
                      </p>
                      <p />
                    </div>
                  </div>
                </Link>
              </div>
              <div className="column one">
                <h5 className="title is-5">Reactive</h5>
                <Link to="/feaful">
                  <div className="box content home">
                    <div className="content-overlay" />
                    <img
                      className="content-image"
                      src={DogReactive}
                      alt="reactive dog"
                    />
                    <div className="content-details fadeIn-bottom">
                      <h3 className="content-title">Reactive</h3>
                      <p className="content-text">
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
                <div className="column one">
                  <Advert/>
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }
}

export default HomeView;
