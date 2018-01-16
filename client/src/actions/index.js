import { FETCH_USER, CUR_LOCATION, SELECT_FILTER } from "./types";
import axios from "axios";

export {
  fetchAllEvents,
  addEvent,
  addEventInterest,
  removeEventInterest
} from "./eventActions";
export {
  fetchHosts,
  addHost,
  addHostInterest,
  removeHostInterest
} from "./hostActions";

export const fetchUser = callback => async dispatch => {
  const user = await axios.get("/api/currentUser");
  if (user.data) {
    callback(user.data[0].id);
  } else {
    callback("123");
  }
  dispatch({ type: FETCH_USER, payload: user.data });
};

export const setLocation = location => ({
  type: CUR_LOCATION,
  payload: location
});

export const setFilter = (
  filter = "all",
  startDate = null,
  endDate = null,
  searchTerm = null
) => ({
  type: SELECT_FILTER,
  payload: { filter, startDate, endDate, searchTerm }
});

export const updateProfile = (values, callback) => async dispatch => {
  const { github_username, ...rest } = values;
  const user = await axios.put("/api/updateProfile", {
    github_username: github_username.split("@").slice(-1)[0],
    ...rest
  });
  callback();
  dispatch({ type: FETCH_USER, payload: user.data });
};
