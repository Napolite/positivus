import React from "react";

import "./landing.css";
import { BodyIllustration } from "../../assets";

function Landing() {
  return (
    <div className="root-body">
      <div className="main-left">
        <div className="main-body-quote">
          Navigating the
          <br /> digital landscape <br /> for success
        </div>
        <div className="body-quote">
          Our digital marketing agency helps businesses
          <br />
          grow and succeed online through a range of services including SEO,
          PPC, social media marketing, and content creation.
        </div>
        <div className="consultation-button">Book a consultation</div>
      </div>
      <img src={BodyIllustration} />
    </div>
  );
}

export default Landing;
