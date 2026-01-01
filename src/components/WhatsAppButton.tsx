import React from "react";
import { FaWhatsapp } from "react-icons/fa";
import "./WhatsAppButton.css";

const WhatsAppButton: React.FC = () => {
  const phoneNumber = import.meta.env.VITE_WRUUFS_CONTACT_NUMBER; 
  const message = "Hello! I want to know more about your products.";

  const openWhatsApp = () => {
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };

return (
    <div className="whatsapp-wrapper">
      <div className="chat-label" onClick={openWhatsApp}>
        Chat with us
      </div>

      <button className="whatsapp-button" onClick={openWhatsApp}>
        <FaWhatsapp className="whatsapp-icon" />
      </button>
    </div>
  );
};

export default WhatsAppButton;
