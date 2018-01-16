import { SELECT_FILTER } from "../actions/types";

const defaultState = {
  filter: "all",
  filteredIds: []
};

export default function(state = defaultState, action) {
  switch (action.type) {
  case SELECT_FILTER:
    return state;
  default:
    return state;
  }
}
