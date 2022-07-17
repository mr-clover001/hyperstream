import React, { useState } from "react";
import "./Section.css";
import Card from "../Images/IMG2.jpg";

import axios from "axios";
const Section = (props) => {
  return (
    <>
      <div className="section sec-1">
        <div className="section-data">
          {props.homeData.map((data) => {
            <div className="title-container"></div>;
            if (data.hasOwnProperty("title", "score")) {
              return (
                <>
                  <div className="card-container">
                    <img src={Card} className="card-img-top" alt="..." />
                    <div className="card">
                      <h5 className="card-title">{data["title"]}</h5>
                      <p className="card-detail">{data["platform"]}</p>
                    </div>
                  </div>
                </>
              );
            }
          })}
        </div>
      </div>
    </>
  );
};

export default Section;
