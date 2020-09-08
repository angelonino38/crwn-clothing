import { combineReducers } from "redux"; // pang combine sa lahat
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; //we can use local storage in window browser

import userReducer from "./user/user.reducer";
import cartReducer from "./cart/cart.reducer";
import directoryReducer from "./directory/directory.reducer";
import shopReducer from "../redux/shop/shop.reducer";

//define new persist config like json obj.
const persistConfig = {
  key: "root",
  storage,
  whitelist: ["cart"], //array containing string name of reducer. user that wanna store
};

const rootReducer = combineReducers({
  //call
  user: userReducer,
  cart: cartReducer,
  directory: directoryReducer,
  shop: shopReducer,
});

export default persistReducer(persistConfig, rootReducer); //combine then use persist reducer function
