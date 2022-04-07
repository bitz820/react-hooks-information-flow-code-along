import React from "react";
import { getRandomColor } from "./randomColorGenerator.js";

function Child({ onChangeColor, color}) {
    const handleClick = () => {
      const newColor = getRandomColor()
      onChangeColor(newColor)
  }

  console.log(color)
  return <div onClick={handleClick} className="child" style={{ backgroundColor: color }} />;
}

export default Child;
