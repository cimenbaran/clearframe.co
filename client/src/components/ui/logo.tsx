import React, { useState } from "react";
import logoGif from "../../assets/logo128x128.gif"; // Adjust the path accordingly

export function Logo() {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true); // Play the GIF
  };

  const handleMouseLeave = () => {
    setIsHovered(false); // Pause the GIF (show last frame)
  };

  return (
    <div
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="logo-container flex items-center justify-center w-12 h-12"
    >
      <img
        src={logoGif}
        alt="Logo"
        className={`h-full w-full ${isHovered ? "playing" : "paused"}`} // Use scoped classes
      />
    </div>
  );
}
