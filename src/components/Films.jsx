import React from "react";
import { Search } from "react-bootstrap-icons";

class Films extends React.Component {
  state = {
    elements: []
  };
  removeElements = () => {
    const row = document.querySelector(".row .no-wrap");

    const items = row.querySelectorAll(".col");

    let totalWidth = 0;
    for (let i = 0; i < items.length; i++) {
      totalWidth += items[i].offsetWidth;
    }
    if (totalWidth > row.offsetWidth) {
      let excessWidth = totalWidth - row.offsetWidth;
      for (let i = items.length - 1; i >= 0; i--) {
        excessWidth -= items[i].offsetWidth;
        row.removeChild(items[i]);
        if (excessWidth <= 0) {
          break;
        }
      }
    }
  };

  componentDidMount = async () => {
    try {
      const response = await fetch(`http://www.omdbapi.com/?s=${this.props.search}&apikey=327719c0`);
      if (response.ok) {
        const data = await response.json();
        console.log(data);
        this.setState({ elements: data });
      } else {
        console.log("error while fetching");
      }
    } catch (e) {
      console.log(e);
    }
    this.removeElements();
  };

  render() {
    const { elements } = this.state;
    return (
      <div className="row no-wrap d-flex imagesContainer ">
        {elements.Search &&
          elements.Search.map((element) => (
            <div className="col col-md-2 col-xl-3 col-sm-6 imageContainer" key={element.imdbID}>
              <img className="imagePoster" src={element.Poster} alt="Poster" />
            </div>
          ))}
      </div>
    );
  }
}

export default Films;
