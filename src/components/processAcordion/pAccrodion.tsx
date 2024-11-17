import React, { useState } from "react";
import "./paccrodion.css";
import { Minus, Plus } from "../../assets";
interface Props {
  sn: string;
  title: string;
  note: string;
}

function ProcessAccordion({ sn, title, note }: Props) {
  const [open, setOpen] = useState(false);
  const [startAnim, setAnim] = useState(false);
  const [openTab, setOpenTab] = useState(false);
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
          <div>{sn}</div>
          <div>{title}</div>
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
        {note}
      </div>
      {/* )} */}
    </div>
  );
}

export default ProcessAccordion;
