import { SELECT_FILTER } from "../actions/types";

const defaultState = {
  filter: "all",
  startDate: null,
  endDate: null,
  searchTerm: null
};

export default function(state = defaultState, action) {
  switch (action.type) {
  case SELECT_FILTER:
    return action.payload;
  default:
    return state;
  }
}
