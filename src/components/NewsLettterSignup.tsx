import React, { useState } from "react";
import {
  FaEnvelope,
  FaPaw,
  FaGift,
  FaNewspaper,
  FaCheck,
  FaTimes,
} from "react-icons/fa";

const NewsletterSignup = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [petName, setPetName] = useState("");
  const [interests, setInterests] = useState<string[]>([]);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const interestOptions = [
    { id: "nutrition", label: "Pet Nutrition Tips", icon: "🥗" },
    { id: "training", label: "Training Advice", icon: "🎾" },
    { id: "health", label: "Health & Wellness", icon: "💚" },
    { id: "recipes", label: "New Recipes", icon: "🍖" },
    { id: "offers", label: "Special Offers", icon: "🎁" },
    { id: "stories", label: "Pet Stories", icon: "📖" },
  ];

  const handleInterestChange = (interestId: string) => {
    setInterests((prev) =>
      prev.includes(interestId)
        ? prev.filter((id) => id !== interestId)
        : [...prev, interestId]
    );
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000));

    setIsLoading(false);
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <div className="bg-gradient-to-br from-green-50 to-blue-50 rounded-3xl p-8 shadow-2xl max-w-2xl mx-auto text-center">
        <div className="animate-bounce mb-6">
          <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto">
            <FaCheck className="text-3xl text-white" />
          </div>
        </div>
        <h2 className="text-3xl font-bold text-gray-800 mb-4">
          Welcome to the Pack! 🎉
        </h2>
        <p className="text-lg text-gray-600 mb-6">
          Thank you for joining our newsletter! Get ready for tail-wagging
          content delivered straight to your inbox.
        </p>
        <div className="bg-white p-6 rounded-xl shadow-lg mb-6">
          <h3 className="font-bold text-gray-800 mb-3">What to expect:</h3>
          <div className="space-y-2 text-sm text-gray-600">
            <div className="flex items-center justify-center gap-2">
              <span>🎁</span>{" "}
              <span>Welcome gift: 15% off your first order</span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <span>📧</span>{" "}
              <span>Weekly pet care tips and nutrition advice</span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <span>🔔</span>{" "}
              <span>Early access to new products and exclusive offers</span>
            </div>
          </div>
        </div>
        <button
          onClick={() => {
            setIsSubmitted(false);
            setEmail("");
            setName("");
            setPetName("");
            setInterests([]);
          }}
          className="bg-blue-500 text-white px-6 py-3 rounded-xl hover:bg-blue-600 transition-colors"
        >
          Sign Up Another Pet Parent
        </button>
      </div>
    );
  }

  return (
    <div className="bg-gradient-to-br from-orange-50 to-pink-50 rounded-3xl p-8 shadow-2xl max-w-2xl mx-auto">
      <div className="text-center mb-8">
        <FaNewspaper className="text-5xl text-orange-600 mx-auto mb-4" />
        <h2 className="text-3xl font-bold text-gray-800 mb-2">
          Join the Wruufs Pack!
        </h2>
        <p className="text-gray-600">
          Get exclusive tips, treats, and tail-wagging content delivered to your
          inbox
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Personal Info */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <label className="block text-sm font-semibold text-gray-700">
              Your Name
            </label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter your name"
              className="w-full px-4 py-3 rounded-xl border-2 border-orange-200 focus:border-orange-400 focus:outline-none transition-colors"
              required
            />
          </div>
          <div className="space-y-2">
            <label className="block text-sm font-semibold text-gray-700">
              Pet's Name
            </label>
            <input
              type="text"
              value={petName}
              onChange={(e) => setPetName(e.target.value)}
              placeholder="Your furry friend's name"
              className="w-full px-4 py-3 rounded-xl border-2 border-orange-200 focus:border-orange-400 focus:outline-none transition-colors"
            />
          </div>
        </div>

        {/* Email */}
        <div className="space-y-2">
          <label className="flex items-center text-sm font-semibold text-gray-700">
            <FaEnvelope className="mr-2 text-orange-500" />
            Email Address
          </label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="your@email.com"
            className="w-full px-4 py-3 rounded-xl border-2 border-orange-200 focus:border-orange-400 focus:outline-none transition-colors"
            required
          />
        </div>

        {/* Interests */}
        <div className="space-y-3">
          <label className="flex items-center text-sm font-semibold text-gray-700">
            <FaPaw className="mr-2 text-pink-500" />
            What interests you most? (Select all that apply)
          </label>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {interestOptions.map((option) => (
              <button
                key={option.id}
                type="button"
                onClick={() => handleInterestChange(option.id)}
                className={`p-3 rounded-xl border-2 text-sm transition-all transform hover:scale-105 ${
                  interests.includes(option.id)
                    ? "border-orange-400 bg-orange-50 shadow-lg"
                    : "border-gray-200 bg-white hover:border-orange-300"
                }`}
              >
                <div className="text-lg mb-1">{option.icon}</div>
                <div className="text-xs font-medium">{option.label}</div>
              </button>
            ))}
          </div>
        </div>

        {/* Benefits Preview */}
        <div className="bg-white p-6 rounded-xl shadow-lg">
          <h3 className="flex items-center font-bold text-gray-800 mb-4">
            <FaGift className="mr-2 text-pink-500" />
            Subscriber Benefits
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
            <div className="flex items-start gap-3">
              <span className="text-green-500">✓</span>
              <span>15% off your first order</span>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-green-500">✓</span>
              <span>Weekly nutrition tips</span>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-green-500">✓</span>
              <span>Exclusive product previews</span>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-green-500">✓</span>
              <span>Pet care expert advice</span>
            </div>
          </div>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={isLoading}
          className={`w-full font-bold py-4 rounded-xl transition-all transform hover:scale-105 shadow-lg ${
            isLoading
              ? "bg-gray-400 text-gray-200 cursor-not-allowed"
              : "bg-gradient-to-r from-orange-500 to-pink-500 text-white hover:from-orange-600 hover:to-pink-600"
          }`}
        >
          {isLoading ? (
            <div className="flex items-center justify-center gap-2">
              <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
              Joining the Pack...
            </div>
          ) : (
            "Join the Pack! 🐕"
          )}
        </button>

        <p className="text-xs text-gray-500 text-center">
          We respect your privacy. Unsubscribe at any time. No spam, just tails!
          🐾
        </p>
      </form>
    </div>
  );
};

export default NewsletterSignup;
