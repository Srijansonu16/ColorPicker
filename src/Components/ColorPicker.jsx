import React, { useState, useCallback } from "react";

const ColorPicker = () => {
  const [color, setColor] = useState({ red: 0, green: 0, blue: 0 });

  const handleColorChange = useCallback(
    (event) => {
      setColor({
        ...color,
        [event.target.name]: event.target.value
      });
    },
    [color]
  );

  const backgroundColor = `rgb(${color.red}, ${color.green}, ${color.blue})`;

  return (
    <div>
      <div
        style={{
          width: "200px",
          height: "200px",
          backgroundColor: backgroundColor
        }}
      />
      <div>
        <label htmlFor="red">Red</label>
        <input
          type="range"
          min="0"
          max="255"
          name="red"
          value={color.red}
          onChange={handleColorChange}
        />
      </div>
      <div>
        <label htmlFor="green">Green</label>
        <input
          type="range"
          min="0"
          max="255"
          name="green"
          value={color.green}
          onChange={handleColorChange}
        />
      </div>
      <div>
        <label htmlFor="blue">Blue</label>
        <input
          type="range"
          min="0"
          max="255"
          name="blue"
          value={color.blue}
          onChange={handleColorChange}
        />
      </div>
    </div>
  );
};

export default ColorPicker;
