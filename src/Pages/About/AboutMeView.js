import React, { Component } from "react";
import MariaCunningHam from "./../../assets/images/maria-cunningham.jpg";
import AboutMeViewCSS from "./../../assets/styles/AboutSCSS/AboutMeView.css";

class AboutMeView extends Component {
  render() {
    return (
      <>
        <section className="section title-heading">
          <div className="container">
            <div className="content has-text-centered">
              <h1>About Us</h1>
              <h2>
                <i className="has-text-grey">
                  Our Mission: to provide superior dog obedience training, puppy
                  training and dog behaviour training for our canine friends as
                  professional puppy and dog trainers.
                </i>
              </h2>
            </div>
          </div>
        </section>
        <section className="section">
          <div className="container">
            <div className="box content">
              <div className="columns is-centered">
                <div className="column is-half">
                  <div className="content has-text-centered">
                    <img
                      className="is-centered"
                      src={MariaCunningHam}
                      alt="maria-cunningham"
                    />
                  </div>
                </div>

                <div className="column">
                  <div className="content">
                    <p>
                      Mutts with Manners’ chief instructor, Maria Cunningham,
                      has been a professional dog obedience trainer since 1993.
                      This position of Assistant Trainer at Sydney Community
                      College in Leichhardt entailed running the group dog
                      training classes - some of the first group dog training
                      classes to be professionally run in Sydney!
                    </p>
                    <p>
                      Although Maria had done obedience training with the
                      family’s dogs throughout her childhood, her intense
                      involvement in the training of horses in the 1980s taught
                      her the skills that are now considered ‘revolutionary’ in
                      the dog training world – motivational training. This is
                      also where "Dog Whispering" first started.
                    </p>
                    <p>
                      Through her ongoing study of dogs, dog training methods,
                      dog behaviour, dog desensitisation techniques, and other
                      professional obedience training methods, combined with the
                      lessons taught to her by horses, Maria developed her own
                      ‘Think Dog’ methodology. Humans are supposed to be the
                      superior species after all so why shouldn’t we learn the
                      dog's language! This gentle psychological method banishes
                      the harsh methods previously used in dog and puppy
                      training, instead giving owners a new insight into their
                      dogs.
                    </p>
                    <p>
                      Maria is also the author of "Ruling The Roost - What Your
                      Dog REALLY Wants You To Know!" available through our
                      'Training Aids' page and also via Amazon as an e-book.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="columns">
              <div className="column">
                <div className="box content">
                  <p>
                    Some of the dog obedience, dog behaviour and puppy training
                    studies undertaken by Mutts with Manners include:
                  </p>
                  <ul>
                    <li>
                      Certificate II in Kennel and Cattery Operations- TAFE.
                      Subjects including breeding, nutrition, behaviour and
                      first aid
                    </li>
                    <li>
                      Certificate II in Animal Care- Harcourt Learning. Subjects
                      including grooming, nutrition, dog behaviour and
                      psychology
                    </li>
                    <li>
                      Attended lectures by Dr Kersti Seksel, Dr Robert Holmes,
                      Dr Ian Dunbar, Luke Hura, Steve Austin, Cesar Milan and
                      many others.
                    </li>
                  </ul>
                </div>
              </div>
              <div className="column">
                <div className="box content boxtwo">
                  <p>
                    Mutts with Manners' professional dog trainers and puppy
                    trainers are highly experienced with puppy training,
                    obedience training & trick training, dog behaviour therapy
                    and desensitisation so can solve your dog behaviour problems
                    through private one-on-one dog training. We specialise in
                    dog behaviour training in Sydney's Inner Western suburbs.
                  </p>
                  <p>
                    <b>
                      Mutts with Manners GUARANTEE that you'll see an
                      improvement in your dog's behaviour by the end of the
                      first lesson - or the lesson is FREE* * to be agreed upon
                      by all parties at the end of that lesson
                    </b>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }
}

export default AboutMeView;
