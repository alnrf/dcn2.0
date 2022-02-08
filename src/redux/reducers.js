import { combineReducers } from "redux";
import authReducer from "./ducks/auth/auth";
import productReducer from "./ducks/product/products";

export default combineReducers({
  productStore: productReducer,
  authStore: authReducer,
});
