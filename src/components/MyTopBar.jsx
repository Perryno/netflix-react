import React from "react";
import Logo from "../assets/logo.png";
import { FaSearch, FaBell, FaUser } from "react-icons/fa";

class MyTopBar extends React.Component {
  render() {
    return (
      <div>
        <div className="topBar">
          <div className="left">
            <img src={Logo} alt="logo" />
            <div>Home</div>
            <div className="selected">Tv Shows</div>
            <div>Movies</div>
            <div>Recently Added</div>
            <div>My List</div>
          </div>
          <div className="right">
            <FaSearch className="TopIcon" />
            <div>Kids</div>
            <FaBell className="TopIcon" />
            <FaUser className="TopIcon" />
          </div>
        </div>
      </div>
    );
  }
}

export default MyTopBar;
