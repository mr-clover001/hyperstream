import React, { useState } from "react";

import axios from "axios";
const Section = () => {
  const [homeData, setHomeData] = useState([]);
  axios
    .get(
      "https://s3-ap-southeast-1.amazonaws.com/he-public-data/gamesarena274f2bf.json"
    )
    .then((data) => {
      setHomeData(data["data"].slice(1, 50));
    })
    .catch((e) => {
      console.log(`Fetching error`);
    });
  return (
    <>
      <div className="section sec-1">
        <div className="section-data">
          {homeData.map((data) => {
            <div className="title-container"></div>;
            if (data.hasOwnProperty("title")) {
              return <p>{data["title"]}</p>;
            }
          })}
        </div>
      </div>
    </>
  );
};

export default Section;
