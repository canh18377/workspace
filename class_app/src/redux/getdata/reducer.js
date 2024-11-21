import { GETDATA } from "./type";
import { GETTOKEN } from "./type";

const INITIAL_STATE = {
  token: null,
  data: null,
};

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GETTOKEN:
      return {
        ...state,
        token: action.payload,
      };
    case GETDATA:
      return {
        ...state,
        data: action.payload,
      };

    default:
      return state;
  }
};

export default reducer;
