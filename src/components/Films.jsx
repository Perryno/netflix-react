import React from "react";
class Films extends React.Component {
  state = {
    reservations: []
  };
  componentDidMount = async () => {
    try {
      const response = await fetch("http://www.omdbapi.com/?i=tt3896198&apikey=327719c0");
      if (response.ok) {
        const data = await response.json();
        this.setState({ reservations: data });
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
        <div>ciao</div>
      </div>
    );
  }
}

export default Films;
