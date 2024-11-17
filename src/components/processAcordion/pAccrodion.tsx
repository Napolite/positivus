import React, { useState } from "react";
import "./paccrodion.css";
import { Minus, Plus } from "../../assets";

function ProcessAccordion() {
  const [open, setOpen] = useState(true);
  return (
    <div className="p-acc-root">
      <div className="p-acc-header">
        <div className="p-acc-header-title">
          <div>01</div>
          <div>Consultation</div>
        </div>
        <button
          className="process-button"
          onClick={() => {
            setOpen(!open);
          }}
        >
          <img src={open ? Minus : Plus} />
        </button>
      </div>
      <div className="process-desc">
        During the initial consultation, we will discuss your business goals and
        objectives, target audience, and current marketing efforts. This will
        allow us to understand your needs and tailor our services to best fit
        your requirements.
      </div>
    </div>
  );
}

export default ProcessAccordion;
