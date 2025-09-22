import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Profile.css"; // Import CSS file

const Profile: React.FC = () => {
  const [isHovered, setIsHovered] = useState(false);
  const navigate = useNavigate();

  const handleProfile = () => {
    navigate("/login");
  };

  return (
    <div
      className="profile-container"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <button
        className={`profile-button ${isHovered ? "hovered" : ""}`}
        onClick={handleProfile}
      >
        {/* Icon */}
        <svg
          className={`profile-icon ${isHovered ? "with-margin" : ""}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M16 7a4 4 0 11-8 0 4 4 0 018 0z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2a5 5 0 005 5 5 5 0 001 4v1a4 4 0 00-4 0v-1a5 5 0 00-5-5z"
          />
        </svg>

        {/* Text Label */}
        {isHovered && <span className="profile-label">Login / Profile</span>}
      </button>
    </div>
  );
};

export default Profile;
