import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Blogs from "./pages/Blogs/Blogs/Blogs";
import Contact from "./pages/Contact/Contact/Contact";
import Home from "./pages/Home/Home/Home";
import Project from "./pages/Projects/Project/Project";
import Projects from "./pages/Projects/Projects/Projects";
import Footer from "./pages/Shared/Footer/Footer";
import Navigation from './pages/Shared/Navbar/Navigation';
import NotFound from './pages/Shared/NotFound/NotFound';
import 'animate.css';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="home" element={<Home />} />
          <Route path="projects" element={<Projects />} />
          <Route path="project" element={<Project />}>
            <Route path=":projectId" element={<Project />} />
          </Route>
          <Route path="contact" element={<Contact />} />
          <Route path="blogs" element={<Blogs />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
