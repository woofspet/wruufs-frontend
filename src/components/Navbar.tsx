import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { useNavigate, useLocation } from "react-router-dom";
import Search from "./Search";
import Profile from "./Profile";
import "./Navbar.css";
import { Link } from "react-router-dom";

const navItems = ["Home", "About", "Products", "Contact"];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const handleNavClick = (item: string) => {
    setOpen(false);

    const pathMap: { [key: string]: string } = {
      home: "/",
      about: "/about",
      products: "/products",
      contact: "/contact",
      // tips: "/tips",
    };

    const targetPath = pathMap[item.toLowerCase()];

    if (location.pathname !== targetPath) {
      navigate(targetPath);
    }
    // Always scroll to top
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, 50);
    // Only scroll for Home sections
    if (targetPath === "/") {
      setTimeout(() => {
        const el = document.getElementById(item.toLowerCase());
        if (el) el.scrollIntoView({ behavior: "smooth" });
      }, 50);
    }
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Left: Logo */}
        <div className="flex items-center gap-3">
          <Link to="/">
            <img
              src="/logo/wruufs.svg"
              alt="Wruufs Logo"
              className="navbar-logo"
            />
          </Link>
        </div>

        {/* Center: Nav Items */}
        <div className="navbar-links">
          {navItems.map((item) => (
            <div key={item} className="navbar-link">
              <button onClick={() => handleNavClick(item)}>{item}</button>
              <span></span>
            </div>
          ))}
        </div>

        {/* Right: Search + Profile */}
        <div className="navbar-right">
          <Search />
          <Profile />
        </div>

        {/* Hamburger Icon (Mobile) */}
        <button onClick={() => setOpen(!open)} className="navbar-toggle">
          {open ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Drawer */}
      <div className={`navbar-drawer ${open ? "open" : "closed"}`}>
        <ul>
          {navItems.map((item) => (
            <li key={item}>
              <button onClick={() => handleNavClick(item)}>{item}</button>
            </li>
          ))}
          <li>
            <Search />
          </li>
          <li>
            <Profile />
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
