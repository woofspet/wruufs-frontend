// File: src/pages/Tips.tsx
import { useState } from "react";
import "./Tips.css";

interface TipSlide {
  title: string;
  text: string;
  image: string;
  bgColor: string;
  custom?: boolean;
}

const tipsSlides: TipSlide[] = [
  {
    title: "Why Pet Parenting is Important",
    text: "Being a responsible pet parent means more than feeding your furry friend. It’s about giving them love, healthcare, training, and a safe environment to thrive. Pets depend on us for everything, and good parenting ensures they live longer, healthier, and happier lives.",
    image: "/dogs/wruufs-dog-bowl-product.png",
    bgColor: "white",
    custom: true,
  },
  {
    title: "Healthy Eating Habits",
    text: "Provide a balanced diet, fresh water, and monitor portion sizes for your pet to ensure long-term health.",
    image: "/dogs/dog-waiting-food.png",
    bgColor: "white",
    custom: true,
  },
  {
    title: "Exercise & Play",
    text: "Regular walks, interactive toys, and mental stimulation keep your dog happy and fit.",
    image: "/dogs/playing-dog.png",
    bgColor: "white",
    custom: true,
  },
  {
    title: "Grooming & Hygiene",
    text: "Brush their coat, trim nails, clean ears and teeth, and keep them bathed for a healthy and clean pet.",
    image: "/dogs/dog-grooming2.png",
    bgColor: "white",
    custom: true,
  },
];

const Tips = () => {
  const [current, setCurrent] = useState(0);

  const prevSlide = () =>
    setCurrent((prev) => (prev === 0 ? tipsSlides.length - 1 : prev - 1));
  const nextSlide = () => setCurrent((prev) => (prev + 1) % tipsSlides.length);
  const goToSlide = (index: number) => setCurrent(index);

  return (
    <section className="tips-section">
      {/* Arrows */}
      <button onClick={prevSlide} className="tips-arrow tips-arrow-left">
        &#8592;
      </button>
      <button onClick={nextSlide} className="tips-arrow tips-arrow-right">
        &#8594;
      </button>

      {/* Slides */}
      <div className="tips-slider">
        {tipsSlides.map((slide, index) => {
          const isSecondSlide = index === 1;
          return (
            <div
              key={index}
              className={`tips-slide ${index === current ? "active" : ""}`}
            >
              {/* Text Section */}
              <div
                className={`tips-slide-text ${
                  isSecondSlide ? "order-2" : "order-1"
                }`}
                style={{ backgroundColor: slide.bgColor }}
              >
                <h2 className="tips-slide-heading">{slide.title}</h2>
                <p className="tips-slide-paragraph">{slide.text}</p>
              </div>

              {/* Image Section */}
              <div
                className={`tips-slide-image-wrapper ${
                  isSecondSlide ? "order-1" : "order-2"
                }`}
              >
                <img
                  src={slide.image}
                  alt={slide.title}
                  className="tips-slide-image"
                />
              </div>
            </div>
          );
        })}
      </div>

      {/* Dots Navigation */}
      <div className="tips-dots">
        {tipsSlides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`tips-dot ${current === index ? "active" : ""}`}
          />
        ))}
      </div>
    </section>
  );
};

export default Tips;
