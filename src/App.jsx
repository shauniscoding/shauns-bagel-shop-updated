import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home/Home";
import Menu from "./pages/Menu/Menu";
import Locations from "./pages/Locations/Locations";
import Catering from "./pages/Catering/Catering";
import About from "./pages/About/About";
import Scrollup from "./Scrollup";


function App() {
  return (
    <div>
      <Scrollup />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/locations" element={<Locations />} />
        <Route path="/catering" element={<Catering />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
}


export default App;
