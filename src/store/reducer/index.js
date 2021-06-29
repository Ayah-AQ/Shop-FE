import { createStore,compose,applyMiddleware } from 'redux'
import thunk from "redux-thunk"
import{ fetchProducts} from "../actions/productActions"
import { fetchShops } from "../actions/shopActions";
import rootReducer from"../rootReducer"
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
)
//run once at the begining

store.dispatch(fetchShops());
store.dispatch(fetchProducts())
export default store