import { FETCH_HOSTS } from "../actions/types";

export default function(state = [], action) {
  switch (action.type) {
  case FETCH_HOSTS:
    return action.payload || [];
  default:
    return state;
  }
}
