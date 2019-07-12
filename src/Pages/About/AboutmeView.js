import React, { Component } from "react";
import MariaCunningHam from "./../../assets/images/maria-cunningham.jpg";

class AboutMeView extends Component {
  render() {
    return (
      <>
        <h1> About Me View</h1>

        <div className="container has-text-centered">
          <div className="columns">
            <div className="column is-half">
              <div className="content" />
              <img
                className="is-centered"
                src={MariaCunningHam}
                alt="maria-cunningham"
              />
            </div>

            <div className="column">
              <div className="content is-centered">
                <p>
                  Mutts with Manners’ chief instructor, Maria Cunningham, has
                  been a professional dog obedience trainer since 1993. This
                  position of Assistant Trainer at Sydney Community College in
                  Leichhardt entailed running the group dog training classes -
                  some of the first group dog training classes to be
                  professionally run in Sydney!
                </p>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default AboutMeView;
