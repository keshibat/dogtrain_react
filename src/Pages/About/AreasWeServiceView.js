import React, { Component } from "react";
import AreasWeServiceCSS from "./../../assets/styles/AboutSCSS/AreasWeServiceCSS.css";
import { Map } from "./Map";

const infoboxTemplate = options => {
  return (
    <div className="customInfobox">
      <div className="content has-text-centered">
        <div className="box content">
          <div className="title">{options.title}</div>
          {options.descriptions &&
            options.descriptions.map(item => {
              return <div key={options.id}>{item}</div>;
            })}
          {options.description}
          {options.image && <img src={options.image} alt="cartoon puppy" />}
        </div>
      </div>
    </div>
  );
};

// Pins for the different areas on the map Mutts with manners vists.
const cityPushPins = [
  {
    location: [-33.9082024, 151.174343],
    addHandler: "mouseover",
    infoboxOption: {
      htmlContent: infoboxTemplate({
        title: "Yes!",
        descriptions: [
          "We provide service in Alexandria.",
          "Contact us if you live nearby."
        ],
        image: "mutt.jpg"
      })
    },
    pushPinOption: {
      title: "Alexandria",
      description: "Pushpin",
      icon: "icon.svg"
    }
  },
  {
    location: [-33.9114971, 151.1982193],
    addHandler: "mouseover",
    infoboxOption: {
      htmlContent: infoboxTemplate({
        title: "Yes!",
        descriptions: [
          "We provide service in Beaconsfield.",
          "Contact us if you live nearby."
        ],
        image: "mutt.jpg"
      })
    },
    pushPinOption: {
      title: "Beaconsfield",
      description: "Pushpin",
      icon: "icon.svg"
    }
  },
  {
    location: [-33.8842976, 151.192429],
    addHandler: "mouseover",
    infoboxOption: {
      htmlContent: infoboxTemplate({
        title: "Yes!",
        descriptions: [
          "We provide service in Broadway.",
          "Contact us if you live nearby."
        ],
        image: "mutt.jpg"
      })
    },
    pushPinOption: {
      title: "Broadway",
      description: "Pushpin",
      icon: "icon.svg"
    }
  },
  {
    location: [-33.8862875, 151.1912344],
    addHandler: "mouseover",
    infoboxOption: {
      htmlContent: infoboxTemplate({
        title: "Yes!",
        descriptions: [
          "We provide service in Chippendale.",
          "Contact us if you live nearby."
        ],
        image: "mutt.jpg"
      })
    },
    pushPinOption: {
      title: "Chippendale",
      description: "Pushpin",
      icon: "icon.svg"
    }
  },
  {
    location: [-33.8794164, 151.2164518],
    addHandler: "mouseover",
    infoboxOption: {
      htmlContent: infoboxTemplate({
        title: "Yes!",
        descriptions: [
          "We provide service in Darlinghurst.",
          "Contact us if you live nearby."
        ],
        image: "mutt.jpg"
      })
    },
    pushPinOption: {
      title: "Darlinghurst",
      description: "Pushpin",
      icon: "icon.svg"
    }
  },
  {
    location: [-33.8908743, 151.1910582],
    addHandler: "mouseover",
    infoboxOption: {
      htmlContent: infoboxTemplate({
        title: "Yes!",
        descriptions: [
          "We provide service in Darlington.",
          "Contact us if you live nearby."
        ],
        image: "mutt.jpg"
      })
    },
    pushPinOption: {
      title: "Darlington",
      description: "Pushpin",
      icon: "icon.svg"
    }
  },
  {
    location: [-33.8693039, 151.1883216],
    addHandler: "mouseover",
    infoboxOption: {
      htmlContent: infoboxTemplate({
        title: "Yes!",
        descriptions: [
          "We provide service in Pyrmont.",
          "Contact us if you live nearby."
        ],
        image: "mutt.jpg"
      })
    },
    pushPinOption: {
      title: "Pyrmont",
      description: "Pushpin",
      icon: "icon.svg"
    }
  },
  {
    location: [-33.8931067, 151.2024146],
    addHandler: "mouseover",
    infoboxOption: {
      htmlContent: infoboxTemplate({
        title: "Yes!",
        descriptions: [
          "We provide service in Redfern.",
          "Contact us if you live nearby."
        ],
        image: "mutt.jpg"
      })
    },
    pushPinOption: {
      title: "Redfern",
      description: "Pushpin",
      icon: "icon.svg"
    }
  },
  {
    location: [-33.9185714, 151.2005018],
    addHandler: "mouseover",
    infoboxOption: {
      htmlContent: infoboxTemplate({
        title: "Yes!",
        descriptions: [
          "We provide service in Rosebery.",
          "Contact us if you live nearby."
        ],
        image: "mutt.jpg"
      })
    },
    pushPinOption: {
      title: "Rosebery",
      description: "Pushpin",
      icon: "icon.svg"
    }
  },
  {
    location: [-33.8844647, 151.2056549],
    addHandler: "mouseover",
    infoboxOption: {
      htmlContent: infoboxTemplate({
        title: "Yes!",
        descriptions: [
          "We provide service in Surry Hills.",
          "Contact us if you live nearby."
        ],
        image: "mutt.jpg"
      })
    },
    pushPinOption: {
      title: "Surry Hills",
      description: "Pushpin",
      icon: "icon.svg"
    }
  },
  {
    location: [-33.8794803, 151.1940736],
    addHandler: "mouseover",
    infoboxOption: {
      htmlContent: infoboxTemplate({
        title: "Yes!",
        descriptions: [
          "We provide service in Ultimo.",
          "Contact us if you live nearby."
        ],
        image: "mutt.jpg"
      })
    },
    pushPinOption: { title: "Ultimo", description: "Pushpin", icon: "icon.svg" }
  },
  {
    location: [-33.9003386, 151.2030525],
    addHandler: "mouseover",
    infoboxOption: {
      htmlContent: infoboxTemplate({
        title: "Yes!",
        descriptions: [
          "We provide service in Waterloo.",
          "Contact us if you live nearby."
        ],
        image: "mutt.jpg"
      })
    },
    pushPinOption: {
      title: "Waterloo",
      description: "Pushpin",
      icon: "icon.svg"
    }
  },
  {
    location: [-33.9076619, 151.2039548],
    addHandler: "mouseover",
    infoboxOption: {
      htmlContent: infoboxTemplate({
        title: "Yes!",
        descriptions: [
          "We provide service in Zetland.",
          "Contact us if you live nearby."
        ],
        image: "mutt.jpg"
      })
    },
    pushPinOption: {
      title: "Zetland",
      description: "Pushpin",
      icon: "icon.svg"
    }
  }
];
const westPushPins = [
  {
    location: [-33.8505196, 151.121128],
    addHandler: "mouseover",
    infoboxOption: {
      htmlContent: infoboxTemplate({
        title: "Yes!",
        descriptions: [
          "We provide service in Abbotsford.",
          "Contact us if you live nearby."
        ],
        image: "mutt.jpg"
      })
    },
    pushPinOption: {
      title: "Abbotsford",
      description: "Pushpin",
      icon: "icon.svg"
    }
  },
  {
    location: [-33.9082024, 151.174343],
    addHandler: "mouseover",
    infoboxOption: {
      htmlContent: infoboxTemplate({
        title: "Yes!",
        descriptions: [
          "We provide service in Alexandria.",
          "Contact us if you live nearby."
        ],
        image: "mutt.jpg"
      })
    },
    pushPinOption: {
      title: "Alexandria",
      description: "Pushpin",
      icon: "icon.svg"
    }
  },
  {
    location: [-33.8796898, 151.1609614],
    addHandler: "mouseover",
    infoboxOption: {
      htmlContent: infoboxTemplate({
        title: "Yes!",
        descriptions: [
          "We provide service in Annandale.",
          "Contact us if you live nearby."
        ],
        image: "mutt.jpg"
      })
    },
    pushPinOption: {
      title: "Annandale",
      description: "Pushpin",
      icon: "icon.svg"
    }
  },
  {
    location: [-33.8894654, 151.1186891],
    addHandler: "mouseover",
    infoboxOption: {
      htmlContent: infoboxTemplate({
        title: "Yes!",
        descriptions: [
          "We provide service in Ashfield.",
          "Contact us if you live nearby."
        ],
        image: "mutt.jpg"
      })
    },
    pushPinOption: {
      title: "Ashfield",
      description: "Pushpin",
      icon: "icon.svg"
    }
  },
  {
    location: [-33.8583263, 151.163184],
    addHandler: "mouseover",
    infoboxOption: {
      htmlContent: infoboxTemplate({
        title: "Yes!",
        descriptions: [
          "We provide service in Balmain.",
          "Contact us if you live nearby."
        ],
        image: "mutt.jpg"
      })
    },
    pushPinOption: {
      title: "Balmain",
      description: "Pushpin",
      icon: "icon.svg"
    }
  },
  {
    location: [-33.8571441, 151.1902714],
    addHandler: "mouseover",
    infoboxOption: {
      htmlContent: infoboxTemplate({
        title: "Yes!",
        descriptions: [
          "We provide service in Balmain East.",
          "Contact us if you live nearby."
        ],
        image: "mutt.jpg"
      })
    },
    pushPinOption: {
      title: "Balmain East",
      description: "Pushpin",
      icon: "icon.svg"
    }
  },
  {
    location: [-33.8507536, 151.1787135],
    addHandler: "mouseover",
    infoboxOption: {
      htmlContent: infoboxTemplate({
        title: "Yes!",
        descriptions: [
          "We provide service in Birchgrove.",
          "Contact us if you live nearby."
        ],
        image: "mutt.jpg"
      })
    },
    pushPinOption: {
      title: "Birchgrove",
      description: "Pushpin",
      icon: "icon.svg"
    }
  },
  {
    location: [-33.8427326, 151.1066517],
    addHandler: "mouseover",
    infoboxOption: {
      htmlContent: infoboxTemplate({
        title: "Yes!",
        descriptions: [
          "We provide service in Breakfast Point.",
          "Contact us if you live nearby."
        ],
        image: "mutt.jpg"
      })
    },
    pushPinOption: {
      title: "Breakfast Point",
      description: "Pushpin",
      icon: "icon.svg"
    }
  },
  {
    location: [-33.8783748, 151.0953644],
    addHandler: "mouseover",
    infoboxOption: {
      htmlContent: infoboxTemplate({
        title: "Yes!",
        descriptions: [
          "We provide service in Burwood.",
          "Contact us if you live nearby."
        ],
        image: "mutt.jpg"
      })
    },
    pushPinOption: {
      title: "Burwood",
      description: "Pushpin",
      icon: "icon.svg"
    }
  },
  {
    location: [-33.8886522, 151.1787416],
    addHandler: "mouseover",
    infoboxOption: {
      htmlContent: infoboxTemplate({
        title: "Yes!",
        descriptions: [
          "We provide service in Camperdown.",
          "Contact us if you live nearby."
        ],
        image: "mutt.jpg"
      })
    },
    pushPinOption: {
      title: "Camperdown",
      description: "Pushpin",
      icon: "icon.svg"
    }
  },
  {
    location: [-33.8646425, 151.1106849],
    addHandler: "mouseover",
    infoboxOption: {
      htmlContent: infoboxTemplate({
        title: "Yes!",
        descriptions: [
          "We provide service in Canada Bay.",
          "Contact us if you live nearby."
        ],
        image: "mutt.jpg"
      })
    },
    pushPinOption: {
      title: "Canada Bay",
      description: "Pushpin",
      icon: "icon.svg"
    }
  },
  {
    location: [-33.8497685, 151.1333945],
    addHandler: "mouseover",
    infoboxOption: {
      htmlContent: infoboxTemplate({
        title: "Yes!",
        descriptions: [
          "We provide service in Chiswick.",
          "Contact us if you live nearby."
        ],
        image: "mutt.jpg"
      })
    },
    pushPinOption: {
      title: "Chiswick",
      description: "Pushpin",
      icon: "icon.svg"
    }
  },
  {
    location: [-33.8557277, 151.0980079],
    addHandler: "mouseover",
    infoboxOption: {
      htmlContent: infoboxTemplate({
        title: "Yes!",
        descriptions: [
          "We provide service in Concord.",
          "Contact us if you live nearby."
        ],
        image: "mutt.jpg"
      })
    },
    pushPinOption: {
      title: "Concord",
      description: "Pushpin",
      icon: "icon.svg"
    }
  },
  {
    location: [-33.8520577, 151.1445487],
    addHandler: "mouseover",
    infoboxOption: {
      htmlContent: infoboxTemplate({
        title: "Yes!",
        descriptions: [
          "We provide service in Drummoyne.",
          "Contact us if you live nearby."
        ],
        image: "mutt.jpg"
      })
    },
    pushPinOption: {
      title: "Drummoyne",
      description: "Pushpin",
      icon: "icon.svg"
    }
  },
  {
    location: [-33.9046715, 151.1300165],
    addHandler: "mouseover",
    infoboxOption: {
      htmlContent: infoboxTemplate({
        title: "Yes!",
        descriptions: [
          "We provide service in Dulwich Hill.",
          "Contact us if you live nearby."
        ],
        image: "mutt.jpg"
      })
    },
    pushPinOption: {
      title: "Dulwich Hill",
      description: "Pushpin",
      icon: "icon.svg"
    }
  },
  {
    location: [-33.9001526, 151.161025],
    addHandler: "mouseover",
    infoboxOption: {
      htmlContent: infoboxTemplate({
        title: "Yes!",
        descriptions: [
          "We provide service in Enmore.",
          "Contact us if you live nearby."
        ],
        image: "mutt.jpg"
      })
    },
    pushPinOption: { title: "Enmore", description: "Pushpin", icon: "icon.svg" }
  },
  {
    location: [-33.9022257, 151.1818143],
    addHandler: "mouseover",
    infoboxOption: {
      htmlContent: infoboxTemplate({
        title: "Yes!",
        descriptions: [
          "We provide service in Erskineville.",
          "Contact us if you live nearby."
        ],
        image: "mutt.jpg"
      })
    },
    pushPinOption: {
      title: "Erskineville",
      description: "Pushpin",
      icon: "icon.svg"
    }
  },
  {
    location: [-33.8957632, 151.1748933],
    addHandler: "mouseover",
    infoboxOption: {
      htmlContent: infoboxTemplate({
        title: "Yes!",
        descriptions: [
          "We provide service in Eveleigh.",
          "Contact us if you live nearby."
        ],
        image: "mutt.jpg"
      })
    },
    pushPinOption: {
      title: "Eveleigh",
      description: "Pushpin",
      icon: "icon.svg"
    }
  },
  {
    location: [-33.8663797, 151.1180897],
    addHandler: "mouseover",
    infoboxOption: {
      htmlContent: infoboxTemplate({
        title: "Yes!",
        descriptions: [
          "We provide service in Five Dock.",
          "Contact us if you live nearby."
        ],
        image: "mutt.jpg"
      })
    },
    pushPinOption: {
      title: "Five Dock",
      description: "Pushpin",
      icon: "icon.svg"
    }
  },
  {
    location: [-33.880595, 151.1772964],
    addHandler: "mouseover",
    infoboxOption: {
      htmlContent: infoboxTemplate({
        title: "Yes!",
        descriptions: [
          "We provide service in Forest Lodge.",
          "Contact us if you live nearby."
        ],
        image: "mutt.jpg"
      })
    },
    pushPinOption: {
      title: "Forest Lodge",
      description: "Pushpin",
      icon: "icon.svg"
    }
  },
  {
    location: [-33.8778472, 151.1818805],
    addHandler: "mouseover",
    infoboxOption: {
      htmlContent: infoboxTemplate({
        title: "Yes!",
        descriptions: [
          "We provide service in Glebe.",
          "Contact us if you live nearby."
        ],
        image: "mutt.jpg"
      })
    },
    pushPinOption: { title: "Glebe", description: "Pushpin", icon: "icon.svg" }
  },
  {
    location: [-33.8796998, 151.1215402],
    addHandler: "mouseover",
    infoboxOption: {
      htmlContent: infoboxTemplate({
        title: "Yes!",
        descriptions: [
          "We provide service in Haberfield.",
          "Contact us if you live nearby."
        ],
        image: "mutt.jpg"
      })
    },
    pushPinOption: {
      title: "Haberfield",
      description: "Pushpin",
      icon: "icon.svg"
    }
  },
  {
    location: [-33.910048, 151.1241389],
    addHandler: "mouseover",
    infoboxOption: {
      htmlContent: infoboxTemplate({
        title: "Yes!",
        descriptions: [
          "We provide service in Hurlestone Park.",
          "Contact us if you live nearby."
        ],
        image: "mutt.jpg"
      })
    },
    pushPinOption: {
      title: "Hurlestone Park",
      description: "Pushpin",
      icon: "icon.svg"
    }
  },
  {
    location: [-33.8819641, 151.1473754],
    addHandler: "mouseover",
    infoboxOption: {
      htmlContent: infoboxTemplate({
        title: "Yes!",
        descriptions: [
          "We provide service in Leichhardt.",
          "Contact us if you live nearby."
        ],
        image: "mutt.jpg"
      })
    },
    pushPinOption: {
      title: "Leichhardt",
      description: "Pushpin",
      icon: "icon.svg"
    }
  },
  {
    location: [-33.8953803, 151.1422786],
    addHandler: "mouseover",
    infoboxOption: {
      htmlContent: infoboxTemplate({
        title: "Yes!",
        descriptions: [
          "We provide service in Lewisham.",
          "Contact us if you live nearby."
        ],
        image: "mutt.jpg"
      })
    },
    pushPinOption: {
      title: "Lewisham",
      description: "Pushpin",
      icon: "icon.svg"
    }
  },
  {
    location: [-33.8710126, 151.152751],
    addHandler: "mouseover",
    infoboxOption: {
      htmlContent: infoboxTemplate({
        title: "Yes!",
        descriptions: [
          "We provide service in Lilyfield.",
          "Contact us if you live nearby."
        ],
        image: "mutt.jpg"
      })
    },
    pushPinOption: {
      title: "Lilyfield",
      description: "Pushpin",
      icon: "icon.svg"
    }
  },
  {
    location: [-33.912264, 151.1470653],
    addHandler: "mouseover",
    infoboxOption: {
      htmlContent: infoboxTemplate({
        title: "Yes!",
        descriptions: [
          "We provide service in Marrickville.",
          "Contact us if you live nearby."
        ],
        image: "mutt.jpg"
      })
    },
    pushPinOption: {
      title: "Marrickville",
      description: "Pushpin",
      icon: "icon.svg"
    }
  },
  {
    location: [-33.8405273, 151.1021419],
    addHandler: "mouseover",
    infoboxOption: {
      htmlContent: infoboxTemplate({
        title: "Yes!",
        descriptions: [
          "We provide service in Mortlake.",
          "Contact us if you live nearby."
        ],
        image: "mutt.jpg"
      })
    },
    pushPinOption: {
      title: "Mortlake",
      description: "Pushpin",
      icon: "icon.svg"
    }
  },
  {
    location: [-33.8998891, 151.1714736],
    addHandler: "mouseover",
    infoboxOption: {
      htmlContent: infoboxTemplate({
        title: "Yes!",
        descriptions: [
          "We provide service in Newtown.",
          "Contact us if you live nearby."
        ],
        image: "mutt.jpg"
      })
    },
    pushPinOption: {
      title: "Newtown",
      description: "Pushpin",
      icon: "icon.svg"
    }
  },
  {
    location: [-33.8945001, 151.1512107],
    addHandler: "mouseover",
    infoboxOption: {
      htmlContent: infoboxTemplate({
        title: "Yes!",
        descriptions: [
          "We provide service in Petersham.",
          "Contact us if you live nearby."
        ],
        image: "mutt.jpg"
      })
    },
    pushPinOption: {
      title: "Petersham",
      description: "Pushpin",
      icon: "icon.svg"
    }
  },
  {
    location: [-33.8658833, 151.1393924],
    addHandler: "mouseover",
    infoboxOption: {
      htmlContent: infoboxTemplate({
        title: "Yes!",
        descriptions: [
          "We provide service in Rodd Point.",
          "Contact us if you live nearby."
        ],
        image: "mutt.jpg"
      })
    },
    pushPinOption: {
      title: "Rodd Point",
      description: "Pushpin",
      icon: "icon.svg"
    }
  },
  {
    location: [-33.8644916, 151.16554],
    addHandler: "mouseover",
    infoboxOption: {
      htmlContent: infoboxTemplate({
        title: "Yes!",
        descriptions: [
          "We provide service in Rozelle.",
          "Contact us if you live nearby."
        ],
        image: "mutt.jpg"
      })
    },
    pushPinOption: {
      title: "Rozelle",
      description: "Pushpin",
      icon: "icon.svg"
    }
  },
  {
    location: [-33.8583447, 151.1376698],
    addHandler: "mouseover",
    infoboxOption: {
      htmlContent: infoboxTemplate({
        title: "Yes!",
        descriptions: [
          "We provide service in Russell Lea.",
          "Contact us if you live nearby."
        ],
        image: "mutt.jpg"
      })
    },
    pushPinOption: {
      title: "Russell Lea",
      description: "Pushpin",
      icon: "icon.svg"
    }
  },
  {
    location: [-33.8936552, 151.1611048],
    addHandler: "mouseover",
    infoboxOption: {
      htmlContent: infoboxTemplate({
        title: "Yes!",
        descriptions: [
          "We provide service in Stanmore.",
          "Contact us if you live nearby."
        ],
        image: "mutt.jpg"
      })
    },
    pushPinOption: {
      title: "Stanmore",
      description: "Pushpin",
      icon: "icon.svg"
    }
  },
  {
    location: [-33.915904, 151.1679236],
    addHandler: "mouseover",
    infoboxOption: {
      htmlContent: infoboxTemplate({
        title: "Yes!",
        descriptions: [
          "We provide service in St Peters.",
          "Contact us if you live nearby."
        ],
        image: "mutt.jpg"
      })
    },
    pushPinOption: {
      title: "St Peters",
      description: "Pushpin",
      icon: "icon.svg"
    }
  },
  {
    location: [-33.8791114, 151.0723308],
    addHandler: "mouseover",
    infoboxOption: {
      htmlContent: infoboxTemplate({
        title: "Yes!",
        descriptions: [
          "We provide service in Strathfield.",
          "Contact us if you live nearby."
        ],
        image: "mutt.jpg"
      })
    },
    pushPinOption: {
      title: "Strathfield",
      description: "Pushpin",
      icon: "icon.svg"
    }
  },
  {
    location: [-33.8934633, 151.1328659],
    addHandler: "mouseover",
    infoboxOption: {
      htmlContent: infoboxTemplate({
        title: "Yes!",
        descriptions: [
          "We provide service in Summer Hill.",
          "Contact us if you live nearby."
        ],
        image: "mutt.jpg"
      })
    },
    pushPinOption: {
      title: "Summer Hill",
      description: "Pushpin",
      icon: "icon.svg"
    }
  },
  {
    location: [-33.9169923, 151.1659653],
    addHandler: "mouseover",
    infoboxOption: {
      htmlContent: infoboxTemplate({
        title: "Yes!",
        descriptions: [
          "We provide service in Sydenham.",
          "Contact us if you live nearby."
        ],
        image: "mutt.jpg"
      })
    },
    pushPinOption: {
      title: "Sydenham",
      description: "Pushpin",
      icon: "icon.svg"
    }
  },
  {
    location: [-33.9247693, 151.1559047],
    addHandler: "mouseover",
    infoboxOption: {
      htmlContent: infoboxTemplate({
        title: "Yes!",
        descriptions: [
          "We provide service in Tempe.",
          "Contact us if you live nearby."
        ],
        image: "mutt.jpg"
      })
    },
    pushPinOption: { title: "Tempe", description: "Pushpin", icon: "icon.svg" }
  },
  {
    location: [-33.857582, 151.1277799],
    addHandler: "mouseover",
    infoboxOption: {
      htmlContent: infoboxTemplate({
        title: "Yes!",
        descriptions: [
          "We provide service in Wareemba.",
          "Contact us if you live nearby."
        ],
        image: "mutt.jpg"
      })
    },
    pushPinOption: {
      title: "Wareemba",
      description: "Pushpin",
      icon: "icon.svg"
    }
  }
];

const pushPins = {
  cityPushPins,
  westPushPins
};

export class AreasWeServiceView extends Component {
  constructor() {
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
        <section className="section title-heading">
          <div className="container">
            <div className="content has-text-centered">
              <h1>Areas We Service</h1>
            </div>
          </div>
        </section>
        <section className="section">
          <div className="container">
            <div className="content has-text-centered" />
          </div>

          <div className="container">
            <div className="content has-text-centered">
              <div className="columns is-centered">
                <div className="column is-half">
                  <div className="box content">
                    <p>
                      Whether you are interested in advanced obedience training,
                      dog desensitisation, dog behaviour therapy, or dog trick
                      training, our professional dog trainers can extend their
                      services to clients in various locations.
                    </p>
                    <p>
                      Our Sydney dog trainers can come to you in the following
                      Sydney suburbs - if your suburb isn't listed but is near
                      one that is, please contact us to discuss.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="content has-text-centered">
            <div className="columns is-centered">
              <div className="column is-half">
                <div className="box content">
                  <div className="selectdiv">
                    <div className="select is-rounded">
                      <select onChange={this.selectCategory}>
                        <option value="cityPushPins">City</option>
                        <option value="westPushPins">Inner West</option>
                      </select>
                    </div>
                  </div>
                  <div style={{ height: "500px", width: "100%" }}>
                    <Map
                      pushPins={this.state.pushPins}
                      center={[
                        this.state.position.latitude,
                        this.state.position.longitude
                      ]}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }
}

export default AreasWeServiceView;
