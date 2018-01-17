import { GET_EVENT_INTEREST } from "../actions/types";
import _ from "lodash";

export default function(state = {}, action) {
  switch (action.type) {
  case GET_EVENT_INTEREST:
    return _.mapKeys(action.payload, "id");
  default:
    return state;
  }
}
