import { combineReducers } from "redux";
import authReducer from "./ducks/auth/auth";
import productReducer from "./ducks/product/products";
import orderReducer from "./ducks/orders/orders";

export default combineReducers({
  productStore: productReducer,
  authStore: authReducer,
  orderStore: orderReducer,
});
