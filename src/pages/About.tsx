import React, { useEffect, useState } from "react";
import "./About.css";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import {
  FaAward,
  FaPaw,
  FaHandHoldingHeart,
  FaLeaf,
  FaDog,
} from "react-icons/fa";
import ScrollToTopButton from "../components/ScrollToTopButton";

// Data and component logic remain outside the component for clarity
interface Slide {
  heading: string;
  text: string;
  image: string;
  bgClass: string;
}

const slides: Slide[] = [
  {
    heading: "Wruufs Pet Food: A Tail of Passion, Purpose, and Paws",
    text: "The brand isn't just a business; it’s a promise. A promise that no pet should ever lack the proper nutrition they need to live a happy, healthy, and vibrant life. It’s a legacy of love, named in honor of the 'wruufs' (happy sounds) that a well-fed and cherished pet makes.",
    image: "/products/about_slide_1.jpg",
    bgClass: "bg-blue-slide",
  },
  {
    heading: "The Story Behind the Bowl",
    text: "The bowl of Wruufs dog food represents more than just a meal. It's a gesture of love, a foundation for a lifetime of cherished memories, and a tribute to the deep bond between humans and their furry friends. It's the story of a paw print that inspired a promise.",
    image: "/products/about_slide_2.jpg",
    bgClass: "bg-pink-slide",
  },
  {
    heading: "The Wruufs Promise",
    text: "At Wruufs, we believe pets are family. That’s why we craft every meal with real, wholesome ingredients to keep your furry friend healthy, happy, and full of life.",
    image: "/products/about_slide_3.jpg",
    bgClass: "bg-purple-slide",
  },
];

const About: React.FC = () => {
  const [current, setCurrent] = useState(0);
  // const sliderRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const prevSlide = () =>
    setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  const nextSlide = () => setCurrent((prev) => (prev + 1) % slides.length);

  // Framer Motion variants for the vision cards
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 80,
        damping: 15,
      },
    },
    hover: {
      scale: 1.05,
      boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.15)",
      transition: {
        duration: 0.2,
        type: "tween",
        ease: "easeOut",
      },
    },
  };

  const textVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const textItemVariants: Variants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <>
      {/* ---------- Top Banner ---------- */}
      <motion.section
        className="about-banner"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <motion.img
          src="/banner/banner_dogs.jpeg"
          alt="About Wruufs Banner"
          className="about-banner-image"
          initial={{ scale: 1.2 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          whileHover={{ scale: 1.05, rotate: 0.5 }}
        />
        <motion.div
          className="about-banner-overlay"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <motion.h1
            className="about-banner-heading"
            initial={{ opacity: 0, y: -20, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.5 }}
            whileHover={{ scale: 1.05 }}
          >
            About Wruufs
          </motion.h1>
        </motion.div>
      </motion.section>
      {/* ---------- Intro Section ---------- */}
      <motion.section
        className="about-intro-section"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <motion.div
          className="about-intro-content"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ staggerChildren: 0.3 }}
        >
          {/* <motion.h2
            initial={{ x: -50 }}
            animate={{ x: 0 }}
            transition={{ duration: 0.8 }}
          >
            Who We Are
          </motion.h2>
          <motion.p
            initial={{ x: 50 }}
            animate={{ x: 0 }}
            transition={{ duration: 0.8 }}
          >
            We're dedicated to providing premium, nutritious food for dogs of
            all ages and sizes. Our mission is to keep your furry friends
            healthy, happy, and full of energy through carefully crafted recipes
            made with love.
          </motion.p> */}
          {/* ---------- Why We're Different Section ---------- */}
          <section className="why-different-section">
            <h2 className="why-different-heading">Why We're Different</h2>
            <div className="why-different-wrapper">
              <div className="why-different-content">
                <motion.div
                  className="why-different-text"
                  initial={{ x: 50, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ duration: 0.8 }}
                >
                  <ul>
                    <li>
                      <div className="icon-circle">
                        <FaDog size={24} />
                      </div>
                      <p>
                        We believe in farm-to-bowl freshness for every meal.
                      </p>
                    </li>
                    <li>
                      <div className="icon-circle">
                        <FaPaw size={24} />
                      </div>
                      <p>
                        Formulated by pet health experts for balanced and
                        complete nutrition.
                      </p>
                    </li>
                    <li>
                      <div className="icon-circle">
                        <FaLeaf size={24} />
                      </div>
                      <p>
                        Every batch is rigorously tested for your pet's safety
                        and well-being.
                      </p>
                    </li>
                    <li>
                      <div className="icon-circle">
                        <FaHandHoldingHeart size={24} />
                      </div>
                      <p>
                        High-quality ingredients, ethically sourced and packed
                        with natural flavor.
                      </p>
                    </li>
                  </ul>
                </motion.div>
                <motion.div
                  className="why-different-image"
                  initial={{ x: -50, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                >
                  <img
                    src="/products/bowl_about_page.jpg"
                    alt="A bowl of Wruufs pet food"
                  />
                </motion.div>
              </div>
            </div>
          </section>
        </motion.div>
      </motion.section>
      {/* ---------- Our Story Section ---------- */}
      <section className="our-story-section">
        <div className="our-story-wrapper">
          <motion.div
            className="our-story-text"
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2>Our Story</h2>
            <p>
              At Wruufs, we believe pets aren’t just animals — they’re family.
              Every wagging tail, every playful bark, and every gentle nuzzle
              deserves to be nourished with the same love and care we give to
              our own loved ones. That’s why we create food made with real,
              wholesome ingredients, ensuring every meal is not just nutrition,
              but a gesture of love. Because when your pet is healthy, happy,
              and thriving, your family feels complete.
            </p>
          </motion.div>

          <motion.div
            className="our-story-image"
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <img src="/products/wruufs_bowl.png" alt="Dog" />
          </motion.div>
        </div>
      </section>
      {/* ---------- Wruufs Promise Section ---------- */}
      <motion.section
        className="wruufs-promise-section"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="wruufs-promise-wrapper">
          <h2>Wruufs Promise</h2>
          <p>
            Every bowl of Wruufs is crafted with real, wholesome ingredients you
            can trust — starting with farm-fresh chicken, nutrient-rich grains,
            and garden vegetables like carrots, peas, and spinach. Packed with
            essential vitamins, minerals, and natural flavors, each bite
            supports your dog’s health, energy, and happiness without any
            artificial colors or preservatives.
          </p>
        </div>

        {/* <motion.div
          className="our-story-image"
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <img src="/products/promise.png" alt="Dog" />
        </motion.div> */}
      </motion.section>
      {/* ---------- Our Values Section (kept simple) ---------- */}
      <section className="our-values-section">
        <div className="our-values-wrapper">
          <h2>Our Values</h2>
          <div className="values-grid">
            <div className="value-card">
              <div className="value-icon">🌟</div>
              <h3>Quality First</h3>
              <p>
                We never compromise on quality. Every ingredient is carefully
                selected and every batch is tested to ensure it meets our
                rigorous standards.
              </p>
            </div>
            <div className="value-card">
              <div className="value-icon">🌿</div>
              <h3>Natural Nutrition</h3>
              <p>
                We believe in the power of natural ingredients. Our recipes are
                free from artificial preservatives, colors, and flavors.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* ---------- Our Vision Section (redesigned) ---------- */}
      <section className="vision-section">
        <h2 className="vision-heading">Our Vision</h2>

        <motion.div
          className="vision-cards-container"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          viewport={{ once: true, amount: 0.5 }}
        >
          {/* Vision Card 1: Quality & Nutrition */}
          <motion.div
            className="vision-card blue"
            variants={cardVariants}
            whileHover="hover"
          >
            <div className="card-header">
              <span className="card-number">01</span>
            </div>
            <div className="card-content">
              <h3 className="card-title">Uncompromising Quality</h3>
              <p className="card-description">
                We are devoted to crafting pet food of the highest standard. Our
                vision is a world where every pet is fueled by wholesome,
                nutrient-rich ingredients, ensuring their vibrant health and
                vitality.
              </p>
              <div className="card-icon">
                <FaAward size={32} />
              </div>
            </div>
          </motion.div>

          {/* Vision Card 2: Lifelong Companionship */}
          <motion.div
            className="vision-card red"
            variants={cardVariants}
            whileHover="hover"
          >
            <div className="card-header">
              <span className="card-number">02</span>
            </div>
            <div className="card-content">
              <h3 className="card-title">Lifelong Companionship</h3>
              <p className="card-description">
                Our vision extends beyond the bowl. We believe proper nutrition
                is the foundation for a life full of joyful play, boundless
                energy, and cherished moments, strengthening the bond between
                pets and their human families.
              </p>
              <div className="card-icon">
                <FaPaw size={32} />
              </div>
            </div>
          </motion.div>

          {/* Vision Card 3: Sustainable Nurturing */}
          <motion.div
            className="vision-card purple"
            variants={cardVariants}
            whileHover="hover"
          >
            <div className="card-header">
              <span className="card-number">03</span>
            </div>
            <div className="card-content">
              <h3 className="card-title">Sustainable Nurturing</h3>
              <p className="card-description">
                We envision a future where every animal thrives. Our commitment
                is to champion sustainable, ethical sourcing and support animal
                welfare initiatives, reflecting our profound care for the world
                pets live in.
              </p>
              <div className="card-icon">
                <FaHandHoldingHeart size={32} />
              </div>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* ---------- Hero Slider Section ---------- */}
      <section
        id="about"
        className={`about-section ${slides[current].bgClass}`}
      >
        <motion.div
          className="about-slider-wrapper"
          initial={false}
          animate={{ x: `-${current * 100}%` }}
          transition={{ type: "tween", ease: "easeInOut", duration: 1 }}
        >
          {slides.map((slide, index) => (
            <motion.div
              key={index}
              className="about-slide"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.8 }}
            >
              <motion.div
                className="about-image-wrapper"
                initial={{ x: 50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{
                  type: "spring",
                  stiffness: 100,
                  damping: 20,
                  delay: 0.2,
                }}
              >
                <img
                  src={slide.image}
                  alt="About slide"
                  className="about-slide-image"
                />
              </motion.div>

              <motion.div
                className="about-slide-text"
                initial="hidden"
                animate="visible"
                variants={textVariants}
              >
                <motion.h2
                  className="about-slide-heading"
                  variants={textItemVariants}
                >
                  {slide.heading}
                </motion.h2>
                <motion.p
                  className="about-slide-paragraph"
                  variants={textItemVariants}
                >
                  {slide.text}
                </motion.p>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
        <button onClick={prevSlide} className="about-arrow about-arrow-left">
          &#8592;
        </button>
        <button onClick={nextSlide} className="about-arrow about-arrow-right">
          &#8594;
        </button>
        <div className="about-dots">
          {slides.map((_, index) => (
            <motion.button
              key={index}
              onClick={() => setCurrent(index)}
              className={`about-dot ${current === index ? "active" : ""}`}
              whileHover={{ scale: 1.4, backgroundColor: "#ec4899" }}
              transition={{ type: "spring", stiffness: 300 }}
            />
          ))}
        </div>
        <ScrollToTopButton />
      </section>
    </>
  );
};

export default About;
