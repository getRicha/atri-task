import { Routes, Route } from "react-router-dom";
import "./styles.css";
import Home from "./pages/Home.jsx";
import Contact from "./pages/Contact.jsx";
import Projects from "./pages/Projects.jsx";
import Blogs from "./pages/Blogs.jsx";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
<Route path="/contact" element={<Contact />} />
<Route path="/projects" element={<Projects />} />
<Route path="/blogs" element={<Blogs />} />
    </Routes>
  );
}
