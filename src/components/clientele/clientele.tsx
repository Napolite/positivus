/* eslint-disable @typescript-eslint/no-unused-vars */
import React from "react";
import "./clientele.css";
import { Amazon, Zoom, Hubspot, Netflix, Dribble, Notion } from "../../assets";

function Clientele() {
  const clientele = [Amazon, Zoom, Hubspot, Netflix, Dribble, Notion];
  return (
    <div className="client-root">
      {clientele?.map((client) => (
        <img src={client} />
      ))}
    </div>
  );
}

export default Clientele;
