import React, { useState, useEffect } from "react";

function Slider() {
  const images = [
    "https://images.unsplash.com/photo-1587854692152-cbe660dbde88",
    "https://images.unsplash.com/photo-1580281657527-47f249e8f4df",
    "https://images.unsplash.com/photo-1576091160550-2173dba999ef"
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="slider">
      <img src={images[index]} alt="slider" />
    </div>
  );
}

export default Slider;