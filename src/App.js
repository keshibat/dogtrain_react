import React from "react";
import "bulma/css/bulma.css";
import { BrowserRouter, Route } from "react-router-dom";
import HomeView from "./Pages/HomeView";
import AboutMe from "./Pages/About/AboutmeView";
import AreasWeService from "./Pages/About/AreasweService";
import FaqView from "./Pages/About/FaqView";
import AccomodationView from "./Pages/About/AccomodationView";
import PetsittingView from "./Pages/About/PetsittingView";
import ContactusView from "./Pages/About/ContactusView";

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
            <Route exact path="/aboutme" component={AboutMe} />
            <Route exact path="/areasweservice" component={AreasWeService} />
            <Route exact path="/faq" component={FaqView} />
            <Route exact path="/accomodation" component={AccomodationView} />
            <Route exact path="/petsitting" component={PetsittingView} />
            <Route exact path="/contactus" component={ContactusView} />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
