import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger"; // this is middleware

import rootReducer from "./root-reducer";

//setup middlewares:
const middlewares = [logger];

const store = createStore(rootReducer, applyMiddleware(...middlewares));

export default store;
