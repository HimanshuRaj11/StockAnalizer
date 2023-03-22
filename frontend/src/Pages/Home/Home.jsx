import React from "react";
import "./Home.css";

export default function Home() {
  return (
    <div className="HomeContainer">
      <div className="homeTopContainer">
        <div className="homeTop">
          <div className="headerLine Font2">
            Select Your Stock With Our Specialists
          </div>
          <div className="detailLine Font3">
            Choose Your Stock in Better Way To be A Profitable Player in Stock Market
          </div>
          <button className="getStart Font3">Get Start</button>
        </div>
      </div>

      <div className="homeSecondComponent">
        <div className="secondLeft">
            <div className="HomeCard"></div>
            <div className="HomeCard"></div>
            <div className="HomeCard"></div>
            <div className="HomeCard"></div>
        </div>
        <div className="secondRight"></div>
      </div>

      
    </div>
  );
}
