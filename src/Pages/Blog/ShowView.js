import React, { Component } from "react";
import axios from "axios";
import LocalAPI from "./../../apis/local";
// import dashboardViewCSS from "./../../assets/styles/AdminSCSS/dashboardView.css";
import Loader from "./../../components/Loader";

class BlogsShowView extends Component {
  state = {
    blog: {},
    fetching: true
  };

  //try using filter array to get item, if its faster than querying
  componentDidMount() {
    const { id } = this.props.match.params;
    LocalAPI.get(`/blog/${id}`).then(res => {
      console.log(res);
      this.setState({ blog: { ...res.data }, fetching: false });
    });
  }

  render() {
    // const { bookings } = this.state;
    // console.log(this.props.match.params.id);
    // console.log(this.props.bookings);
    const { blog, fetching } = this.state;

    console.log("sdsdds");
    // if (fetching) {
    //   return <Loader />;
    // }

    return (
      <>
        <section className="section title-heading">
          <div className="container">
            <div className="content has-text-centered">
              <h1>{blog.title}</h1>
            </div>
          </div>
        </section>
        <section>
          <div className="content has-text-centered">
            <div className="container">
              <div className="columns is-centered">
                <div className="column is-half">
                  <div className="box content">
                    <span className="blogDetails">{blog.title}</span>

                    <h6 className="title is-6 has-text-centered" />
                    <span className="blogOptions">
                      <p>{blog.body && blog.body}</p>
                    </span>
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

export default BlogsShowView;
