import { FETCH_USER, CUR_LOCATION, FETCH_EVENTS, FETCH_HOSTS } from "./types";
import axios from "axios";

export const fetchUser = () => async dispatch => {
  const user = await axios.get("/api/currentUser");
  dispatch({ type: FETCH_USER, payload: user.data });
};

export const setLocation = location => ({
  type: CUR_LOCATION,
  payload: location
});

export const fetchAllEvents = () => async dispatch => {
  const events = await axios.get("api/events");
  dispatch({ type: FETCH_EVENTS, payload: events.data });
};

export const addInterest = (event, user) => async dispatch => {
  console.log(event, user);
  // const success = await axios.post("api/addInterest", {event, user})
};

export const fetchHosts = () => async dispatch => {
  const hosts = await axios.get("api/hosts");
  dispatch({ type: FETCH_HOSTS, payload: hosts.data });
};
