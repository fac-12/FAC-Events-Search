import { GET_EVENT_INTEREST } from "../actions/types";

export default function(state = {}, action) {
  switch (action.type) {
  case GET_EVENT_INTEREST:
    console.log(action.payload);
    return state;
  default:
    return state;
  }
}
