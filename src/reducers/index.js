import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";

import starshipsReducer from "./starships-reducer";
import cartReducer from "./cart-reducer";

export default combineReducers({
  starshipsReducer: starshipsReducer,
  cartReducer: cartReducer,
  form: formReducer
});
