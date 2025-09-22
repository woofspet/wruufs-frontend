import { useEffect, useState } from "react";
import "./Home.css";

interface Product {
  id: number;
  name: string;
  description: string;
  ingredients: string;
  imageUrl: string;
}

const Home = () => {
  // Static local data instead of backend fetch
  const products: Product[] = [
    {
      id: 1,
      name: "Premium Puppy Formula",
      description: "Rich in protein for growing pups.",
      ingredients: "Chicken, Rice, Carrots",
      imageUrl: "/products/wruufs_p1_bg.png",
    },
    {
      id: 2,
      name: "Adult Dog Blend",
      description: "Balanced nutrition for adult dogs.",
      ingredients: "Beef, Sweet Potato, Spinach",
      imageUrl: "/products/wruufs_p2_bg.png",
    },
    {
      id: 3,
      name: "Senior Dog Care",
      description: "Joint-friendly recipe for seniors.",
      ingredients: "Salmon, Brown Rice, Peas",
      imageUrl: "/products/wruufs_p3_bg.png",
    },
  ];

  const [current, setCurrent] = useState(0);

  // Rotate images every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % products.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [products.length]);

  return (
    <div className="home-container">
      <div className="home-background">
        {products.map((p, index) => (
          <img
            key={p.id}
            src={p.imageUrl}
            alt={p.name}
            className={index === current ? "active" : ""}
            onError={() => console.error("Image not found:", p.imageUrl)}
          />
        ))}
        <div className="home-overlay" />
      </div>

      <img src="/logo/wruufs.svg" alt="Wruufs Logo" className="home-logo" />

      <h1 className="home-headline">Tail Wagging Nutrition In Every Bowl</h1>

      <p className="home-subtext">
        Premium dog food crafted with love, backed by science and approved by
        wagging tails.
      </p>

      <a href="#products" className="home-cta">
        Explore Products
      </a>

      <div className="home-scroll">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </div>
    </div>
  );
};

export default Home;
