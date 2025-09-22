import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Products.css";
import ScrollToTopButton from "../components/ScrollToTopButton";



export const productsData = [
  {
    id: 1,

    name: "Adult Dog Kibble",

    category: "adult",

    image: "/products/product1.png",

    description: "Complete nutrition for adult dogs with balanced proteins",

    ingredients: "Chicken, Rice, Vegetables, Vitamins And Essential Nutrients",
    backColorClass: "blue-back",
  },

  {
    id: 2,

    name: "Premium Adult Food",

    category: "adult",

    image: "/products/product2.png",

    description: "A wholesome chicken & rice meal to keep your dog happy.",

    ingredients: "Chicken, Vegetables, Natural Flavorings",
    backColorClass: "pink-back",
  },

  {
    id: 3,

    name: "Premium Puppy Food",

    category: "puppy",

    image: "/products/product3.png",

    description: "Nutritious food for growing puppies with essential vitamins",

    ingredients: "Chicken, Rice, Vegetables, Vitamins And Essential Nutrients",
    backColorClass: "purple-back",
  },
];



const Products: React.FC = () => {

const [filter, setFilter] = useState<"all" | "adult" | "puppy">("all");

const [search, setSearch] = useState("");



const filteredProducts = productsData.filter((p) => {

const matchesCategory = filter === "all" || p.category === filter;

const matchesSearch = p.name.toLowerCase().includes(search.toLowerCase());

return matchesCategory && matchesSearch;

});



return (
  <section id="products" className="products-section">
    {/* Top Banner */}

    <div className="products-top-section">
      <div>
        <h2 className="products-top-heading">Our Delicious Products</h2>

        <p className="products-subheading">
          Discover our complete range of premium dog food carefully crafted for
          every life stage
        </p>
      </div>
    </div>

    {/* 🔍 Search Bar (moved ABOVE filter buttons) */}

    <div className="controls-row">
      {/* Search Bar */}

      <div className="search-bar">
        <input
          type="text"
          placeholder="Search products..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {/* 🔎 Filter Buttons */}

      <div className="filter-bar">
        <button
          className={`filter-btn ${filter === "all" ? "active" : ""}`}
          onClick={() => setFilter("all")}
        >
          All Products
        </button>

        <button
          className={`filter-btn ${filter === "adult" ? "active" : ""}`}
          onClick={() => setFilter("adult")}
        >
          Adult Food
        </button>

        <button
          className={`filter-btn ${filter === "puppy" ? "active" : ""}`}
          onClick={() => setFilter("puppy")}
        >
          Puppy Food
        </button>
      </div>
    </div>

    {/* 🐶 Products Grid */}

    <div className="products-container">
      <div className="products-grid">
        {filteredProducts.map((product) => (
          <div key={product.id} className="flip-card">
            <div className="flip-card-inner">
              {/* Front */}
              <div className="flip-card-front">
                <img
                  src={product.image}
                  alt={product.name}
                  className="product-image"
                />
                <h3 className="product-title">{product.name}</h3>
                <p className="product-desc-front">{product.description}</p>
              </div>
              {/* Back */}
              <div className={`flip-card-back ${product.backColorClass}`}>
                <p className="product-desc">{product.description}</p>
                <Link
                  to={`/product/${product.id}`}
                  className="view-more-btn"
                  onClick={() =>
                    window.scrollTo({ top: 0, left: 0, behavior: "smooth" })
                  }
                >
                  View More
                </Link>
              </div>
            </div>
          </div>
        ))}
        {filteredProducts.length === 0 && (
          <p className="no-results">No products match your search.</p>
        )}
      </div>
    </div>

    {/* 💡 Contact Section */}

    <div className="contact-expert-section">
      <h3>Can't find what you're looking for?</h3>

      <p>Contact our pet nutrition experts for personalized recommendations</p>

      <Link to="/contact" className="contact-expert-btn">
        Contact Us
      </Link>
    </div>
    <ScrollToTopButton />
  </section>
);

};



export default Products;