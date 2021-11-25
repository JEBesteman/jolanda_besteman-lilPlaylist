import "./App.css";
import SongOverview from "./components/SongOverview";
import Header from "./components/Header";
import { Routes, Route } from "react-router-dom";
import About from "./components/About";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<SongOverview />} />
        <Route path="/About" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
