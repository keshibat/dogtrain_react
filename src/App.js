import React, { Component } from "react"
import AboutmeView from "./Pages/About/AccomodationView";
import FaqView from "./Pages/About/FaqView";
import AreasweServiceView from "./Pages/About/AreasweServiceView";
import AccomodationView from "./Pages/About/AccomodationView";
import PetsittingView from "./Pages/About/PetsittingView";
import ContactusView from "./Pages/About/ContactusView";


class App extends Component {

  render() {
    return (
      <div>
        <AboutmeView />
        <FaqView />
        <AreasweServiceView />
        <AccomodationView />
        <PetsittingView />
        <ContactusView />
      </div>
    )
  }
}

export default App


