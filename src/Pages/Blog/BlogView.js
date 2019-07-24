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
        console.log(res);
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
    console.log(blog[6] && blog[6].title);

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
            <div className="container">
              <div className="columns is-centered">
                <div className="column is-half">
                  {blog.reverse().map((item, index) => {
                    return (
                      <div className="box content">
                        <Link to={`/blog/${item._id}`} className="blog-box">
                          <span className="blogDetails">{item.title}</span>

                          <h6
                            className="title is-6 has-text-centered"
                            key={item._id}
                          />

                          <span className="blogOptions">
                            <p>{item.body}</p>
                            {console.log(item.body)}
                          </span>
                        </Link>
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
