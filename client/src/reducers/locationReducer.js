import { CUR_LOCATION } from "../actions/types";

export default function(state = "/", action) {
  switch (action.type) {
  case CUR_LOCATION:
    return action.payload;
  default:
    return state;
  }
}
