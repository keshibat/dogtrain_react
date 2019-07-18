import React, { Component } from "react";

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
