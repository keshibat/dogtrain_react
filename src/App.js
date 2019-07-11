import React from "react";

import AboutMe from "./Pages/About/AboutmeView";
import AreasWeService from "./Pages/About/AreasweService";
import FaqView from "./Pages/About/FaqView";
import AccomodationView from "./Pages/About/AccomodationView";
import PetsittingView from "./Pages/About/PetsittingView";
import ContactusView from "./Pages/About/ContactusView";




class App extends React.Component {
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
