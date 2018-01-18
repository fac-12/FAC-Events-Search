import {
  FETCH_EVENTS,
  ADD_EVENT,
  TOGGLE_EVENT_INTEREST,
  GET_EVENT_INTEREST,
  ADD_EVENT_ERR
} from "./types";
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
    console.log(event.data);
    if (event.data.event) {
      dispatch({ type: ADD_EVENT, payload: event.data.event });
    } else {
      console.log(event.data.msg);
      dispatch({ type: ADD_EVENT_ERR, payload: event.data.msg });
    }
  } catch (e) {
    console.log(e);
  }
};

export const getEventInterest = eventId => async dispatch => {
  try {
    const Interest = await axios.get(
      `/api/getEventInterest?eventId=${eventId}`
    );
    dispatch({ type: GET_EVENT_INTEREST, payload: Interest.data });
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
