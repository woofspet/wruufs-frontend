// src/pages/HomePage.tsx
// import React from "react";
import Home from "./Home";
import About from "./About";
import Products from "./Products";
import Contact from "./Contact";
// import Tips from "./Tips";
import ScrollToTopButton from "../components/ScrollToTopButton";
// import Features from "./Feature";
const HomePage = () => {
  return (
    <>
      <main>
        <section id="home" className="min-h-screen">
          <Home />
        </section>
        <section id="about" className="min-h-screen">
          <About />
        </section>
        <section id="products" className="min-h-screen">
          <Products />
        </section>
        {/* <section id="tips" className="min-h-screen">
          <Tips />
        </section> */}
        <section id="contact" className="min-h-screen">
          <Contact />
        </section>
      </main>
      <ScrollToTopButton />
    </>
  );
};

export default HomePage;
