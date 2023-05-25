import "./App.css";
import Navbar from "./Components/Navbar";
import About from "./Sections/About/About";
import Contact from "./Sections/Contact/Contact";
import Home from "./Sections/Home/Home";
import Projects from "./Sections/Projects/Projects";
import Skills from "./Sections/Skills/Skills";
import Experiance from "./Sections/Experiance/Experiance";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <About />
      <Experiance />
      <Projects />
      <Skills />
      <Contact />
    </div>
  );
}

export default App;
