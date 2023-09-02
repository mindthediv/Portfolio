import { GET_ALLPROFILES, GET_PROFILES, GET_USERLINK } from "../actions";

const profileState = {
  content: {
    loading: false,
  },
  allProfiles: [],
  userLink: null,
};
export const profileReducer = (state = profileState, action) => {
  switch (action.type) {
    case GET_PROFILES:
      return {
        ...state,
        content: action.payload,
        loading: true,
      };
    case GET_ALLPROFILES:
      return {
        ...state,
        allProfiles: [action.payload],
      };
    case GET_USERLINK:
      return {
        ...state,
        userLink: action.payload,
      };
    default:
      return state;
  }
};
