import React, { useState } from "react";
import "./paccrodion.css";
import { Minus, Plus } from "../../assets";

function ProcessAccordion() {
  const [open, setOpen] = useState(true);
  const [startAnim, setAnim] = useState(true);
  const [openTab, setOpenTab] = useState(true);
  return (
    <div
      className="p-acc-root"
      style={{
        animation: openTab
          ? "expandHeight 0.5s forwards"
          : "contractHeight 0.5s forwards",
        background: open ? "var(--green)" : "var(--grey)",
      }}
    >
      <div
        className="p-acc-header"
        style={{
          borderBottom: openTab ? "1px solid var(--black)" : "none",
        }}
      >
        <div className="p-acc-header-title">
          <div>01</div>
          <div>Consultation</div>
        </div>
        <button
          className="process-button"
          onClick={() => {
            setAnim(!startAnim);
            setOpenTab(!openTab);
            setTimeout(() => setOpen(!open), 500);
          }}
        >
          <img
            src={open ? Minus : Plus}
            style={{
              animation: `${
                startAnim ? "animateOut" : "animateIn"
              } 1s forwards`,
            }}
          />
        </button>
      </div>
      {/* {openTab && ( */}
      <div
        className="process-desc"
        style={{
          animation: openTab ? "fadeIn 1s forwards" : "fadeOut 0.2s forwards",
        }}
      >
        During the initial consultation, we will discuss your business goals and
        objectives, target audience, and current marketing efforts. This will
        allow us to understand your needs and tailor our services to best fit
        your requirements.
      </div>
      {/* )} */}
    </div>
  );
}

export default ProcessAccordion;
