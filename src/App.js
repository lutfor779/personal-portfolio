import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Contact from "./pages/Contact/Contact/Contact";
import Home from "./pages/Home/Home/Home";
import Projects from "./pages/Projects/Projects/Projects";
import Navigation from './pages/Shared/Navbar/Navigation';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navigation />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="home" element={<Home />} />
          <Route path="projects" element={<Projects />} />
          <Route path="contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
