import { LOGIN, GET_USER, team, GET_PASSWORD } from "../actions";

const loginState = {
  isLogged: false,
  user: {
    username: "",
    password: "",
  },
};

export const loginReducer = (state = loginState, action) => {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        isLogged: action.payload,
      };
    case GET_USER:
      return {
        ...state,
        user: {
          password: state.user.password,
          username: action.payload,
        },
      };
    case GET_PASSWORD:
      return {
        ...state,
        user: {
          password: action.payload,
          username: state.user.username,
        },
      };

    default:
      return state;
  }
};
