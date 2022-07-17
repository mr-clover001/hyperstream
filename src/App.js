import "./App.css";
import NavBar from "./Component/Navbar/NavBar";
import Footer from "./Component/Footer/Footer";
import Section from "./Component/Section/Section";
import SideBar from "./Component/Section/SideBar";
import SectionHeading from "./Component/Section/SectionHeading";
import { useState } from "react";
import axios from "axios";

const App = () => {
  const [homeData, setHomeData] = useState([]);

  axios
    .get(
      "https://s3-ap-southeast-1.amazonaws.com/he-public-data/gamesarena274f2bf.json"
    )
    .then((data) => {
      if (homeData.length == 0) setHomeData(data["data"]);
    })
    .catch((e) => {
      console.log(`Fetching an error`);
    });

  return (
    <>
      <div className="App">
        <div className="main-container">
          <div className="nav-container">
            <NavBar homeData={homeData} setHomeData={setHomeData} />
          </div>
          <div className="page-data-container">
            <div className="section-heading-container">
              <SectionHeading />
            </div>
            <div className="section-container">
              <div className="main-section-container">
                <Section homeData={homeData} setHomeData={setHomeData} />
              </div>
              <div className="sidebar-container">
                <SideBar />
              </div>
            </div>
            <div className="footer-container">
              <Footer />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default App;
