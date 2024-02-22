import React, { useState } from "react";

//! 배열 타입 선언하는 방법
// type NumberArray = number[];
type NumberArray = Array<number>;

function Counter() {
  const [value, setValue] = useState<number | undefined>(0);

  return (
    <div>
      <div>{value}</div>
      <div>
        <button>-</button>
        <button>+</button>
      </div>
    </div>
  );
}

export default Counter;
