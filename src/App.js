import React from "react";

import AboutMe from "./Pages/About/AboutmeView";
import AreasWeService from "./Pages/About/AreasweService";
import FaqView from "./Pages/About/FaqView";

class App extends React.Component {
  render() {
    return (
      <>
        <h1>Hello World!</h1>
        <AboutMe />
        <AreasWeService />
        <FaqView />
      </>
    );
  }
}

export default App;
