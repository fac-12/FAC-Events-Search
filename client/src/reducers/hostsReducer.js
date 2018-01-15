import { FETCH_HOSTS, TOGGLE_HOST_INTEREST } from "../actions/types";

export default function(state = [], action) {
  switch (action.type) {
  case FETCH_HOSTS:
    return action.payload || [];
  case TOGGLE_HOST_INTEREST:
    const copyState = state.slice(0);
    const item = copyState.find(
      host => host.id === action.payload.data.orgs_id
    );
    item.case = item.case === "0" ? "1" : "0";
    return copyState;
  default:
    return state;
  }
}
