import React, { Component } from "react";
import { Link } from "react-router-dom";
import HomeCSS from "./../assets/styles/HomeCSS.css";

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
            <div className="content has-text-centered">
              <div className="columns">
                <div className="column">
                  <Link to="/puppy">
                    <div className="box content">
                      <p>
                        Puppy toilet training, play biting, crying, barking,
                        nipping or jumping?
                      </p>
                    </div>
                  </Link>
                </div>
                <div className="column">
                  <Link to="/naughty">
                    <div className="box content">
                      <p>
                        Your adult dog toilets inside or on furniture, jumps up,
                        won't come when called, pulls on leash or plays too
                        roughly?
                      </p>
                    </div>
                  </Link>
                </div>

                <div className="column">
                  <Link to="/naughty">
                    <div className="box content">
                      <p>
                        Your dog is noisy, barking, crying, howling or whining?
                      </p>
                    </div>
                  </Link>
                </div>
                <div className="column">
                  <Link to="/newfamilymember">
                    <div className="box content">
                      <p>Introducing a new baby or pet into the household?</p>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="container">
            <div className="content has-text-centered">
              <div className="columns">
                <div className="column">
                  <Link to="/apartment">
                    <div className="box content">
                      <p>
                        Your dog needs to learn to live in an apartment, use
                        designated toilet area, ​be well behaved in public
                        areas, be quiet and calm?
                      </p>
                    </div>
                  </Link>
                </div>
                <div className="column">
                  <Link to="/naughty">
                    <div className="box content">
                      <p>Your dog is aggressive or destructive</p>
                      <ul>
                        <li>chewing</li>
                        <li>digging</li>
                        <li>stealing</li>
                        <li>tearing?</li>
                      </ul>
                    </div>
                  </Link>
                </div>
                <div className="column">
                  <Link to="/rescued">
                    <div className="box content">
                      <p>
                        Your rescue dog is fearful, insecure, destructive, has
                        separation anxiety, needs obedience?
                      </p>
                    </div>
                  </Link>
                </div>
                <div className="column">
                  <Link to="/feaful">
                    <div className="box content">
                      <p>
                        Your dog is reactive, timid, fear aggressive, insecure,
                        frightened by noises?
                      </p>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section title-heading">
          <div className="container">
            <div className="content">
              <div className="columns">
                <div className="column">
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
