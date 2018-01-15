import {
  FETCH_EVENTS,
  ADD_EVENT,
  TOGGLE_EVENT_INTEREST
} from "../actions/types";

export default function(state = [], action) {
  switch (action.type) {
    case FETCH_EVENTS:
      return action.payload || [];
    case ADD_EVENT:
      return [...state, ([action.payload.id]: action.payload)];
    case TOGGLE_EVENT_INTEREST:
      return state;
    default:
      return state;
  }
}
