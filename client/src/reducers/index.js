import { combineReducers } from "redux";
import authReducer from "./authReducer";
import locationReducer from "./locationReducer";
import eventsReducer from "./eventsReducer";
import hostsReducer from "./hostsReducer";
import { reducer as formReducer } from "redux-form";
import filterReducer from "./filterReducer";
import eventUserReducer from "./eventUserReducer";

const rootReducer = combineReducers({
  auth: authReducer,
  curLocation: locationReducer,
  events: eventsReducer,
  hosts: hostsReducer,
  form: formReducer,
  filter: filterReducer,
  eventusers: eventUserReducer
});

export default rootReducer;
