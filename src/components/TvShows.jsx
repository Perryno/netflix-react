import React from "react";
import Dropdown from "react-bootstrap/Dropdown";

import { AiFillAppstore } from "react-icons/ai";
import { MdApps } from "react-icons/md";

class TvShows extends React.Component {
  render() {
    return (
      <div className="secTop mb-2">
        <div className="left">
          <div id="TvShows">TV Shows</div>
          <div>
            <Dropdown>
              <Dropdown.Toggle variant="grey" className="white border" id="dropdown-basic">
                Genres
              </Dropdown.Toggle>

              <Dropdown.Menu variant="dark">
                <Dropdown.Item href="#/action-1">Comedy</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Drama</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Thriller</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>
        </div>
        <div className="right">
          <AiFillAppstore className="TopIcon" />
          <MdApps className="TopIcon" />
        </div>
      </div>
    );
  }
}

export default TvShows;
