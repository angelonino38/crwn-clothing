import { combineReducers } from "redux"; // pang combine sa lahat

import userReducer from "./user/user.reducer";

export default combineReducers({
  user: userReducer,
});
