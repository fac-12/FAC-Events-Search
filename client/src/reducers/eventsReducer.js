import { FETCH_EVENTS, ADD_EVENT } from "../actions/types";

export default function(state = [], action) {
  switch (action.type) {
    case FETCH_EVENTS:
      return action.payload || [];
    case ADD_EVENT:
      return [...state, ([action.payload.id]: action.payload)];
    default:
      return state;
  }
}
