import React, { Component } from "react";
import { Link } from "react-router-dom";
import LocalAPI from "./../../apis/local";
import BlogCSS from "./../../assets/styles/BlogSCSS/BlogCSS.css";
import Loader from "./../../components/Loader";

class BlogView extends Component {
  state = {
    blogs: [],
    fetching: true
  };

  componentDidMount() {
    this.getBlogs()
      .then(res => {
        console.log(res);
        this.setState({ blogs: [...res], fetching: false });
      })
      .catch(err => console.log(err));
  }

  getBlogs = async () => {
    const response = await LocalAPI.get("/blogs").catch(err => {
      console.log(err);
    });
    return response.data;
  };

  render() {
    const { blogs, fetching } = this.state;

    if (fetching) {
      return <Loader />;
    }

    return (
      <>
        <section className="section title-heading">
          <div className="container">
            <div className="content has-text-centered">
              <h1>Blogs</h1>
            </div>
          </div>
        </section>

        <section>
          <div className="content has-text-centered">
            <div className="columns">
              <div className="box content">
                <div className="column">
                  <h5 className="title is-5">Blogs</h5>
                  <ul>
                    {blogs.reverse().map((item, index) => {
                      return (
                        <div className="box content">
                          <Link to={`/blogs/${item._id}`} className="blog-box">
                            <span className="blogDetails">{blogs.title}</span>

                            <h6
                              className="title is-6 has-text-centered"
                              key={item._id}
                            />

                            <span className="blogOptions">
                              <p>{blogs.body}</p>
                            </span>
                          </Link>
                        </div>
                      );
                    })}
                  </ul>
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
