import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import FooterStyles from "./../../assets/styles/FooterSCSS/mystyles.css";

class Footer extends Component {
  render() {
    return (
      <footer className="footer">
        <div className="content">
          <h5 className="has-text-centered">
            <strong>CONTACT US</strong> <span>0410 626 677</span>
          </h5>
          <h5 className="has-text-centered">
            <strong has-text-centered>FIND US</strong>{" "}
            <span>PO Box 37 Camperdown NSW 1450</span>
          </h5>
        </div>
        <div>
          <div className="columns has-text-centered is-size-1 is-gapless">
            <div class="column">
              <div className="footericons">
                <FontAwesomeIcon icon={["fab", "instagram"]} />

                <FontAwesomeIcon icon={["fab", "twitter-square"]} />

                <FontAwesomeIcon icon={["fab", "facebook-square"]} />
              </div>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
