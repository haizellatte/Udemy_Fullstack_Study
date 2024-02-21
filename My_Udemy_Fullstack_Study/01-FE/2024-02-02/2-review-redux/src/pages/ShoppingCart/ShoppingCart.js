import React from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { nanoid } from "nanoid";
import {
  addItemActionCreator,
  removeItemActionCreator,
} from "../../store/reducers/cart.reducer";

function ShoppingCart() {
  const items = useSelector((state) => state.cart.item);
  const dispatch = useDispatch();

  console.log(items);

  const handleClickAddItem = () => {
    const id = nanoid();
    const amount = 1;
    const item = { id, amount };
    const action = addItemActionCreator({ item });

    dispatch(action);
  };

  //* 👇 기본형! (1단계)
  // const handleClickRemoveItem = (itemId) => {
  //   const action = removeItemActionCreator(itemId);

  //   dispatch(action);
  // };

  //* 👇 고차함수로 바꾸자! : 값을 바로 리턴 ! (2단계)
  // const handleClickRemoveItem = (itemId) => {
  //   return () => {
  //     const action = removeItemActionCreator(itemId);

  //     dispatch(action);
  //   };
  // };

  //* 👇 화살표 함수는 단순 return만 할경우 중괄호({})를 생략할 수 있다! (3단계)
  const handleClickRemoveItem = (itemId) => () => {
    const action = removeItemActionCreator(itemId);
    dispatch(action);
  };

  return (
    <Wrapper>
      <h1>My Shopping Cart</h1>
      <button onClick={handleClickAddItem}>Add Random Item</button>
      <section>
        <ul>
          {items.map((item) => (
            <li key={item.id}>
              <span>{item.id}</span>
              <button onClick={handleClickRemoveItem(item.id)}>Remove</button>
            </li>
          ))}
        </ul>
      </section>

      {/* <section>
        <label for="item-id">ITEM ID</label>
        <input type="id" name="item-id" />
      </section>
      <section>
        <label for="item-amount">AMOUNT</label>
        <input type="amount" name="item-amount" />
      </section>
      <div className="buttons">
        <button>Add</button>
        <button>Delete</button>
      </div> */}
    </Wrapper>
  );
}

export default ShoppingCart;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 300px;
  row-gap: 20px;

  > section {
    display: flex;
    flex-direction: column;
  }
`;
