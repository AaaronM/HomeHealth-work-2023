import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Contacts from "./pages/Contacts";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" exact element={<Home />}></Route>
        <Route path="/About" element={<About />}></Route>
        <Route path="/Services" element={<Services />}></Route>
        <Route path="/Contacts" element={<Contacts />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
