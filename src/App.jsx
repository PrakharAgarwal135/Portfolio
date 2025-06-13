import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Project from "./components/Projects/Project";
import Timeline from "./components/Experience/Timeline";
import About from "./components/About.jsx";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="max-w-[90%] xl:max-w-[1223px] w-full mx-auto overflow-x-hidden">
      <Navbar />
      <Hero />
      <Project />
      <Timeline />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
