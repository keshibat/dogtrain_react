import React from "react";
import "bulma/css/bulma.css";
import { BrowserRouter, Route } from "react-router-dom";
import HomeView from "./Pages/HomeView";
import AboutMeView from "./Pages/About/AboutMeView";
import AreasWeServiceView from "./Pages/About/AreasWeServiceView";
import FaqView from "./Pages/About/FaqView";
import AccomodationView from "./Pages/About/AccomodationView";
import PetSittingView from "./Pages/About/PetSittingView";
import ContactUsView from "./Pages/About/ContactUsView";
import PuppyTrainningView from "./Pages/Trainning/PuppyTrainningView";
import NaughtyTrainningView from "./Pages/Trainning/NaughtyTrainningView";
import FearfulTrainningView from "./Pages/Trainning/FearfulTrainningView";
import RescuedTrainningView from "./Pages/Trainning/RescuedTrainningView";
import ApartmentTrainningView from "./Pages/Trainning/ApartmentTrainningView";
import NewFamilyMemberTrainningView from "./Pages/Trainning/NewFamilyMemberTrainningView";
import ObedienceTrainningView from "./Pages/Trainning/ObedienceTrainningView";
import AdvancedTrainningView from "./Pages/Trainning/AdvancedTrainningView";
import TestmonialsView from "./Pages/Testmonials/TestmonialsView";
import BlogView from "./Pages/Blog/BlogView";
import ShopView from "./Pages/Shop/ShopView";
import BookingView from "./Pages/Booking/BookingView";

class App extends React.Component {
  componentDidMount() {
    fetch("http://127.0.0.1:3000/")
      .then(function(response) {
        console.log(response);
      })
      .then(function(myJson) {
        console.log(JSON.stringify(myJson));
      });
  }

  render() {
    return (
      <div>
        <BrowserRouter>
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

            <Route exact path="/puppy" component={PuppyTrainningView} />
            <Route exact path="/naughty" component={NaughtyTrainningView} />
            <Route exact path="/feaful" component={FearfulTrainningView} />
            <Route exact path="/rescued" component={RescuedTrainningView} />
            <Route exact path="/apartment" component={ApartmentTrainningView} />
            <Route
              exact
              path="/newfamilymember"
              component={NewFamilyMemberTrainningView}
            />
            <Route exact path="/obedience" component={ObedienceTrainningView} />
            <Route exact path="/advanced" component={AdvancedTrainningView} />

            <Route exact path="/testmonials" component={TestmonialsView} />
            <Route exact path="/blog" component={BlogView} />
            <Route exact path="/shop" component={ShopView} />
            <Route exact path="/booking" component={BookingView} />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
