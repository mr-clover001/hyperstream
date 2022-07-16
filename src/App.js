import "./App.css";
import NavBar from "./Component/Navbar/NavBar";
import Footer from "./Component/Footer/Footer";
import Section from "./Component/Section/Section";
import SideBar from "./Component/Section/SideBar";
import SectionHeading from "./Component/Section/SectionHeading";

const App = () => {
  return (
    <>
      <div className="App">
        <div className="main-container">
          <div className="nav-container">
            <NavBar />
          </div>
          <div className="page-data-container">
            <div className="section-heading-container">
              <SectionHeading />
            </div>
            <div className="section-container">
              <div className="main-section-container">
                <Section />
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
