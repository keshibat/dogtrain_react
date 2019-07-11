import React from "react";
import "bulma/css/bulma.css";
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
      <>
        <h1>Hello World!</h1>
        <AboutMe />
        <AreasWeService />
        <FaqView />
        <AccomodationView />
        <PetsittingView />
        <ContactusView />
      </>
    );
  }
}

export default App;
