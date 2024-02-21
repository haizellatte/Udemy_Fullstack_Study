export const ADD_ITEM = "cart/addItem"; //* 요즘은 이런식으로도 많이 사용한다. (대문자 -> 파일 경로처럼!)
export const REMOVE_ITEM = "cart/removeItem";

export const addItemActionCreator = (payload) => ({ type: ADD_ITEM, payload });
export const removeItemActionCreator = (payload) => ({
  type: REMOVE_ITEM,
  payload,
});

//* 자동 완성 도움용
const initialState = {
  item: [],
  totalPrice: 0,
  // id: "",
  // amount: 1,
};

//* 공장 : store의 데이터를 바꿔주는 곳
function cartReducer(state = initialState, action) {
  const newState = { ...state };

  if (action.type === ADD_ITEM) {
    const neItem = action.payload;
    const neItems = { ...state, neItem };

    newState.item = neItems;
  } else if (action.type === REMOVE_ITEM) {
    const itemIdToRemove = action.payload;
    const newItems = state.item.filter((item) => item.id !== itemIdToRemove);

    newState.item = newItems;
  }

  return state;
}

export default cartReducer;
