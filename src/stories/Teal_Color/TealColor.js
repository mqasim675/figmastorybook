// TealColor.js
import React from "react";
import "./TealColor.css";

const TealColor = ({ className, text }) => {
  return (
    <div className="teal-color-container">
      <div className={className}>{text}</div>
    </div>
  );
};

export default TealColor;
