import "../css/App.css";
import Navigation from "./Navigation";
import Home from "./Home";
import HatPicker from "./HatPicker";
import { HashRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/picker" element={<HatPicker />}></Route>
          {/* <Route path="/Plex" element={<Plex />}></Route> */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
