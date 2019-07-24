import React, { Component } from "react";
import { Link } from "react-router-dom";
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

  onDeleteClick = async event => {
    event.preventDefault();
    const { id } = this.props.match.params;
    const response = await LocalAPI.delete(`/blog/${id}`);
    this.props.history.push("/admin");
  };

  onConfirmClick = async event => {
    event.preventDefault();
    this.setState({ fetching: true });
    const { id } = this.props.match.params;
    await LocalAPI.put(`/blog/${id}/confirm`);
    //optimize later
    LocalAPI.get(`/blog/${id}`).then(res =>
      this.setState({ booking: { ...res.data }, fetching: false })
    );
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
                    <span className="blogDetails">
                      {new Date(blog.date).toLocaleDateString()}
                    </span>

                    <h6 className="title is-6 has-text-centered" />
                    <span className="blogOptions">
                      <p>{blog.body && blog.body}</p>
                    </span>
                  </div>
                  {sessionStorage.getItem("token") ? (
                    <p>
                      <a href="" onClick={this.onConfirmClick}>
                        Confirm
                      </a>{" "}
                      | {}
                      <Link to={`/blog/${this.props.match.params.id}/edit`}>
                        Edit
                      </Link>{" "}
                      | {}
                      <a href="" onClick={this.onDeleteClick}>
                        Delete
                      </a>{" "}
                      | {}
                      <Link to={"/admin"}>Back</Link>
                    </p>
                  ) : null}
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
