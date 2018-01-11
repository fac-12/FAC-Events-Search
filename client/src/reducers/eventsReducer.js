import { FETCH_EVENTS } from "../actions/types";

export default function(state = [], action) {
  switch (action.type) {
  case FETCH_EVENTS:
    return action.payload || false;
  default:
    return state;
  }
}
