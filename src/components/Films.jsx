import React from "react";

class Films extends React.Component {
  state = {
    elements: []
  };
  componentDidMount = async () => {
    try {
      const response = await fetch("http://www.omdbapi.com/?s=american+pie&apikey=327719c0");
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
  };

  render() {
    const { elements } = this.state;
    return (
      <div>
        {elements.Search &&
          elements.Search.map((element) => (
            <div key={element.imdbID}>
              <div>{element.Title}</div>
            </div>
          ))}
      </div>
    );
  }
}

export default Films;
