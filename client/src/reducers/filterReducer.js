import { SELECT_FILTER } from "../actions/types";
import { DEFAULT_START_DATE, DEFAULT_END_DATE } from "../helpers/constants";

const defaultState = {
  filter: "all",
  startDate: DEFAULT_START_DATE,
  endDate: DEFAULT_END_DATE,
  searchTerm: ""
};

export default function(state = defaultState, action) {
  switch (action.type) {
  case SELECT_FILTER:
    return action.payload;
  default:
    return state;
  }
}
