
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import { useEffect, useState } from "react";
import Navigation from "./components/Navigation";
import Home from "./components/Home";
import HatPicker from "./components/HatPicker";
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const token = "6tySK2p9ZxyKAySWyyNU";
  const [metadata, setMetadata] = useState({});
  const privateIp = "http://192.168.0.220:32400/";
  const statisticsQuery = privateIp + "statistics/media";
  useEffect(() => {
    fetch(statisticsQuery, {
      headers: { Accept: "application/json", "X-Plex-Token": token },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network Response Failure");
        }
        return response.json();
      })
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.log("Error: ", error);
      });
  });
  return (
    <Router>
      <div className="App">
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/picker" element={<HatPicker />}></Route>
          {/* <Route path="/Plex" element={<Plex metadata={metadata} />}></Route>
          <Route
            path="/Whiteboard"
            element={<Whiteboard width={2000} height={750} />}
          /> */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;