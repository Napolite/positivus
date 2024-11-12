/* eslint-disable @typescript-eslint/no-unused-vars */
import React from "react";

import "./tab.css";
import { Arrow } from "../../assets";

interface Props {
  topText: string;
  bottomtext: string;
  image: string;
  mainBG: string;
  headerBG: string;
}

function ServicesTab({ topText, bottomtext, image, mainBG, headerBG }: Props) {
  return (
    <div className="tab-root" style={{ backgroundColor: `var(${mainBG})` }}>
      <div className="tab-left">
        <div className="tab-header">
          {[topText, bottomtext].map((text) => (
            <div
              style={{
                backgroundColor: `var(${headerBG})`,
              }}
            >
              {text}
            </div>
          ))}
        </div>
        <div className="learn-more">
          <img src={Arrow} />
          <p>Learn More</p>
        </div>
      </div>

      <img src={image} />
    </div>
  );
}

export default ServicesTab;
