"use client";

import "../../../src/app/styles/Post.css";
import { FiSearch } from "react-icons/fi";

export default function PopularShows() {
  const images = [
    "/images/banner.jpg",
    "/images/banner.jpg",
    "/images/banner.jpg",
    "/images/banner.jpg",
    "/images/banner.jpg",
    "/images/banner.jpg",
    "/images/banner.jpg",
  ];

  return (
    <div className="popular-shows-container">
      {/* Top Section: Title + Search */}
      <div className="popular-shows-header">
        <h2>Popular Shows</h2>
        <div className="search-box-container">
          <FiSearch className="search-icon" />
          <input
            type="text"
            className="search-input"
            placeholder="Search"
          />
        </div>
      </div>

      {/* Scrollable Image Row */}
      <div className="scroll-container">
        <div className="image-row">
          {images.map((src, index) => (
            <img
              key={index}
              src={src}
              alt={`Show ${index + 1}`}
              className="scroll-image"
            />
          ))}
        </div>
      </div>
    </div>
  );
}
