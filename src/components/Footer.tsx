
import { FaInstagram, FaEnvelope as FaMail ,FaWhatsapp} from "react-icons/fa";
import { Link } from "react-router-dom";
import "./Footer.css";
// import dotenv from "dotenv";
// dotenv.config();


const socialLinks = [
  {
    icon: <FaInstagram />,
    href: `https://www.instagram.com/${import.meta.env.VITE_WRUUFS_INSTAGRAM}`,
    label: "Instagram",
  },
  {
    icon: <FaMail />,
    href: `mailto:${import.meta.env.VITE_WRUUFS_EMAIL}`,
    label: "Email",
  },
  {
    icon: <FaWhatsapp />,
    href: `https://wa.me/${import.meta.env.VITE_WRUUFS_CONTACT_NUMBER}`,
    label: "Whatsapp",
  },
];

const productLinks = [
  { name: "Our Products", href: "/products" },
  { name: "About Us", href: "/about" },
  { name: "Contact Us", href: "/contact" },
];

// const parentingLinks = [
//   { name: "Contact Us", href: "/contact" },
// ];

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Newsletter */}
        <div className="footer-newsletter">
          <h2>Subscribe to our Newsletter Today!</h2>
          <form>
            <input type="email" placeholder="Enter Your Email" required />
            <button type="submit">Subscribe</button>
          </form>
        </div>

        {/* About Us */}
        <div className="footer-about">
          <h3>About Us</h3>
          <p>
            Wruufs is on a mission to deliver the best for pets everywhere. Our
            journey began with a simple idea: to provide high-quality,
            nutritious food for our furry friends....
            <Link
              to="/about"
              onClick={() =>
                window.scrollTo({ top: 0, left: 0, behavior: "smooth" })
              }
            >
              Read More
            </Link>
          </p>
        </div>

        {/* Quick Links */}
        <div className="footer-links">
          <div>
            <h3>Quick Links</h3>
            <ul>
              {productLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    onClick={() =>
                      window.scrollTo({ top: 0, left: 0, behavior: "smooth" })
                    }
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          {/* <div>
            <h3>Pet Parenting</h3>
            <ul>
              {parentingLinks.map((link) => (
                <li key={link.name}>
                  <Link to={link.href}>{link.name}</Link>
                </li>
              ))}
            </ul>
          </div> */}
        </div>
      </div>

      {/* Bottom Section */}
      <div className="footer-bottom">
        <p>
          © {new Date().getFullYear()} All Rights Reserved.{" "}
          <Link to="/terms-of-use">Terms Of Use</Link> and{" "}
          <Link to="/privacy-policy">Privacy Policy</Link>
        </p>

        <div className="footer-social">
          {socialLinks.map(({ icon, href, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noreferrer"
              aria-label={label}
            >
              {icon}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
