import React, { Component } from "react";
import puppy from "./../../assets/images/puppy.png";

class PuppyTrainingView extends Component {
  render() {
    return (
      <>
        <section class="hero is-link">
          <div class="hero-body">
            <div class="container">
              <h1 class="title">
                In-Home Puppy Training (from just 8 weeks of age!)
              </h1>
              <h2 class="subtitle">
                Free follow-up email and telephone puppy training support available
                from 48 hours after pup arrives home (this gives pup time to settle in)
                all puppy issues and questions covered with our unique, gentle 'think dog' technique
                puppy obedience training too!
              </h2>
            </div>
          </div>
        </section>

     <section>
        <div class="columns">

          <div class="column is-one-third">
              <figure class="image is-4by3">
                <img src={puppy} alt="puppy picture" />
              </figure>
          </div>


          <div class="column">
          <article class="message is-primary">
              <div class="message-header">
                <p>Primary</p>
              </div>
              <div class="message-body">
                  <div class="content is-primary">
                  <ul>
                    <li class="subtitle">How to toilet train a puppy</li>
                    <li class="subtitle">Stop play biting and nipping</li>
                    <li class="subtitle">Appropriate games</li>
                    <li class="subtitle">Setting rules and boundaries that work for ALL</li>
                    <li class="subtitle">Chewing, mouthing, destructive behaviour, puppy aggression</li>
                    <li class="subtitle">Whining, barking, crying and yelping (separation 'anxiety')</li>
                  </ul>
                  </div>
              </div>
          </article>
          </div>

          <div class="column">
            <article class="message is-primary">
              <div class="message-header">
                <p>Primary</p>
              </div>
              <div class="message-body">
                  <div class="content is-primary">
                  <ul>
                    <li class="subtitle">Pulling on the leash</li>
                    <li class="subtitle">Barking at other dogs</li>
                    <li class="subtitle">Come when called</li>
                    <li class="subtitle">Appropriate play with other dogs</li>
                    <li class="subtitle">Appropriate “Hello” with people too!</li>
                  </ul>
                  </div>
              </div>
            </article>
          </div>

        </div>
    </section>





      </>
    );
  }
}

export default PuppyTrainingView;














// import React, { Component } from "react";

// class BlogView extends Component {
//   constructor() {
//     super()
//     this.state = {
//       blog: {}
//     }
//   }

//   componentDidMount() {
//     fetch("https://swapi.co/api/people/10")
//     .then(response => response.json())
//     .then(data => {
//       this.setState({
//         blog: data
//       })
//     })
//   }
//   render() {
//     const blogContent = this.state.blog.name
//     return (
//       <div>
//         <h1>blog</h1>
//         <h1>blog</h1>
//         <h1>blog</h1>
//         <h1>blog</h1>
//         <h1>blog</h1>
//         <p>{blogContent}</p>
//       </div>
//     );
//   }
// }

// export default BlogView;


