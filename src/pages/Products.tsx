import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Products.css";
import ScrollToTopButton from "../components/ScrollToTopButton";
import AvailableOn from "../components/AvailableOn";



export const productsData = [
  {
    id: 1,
    name: "Adult Dog Kibble",
    category: "adult",
    image: "/products/product1.png",
    description: "Complete nutrition for adult dogs with balanced proteins",
    ingredients: "Chicken, Rice, Vegetables, Vitamins And Essential Nutrients",
    backColorClass: "blue-back",
    amazonUrl : "https://tinyurl.com/3ubsswk8",
    flipkartUrl : "https://tinyurl.com/59bcnn42" //"https://tinyurl.com/ymavs3xf"
  },

  {
    id: 2,
    name: "Premium Adult Food",
    category: "adult",
    image: "/products/product2.png",
    description: "A wholesome chicken & rice meal to keep your dog happy.",
    ingredients: "Chicken, Vegetables, Natural Flavorings",
    backColorClass: "pink-back",
    amazonUrl : "https://tinyurl.com/hmry9pek",
    flipkartUrl : "https://tinyurl.com/56c2ks4d"
  },

  {
    id: 3,
    name: "Premium Puppy Food",
    category: "puppy",
    image: "/products/product3.png",
    description: "Nutritious food for growing puppies with essential vitamins",
    ingredients: "Chicken, Rice, Vegetables, Vitamins And Essential Nutrients",
    backColorClass: "purple-back",
    amazonUrl : ""
  },

  {
    id: 4,
    name: "VitaVin Pet",
    category: "nutrition",
    image: "/products/vita-vin.PNG",
    description: "A complete amino acid, multivitamin, antioxidant, and herbal wellness supplement",
    ingredients: "Essential Amino Acids, Vitamin B-Complex, Multivitamins, Herbs",
    backColorClass: "navy-blue-back",
    amazonUrl : "https://tinyurl.com/mrx9w5bw",
    flipkartUrl : "https://tinyurl.com/54kethuz"
  },

  {
    id: 5,
    name: "HepiBark Pet",
    category: "nutrition",
    image: "/products/hepi-bark.PNG",
    description: "A comprehensive liver-care and nutritional support formula",
    ingredients: "Vitamin B-Complex, Iron Supplements, Liver Extract, Yeast Extract, Herbs",
    backColorClass: "red-back",
    amazonUrl : "https://tinyurl.com/3mez84ne",
    flipkartUrl : "https://tinyurl.com/44rzdjzw"
  },

  {
    id: 6,
    name: "Pawbiotic",
    category: "nutrition",
    image: "/products/paw-biotic.PNG",
    description: "A scientifically formulated gut health supplement",
    ingredients: "3 Billion CFU Probiotics, Prebiotics, Enzyme Complex",
    backColorClass: "black-back",
    amazonUrl : "https://tinyurl.com/4n9ya44x",
    flipkartUrl : "https://tinyurl.com/yp7y6748"
  },

    {
    id: 7,
    name: "Furé Dry Bath Shampoo",
    category: "grooming",
    image: "/products/fure.PNG",
    description: "A premium no-rinse dry bath shampoo",
    ingredients: "Aloe Vera Extract,Tea Tree Oil, Neem Extract, Lavender Essential Oil,Vitamin E",
    backColorClass: "brown-back",
    amazonUrl : "https://tinyurl.com/4yjnsc2e",
    flipkartUrl : "https://tinyurl.com/44rja3pu"
  },

  {
    id: 8,
    name: "PawLuxe Paw Cleaner",
    category: "grooming",
    image: "/products/paw-cleaner.png",
    description: "A gentle, nourishing paw cleanser",
    ingredients: "Aqua, Coconut Oil, Aloe Vera Extract, Glycerin, Strawberry Essence",
    backColorClass: "light-blue-back",
    amazonUrl : "https://tinyurl.com/5253hkae",
    flipkartUrl : "https://tinyurl.com/bdm24r9p"
  },

];



const Products: React.FC = () => {

const [filter, setFilter] = useState<"all" | "adult" | "puppy" | "nutrition" | "grooming">("all");

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

    {/*  Search Bar (moved ABOVE filter buttons) */}

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

      {/* Filter Buttons */}

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

        <button
          className={`filter-btn ${filter === "nutrition" ? "active" : ""}`}
          onClick={() => setFilter("nutrition")}
        >
          Nutritional Range 
        </button>
        
        <button
          className={`filter-btn ${filter === "grooming" ? "active" : ""}`}
          onClick={() => setFilter("grooming")}
        >
          Grooming Range
        </button>
      </div>
    </div>

    {/*  Products Grid */}

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
                {product.amazonUrl && (
                  <a
                    href={product.amazonUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="buy-now-btn"
                  >
                    🛒 Buy On Amazon
                  </a>
                )}
                {product.flipkartUrl && (
                  <a
                    href={product.flipkartUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="buy-now-btn"
                  >
                    🛒 Buy On Flipkart
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
        {filteredProducts.length === 0 && (
          <p className="no-results">No products match your search.</p>
        )}
      </div>
    </div>

    {/* Contact Section */}

    <div className="contact-expert-section">
      <h3>Can't find what you're looking for?</h3>

      <p>Contact our pet nutrition experts for personalized recommendations</p>

      <Link to="/contact" className="contact-expert-btn">
        Contact Us
      </Link>
    </div>
    <ScrollToTopButton />
    <AvailableOn />
  </section>
);

};



export default Products;