import React from "react";
import "bulma/css/bulma.css";
import Navbar from "./Pages/Navbar/Navbar";
import { BrowserRouter, Route, Link } from "react-router-dom";
import AboutMe from "./Pages/About/AboutMeView";
import AreasWeServiceView from "./Pages/About/AreasWeServiceView";
import FaqView from "./Pages/About/FaqView";
import AccomodationView from "./Pages/About/AccomodationView";
import PetsittingView from "./Pages/About/PetsittingView";
import ContactUsView from "./Pages/About/ContactUsView";

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
      <>
        <BrowserRouter>
          <div>
            <Route exact path="/aboutus" component={AboutMe} />
            <Route
              exact
              path="/areasweservice"
              component={AreasWeServiceView}
            />
            <Route exact path="/faq" component={FaqView} />
            <Route exact path="/accomodation" component={AccomodationView} />
            <Route exact path="/petsitting" component={PetsittingView} />
            <Route exact path="/contactus" component={ContactUsView} />
          </div>

          <Navbar />
        </BrowserRouter>
      </>
    );
  }
}

export default App;
