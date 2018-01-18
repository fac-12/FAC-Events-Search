import {
  FETCH_USER,
  CUR_LOCATION,
  SELECT_FILTER,
  RESET_MSG,
  HOST_MSG
} from "./types";
import axios from "axios";
import { DEFAULT_START_DATE, DEFAULT_END_DATE } from "../helpers/constants";

export {
  fetchAllEvents,
  addEvent,
  addEventInterest,
  removeEventInterest,
  getEventInterest
} from "./eventActions";
export {
  fetchHosts,
  addHost,
  addHostInterest,
  removeHostInterest
} from "./hostActions";

export const fetchUser = callback => async dispatch => {
  const user = await axios.get("/api/currentUser");
  if (user.data && user.data.length > 0) {
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
  startDate = DEFAULT_START_DATE,
  endDate = DEFAULT_END_DATE,
  searchTerm = ""
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
  dispatch({ type: FETCH_USER, payload: user.data });
  callback();
};

export const resetMessage = key => ({
  type: RESET_MSG,
  payload: key
});

export const addHostMessage = text => ({
  type: HOST_MSG,
  payload: text
});
