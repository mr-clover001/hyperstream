import React from "react";
import "./SideBar.css";
import { MdKeyboardArrowDown } from "react-icons/md";
const SideBar = () => {
  return (
    <>
      <div className="sidebar">
        <div className="sort-container">
          <h6 className="sort-container-heading">SORT</h6>
          <div className="sort-options sidebar-options">Most Popular</div>
          <div className="sort-options sidebar-options">Release Date</div>
          <div className="sort-options sidebar-options">
            Alphabetical - A to Z
          </div>
          <div className="sort-options sidebar-options">
            Alphabetical - Z to A
          </div>
          <div className="sort-options sidebar-options">New to EA Play</div>
        </div>
        <div className="filter-container">
          <h6 className="filter-container-heading">Filter</h6>
          <h6 className="genre-container-heading">
            GENRE
            <span>
              <MdKeyboardArrowDown />
            </span>
          </h6>
          <div className="genre-options sidebar-options">Action</div>
          <div className="genre-options sidebar-options">Adventure</div>
          <div className="genre-options sidebar-options">Flight</div>
          <div className="genre-options sidebar-options">Horror</div>
          <div className="genre-options sidebar-options">Puzzle</div>
          <div className="genre-options sidebar-options">Racing</div>
          <div className="genre-options sidebar-options">SHooting</div>
          <div className="genre-options sidebar-options">Simulation</div>
          <div className="genre-options sidebar-options">Sports</div>

          <h6 className="pt-container-heading">
            PLATFORM
            <span>
              <MdKeyboardArrowDown />
            </span>
          </h6>

          <div className="pt-options sidebar-options">RPG</div>
          <div className="pt-options sidebar-options">iPad</div>
          <div className="pt-options sidebar-options">iPhone</div>
          <div className="pt-options sidebar-options">PlayStation 3</div>
          <div className="pt-options sidebar-options">PC</div>
          <div className="pt-options sidebar-options">Macintosh</div>
          <div className="pt-options sidebar-options">Xbox 360</div>
        </div>
      </div>
    </>
  );
};

export default SideBar;
