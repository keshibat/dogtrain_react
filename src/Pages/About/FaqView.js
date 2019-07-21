import React, { Component } from "react";
import FaqViewCSS from "./../../assets/styles/AboutSCSS/FaqViewCSS.css";

export default class FaqView extends Component {
  constructor() {
    super();
    this.state = {
      faq: {}
    };
  }
  componentDidMount() {
    fetch("http://localhost:1337/faqs/")
      .then(response => response.json())
      .then(data => {
        this.setState({
          faq: data
        });
      });
  }

  render() {
    return (
      <>
        <section className="section title-heading">
          <div className="container">
            <div className="content has-text-centered">
              <h1>Frequently asked Questions</h1>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="box content">
            <h3>My neighbour reported my barking dog. What do I do?? </h3>
            <p className="is-size-6-desktop">
              Before our dog trainers visit you, send a note out to ALL of your
              neighbours asking for information on your dogs’ barking – what
              time your dog barks, how long he's barking for for, what it sounds
              like (sad, angry, bored, etc) - is your puppy whining as well?.
              This way when we start working with you in dog training, we have a
              clear picture of your dog’s behaviour patterns.
            </p>
          </div>
        </section>

        <section className="section">
          <div className="box content">
            <h3>My dog jumps up all the time. Should I get him desexed? </h3>
            <p className="is-size-6-desktop">
              Sometimes dogs jump up because they want to show how important
              they are in the pack, but often we are encouraging our dogs to
              jump up without even knowing it!! When you work with us we’ll be
              able to show you exactly how you’re confusing your dog and maybe
              giving him mixed signals. And if you’re not going to breed from
              your dog, desexing him is a very good idea.
            </p>
          </div>
        </section>

        <section className="section">
          <div className="box content">
            <h3>
              My dog is aggressive to other dogs. Do you have group training for
              him?
            </h3>
            <p className="is-size-6-desktop">
              When there is dog aggression to other dogs, it’s often because
              he’s fearful – putting him into a group of dogs will probably make
              this worse rather than better. When you start working with us we
              won’t be around other dogs until you have more control over your
              dog (dog obedience training will also be part of this), and he’s
              feeling more confident – then he’ll be playing at the park in no
              time!
            </p>
          </div>
        </section>

        <section className="section">
          <div className="box content">
            <h3>
              My puppy digs holes all through the garden. Will he grow out of
              this?
            </h3>
            <p className="is-size-6-desktop">
              A puppy who digs will usually turn into an adult dog who digs
              unless you teach him not to. Puppy training covers all puppy
              basics and dog obedience training but we also cover ‘problem
              behaviours’ and put a lot of preventative stuff in place so that
              he won’t even discover the joys of digging or chewing!
            </p>
          </div>
        </section>

        <section className="section">
          <div className="box content">
            <h3>My neighbour reported my barking dog. What do I do?? </h3>
            <p className="is-size-6-desktop">
              Before our dog trainers visit you, send a note out to ALL of your
              neighbours asking for information on your dogs’ barking – what
              time your dog barks, how long he's barking for for, what it sounds
              like (sad, angry, bored, etc) - is your puppy whining as well?.
              This way when we start working with you in dog training, we have a
              clear picture of your dog’s behaviour patterns.
            </p>
          </div>
        </section>

        <section className="section">
          <div className="box content">
            <h3>
              We just adopted an older dog and she doesn’t seem to know
              anything. Is she too old?{" "}
            </h3>
            <p className="is-size-6-desktop">
              A dog is never too old to learn but it can take them a little
              longer to change their old habits. Teach her dog obedience
              patiently and she’ll do you proud.
            </p>
          </div>
        </section>

        <section className="section">
          <div className="box content">
            <h3>
              Our rescue dog is 3 years old but he’s still not toilet trained.
              Can you help?{" "}
            </h3>
            <p className="is-size-6-desktop">
              Many dogs live outside and never need to learn to be toilet
              trained. As with any older dog, take that little bit more time
              with toilet training and he’ll turn out just like new!
            </p>
          </div>
        </section>

        <section className="section">
          <div className="box content">
            <h3>Do you have any dog training tips that I can use at home?</h3>
            <p className="is-size-6-desktop">
              Yes! Mutts with Manners now offer Fido Flash Cards to help you to
              train your dog obedience commands. Buy just one or start
              collecting.
            </p>
          </div>
        </section>
      </>
    );
  }
}
