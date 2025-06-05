"use client";
import { FaSearch } from "react-icons/fa";
import { useState } from "react";

import "../../../src/app/styles/Post.css"; // your CSS path

export default function PopularShows() {
  const [search, setSearch] = useState("");

  const images = [
    "/images/banner.jpg",
    "/images/banner.jpg",
    "/images/banner.jpg",
    "/images/banner.jpg",
    "/images/banner.jpg",
    "/images/banner.jpg",
    "/images/banner.jpg",
  ];

  const filtered = images.filter((img, index) =>
    `Show ${index + 1}`.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="popular-shows-container">
      {/* Header */}
      <div className="popular-shows-header">
        <h2>Popular Shows</h2>
        <div className="search-box-container">
          <FaSearch className="search-icon" />
          <input
            className="search-input"
            type="text"
            placeholder="Search shows..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
      </div>

      {/* Scrollable image row */}
      <div className="scroll-container">
        <div className="image-row">
          {filtered.map((img, idx) => (
            <img key={idx} src={img} alt={`Show ${idx + 1}`} className="scroll-image" />
          ))}
        </div>
      </div>
    </div>
  );
}
