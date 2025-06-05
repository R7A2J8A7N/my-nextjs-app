"use client"
import { FaMusic } from "react-icons/fa";
import { BsThreeDotsVertical } from "react-icons/bs";
import { FaChartBar } from "react-icons/fa";

import "../../../src/app/styles/SongItem.css";

export default function SongItem({ title, subtitle }) {
  return (
    <div className="song-item">
      <div className="song-left">
        <div className="song-icon">
          <FaMusic />
        </div>
        <div className="song-text">
          <h3>{title}</h3>
          <p>{subtitle}</p>
        </div>
      </div>

      <div className="song-right">
        <FaChartBar className="icon" />
        <BsThreeDotsVertical className="icon" />
      </div>
    </div>
  );
}
