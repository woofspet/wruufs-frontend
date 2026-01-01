import React from "react";
import { useParams } from "react-router-dom";
import { productsData } from "./Products";
import "./ProductDetails.css";
import ScrollToTopButton from "../components/ScrollToTopButton";

// Ingredient details
const ingredientDetails: Record<string, { img: string; benefit: string; category:string; }> = {
  Chicken: {
    img: "/ingredients/ingre_chicken.jpeg",
    benefit: "High-quality protein for strong muscles",
    category: "food"
  },
  Rice: {
    img: "/ingredients/ingre_rice3.jpeg",
    benefit: "Easy to digest energy source",
    category: "food"
  },
  Vegetables: {
    img: "/ingredients/ingre_vegetables.jpg",
    benefit: "Rich in vitamins and minerals",
    category: "food"
  },
  "Vitamins And Essential Nutrients": {
    img: "/ingredients/ingre_vitamins.jpeg",
    benefit: "Supports overall health and immunity",
    category: "food"
  },
  "Natural Flavorings": {
    img: "/ingredients/ingre_flavor.jpg",
    benefit: "Enhance taste and aroma, stimulates appetite and provide additional nutritional benfits",
    category: "food"
  },
  "Aloe Vera Extract": {
    img: "/ingredients/ingre_aloe_vera.jpeg",
    benefit: "Deeply hydrating and soothing agent that moisturizes the skin",
    category: "grooming"
  },
  "Tea Tree Oil": {
    img: "/ingredients/ingre_tea_tree.jpeg",
    benefit: "Natural antiseptic and anti-inflammatory that helps soothe itchy skin",
    category: "grooming"
  },
  "Neem Extract": {
    img: "/ingredients/ingre_neem.jpeg",
    benefit: "A powerful natural antiseptic and repellent that eliminates pests",
    category: "grooming"
  },
  "Lavender Essential Oil": {
    img: "/ingredients/ingre_lavender.jpeg",
    benefit: "Offers a relaxing and gentle fragrance",
    category: "grooming"
  },
  "Vitamin E": {
    img: "/ingredients/ingre_vitamins.jpeg",
    benefit: "Reduce dryness and irritation",
    category: "grooming"
  },
  "Aqua": {
    img: "/ingredients/ingre_aqua.jpeg",
    benefit: "Aqua ensures safe and gentle cleansing;",
    category: "grooming"
  },
  "Coconut Oil": {
    img: "/ingredients/ingre_coconut.jpeg",
    benefit: "Hydrate dry, cracked paws and delivers moisture and antimicrobial protection",
    category: "grooming"
  },
  "Glycerin": {
    img: "/ingredients/ingre_glycerin.jpeg",
    benefit: "Offers a relaxing, gentle fragrance and provides intense hydration",
    category: "grooming"
  },
  "Strawberry Essence": {
    img: "/ingredients/ingre_strawberry.jpeg",
    benefit: "Leaves paws clean and pleasantly fragrant",
    category: "grooming"
  },
  "Essential Amino Acids": {
    img: "/ingredients/ingre_amino.jpeg",
    benefit: "support muscle development and boost immune function",
    category: "nutritional"
  },
  "Vitamin B-Complex": {
    img: "/ingredients/ingre_b.jpeg",
    benefit: "Supports nervous system health and improves appetite",
    category: "nutritional"
  },
  "Ashwagandha": {
    img: "/ingredients/ingre_ashwagandha1.jpeg",
    benefit: "Supports muscle growth &amp; repair",
    category: "nutritional"
  },
  "Alfalfa": {
    img: "/ingredients/ingre_alfalfa.jpeg",
    benefit: "Supports muscle growth &amp; repair",
    category: "nutritional"
  },
  "Iron Supplements": {
    img: "/ingredients/ingre_iron.jpeg",
    benefit: "Support healthy red blood cell production, improve oxygen transport, and boost overall energy and vitality",
    category: "nutritional"
  },
  "Vitamins": {
    img: "/ingredients/ingre_alfalfa.jpeg",
    benefit: "Supports muscle growth &amp; repair",
    category: "nutritional"
  },
  "Liver Extract": {
    img: "/ingredients/ingre_liver.jpeg",
    benefit: "Support liver function, enhance metabolism, improve appetite, and promote overall vitality",
    category: "nutritional"
  },
  "Yeast Extract": {
    img: "/ingredients/ingre_yeast.jpeg",
    benefit: "Support digestion, boost immunity, improve nutrient absorption, and enhance overall vitality.",
    category: "nutritional"
  },
  "Herbs": {
    img: "/ingredients/ingre_herbs.jpeg",
    benefit: "Provide antioxidant support, improve digestion, and strengthen the body",
    category: "nutritional"
  },
  "Enzyme Complex": {
    img: "/ingredients/enzyme.jpeg",
    benefit: "It breaks down proteins, fats, and carbohydrates to ensure maximum nutrient absorption",
    category: "nutritional"
  },
  "Prebiotics": {
    img: "/ingredients/prebiotic.jpeg",
    benefit: "A selective nourishment for beneficial bacteria, fueling the growth of healthy gut flora",
    category: "nutritional"
  },
  "3 Billion CFU Probiotics": {
    img: "/ingredients/probiotic.jpeg",
    benefit: "A potent digestive stabilizer that restores healthy gut flora to improve nutrient absorption",
    category: "nutritional"
  },
  "Multivitamins": {
    img: "/ingredients/multivitamins.jpeg",
    benefit: "Fills dietary gaps to boost overall immunity, energy levels, and long-term organ health",
    category: "nutritional"
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
    4: "/products/default.jpeg",
    5: "/products/banner_hapibark.png",
    6: "/products/default.jpeg",
    7: "/products/banner_fure.png",
    8: "/products/banner_pawluxe.png",
  };

  const secondaryImages: Record<number, string> = {
    1: "/products/product_img_1.png",
    2: "/products/product_img_2.png",
    3: "/products/product_img_3.png",
  };

  // Packet color map
const packetColors: Record<number, string> = {
  1: "linear-gradient(135deg, #0b5ed7 0%, #0945a4 50%, #06357e 100%)", // Blue
  2: "linear-gradient(135deg, #d94c98 0%, #b6337b 50%, #8f275f 100%)", // Pink
  3: "linear-gradient(135deg, #6a4a7c 0%, #4a2e5a 50%, #341f41 100%)", // Violet
  4: "linear-gradient(135deg, #1b3f7a 0%, #112d5b 50%, #0b1e3e 100%)",
  5: "linear-gradient(135deg, #b44a4a 0%, #8e3232 50%, #6a2424 100%)",
  6: "linear-gradient(135deg, #6b6b6b 0%, #535252 50%, #3d3d3d 100%)",
  7: "linear-gradient(135deg, #646464 0%, #4e4d4d 50%, #383838 100%)",
  8: "linear-gradient(135deg, #1f6fa0 0%, #144b6d 50%, #0d344d 100%)"
};

  const heroImage = heroImages[product.id] || product.image;
  const sideImage = secondaryImages[product.id] || product.image;
  const rightColor = packetColors[product.id] || "#0945a4"; // default blue

  const productDescriptions: Record<number, string> = {
    1: "Crafted for the health and happiness of your adult dog, our Adult Dog Kibble delivers complete, balanced nutrition in every bite. Made with high-quality chicken, wholesome grains, and fresh vegetables, it supports strong muscles, healthy digestion, shiny coat, and lasting energy. Each meal is thoughtfully designed to keep your furry friend thriving every day.",
    2: "A nutritious, flavorful blend that your adult dog will love! Packed with premium chicken, nutrient-rich rice, and natural herbs, this recipe ensures optimal health, supports immunity, and keeps your dog active and vibrant. Carefully formulated by experts, it’s the perfect combination of taste and wellness.",
    3: "Designed for growing puppies, our Premium Puppy Food provides essential vitamins, minerals, and proteins to support strong bones, healthy development, and playful energy. With a wholesome mix of carrots, peas, rice, and nutrient-rich ingredients, it nurtures your puppy’s growth while delivering irresistible taste.",
    4: "Vitavin Pet is a complete amino acid, multivitamin, antioxidant, and herbal wellness supplement formulated to support muscle growth, immunity, metabolism, skin health, and overall vitality in dogs and cats. Ideal for puppies and kittens during the growth stage, as well as adult pets needing extra nutritional support.",
    5: "Hepibark is a comprehensive liver-care and nutritional support formula designed to enhance appetite, boost metabolism, and promote overall wellness in dogs and cats. Powered by a potent blend of iron supplements, essential B-complex vitamins, calcium lactate, choline chloride, liver and yeast extracts, and proven Ayurvedic herbs like Guduchi, Kutki, and Silymarin, this formula supports healthy liver function and improves vitality.",
    6: "PAWBIOTIC is an advanced digestive support formula for dogs and cats, combining 3 Billion CFU Probiotics, Prebiotics, and a powerful Enzyme Complex to maintain gut balance, improve digestion, and boost overall immunity.",
    7: "Furḕ is a premium no-rinse dry bath shampoo designed to keep your pet’s coat clean, fresh, and nourished—without the need for water. Perfect for quick refreshes, travel, rainy days, or pets who dislike traditional bathing, Furḕ offers gentle yet effective cleansing with a blend of natural, skin-loving ingredients.",
    8: "PAWLUXE is a gentle, nourishing paw cleanser crafted to keep your pet’s paws clean, soft, and healthy. Formulated with Aqua, Coconut Oil, Aloe Vera Extract, Glycerin, Strawberry Essence, and a soothing Essential Oils Base, it effectively removes dirt, pollutants, and irritants while providing deep hydration and long-lasting freshness."
  };

  const polishedDescription =
    productDescriptions[product.id] || product.description;

  const ingredientsArray = product.ingredients
  .split(",")
  .map((i) => i.trim());

 const normalizedIngredientDetails = Object.fromEntries(
  Object.entries(ingredientDetails).map(([key, value]) => [
    key.toLowerCase().trim(),
    value,
  ])
);


const isCompositionProduct = ingredientsArray.some((ingredient) => {
  const category = normalizedIngredientDetails[ingredient.toLowerCase().trim()]?.category;
  return (
    category === "grooming" ||
    category === "nutritional"
  );
});

const ingredientsTitle = isCompositionProduct
  ? "Our Main Composition"
  : "Our Main Ingredients";


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
          {ingredientsTitle}
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
