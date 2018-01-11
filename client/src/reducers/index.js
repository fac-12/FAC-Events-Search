import { combineReducers } from "redux";
import authReducer from "./authReducer";
import locationReducer from "./locationReducer";

const rootReducer = combineReducers({
  auth: authReducer,
  curLocation: locationReducer
});

export default rootReducer;
