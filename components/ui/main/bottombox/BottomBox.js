"use client"
import React from "react";
import { MdCheckCircle, MdMic, MdTune } from "react-icons/md";
import "../bottombox/bottombox.css"; // Import the CSS file for styles

const BottomBox = () => {
  return (
    <div className="bottom-box-container">
      {/* Audio bar background */}
      <div className="wave-background" />

      <div className="bottom-box-content">
        {/* Item 1 */}
        <div className="bottom-box-item">
          <div className="icon-circle">
            <MdCheckCircle className="gradient-icon" size={24} />
          </div>
          <div className="item-text">
            <span>Real-Time</span>
            <span>Update</span>
          </div>
        </div>

        <div className="separator" />

        {/* Item 2 */}
        <div className="bottom-box-item">
          <div className="icon-circle">
            <MdMic className="gradient-icon" size={24} />
          </div>
          <div className="item-text">
            <span>High-Quality</span>
            <span>Sound</span>
          </div>
        </div>

        <div className="separator" />

        {/* Item 3 */}
        <div className="bottom-box-item">
          <div className="icon-circle">
            <MdTune className="gradient-icon" size={24} />
          </div>
          <div className="item-text">
            <span>Custom Voice</span>
            <span>Creation</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BottomBox;
