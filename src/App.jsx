import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./App.css";
import { Container } from "react-bootstrap";

import MyTopBar from "./components/MyTopBar";
import TvShows from "./components/TvShows";
import Shows from "./components/Shows";
import Films from "./components/Films";

function App() {
  return (
    <div className="app">
      <Container>
        <MyTopBar />
        <TvShows />
        <Shows text="Trending Now" />
        <Films />
      </Container>
    </div>
  );
}

export default App;
