import { combineReducers } from "redux";

import dataReducer from "../redux/getdata/reducer";

const rootReducer = combineReducers({
  data: dataReducer,
});

export default rootReducer;
