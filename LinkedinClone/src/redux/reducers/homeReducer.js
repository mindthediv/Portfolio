import { GET_POSTS, ADD_POST_TEXT } from "../actions/HomePost";

const homeState = {
  allPosts: [],
  text: "",
};
export const homeReducer = (state = homeState, action) => {
  switch (action.type) {
    case GET_POSTS:
      return {
        ...state,
        allPosts: [action.payload.reverse()],
      };
    case ADD_POST_TEXT:
      return {
        ...state,
        text: action.payload,
      };

    default:
      return state;
  }
};
