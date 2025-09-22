import React, { useState } from "react";
import {
  FaInstagram,
  FaEnvelope,
  FaMapMarkerAlt,
  FaQuestionCircle,
  FaChevronDown,
  FaChevronUp,
} from "react-icons/fa";
import { motion } from "framer-motion";
import "./Contact.css";
import ScrollToTopButton from "../components/ScrollToTopButton";

const FAQItem: React.FC<{ question: string; answer: string }> = ({
  question,
  answer,
}) => {
  const [open, setOpen] = useState(false);

  return (
    <motion.li
      className="faq-item"
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.3 }}
    >
      <div className="faq-question" onClick={() => setOpen(!open)}>
        <span>{question}</span>
        {open ? <FaChevronUp /> : <FaChevronDown />}
      </div>
      {open && <p className="faq-answer">{answer}</p>}
    </motion.li>
  );
};

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const Contact: React.FC = () => {
  return (
    <section className="contact-section">
      {/* Header */}
      <motion.div
        className="contact-header"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
      >
        <h2>Contact Us</h2>
        <p>Have questions or need assistance? We're here to help.</p>
      </motion.div>
      {/* Contact Info & Form */}
      <motion.div
        className="contact-grid"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
      >
        <motion.div
          className="contact-info-box"
          whileHover={{ scale: 1.03 }}
          transition={{ duration: 0.3 }}
        >
          <h3>Get in Touch</h3>
          <div className="info-item">
            <FaEnvelope />{" "}
            <a href="mailto:contact@wruufs.com">contact@wruufs.com</a>
          </div>
          <div className="info-item">
            <FaInstagram />{" "}
            <a
              href="https://instagram.com/wruufs.india"
              target="_blank"
              rel="noopener noreferrer"
            >
              wruufs.india
            </a>
          </div>
          <div className="info-item">
            <FaMapMarkerAlt /> <span>India</span>
          </div>
        </motion.div>

        <motion.div
          className="contact-form-box"
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.3 }}
        >
          <h3>Send a Message</h3>
          <form>
            <input type="text" placeholder="Your Name" />
            <input type="email" placeholder="Email Address" />
            <textarea placeholder="Your Message" rows={5}></textarea>
            <button type="submit">Submit</button>
          </form>
        </motion.div>
      </motion.div>

      {/* FAQ Section */}
      <motion.div
        className="contact-faq"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
      >
        <motion.div
          className="faq-header"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5, type: "spring", stiffness: 120 }}
        >
          <FaQuestionCircle className="faq-icon" />
          <h3>Frequently Asked Questions</h3>
        </motion.div>

        <ul className="faq-list">
          <FAQItem
            question="Q: Is Wruufs food vet-approved?"
            answer="Ans: Yes! Our meals are developed with veterinarians and nutritionists."
          />
          <FAQItem
            question="Q: Where do you ship?"
            answer="Ans: We deliver across India with quick and safe packaging."
          />
          <FAQItem
            question="Q: Are the ingredients natural?"
            answer="Ans: 100% natural, real and wholesome."
          />
        </ul>
      </motion.div>
      <ScrollToTopButton />
    </section>
  );
};

export default Contact;
