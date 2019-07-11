import React from "react"
import { BrowserRouter, Route } from "react-router-dom";
import AboutmeView from "./Pages/AccomodationView";
import FaqView from "./Pages/AccomodationView";
import AreasweService from "./Pages/AccomodationView";
import AccomodationView from "./Pages/AccomodationView";
import PetsittingView from "./Pages/AccomodationView";
import ContactView from "./Pages/AccomodationView";

class App extends React.Component {

  render() {
    return (
      <div>
        <AboutmeView />
        <FaqView />
        <AreasweService />
        <AccomodationView />
        <PetsittingView />
        <ContactView />
      </div>
    )
  }
}

export default App