import React, { Component } from "react";
import { Link } from "react-router-dom";
import LocalAPI from "./../../apis/local";
import "./../../assets/styles/AdminSCSS/dashboardView.css";
import Loader from "./../../components/Loader";
import TestimonialsFormView from "./../Testmonials/TestimonialsForm";
import BlogFormView from "./../Blog/BlogFormView";
import AdvertFormView from "./../Admin/AdvertFormView";

//index view, view all bookings
//CRUD views, edit/update, delete, confirm/change status
class DashboardView extends Component {

  render() {
    
    return (
      <>
        <section className="section title-heading">
          <div className="container">
            <div className="content has-text-centered">
              <h1>Dashboard</h1>
            </div>
          </div>
        </section>

        <div className="tabs is-centered">
                <ul>
                    <li className="is-active"><Link to={`/admin`}>Admin Panel</Link></li>
                    <li><Link to={`/bookings`}>Manage Bookings</Link></li>
                </ul>
          </div>

        <section className="section">
          <div className="columns">
            <AdvertFormView />
            <TestimonialsFormView />
            <BlogFormView />
          </div>
        </section>
      </>
    );
  }
}

export default DashboardView;
