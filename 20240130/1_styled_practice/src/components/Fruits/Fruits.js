import React from "react";

const fruits = ["딸기", "귤", "포도", "딸기", "수박"];

function Fruits() {
  return (
    <div>
      {fruits.map((item, i) => (
        <li key={item}>{item}</li>
      ))}
    </div>
  );
}

export default Fruits;
