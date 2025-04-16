import Navbar from "./components/Navbar.jsx";
import Hero from "./sections/Hero.jsx";
import {Showcase} from "./sections/Showcase.jsx";
import LogoShowcase from "./sections/LogoShowcase.jsx";
import Attributes from "./sections/Attributes.jsx";
import Footer from "./sections/Footer.jsx";
import Experience from "./sections/Experience.jsx";
import Skills from "./sections/Skills.jsx";
import Testimonials from "./sections/Testimonials.jsx";
import Contact from "./sections/Contact.jsx";

function App() {


  return (
    <>
      <Navbar />
      <Hero />
      <Showcase/>
      {/*<LogoShowcase/>*/}
      <Attributes/>
      <Experience/>
      <Skills/>
      <Testimonials/>
      <Contact/>
      <Footer/>
    </>
  )
}

export default App
