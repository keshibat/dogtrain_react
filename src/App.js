import React from "react";
import "bulma/css/bulma.css";
import { BrowserRouter, Route } from "react-router-dom";
import LocalAPI from "./apis/local";
import PrivateRoute from "./components/PrivateRoute";
import HomeView from "./Pages/Home/HomeView";
import AboutMeView from "./Pages/About/AboutMeView";
import AreasWeServiceView from "./Pages/About/AreasWeServiceView";
import FaqView from "./Pages/About/FaqView";
import AccomodationView from "./Pages/About/AccomodationView";
import PetSittingView from "./Pages/About/PetSittingView";
import ContactUsView from "./Pages/About/ContactUsView";
import PuppyTrainingView from "./Pages/Training/PuppyTrainingView";
import NaughtyTrainingView from "./Pages/Training/NaughtyTrainingView";
import FearfulTrainingView from "./Pages/Training/FearfulTrainingView";
import RescuedTrainingView from "./Pages/Training/RescuedTrainingView";
import ApartmentTrainingView from "./Pages/Training/ApartmentTrainingView";
import NewFamilyMemberTrainingView from "./Pages/Training/NewFamilymMemberTrainingView";
import ObedienceTrainingView from "./Pages/Training/ObedienceTrainingView";
import AdvancedTrainingView from "./Pages/Training/AdvancedTrainingView";
import TestmonialsView from "./Pages/Testmonials/TestmonialsView";
import BlogView from "./Pages/Blog/BlogView";
import BlogEditView from "./Pages/Blog/EditView";
import BlogShowView from "./Pages/Blog/ShowView";

import BookingView from "./Pages/Booking/BookingView";
import Navbar from "./Pages/Navbar/Navbar";

import Footer from "./Pages/Footer/Footer";

//admin
import LoginView from "./Pages/Admin/LoginView";
import DashboardView from "./Pages/Admin/DashboardView";
//bookings
import BookingsShowView from "./Pages/Booking/ShowView";
import BookingsEditView from "./Pages/Booking/EditView";
import BookingsIndexView from "./Pages/Booking/IndexView";

import { library } from "@fortawesome/fontawesome-svg-core";
import {
  fab,
  faFacebookSquare,
  faTwitterSquare,
  faInstagram
} from "@fortawesome/free-brands-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { faQuoteLeft } from "@fortawesome/free-solid-svg-icons";
import TestimonialsShowEdit from "./Pages/Testmonials/TestimonialsShowEdit";

library.add(
  fab,
  fas,
  faQuoteLeft,
  faFacebookSquare,
  faTwitterSquare,
  faInstagram
);

class App extends React.Component {
  constructor(props) {
    super(props);
    const token = sessionStorage.getItem("token") || null;
    this.state = { token };

    if (token) {
      LocalAPI.setAuthHeader(token);
    }
  }

  onLoginFormSubmit = (token, callback) => {
    sessionStorage.setItem("token", token);
    LocalAPI.setAuthHeader(token);
    this.setState({ token }, callback);
  };

  render() {
    const { token } = this.state;

    return (
      <div>
        {token && <h4>User Logged In!</h4>}
        <BrowserRouter>
          <Navbar />
          <div>
            <Route exact path="/" component={HomeView} />
            <Route exact path="/aboutme" component={AboutMeView} />
            <Route
              exact
              path="/areasweservice"
              component={AreasWeServiceView}
            />
            <Route exact path="/faq" component={FaqView} />
            <Route exact path="/accomodation" component={AccomodationView} />
            <Route exact path="/petsitting" component={PetSittingView} />
            <Route exact path="/contactus" component={ContactUsView} />

            <Route exact path="/puppy" component={PuppyTrainingView} />
            <Route exact path="/naughty" component={NaughtyTrainingView} />
            <Route exact path="/feaful" component={FearfulTrainingView} />
            <Route exact path="/rescued" component={RescuedTrainingView} />
            <Route exact path="/apartment" component={ApartmentTrainingView} />
            <Route
              exact
              path="/newfamilymember"
              component={NewFamilyMemberTrainingView}
            />
            <Route exact path="/obedience" component={ObedienceTrainingView} />
            <Route exact path="/advanced" component={AdvancedTrainingView} />

            <Route exact path="/testmonials" component={TestmonialsView} />
            <Route exact path="/blog" component={BlogView} />

            <Route exact path="/booking" component={BookingView} />
            <Route exact path="/blog/:id" component={BlogShowView} />

            <PrivateRoute
              exact
              path="/admin"
              component={DashboardView}
              token={token}
            />

            <Route
              exact
              path="/admin/login"
              render={props => (
                <LoginView
                  {...props}
                  onLoginFormSubmit={this.onLoginFormSubmit}
                />
              )}
            />

            <PrivateRoute
              exact
              path="/bookings/:id"
              component={BookingsShowView}
              token={token}
            />
            <PrivateRoute
              exact
              path="/bookings/:id/edit"
              component={BookingsEditView}
              token={token}
            />
            <PrivateRoute
              exact
              path="/blog/:id/edit"
              component={BlogEditView}
              token={token}
            />
            <PrivateRoute
              exact
              path="/testimonials/:id/edit"
              component={TestimonialsShowEdit}
              token={token}
            />

            <PrivateRoute
              exact
              path="/bookings"
              component={BookingsIndexView}
              token={token}
            />

            {/* <Route component={NotFoundPage} /> */}
          </div>
        </BrowserRouter>
        <Footer />
      </div>
    );
  }
}

export default App;
