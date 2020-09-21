import { createStore, applyMiddleware } from "redux";
import { persistStore } from "redux-persist";
import logger from "redux-logger"; // this is middleware

import createSagaMiddleware from "redux-saga";

import { fetchCollectionsStart } from "./shop/shop.sagas";
import rootSaga from "../redux/root-saga";

import rootReducer from "./root-reducer";

//setup middlewares:

const sagaMiddleware = createSagaMiddleware();

const middlewares = [sagaMiddleware];

//setting environment for middleware logger
if (process.env.NODE_ENV === "development") {
  middlewares.push(logger);
}

export const store = createStore(rootReducer, applyMiddleware(...middlewares));

//sagaMiddleware.run(fetchCollectionsStart);
sagaMiddleware.run(rootSaga);

export const persistor = persistStore(store);

export default { store, persistor };
