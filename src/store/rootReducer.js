import { combineReducers } from "redux";
import shopReducer from "./reducer/shopReducer"
import produtReducer from "./reducer/productReducer"

const rootReducer = combineReducers({
  shops: shopReducer,
  products: produtReducer,
  });
  export default rootReducer