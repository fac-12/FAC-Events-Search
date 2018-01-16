import { FETCH_EVENTS, ADD_EVENT, TOGGLE_EVENT_INTEREST } from "./types";
import axios from "axios";

export const fetchAllEvents = user => async dispatch => {
  console.log("fetch all events");
  try {
    const events = await axios.get(`api/events?user=${user}`);
    dispatch({ type: FETCH_EVENTS, payload: events.data });
  } catch (e) {
    console.log(e);
  }
};

export const addEvent = data => async dispatch => {
  try {
    const event = await axios.post("/api/addMeetupEvent", { data });
    if (event.data.event) {
      dispatch({ type: ADD_EVENT, payload: event.data.event });
    } else {
      // /Handle showing error message
    }
  } catch (e) {
    console.log(e);
  }
};

export const addEventInterest = (user, event) => async dispatch => {
  const res = await axios.post("api/addEventInterest", { user, event });
  dispatch({ type: TOGGLE_EVENT_INTEREST, payload: res.data });
};

export const removeEventInterest = (user, event) => async dispatch => {
  const res = await axios.post("api/removeEventInterest", { user, event });
  dispatch({ type: TOGGLE_EVENT_INTEREST, payload: res.data });
};
