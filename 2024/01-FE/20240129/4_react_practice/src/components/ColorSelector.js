import React, { useState } from "react";
import styled from "styled-components";

function ColorSelector() {
  const [color, setColor] = useState("black");

  const handleClickColor = (e) => {
    setColor(e.target.innerText);
  };

  return (
    <div>
      <h2>ColorSelector</h2>
      <Picker color={color} />
      <div>
        <Button onClick={(e) => handleClickColor(e)}>Red</Button>
        <Button onClick={(e) => handleClickColor(e)}>Orange</Button>
        <Button onClick={(e) => handleClickColor(e)}>Yellow</Button>
        <Button onClick={(e) => handleClickColor(e)}>Green</Button>
        <Button onClick={(e) => handleClickColor(e)}>Blue</Button>
        <Button onClick={(e) => handleClickColor(e)}>Navy</Button>
        <Button onClick={(e) => handleClickColor(e)}>Purple</Button>
      </div>
    </div>
  );
}

export default ColorSelector;

const Picker = styled.div`
  background-color: ${(props) => props.color};
  width: 100px;
  padding: 100px;
  margin: 0 auto;
`;

const Button = styled.button`
  background-color: transparent;
  margin: 20px 2px;
`;
