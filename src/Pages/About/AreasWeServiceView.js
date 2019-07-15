import React, { Component } from "react";
import { Map } from './Map';

// class AreasWeServiceView extends Component {
//   render() {
//     return (
//       <>
//         <h1> Areas We Service Views</h1>
//       </>
//     );
//   }
// }

const infoboxTemplate = (options) => {
  return (
    <div class="customInfobox">
      <div class="title">{options.title}</div>
      {options.descriptions && options.descriptions.map(item => {
        return <div>{item}</div>
      })}
      {options.description}
      {options.image && <img src={options.image} />}
    </div>);
}

const cityPushPins = [
  {
    location: [-33.9082024, 151.174343],
    addHandler: "mouseover",
    infoboxOption: {
      htmlContent: infoboxTemplate({
        title: "Alexandria", 
        descriptions: ['We provide service in', 'Alexandria.','Contact us if you live nearby.'],
        image: 'dog_location.jpg'
      })
     },
    pushPinOption: { title: "Alexandria", description: 'Pushpin', icon: "icon.svg" },
  }
];
const westPushPins = [
  {
    location: [-33.8505196, 151.121128],
    addHandler: "mouseover",
    infoboxOption: {
      htmlContent: infoboxTemplate({
        title: "Yes!", 
        descriptions: ['We provide service in Abbotsford.','Contact us if you live nearby.'],
        // image: 'dog_location.jpg'
      })
     },
    pushPinOption: { title: "Abbotsford", description: 'Pushpin', icon: "icon.svg" },
  },
  {
    location: [-33.9082024, 151.174343],
    addHandler: "mouseover",
    infoboxOption: {
      htmlContent: infoboxTemplate({
        title: "Yes!", 
        descriptions: ['We provide service in Alexandria.','Contact us if you live nearby.'],
        // image: 'dog_location.jpg'
      })
     },
    pushPinOption: { title: "Alexandria", description: 'Pushpin', icon: "icon.svg" },
  },
  {
    location: [-33.8796898, 151.1609614],
    addHandler: "mouseover",
    infoboxOption: {
      htmlContent: infoboxTemplate({
        title: "Yes!", 
        descriptions: ['We provide service in Annandale.','Contact us if you live nearby.'],
        // image: 'dog_location.jpg'
      })
     },
    pushPinOption: { title: "Annandale", description: 'Pushpin', icon: "icon.svg" },
  },
  {
    location: [-33.8894654, 151.1186891],
    addHandler: "mouseover",
    infoboxOption: {
      htmlContent: infoboxTemplate({
        title: "Yes!", 
        descriptions: ['We provide service in Ashfield.','Contact us if you live nearby.'],
        // image: 'dog_location.jpg'
      })
     },
    pushPinOption: { title: "Ashfield", description: 'Pushpin', icon: "icon.svg" },
  }
];

const pushPins = {
  cityPushPins,
  westPushPins
}

export class AreasWeServiceView extends Component {
  constructor(){
    super();
    this.state = {
      position: {},
      pushPins: cityPushPins
    };
    this.setLocation = this.setLocation.bind(this);
    this.selectCategory = this.selectCategory.bind(this);
    navigator.geolocation.getCurrentPosition(this.setLocation);
  }

  setLocation(position) {
    this.setState({
      position: position
    });
  }

  selectCategory(e) {
    this.setState({
      pushPins: pushPins[e.target.value]
    });
  }

  render() {
    return (
      <>
      <div style={ {height: "500px", width: "1000px"}}>
        <Map pushPins = { this.state.pushPins }
          center={[this.state.position.latitude, this.state.position.longitude]}
        />
      </div>
      <select onChange={this.selectCategory}>
        <option value="cityPushPins">City</option>
        <option value="westPushPins">Inner West</option>
      </select>
      </>
    );
  }
}

export default AreasWeServiceView;