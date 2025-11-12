import { useState } from "react";
import "./ColorPicker.css";

interface ColorPickerProps {}

const ColorPickerBox = () => {
  const [colorIndex, incrementColorIndex] = useState(0);
  const colors = ["red", "green", "yellow", "violet"];

  const handleClick = () => {
    incrementColorIndex((prevIndex) => (prevIndex + 1) % colors.length);
  };

  return (
    <div className="colorBox" style={{ backgroundColor: colors[colorIndex] }}>
      <button onClick={handleClick}>
        Next color is : {colors[(colorIndex + 1) % 4]}
      </button>
      <p>Color is : {colors[colorIndex]}</p>
    </div>
  );
};

export default ColorPickerBox;
