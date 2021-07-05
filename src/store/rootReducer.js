import { combineReducers } from "redux";
import shopReducer from "./reducer/shopReducer"
import produtReducer from "./reducer/productReducer"
import authReducer from "./reducer/authReducer"

const rootReducer = combineReducers({
  shops: shopReducer,
  products: produtReducer,
  users: authReducer
  });
  export default rootReducer