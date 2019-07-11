<<<<<<< HEAD
import React, { Component } from "react"
import AboutmeView from "./Pages/About/AccomodationView";
import FaqView from "./Pages/About/FaqView";
import AreasweServiceView from "./Pages/About/AreasweServiceView";
import AccomodationView from "./Pages/About/AccomodationView";
import PetsittingView from "./Pages/About/PetsittingView";
import ContactusView from "./Pages/About/ContactusView";
||||||| merged common ancestors
import React from "react"
import { BrowserRouter, Route } from "react-router-dom";
import AccomodationView from "./Pages/AccomodationView";
=======
import React from "react";
>>>>>>> 8eda5e61274f11a65cca7821587b96c6f31641f1

import AboutMe from "./Pages/About/AboutmeView";
import AreasWeService from "./Pages/About/AreasweService";
import FaqView from "./Pages/About/FaqView";

<<<<<<< HEAD
class App extends Component {

||||||| merged common ancestors
class App extends React.Component {

=======
class App extends React.Component {
>>>>>>> 8eda5e61274f11a65cca7821587b96c6f31641f1
  render() {
    return (
<<<<<<< HEAD
      <div>
        <AboutmeView />
        <FaqView />
        <AreasweServiceView />
        <AccomodationView />
        <PetsittingView />
        <ContactusView />
      </div>
    )
||||||| merged common ancestors
      <div>
        <AccomodationView />
        <ContactusView />
        <PetsittingView />
      </div>
    )
=======
      <>
        <h1>Hello World!</h1>
        <AboutMe />
        <AreasWeService />
        <FaqView />
      </>
    );
>>>>>>> 8eda5e61274f11a65cca7821587b96c6f31641f1
  }
}

<<<<<<< HEAD
export default App


||||||| merged common ancestors
export default App
=======
export default App;
>>>>>>> 8eda5e61274f11a65cca7821587b96c6f31641f1
