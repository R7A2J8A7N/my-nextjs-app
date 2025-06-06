"use client ";
import { CiPlay1 } from "react-icons/ci";
import { FaCheckCircle, FaPlay, FaHeadphones } from 'react-icons/fa';
import '../../../src/app/styles/AudioBookSection.css'; // Adjust path based on your structure
import { LuAudioLines } from "react-icons/lu";

export default function AudioBookSection() {
  return (
    <div className="audio-book-container">
      <h1 className="audio-book-title">
        
        Audio Book
      </h1>

      <div className="button-group">
        <button className="btn try-btn">
<LuAudioLines  className="btn1-icon"/>          Try-now-for-free
        </button>
        <button className="btn watch-btn">
<CiPlay1 className="btn-icon"/>          Watch video
        </button>
      </div>
    </div>
  );
}
