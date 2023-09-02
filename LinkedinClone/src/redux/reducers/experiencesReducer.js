import { GET_ALLEXPERIENCES } from "../actions";
import { ADD_SINGLE_EXP } from "../actions/form";
import { ADD_PEOPLE_EXP } from "../actions";
const InitialState = {
  content: [],
  loadingExperience: true,
  singleExp: [],
  loadingSingleExp: true,
  people: [],
};

export const experiencesReducers = (state = InitialState, action) => {
  switch (action.type) {
    case GET_ALLEXPERIENCES:
      return {
        ...state,
        content: action.payload,
        loadingExperience: false,
      };
    case ADD_SINGLE_EXP:
      return {
        ...state,
        singleExp: action.payload,
        loadingSingleExp: false,
      };
    case ADD_PEOPLE_EXP:
      console.log("azione add people", action.payload);
      return {
        ...state,
        people: action.paylod,
      };

    default:
      return state;
  }
};
