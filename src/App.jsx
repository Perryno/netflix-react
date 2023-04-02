import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./App.css";

import MyTopBar from "./components/MyTopBar";
import TvShows from "./components/TvShows";
import Shows from "./components/Shows";
import Films from "./components/Films";

function App() {
  return (
    <div className="app">
      <MyTopBar />
      <TvShows />
      <Shows text="Fast and Furious" />
      <Films search="fast+and+furious" />
      <Shows text="Twilight" />
      <Films search="twilight" />
      <Shows text="Harry potter" />
      <Films search="harry+potter" />
    </div>
  );
}

export default App;
