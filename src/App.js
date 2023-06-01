import "./App.css";
import axios from "axios";
//react slick css
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
//Routing
import { Route, Routes } from "react-router-dom";

//Pages
import Homepage from "./pages/Home.page";
import Moviepage from "./pages/Movie.page";
import Playspage from "./pages/Plays.page";

axios.defaults.baseURL = "https://api.themoviedb.org/3";
axios.defaults.params = {};
axios.defaults.params["api_key"] = process.env.REACT_APP_API_KEY;

function App() {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/movie/:id" element={<Moviepage />} />
      <Route path="/plays" element={<Playspage />} />
    </Routes>
  );
}

export default App;
