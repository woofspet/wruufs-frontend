import { useState } from "react";
import {
  FaSearch,
  FaDog,
  FaWeight,
  FaRunning,
  FaHeart,
  FaStar,
} from "react-icons/fa";

const RecipeFinder = () => {
  const [filters, setFilters] = useState({
    age: "",
    size: "",
    activity: "",
    health: "",
  });
  const [results, setResults] = useState<
    {
      id: number;
      name: string;
      image: string;
      suitableFor: string[];
      size: string[];
      activity: string[];
      health: string[];
      description: string;
      benefits: string[];
      rating: number;
    }[]
  >([]);
  const [showResults, setShowResults] = useState(false);

  const recipes = [
    {
      id: 1,
      name: "Chicken & Rice Meal",
      image: "/products/product1.png",
      suitableFor: ["puppy", "adult", "senior"],
      size: ["small", "medium", "large"],
      activity: ["low", "moderate", "high"],
      health: ["general", "sensitive", "weight"],
      description:
        "Premium chicken with wholesome rice, perfect for daily nutrition",
      benefits: ["High protein", "Easy digestion", "Immune support"],
      rating: 4.8,
    },
    {
      id: 2,
      name: "Chicken Bites",
      image: "/products/product2.png",
      suitableFor: ["adult", "senior"],
      size: ["small", "medium"],
      activity: ["moderate", "high"],
      health: ["general", "weight"],
      description: "Bite-sized treats packed with real chicken flavor",
      benefits: ["Training rewards", "Protein boost", "Dental health"],
      rating: 4.9,
    },
    {
      id: 3,
      name: "Senior Care Formula",
      image: "/products/product1.png",
      suitableFor: ["senior"],
      size: ["small", "medium", "large"],
      activity: ["low", "moderate"],
      health: ["joint", "sensitive", "general"],
      description: "Specially formulated for older dogs with joint support",
      benefits: ["Joint support", "Easy digestion", "Heart healthy"],
      rating: 4.7,
    },
    {
      id: 4,
      name: "Active Dog Formula",
      image: "/products/product2.png",
      suitableFor: ["adult"],
      size: ["medium", "large"],
      activity: ["high"],
      health: ["general", "weight"],
      description: "High-energy formula for active and working dogs",
      benefits: ["High energy", "Muscle support", "Endurance"],
      rating: 4.8,
    },
  ];

  const findRecipes = () => {
    const filtered = recipes.filter((recipe) => {
      return (
        (!filters.age || recipe.suitableFor.includes(filters.age)) &&
        (!filters.size || recipe.size.includes(filters.size)) &&
        (!filters.activity || recipe.activity.includes(filters.activity)) &&
        (!filters.health || recipe.health.includes(filters.health))
      );
    });

    setResults(filtered);
    setShowResults(true);
  };

  const resetFilters = () => {
    setFilters({ age: "", size: "", activity: "", health: "" });
    setResults([]);
    setShowResults(false);
  };

  return (
    <div className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-3xl p-8 shadow-2xl max-w-6xl mx-auto">
      <div className="text-center mb-8">
        <FaSearch className="text-5xl text-purple-600 mx-auto mb-4" />
        <h2 className="text-3xl font-bold text-gray-800 mb-2">Recipe Finder</h2>
        <p className="text-gray-600">
          Find the perfect Wruufs meal for your furry friend!
        </p>
      </div>

      {/* Filters */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {/* Age Filter */}
        <div className="space-y-3">
          <label className="flex items-center text-lg font-semibold text-gray-700">
            <FaDog className="mr-2 text-blue-500" />
            Age
          </label>
          <select
            value={filters.age}
            onChange={(e) => setFilters({ ...filters, age: e.target.value })}
            className="w-full px-4 py-3 rounded-xl border-2 border-purple-200 focus:border-purple-400 focus:outline-none transition-colors"
          >
            <option value="">Any Age</option>
            <option value="puppy">Puppy (0-1 year)</option>
            <option value="adult">Adult (1-7 years)</option>
            <option value="senior">Senior (7+ years)</option>
          </select>
        </div>

        {/* Size Filter */}
        <div className="space-y-3">
          <label className="flex items-center text-lg font-semibold text-gray-700">
            <FaWeight className="mr-2 text-green-500" />
            Size
          </label>
          <select
            value={filters.size}
            onChange={(e) => setFilters({ ...filters, size: e.target.value })}
            className="w-full px-4 py-3 rounded-xl border-2 border-purple-200 focus:border-purple-400 focus:outline-none transition-colors"
          >
            <option value="">Any Size</option>
            <option value="small">Small (&lt; 25 lbs)</option>
            <option value="medium">Medium (25-60 lbs)</option>
            <option value="large">Large (&gt; 60 lbs)</option>
          </select>
        </div>

        {/* Activity Filter */}
        <div className="space-y-3">
          <label className="flex items-center text-lg font-semibold text-gray-700">
            <FaRunning className="mr-2 text-orange-500" />
            Activity Level
          </label>
          <select
            value={filters.activity}
            onChange={(e) =>
              setFilters({ ...filters, activity: e.target.value })
            }
            className="w-full px-4 py-3 rounded-xl border-2 border-purple-200 focus:border-purple-400 focus:outline-none transition-colors"
          >
            <option value="">Any Activity</option>
            <option value="low">Low Activity</option>
            <option value="moderate">Moderate Activity</option>
            <option value="high">High Activity</option>
          </select>
        </div>

        {/* Health Filter */}
        <div className="space-y-3">
          <label className="flex items-center text-lg font-semibold text-gray-700">
            <FaHeart className="mr-2 text-red-500" />
            Health Needs
          </label>
          <select
            value={filters.health}
            onChange={(e) => setFilters({ ...filters, health: e.target.value })}
            className="w-full px-4 py-3 rounded-xl border-2 border-purple-200 focus:border-purple-400 focus:outline-none transition-colors"
          >
            <option value="">General Health</option>
            <option value="sensitive">Sensitive Stomach</option>
            <option value="weight">Weight Management</option>
            <option value="joint">Joint Support</option>
          </select>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex gap-4 justify-center mb-8">
        <button
          onClick={findRecipes}
          className="bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold py-3 px-8 rounded-xl hover:from-purple-600 hover:to-pink-600 transition-all transform hover:scale-105 shadow-lg"
        >
          Find Perfect Recipe
        </button>
        <button
          onClick={resetFilters}
          className="bg-gray-500 text-white font-bold py-3 px-8 rounded-xl hover:bg-gray-600 transition-all transform hover:scale-105 shadow-lg"
        >
          Reset Filters
        </button>
      </div>

      {/* Results */}
      {showResults && (
        <div className="mt-8">
          <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">
            {results.length > 0
              ? `Found ${results.length} Perfect Match${
                  results.length !== 1 ? "es" : ""
                }!`
              : "No matches found"}
          </h3>

          {results.length === 0 ? (
            <div className="text-center p-8 bg-white rounded-xl shadow-lg">
              <p className="text-gray-600 text-lg">
                Try adjusting your filters to find the perfect recipe for your
                dog! 🐕
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {results.map((recipe) => (
                <div
                  key={recipe.id}
                  className="bg-white rounded-2xl shadow-xl p-6 hover:shadow-2xl transition-all transform hover:scale-105"
                >
                  <div className="flex items-start gap-4">
                    <img
                      src={recipe.image}
                      alt={recipe.name}
                      className="w-24 h-24 object-cover rounded-xl"
                    />
                    <div className="flex-1">
                      <h4 className="text-xl font-bold text-gray-800 mb-2">
                        {recipe.name}
                      </h4>
                      <div className="flex items-center mb-2">
                        <FaStar className="text-yellow-400 mr-1" />
                        <span className="text-gray-600">
                          {recipe.rating}/5.0
                        </span>
                      </div>
                      <p className="text-gray-600 text-sm mb-3">
                        {recipe.description}
                      </p>

                      <div className="space-y-2">
                        <div className="flex flex-wrap gap-1">
                          {recipe.benefits.map((benefit, index) => (
                            <span
                              key={index}
                              className="bg-purple-100 text-purple-700 px-2 py-1 rounded-full text-xs"
                            >
                              {benefit}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default RecipeFinder;
