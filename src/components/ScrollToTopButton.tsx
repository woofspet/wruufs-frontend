import React, { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa";
import "./ScrollToTopButton.css";

const ScrollToTopButton: React.FC = () => {
  const [showScroll, setShowScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScroll(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    showScroll && (
      <button className="scroll-to-top" onClick={scrollToTop}>
        <FaArrowUp className="text-xl" />
      </button>
    )
  );
};

export default ScrollToTopButton;
