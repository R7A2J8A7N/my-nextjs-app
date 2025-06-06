"use client";
import React from "react";
import "../../../src/app/styles/StoryContainer.css";
import { PiStarFourFill } from "react-icons/pi";

const QuoteSection = () => {
  return (
    <div className="quote-container">
      <div className="quote-content">
        <PiStarFourFill className="pistar-icon" />
        <p className="quote-text">
          “Life is a collection of moments — big and small — that shape who we are. In this audiobook, turning points when life changes forever. So close your eyes, take a deep breath, and step into these unforgettable experiences...”
        </p>
      </div>
    </div>
  );
};

export default QuoteSection;
