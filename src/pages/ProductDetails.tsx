import React from "react";
import { useParams } from "react-router-dom";
import { productsData } from "./Products";
import "./ProductDetails.css";
import ScrollToTopButton from "../components/ScrollToTopButton";

// Ingredient details
const ingredientDetails: Record<string, { img: string; benefit: string }> = {
  Chicken: {
    img: "/ingredients/ingre_chicken.jpeg",
    benefit: "High-quality protein for strong muscles",
  },
  Rice: {
    img: "/ingredients/ingre_rice3.jpeg",
    benefit: "Easy to digest energy source",
  },
  Vegetables: {
    img: "/ingredients/ingre_vegetables.jpg",
    benefit: "Rich in vitamins and minerals",
  },
  "Vitamins And Essential Nutrients": {
    img: "/ingredients/ingre_vitamins.jpeg",
    benefit: "Supports overall health and immunity",
  },
  "Natural Flavorings": {
    img: "/ingredients/ingre_flavor.jpg",
    benefit:
      "Enhance taste and aroma, stimulates appetite and provide additional nutritional benfits",
  },
};

const ProductDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const product = productsData.find((p) => p.id.toString() === id);
  if (!product) return <p>Product not found.</p>;

  const heroImages: Record<number, string> = {
    1: "/products/wruufs_product_1.jpg",
    2: "/products/wruufs_product_2.jpg",
    3: "/products/wruufs_product_3.jpg",
  };

  const secondaryImages: Record<number, string> = {
    1: "/products/product_img_1.png",
    2: "/products/product_img_2.png",
    3: "/products/product_img_3.png",
  };

  // Packet color map
  const packetColors: Record<number, string> = {
    1: "#0945a4", // blue
    2: "#b6337bff", // pink
    3: "#4a2e5aff", // violet
  };

  const heroImage = heroImages[product.id] || product.image;
  const sideImage = secondaryImages[product.id] || product.image;
  const rightColor = packetColors[product.id] || "#0945a4"; // default blue

  const productDescriptions: Record<number, string> = {
    1: "Crafted for the health and happiness of your adult dog, our Adult Dog Kibble delivers complete, balanced nutrition in every bite. Made with high-quality chicken, wholesome grains, and fresh vegetables, it supports strong muscles, healthy digestion, shiny coat, and lasting energy. Each meal is thoughtfully designed to keep your furry friend thriving every day.",
    2: "A nutritious, flavorful blend that your adult dog will love! Packed with premium chicken, nutrient-rich rice, and natural herbs, this recipe ensures optimal health, supports immunity, and keeps your dog active and vibrant. Carefully formulated by experts, it’s the perfect combination of taste and wellness.",
    3: "Designed for growing puppies, our Premium Puppy Food provides essential vitamins, minerals, and proteins to support strong bones, healthy development, and playful energy. With a wholesome mix of carrots, peas, rice, and nutrient-rich ingredients, it nurtures your puppy’s growth while delivering irresistible taste.",
  };

  const polishedDescription =
    productDescriptions[product.id] || product.description;

  const ingredientsArray = product.ingredients.split(",").map((i) => i.trim());

  return (
    <section className="product-detail-section">
      {/* Top Hero Image */}
      <div className="product-detail-hero">
        <img src={heroImage} alt={product.name} className="hero-image" />
      </div>

      {/* Two-column layout */}
      <div className="product-layout-section">
        <div className="layout-left">
          <h2
            className="title-text"
            style={{ color: rightColor }} // dynamic color matching packet
          >
            {product.name}
          </h2>
          <p className="description-text">{polishedDescription}</p>
        </div>

        <div className="layout-middle">
          <img
            src={sideImage}
            alt={`${product.name} packet`}
            className="product-packet-image"
          />
        </div>

        {/* Right colored background */}
        <div
          className="layout-right-colored-part"
          style={{ backgroundColor: rightColor }}
        ></div>
      </div>

      {/* Main Ingredients Section */}
      <div className="ingredients-section">
        <h4 className="ingredients-subheading" style={{ color: rightColor }}>
          Our Main Ingredients
        </h4>
        <div className="ingredients-cards">
          {ingredientsArray.map((ingredient) => {
            const details = ingredientDetails[ingredient];
            return (
              <div key={ingredient} className="ingredient-card">
                <img
                  src={details?.img}
                  alt={ingredient}
                  className="ingredient-img"
                />
                <h5 style={{ color: rightColor }}>{ingredient}</h5>
                <p>{details?.benefit}</p>
              </div>
            );
          })}
        </div>
      </div>
      <ScrollToTopButton />
    </section>
  );
};

export default ProductDetails;
