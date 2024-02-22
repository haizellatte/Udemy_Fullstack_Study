import React, { useState } from "react";
import styled from "styled-components";

function Counter() {
  const [count, setCount] = useState(0);
  const [gap, setGap] = useState(1);

  const increaseHandler = () => {
    setCount(count + gap);
  };

  const decreaseHandler = () => {
    setCount(count - gap);
  };

  const onChangeHandler = (e) => {
    setGap(Number(e.target.value));
  };

  return (
    <Container>
      <h2>COUNTER</h2>
      <div className="display">Current Number : {count}</div>
      <input type="number" onChange={onChangeHandler} value={String(gap)} />
      <div className="buttons">
        <Button onClick={increaseHandler}>+</Button>
        <Button onClick={decreaseHandler}>+</Button>
      </div>
    </Container>
  );
}

export default Counter;

const Container = styled.div`
  .display {
    margin-bottom: 10px;
  }
`;

const Button = styled.button`
  cursor: pointer;
  border: 1px solid gray;
  padding: 5px 25px;
  border-radius: 5px;
  background-color: transparent;
  margin-top: 20px;
`;
