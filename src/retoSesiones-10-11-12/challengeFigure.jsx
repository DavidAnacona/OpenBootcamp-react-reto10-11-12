import React, { useState } from "react";

const ChallengeFigure = () => {
  const [background, setBackground] = useState("rgb(0,0,0)");
  const [numberInterval, setNumberInterval] = useState(0);

    let red = 0;
    let green = 0;
    let blue = 0;

    const changeBackground = () => {
      const interval = setInterval(() => {
        red = Math.floor(Math.random() * 255);
        green = Math.floor(Math.random() * 255);
        blue = Math.floor(Math.random() * 255);
        setBackground(`rgb(${red},${green},${blue})`); 
      },1000);
      setNumberInterval(interval)
    }

    const stopColor = () => {
        clearInterval(numberInterval);
        setBackground(background);
    }

    const resetComponent = () => {
      clearInterval(numberInterval);
      setBackground(`rgb(${red},${green},${blue})`);
    }
  return (
    <div>
      <div
        style={{
          width: "255px",
          height: "255px",
          backgroundColor: `${background}`,
        }}
        onMouseOver={changeBackground}
        onMouseOut={stopColor}
        onDoubleClick={resetComponent}
      ></div>
    </div>
  );
};

export default ChallengeFigure;
