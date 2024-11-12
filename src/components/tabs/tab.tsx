/* eslint-disable @typescript-eslint/no-unused-vars */
import React from "react";

import "./tab.css";
import { Arrow } from "../../assets";

interface Props {
  topText: string;
  bottomText: string;
  image: string;
  mainBG: string;
  headerBG: string;
  fontColor: string;
  ArrowK?: string;
}

function ServicesTab({
  topText,
  bottomText,
  image,
  mainBG,
  headerBG,
  fontColor,
  ArrowK,
}: Props) {
  return (
    <div className="tab-root" style={{ backgroundColor: `var(${mainBG})` }}>
      <div className="tab-left">
        <div className="tab-header">
          {[topText, bottomText].map((text) => (
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
          <img src={ArrowK ? ArrowK : Arrow} />
          <p
            style={{
              color: `var(${fontColor})`,
            }}
          >
            Learn More
          </p>
        </div>
      </div>

      <img src={image} />
    </div>
  );
}

export default ServicesTab;
