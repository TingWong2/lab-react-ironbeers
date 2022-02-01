import "./App.css";
import Beers from "./components/Beers";
import NewBeer from "./components/NewBeer";
import RandomBeer from "./components/RandomBeer";
import Home from "./components/Home";
import { Routes, Route } from "react-router-dom";
import Hearder from "./components/Header";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/beers" element={<Beers />} />
        <Route path="/newBeer" element={<NewBeer />} />
        <Route patch="/randomBeer" element={<RandomBeer />} />
      </Routes>
    </div>
  );
}

export default App;
