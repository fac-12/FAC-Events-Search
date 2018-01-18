import { ADD_EVENT_ERR, ADD_EVENT, RESET_MSG } from "../actions/types";
import _ from "lodash";

export default function(state = null, action) {
  switch (action.type) {
  case ADD_EVENT_ERR:
    return action.payload;
  case ADD_EVENT:
    return `Thank you! Your event, ${
      action.payload.event_name
    } has been added.`;
  case RESET_MSG:
    return action.payload;
  default:
    return state;
  }
}
