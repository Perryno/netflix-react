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
    return (
      <div>
        {this.state.elements.Search.map((item) => (
          <li key={item.id}>{item.Title}</li>
        ))}
      </div>
    );
  }
}

export default Films;
