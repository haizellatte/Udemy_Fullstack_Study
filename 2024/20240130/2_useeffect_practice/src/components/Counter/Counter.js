import React, { useEffect, useState } from "react";

function Counter() {
  const [value, setValue] = useState(0);

  const handleClickPlus = () => {
    setValue(value + 1);
  };
  const handleClickMinus = () => {
    setValue(value - 1);
  };

  useEffect(() => {
    if (value > 0 && value % 5 === 0) {
      console.log(value);
    }
    return;
  }, [value]);

  return (
    <div>
      <h2>Counter</h2>
      <div className="display">{value}</div>
      <div className="buttons">
        <button onClick={handleClickPlus}>+</button>
        <button onClick={handleClickMinus}>-</button>
      </div>
    </div>
  );
}

export default Counter;
