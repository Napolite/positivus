import React from "react";
import { BodyIllustration } from "../../assets";

function Landing() {
  return (
    <div>
      <div>
        <div>Navigating the landscape for success</div>
        <div>
          Our digital marketing agency helps businesses grow and succeed online
          through a range of services including SEO, PPC, social media
          marketing, and content creation.
        </div>
        <div>Book a consultation</div>
      </div>
      <div>
        <img src={BodyIllustration} />
      </div>
    </div>
  );
}

export default Landing;
