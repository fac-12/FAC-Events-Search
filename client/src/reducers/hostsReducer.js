import _ from "lodash";
import { FETCH_HOSTS, TOGGLE_HOST_INTEREST } from "../actions/types";

export default function(state = {}, action) {
  switch (action.type) {
  case FETCH_HOSTS:
    if (action.payload) {
      return _.mapKeys(action.payload, "id");
    }
    return state;
  case TOGGLE_HOST_INTEREST:
    const id = action.payload.data.orgs_id;
    return {
      ...state,
      [id]: {
        ...state[id],
        suggested: !state[id].suggested
      }
    };
  default:
    return state;
  }
}
