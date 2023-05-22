import "./App.css";
//react slick css
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
//Routing
import { Route, Routes } from "react-router-dom";

//Pages
import Homepage from "./pages/Home.page";
import Moviepage from "./pages/Movie.page";
import Playspage from "./pages/Plays.page";

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
