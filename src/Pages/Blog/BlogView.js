import React, { Component } from "react";
import { Link } from "react-router-dom";
import LocalAPI from "./../../apis/local";
import BlogCSS from "./../../assets/styles/BlogSCSS/BlogCSS.css";
import Loader from "./../../components/Loader";

class BlogView extends Component {
  state = {
    blog: [],
    fetching: true
  };

  componentDidMount() {
    this.getBlogs()
      .then(res => {
        this.setState({ blog: [...res], fetching: false });
      })
      .catch(err => console.log(err));
  }

  getBlogs = async () => {
    const response = await LocalAPI.get("/blog").catch(err => {
      console.log(err);
    });
    return response.data;
  };

  render() {
    const { blog, fetching } = this.state;

    if (fetching) {
      return <Loader />;
    }

    return (
      <>
        <section className="section title-heading">
          <div className="container">
            <div className="content has-text-centered" />
          </div>
        </section>

        <section>
          <div className="content has-text-centered blogs">
            <div className="container">
              <div className="columns is-centered">
                <div className="column is-half">
                  {blog.reverse().map((item, index) => {
                    return (
                      <div className="box content" key={item._id}>
                        <span className="blogDetails">{item.title}</span>
                        <p>
                          <span className="blogDetails">
                            {new Date(item.date).toLocaleDateString()}
                          </span>
                        </p>

                        <h6
                          className="title is-6 has-text-centered"
                        />

                        <span className="blogOptions">
                          <p>{item.body && item.body.slice(0, 255)}</p>
                        </span>

                        {(item.body && item.body.length <= 255) ||
                        !item.body ? null : (
                          <Link to={`/blog/${item._id}`} className="blog-box">
                            <p> See More. </p>
                          </Link>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }
}

export default BlogView;
