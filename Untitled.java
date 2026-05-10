import { useState } from "react";
import chinu from "../chinu.jpeg";
import jay1 from "../jay1.png";

function ImageSlider() {
  const images = [chinu, jay1];
  const [index, setIndex] = useState(0);

  const next = () => setIndex((i) => (i + 1) % images.length);
  const prev = () => setIndex((i) => (i - 1 + images.length) % images.length);

  return (
    <div style={{ textAlign: "center" }}>
      <img
        src={images[index]}
        style={{ width: 300, height: 300, borderRadius: 10 }}
      />

      <div>
        <button onClick={prev}>Prev</button>
        <button onClick={next}>Next</button>
      </div>
    </div>
  );
}

export default ImageSlider;