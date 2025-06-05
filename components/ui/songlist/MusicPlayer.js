"use client";
import { FaPlay, FaPause, FaStepBackward, FaStepForward, FaVolumeUp } from "react-icons/fa";
import { useState } from "react";

import "../../../src/app/styles/MusicPlayer.css";

export default function MusicPlayer({ song }) {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div className="music-player">
      {/* Left: Song Info */}
      <div className="music-info">
        <img src={song.imageUrl} alt={song.title} className="music-thumb" />
        <div className="music-details">
          <h4>{song.title}</h4>
          <p>{song.artist}</p>
        </div>
      </div>

      {/* Center: Controls */}
      <div className="music-controls">
        <FaStepBackward className="icon" />
        {isPlaying ? (
          <FaPause className="icon play" onClick={() => setIsPlaying(false)} />
        ) : (
          <FaPlay className="icon play" onClick={() => setIsPlaying(true)} />
        )}
        <FaStepForward className="icon" />
        <div className="waveform">
          <div className="bar" />
          <div className="bar" />
          <div className="bar" />
          <div className="bar" />
        </div>
        <span className="duration">1:32 / 4:21</span>
      </div>

      {/* Right: Volume */}
      <div className="music-volume">
        <FaVolumeUp className="icon" />
        <input type="range" min="0" max="100" defaultValue="70" />
      </div>
    </div>
  );
}
