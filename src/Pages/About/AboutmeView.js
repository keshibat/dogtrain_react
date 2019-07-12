import React, { Component } from "react";
import MariaCunningHam from "./../../assets/images/maria-cunningham.jpg";

class AboutMeView extends Component {
  render() {
    return (
      <>
        <h1> About Me View</h1>

        <div class="container has-text-centered">
          <div class="columns">
            <div class="column is-half">
              <div class="content" />
              <img
                class="is-centered"
                src={MariaCunningHam}
                alt="maria-cunningham"
              />
            </div>

            <div class="column">
              <div class="content is-centered">
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

export default AboutMeView
