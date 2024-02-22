//! redux가 사용하기 싫은 이유를 만들어보자 ~ (나쁜 예제인 셈임)
//! 👉 이걸 개선할 수 있는게 바로 !!!! immer이다 ~~~~~

import { produce } from "immer";

const initialState = {
  isLoggedIn: false,
  lastVisitedAt: null,
  grade: null,
  profile: {
    experiences: null,
    age: null,
    location: null,
    avatar: null,
  },
  freindes: [],
  likedGoods: [],
};

const LOG_IN = "user/login";
const LOG_OUT = "user/logout";
const UPDATE_EXPERIENCE = "user/updatedExperience";
const UPDATE_AVATAR_SRC = "user/updatedAvatarSrc";
const ADD_FRIEND = "user/addFriend";
const REMOVE_FRIEND = "user/removeFriend";
const LIKE = "user/like";
const UNLIKE = "user/unlike";

export const logIn = () => ({ type: LOG_IN });
export const logOut = () => ({ type: LOG_OUT });
export const updatedExperience = (payload) => ({
  type: UPDATE_EXPERIENCE,
  payload,
});
export const updatedAvatarSrc = (payload) => ({
  type: UPDATE_AVATAR_SRC,
  payload,
});
export const addFriend = (payload) => ({
  type: ADD_FRIEND,
  payload,
});
export const removeFriend = (payload) => ({ type: REMOVE_FRIEND, payload });
export const like = (payload) => ({ type: LIKE, payload });
export const unlike = (payload) => ({ type: UNLIKE, payload });

export function UserReducer(state = initialState, action) {
  if (action.type === UPDATE_EXPERIENCE) {
    const newState = produce(state, (draft) => {
      const { id, data } = action.payload;
      const indexToUpdate = draft.profile.experiences.findIndex(
        (experience) => experience.id === id,
      );
      draft.profile.experiences[indexToUpdate] = data;
    });
    return newState;
  } else if (action.type === ADD_FRIEND) {
    const newState = produce(state, (draft) => {
      const newFriend = action.payload;
      draft.freindes.push(newFriend);
    });
    return newState;

    // } else if(action.type ===REMOVE_FRIEND) {
  }
}
