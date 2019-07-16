import React, { Component } from "react";

class AreasWeServiceView extends Component {
  render() {
    return (
      <>
        <section className="section">
          <div className="container">
            <div className="content has-text-centered">
              <h1>Areas We Service</h1>
            </div>
          </div>
        </section>
        <section className="section">
          <div className="container">
            <div className="content has-text-centered" />
          </div>

          <div className="container">
            <div className="content has-text-centered">
              <div className="columns is-centered">
                <div className="column is-half">
                  <div className="box content">
                    <p>
                      Whether you are interested in advanced obedience training,
                      dog desensitisation, dog behaviour therapy, or dog trick
                      training, our professional dog trainers can extend their
                      services to clients in various locations.
                    </p>
                    <p>
                      Our Sydney dog trainers can come to you in the following
                      Sydney suburbs - if your suburb isn't listed but is near
                      one that is, please contact us to discuss.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }
}

export default AreasWeServiceView;
