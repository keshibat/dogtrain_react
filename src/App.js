import React from "react"
import { BrowserRouter, Route } from "react-router-dom";
import AccomodationView from "./Pages/AccomodationView";


class App extends React.Component {

  render() {
    return (
      <div>
        <AccomodationView />
        <ContactusView />
        <PetsittingView />
      </div>
    )
  }
}

export default App