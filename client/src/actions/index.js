import { FETCH_USER, CUR_LOCATION, FETCH_EVENTS } from "./types";
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
