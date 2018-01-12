import { combineReducers } from "redux";
import authReducer from "./authReducer";
import locationReducer from "./locationReducer";
import eventsReducer from "./eventsReducer";
import hostsReducer from "./hostsReducer";

const rootReducer = combineReducers({
  auth: authReducer,
  curLocation: locationReducer,
  events: eventsReducer,
  hosts: hostsReducer
});

export default rootReducer;
