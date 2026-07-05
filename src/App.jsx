import React from "react";
import { Routes, Route } from "react-router-dom";
import Landing from "./components/Landing";
import About from "./components/About";
import Projects from "./components/Projects";
import Partners from "./components/Partners";
import LinkedInWallSection from "./components/LinkedInWall";
import Botum from "./components/Botum";
import Footer from "./components/Footer";

import Gallery from "./page/Gallery";

function Home() {
  return (
    <>
      <Landing />
      <About />
      <Projects />
      <Partners />
      <LinkedInWallSection />
      <Botum />
      <Footer />
    </>
  );
}

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/gallery" element={<Gallery />} />
    </Routes>
  );
};

export default App;