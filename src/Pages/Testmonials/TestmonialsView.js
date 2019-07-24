import React, { Component } from "react";
import LocalAPI from "./../../apis/local";
import Loader from "./../../components/Loader";
import mystyles from "./../../assets/styles/TrainningSCSS/mystyles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import AdvancedDog from "./../../assets/images/trainning/advancedDog.jpg";

class TestmonialsView extends Component {

  state = {
    testimonials: [],
    fetching: true
  };

  componentDidMount() {
    this.getTestamonials()
      .then(res => {
        this.setState({ testimonials: [...res], fetching: false });
      })
      .catch(err => console.log(err));
  }

  getTestamonials = async () => {
    const response = await LocalAPI.get("/testimonials").catch(err => {
      console.log(err);
    });
    return response.data;
  };

  render() {
    const { testimonials, fetching } = this.state;

    if (fetching) {
      return <Loader />;
    }

    return (
      <>
        <section className="hero section">
          <div className="hero-body">
            <div className="container">
              <h1 className="title has-text-centered">Testimonials</h1>
              <br />
              <h2 className="subtitle has-text-left">
                <i>
                  Although Mutts wtih Manners was registered as a business in
                  NSW in 1994, our chief instructor, Maria Cunningham was
                  professionally training dogs (and their owners) in 1993. Here
                  is our very first referral! Helping people with their dog
                  training and dog behaviour issues is our passion - we hope you
                  enjoy reading their stories. Please note that surnames have
                  been removed to protect our clients' privacy.
                </i>
              </h2>
            </div>
          </div>
        </section>

        {testimonials.reverse().map((item, index) => {
          return ( 
            <section className="section" key={item._id}>
              <div className="box content">
                <h3 className="has-text-centered">
                  {item.title}
                </h3>
                <p className="is-size-6-desktop">{item.body}</p>
                <p>{item.author}</p>
              </div>
            </section>
          )
        })}

        <section className="section">
          <div className="box content">
            <h3 className="has-text-centered">
              DOG BEHAVIOUR TRAINING - PULLING ON LEASH, SEPARATION ANXIETY
            </h3>
            <p className="is-size-6-desktop">
              To whom it may concern, I am pleased to refer Mutts with Manners
              to any pet owner that requires assistance with behavioural
              problems. I found Maria’s techniques and advice very helpful and
              extremely successful when putting them into practice. She is very
              knowledgeable and offers not only tips but a wealth of information
              about the way in which animals think and act which I found very
              useful when trying to understand why animals do what they do and
              then in training my pets. Her methods are kind and gentle as well
              as highly effective. Her after sales service is also very good and
              she’s always available to offer ongoing assistance. I have no
              problems in referring Maria to anyone that requires her service.
              <br />
              Kind regards,
              <br />
              <strong>Lana</strong>
            </p>
          </div>
        </section>

        <section className="section">
          <div className="box content">
            <h3 className="has-text-centered">
              PUPPY TRAINING - CRYING PUPPY, BITING
            </h3>
            <p className="is-size-6-desktop">
              We made various attempts to take Indie to puppy training school
              where the classes were more like a battle with our dog as opposed
              to an enjoyable learning experience. Then we were very happy to
              meet you and join together to train our beautiful new pup. Your
              advice and assistance in training was comparable to none and the
              difference in the behaviour of Indie was noticeable in 2 weeks. We
              look forward to seeing you soon.
              <br />
              Thanks again.
              <br />
              <strong>Sam, Mike & Indie</strong>
            </p>
          </div>
        </section>

        <section className="section">
          <div className="box content">
            <h3 className="has-text-centered">
              PUPPY TRAINING - TOILET TRAINING, BARKING, CRYING PUPPY
            </h3>
            <p className="is-size-6-desktop">
              I would like to start with a big Thank You. Misty and I really
              enjoyed puppy training. We learnt so much and lots of great tips.
              What I liked is I felt I could talk to you and ask you anything
              and you had great advice to help us through. Julie,
              <br />
              Thanks so much,
              <br />
              <strong>Brent & Misty</strong>
            </p>
          </div>
        </section>

        <section className="section">
          <div className="box content">
            <h3 className="has-text-centered">
              PUPPY TRAINING - CRYING PUPPY, BITING
            </h3>
            <p className="is-size-6-desktop">
              We made various attempts to take Indie to puppy training school
              where the classes were more like a battle with our dog as opposed
              to an enjoyable learning experience. Then we were very happy to
              meet you and join together to train our beautiful new pup. Your
              advice and assistance in training was comparable to none and the
              difference in the behaviour of Indie was noticeable in 2 weeks. We
              look forward to seeing you soon.
              <br />
              Thanks again.
              <br />
              <strong>Sam, Mike & Indie</strong>
            </p>
          </div>
        </section>

        <section className="section">
          <div className="box content">
            <h3 className="has-text-centered">
              PUPPY TRAINING - TOILET TRAINING, BARKING, CRYING PUPPY
            </h3>
            <p className="is-size-6-desktop">
              I would like to start with a big Thank You. Misty and I really
              enjoyed puppy training. We learnt so much and lots of great tips.
              What I liked is I felt I could talk to you and ask you anything
              and you had great advice to help us through.
              <br />
              Thanks so much,
              <br />
              <strong>Julie, Brent & Misty</strong>
            </p>
          </div>
        </section>

        <section className="section">
          <div className="box content">
            <h3 className="has-text-centered">
              RESCUE DOG - SEPARATION ANXIETY, OVER-EXCITED WITH DOGS AND PEOPLE
            </h3>
            <p className="is-size-6-desktop">
              We must thank you for putting our problem "child" on the right
              track. Having traumatic beginnings early in his life, Ben proved
              to be of a stronger character than the normal large breed. With
              your humane psychological training it was good to see him toe the
              line and behave. Thanks again for your hi-tech methods in training
              up our dog to our acceptable standard.
              <br />
              <strong>Nick & Marilyn</strong>
            </p>
          </div>
        </section>

        <section className="section">
          <div className="box content">
            <h3 className="has-text-centered">
              DOG BEHAVIOUR TRAINING - PULLING ON LEASH, DESTRUCTIVE B EHAVIOUR,
              JUMPING UP
            </h3>
            <p className="is-size-6-desktop">
              Sorry I haven't been in touch, but I have been pretty occupied,
              settling into our new routine, you know, the stuff you organized
              with us. We are all getting along famously, since your visits to
              our house. As you know, us dogs pick up things fairly quickly, and
              now that my family know how to handle me things are different -
              it's amazing what your magic did for all of us. Lots of thanks and
              love. Angel.
              <br />
              <strong>The Dalmatian now 'Dealing with it'</strong>
            </p>
          </div>
        </section>

        <section className="section">
          <div className="box content">
            <h3 className="has-text-centered">
              DOG BEHAVIOUR TRAINING - SEPARATION ANXIETY, DOG AGGRESSION
            </h3>
            <p className="is-size-6-desktop">
              I am writing this to let you know just how good your services have
              been and how happy we are with you. As you know we have had Jordan
              for over eleven years and the past four years all he does is bark
              at people and other animals that walk past or into our house. He
              also terrorises my cat and when my husband or I are getting home
              from work Jordan can hear our cars coming up the street and he
              always barks and howls. He is very aggressive to other dogs at the
              park and always follows me everywhere. But for the past 4 weeks
              from the day that you have come to see Jordan the life of the cats
              and my family have been so much better. Jordan does not bark at
              people that walk past and does not chase the cat around. It is so
              peaceful coming home from work and not running out of the car to
              shut him up. But the best thing is now he gets along with all the
              dogs in the street and wants to go out and play with them. I've
              never known Jordan to be so relaxed. I'd love to write a letter to
              the person who reported us to the council. They did us a great
              favour, I never knew I could enjoy owning a dog this much. Keep up
              the good work.
              <br />
              <strong>Lena</strong>
            </p>
          </div>
        </section>

        <section className="section">
          <div className="box content">
            <h3 className="has-text-centered">
              DOG BEHAVIOUR TRAINING - DOG AGGRESSION, BARKING DOG
            </h3>
            <p className="is-size-6-desktop">
              Hi Mutts with Manners, I just wanted to thank you for the help you
              gave Troy and myself in relation to Chloe and Bella's behaviour. I
              can see a great improvement from what they were like before. I
              know they will never be "perfect" but they are a lot more social
              with other dogs and much better behaved (especially Bella).
              <br />
              Thank you again,
              <br />
              <strong>Lisa</strong>
            </p>
          </div>
        </section>

        <section className="section">
          <div className="box content">
            <h3 className="has-text-centered">
              RESCUE DOG - FEARFUL, BITING, NO OBEDIENCE
            </h3>
            <p className="is-size-6-desktop">
              Dear Maria Fiona and I want to extend our warm thanks and
              gratitude for your help with training Peggy (and us!). As you know
              Peggy (the 2½ year old Fox Terrier X) caused us some concern when
              we first rescued her. We found her rather timid and submissive and
              we were troubled by her jumping up, mouthing, and some other
              undesirable behaviours. We found it most valuable and cost
              effective to have you consult with us on a one-to-one basis and we
              were delighted with the results after the first dog training
              session. We now have a dog that is much more confident and
              obedient, primarily because we are more confident and consistent
              with her. We feel that we have managed to achieve these results
              because you were able to quickly identify the remedial action that
              was needed and give us clear and easy to apply instructions. Once
              again, very many thanks and we would recommend you and your
              approach to anyone seeking help with training their dog.
              <br />
              Kind regards
              <br />
              <strong>Ian</strong>
            </p>
          </div>
        </section>

        <section className="section">
          <div className="box content">
            <h3 className="has-text-centered">
              DOG BEHAVIOUR TRAINING - AGGRESSION, DESTRUCTIVE DOG
            </h3>
            <p className="is-size-6-desktop">
              As you know Muttley had become a pain that I nearly had him put to
              sleep because of his behaviour, biting, digging holes, being
              aggressive to the other 2 dogs and generally becoming
              unacceptable. With your guidance, Muttley has now become a good
              member of our household. Behaving himself, doing as he is told
              when he is told, being able to groom him, no biting and becoming a
              little darling. I would recommend you to anyone.
              <br />
              Regards,
              <br />
              <strong>Betty</strong>
            </p>
          </div>
        </section>

        <section className="section">
          <div className="box content">
            <h3 className="has-text-centered">
              DOG BEHAVIOUR TRAINING - DOG AGGRESSION
            </h3>
            <p className="is-size-6-desktop">
              To Whom It May Concern
              <br />
              <br />
              We have a 7 year old female Boxer, named Holly that we got from
              Boxer Rescue NSW, a number of years ago. Holly had been badly
              treated in the early years of her life, and whilst she had a
              friendly and affectionate disposition, she also came with a few
              problems, legacy of how other humans had behaved toward her. We
              had tried a couple of other dog trainers over the years, and even
              started watching The Dog Whisperer on Foxtel, to pick up some dog
              behaviour pointers, but the key problem areas remained. Our main
              issues were:
              <br />
              ferocious stance and barking when anyone came to the front door.
              This would continue for a few minutes, until she was able to
              satisfy herself that the visitors weren’t going to hurt her
              incessant pulling on the lead when being taken for a walk not
              coming when called and easily distracted, so no confidence in
              being able to let her off her leash in the park attacking other
              dogs that she may encounter on a walk These problems are not
              immediately obvious when selecting a dog from a rescue
              organisation or the RSPCA, but tend to emerge as the dog settles
              into their new home and realises they are no longer going to be
              hurt or neglected.
              <br />
              <br />
              We found Maria Cunningham, from Mutts with Manners, whilst
              searching the internet in yet another attempt to find help.Other
              options we found on the Internet, involved sending our dog away
              for 2 weeks intensive training. We were not prepared to do that
              and had heard one or two horror stories from others that had. The
              difference with Maria, is that she comes to our home and the dog’s
              surroundings, so that she can witness first hand, the problem
              areas and determine the remedial actions that are required.Maria
              was able to tell us what we were doing wrong, and help us change
              our behaviours, to obtain the behaviours in Holly that we require.
              After four sessions of dog training, spaced two weeks apart, we
              are well on our way. Walking Holly is a delight and we have made
              significant steps in the other areas as well. For us it is now
              continued practice and ensuring consistency in approach. Maria is
              always at the end of the phone or email to provide additional
              pointers and assistance. And of course if we feel that we need
              another session, she will be there too.We, and Holly can highly
              recommend Maria to assist with dog (and people) behavioural
              issues.
              <br />
              We, and Holly can highly recommend Maria to assist with dog (and
              people) behavioural issues
              <br />
              <strong>Vicki, Tony and Holly</strong>
            </p>
          </div>
        </section>

        <section className="section">
          <div className="box content">
            <h3 className="has-text-centered">
              PUPPY TRAINING - TOILET TRAINING, BITING PUPPY
            </h3>
            <p className="is-size-6-desktop">
              Thankyou for your help in turning Tiana from an unruly little girl
              into a puppy who is now easier to handle and a pleasure to take
              for a walk and have around the home. I am amazed at the great
              improvement in Tiana after only having 2 puppy training lessons
              with you. At one time I thought I would have to put up with a wild
              uncontrollable dog, but with your assistance in training her this
              has now all changed. Once again, thank you for all your help and
              guidance.
              <br />
              <strong>Lisa</strong>
            </p>
          </div>
        </section>

        <section className="section">
          <div className="box content">
            <h3 className="has-text-centered">
              DOG BEHAVIOUR TRAINING - BARKING, SEPARATION ANXIETY
            </h3>
            <p className="is-size-6-desktop">
              Hi there,I just wanted to thank you for the session with Connie
              yesterday. Already she is like a different dog! She seems less
              stressed and is doing as she's told. Also, we didn't have to block
              off the bedroom last night and she made no attempt to enter! See
              you next week.
              <br />
              <strong>Nadine</strong>
            </p>
          </div>
        </section>

        <section className="section">
          <div className="box content">
            <h3 className="has-text-centered">
              PUPPY TRAINING - TOILET TRAINING, BARKING/CRYING PUPPY
            </h3>
            <p className="is-size-6-desktop">
              Hi Maria, thank you again for your help with Prudie, our French
              Bulldog. I went from being out of my depth as a first-time dog
              owner to feeling confident in having the right tools and
              knowledge. Being an aparment dog it's so important for her to know
              how to behave - it's great to know you're there for us!
              <br />
              <strong>Min</strong>
            </p>
          </div>
        </section>

        <section className="section">
          <div className="box content">
            <h3 className="has-text-centered">
              DOG BEHAVIOUR TRAINING - FEAR AGGRESSION TOWARD DOGS
            </h3>
            <p className="is-size-6-desktop">
              This is a huge THANK YOU for all your help and advice with our
              dear little Nala. We have seen such a huge change in her (more so
              us?!) after your visits. Massive thank you and we will tell loads
              of people about you!
              <br />
              <strong>Michaela</strong>
            </p>
          </div>
        </section>

        <section className="section">
          <div className="box content">
            <h3 className="has-text-centered">
              DOG BEHAVIOUR TRAINING - BITING CHILDREN, DEMANDING, PULLING ON
              LEASH
            </h3>
            <p className="is-size-6-desktop">
              After La bit my friend, and started becoming snappy with small
              children, I knew something had to be done. Your lessons with she
              and I have made a world of difference. I now have confidence that
              she will behave both at home and out. As you know, she was a very
              wilful young dog, and while she's now much better behaved, calmer
              and more confident, she has retained her high spirit and, dare I
              say, sense of humour.
              <br />
              <strong>Kerrie</strong>
            </p>
          </div>
        </section>

        <section className="section">
          <div className="box content">
            <h3 className="has-text-centered">
              DOG BEHAVIOUR TRAINING - DOG AGGRESSION, PULLLING ON LEASH,
              SEPARATION ANXIETY
            </h3>
            <p className="is-size-6-desktop">
              To whom it may concern,
              <br />
              <br />
              Mutts With Manners has turned around the lives of our family and
              more importantly, our three dogs. When we came to Maria for help,
              our youngest dog had been fighting with our older two dogs, who by
              then were 7 and 8 years old. We were quite convinced that at their
              age, they would be impossible to change and had resigned ourselves
              to the likelihood of giving up our youngest dog.
              <br />
              From the first session with Maria, we felt an instant confidence
              that we could work on the behaviour of the dogs to get them back
              together. Her knowledge and understanding of dogs was instantly
              clear to us, and as the weeks passed and we saw Maria again, we
              began to learn more about the dogs than we ever thought possible.
              <br />
              Maria has taught us a discipline routine and structure for all
              three of the dogs that has had the most remarkable by-product –
              Training of the older two dogs. Neither of our older two dogs had
              received any training or structure in their lives. At 8 and 7
              years of age, I didn’t believe the two older dogs could be changed
              much. Maria has shown us that the opposite is correct.
              <br />
              Clients at my art gallery who have known these two dogs since they
              were pups have seen the transformation that Maria has achieved and
              are constantly amazed. They regularly tell me that they are like
              different dogs to the barking, over excited and completely
              untrained things that used to greet them at the gallery door.
              Every time a client comments on their new calmness and good
              behaviour, I think about Maria and her skills to get us where we
              are today with our dogs.
              <br />
              <strong>Lew and Pauline</strong>
            </p>
          </div>
        </section>
      </>
    );
  }
}

export default TestmonialsView;
