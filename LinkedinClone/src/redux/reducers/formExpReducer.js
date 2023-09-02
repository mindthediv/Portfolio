import {
  ADD_AREA,
  ADD_COMPANY,
  ADD_DESCRIPTION,
  ADD_START_DATE,
  ADD_END_DATE,
  ADD_ROLE,
} from "../actions/form";
const formExp = {};
export const formExpReducer = (state = formExp, action) => {
  switch (action.type) {
    case ADD_AREA:
      return {
        ...state,

        area: action.payload,
      };

    case ADD_COMPANY:
      return {
        ...state,
        company: action.payload,
      };
    case ADD_DESCRIPTION:
      return {
        ...state,

        description: action.payload,
      };
    case ADD_END_DATE:
      return {
        ...state,

        endDate: action.payload,
      };
    case ADD_START_DATE:
      return {
        ...state,

        startDate: action.payload,
      };
    case ADD_ROLE:
      return {
        ...state,

        role: action.payload,
      };
    default:
      return state;
  }
};
