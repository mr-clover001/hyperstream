import React, { useState, useEffect } from "react";
import { ImSearch } from "react-icons/im";
import { BsGithub } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { MdArrowRight } from "react-icons/md";
import "./NavBar.css";
import { filterMatchText } from "../../controller/filter-data";

const NavBar = (props) => {
  const [userInput, setUserInput] = useState("");

  const userInputHandler = (e) => {
    console.log("We are here");
    setUserInput(e.target.value.toLowerCase());

    const filterData = filterMatchText(props.homeData, userInput);

    props.setHomeData(filterData);
  };

  return (
    <>
      <div className="navbar">
        <div className="logo">HyperStream</div>
        <div className="search">
          <p>
            <ImSearch />
          </p>
          <input
            type="text"
            placeholder="Search Games and more "
            value={userInput}
            onChange={userInputHandler}
          />
        </div>
        <div className="options">
          <div className="opt Home">Home</div>
          <div className="opt genre">
            Genre
            <span>
              <MdArrowRight />
            </span>
          </div>
          <div className="opt platform">
            Platform
            <span>
              <MdArrowRight />
            </span>
          </div>
        </div>
        <div className="contactus">
          <div className="icon">
            <BsGithub />
          </div>
          <div className="icon">
            <BsInstagram />
          </div>
          <div className="icon">
            <BsLinkedin />
          </div>
        </div>
        <div className="loginPage">
          <a className="btn signIn">Sign In</a>
          <a className="btn signOut">Sign Out</a>
        </div>
      </div>
    </>
  );
};
export default NavBar;
