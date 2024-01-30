import React, { useEffect, useState } from "react";

function Timer() {
  const [passedTime, setPassedTime] = useState(0);

  useEffect(() => {
    const timerId = setInterval(() => {
      // setPassedTime((passedTime) => passedTime + 1);
    }, 1000);

    return () => {
      clearInterval(timerId);
    };
  }, []);

  return (
    <div>
      <h2>Timer</h2>
      <div style={{ display: "flex", flexWrap: "wrap", columnGap: 4 }}>
        {Array(passedTime)
          .fill(0)
          .map((_, i) => (
            <div key={i}>{i}</div>
          ))}
      </div>
    </div>
  );
}

export default Timer;
