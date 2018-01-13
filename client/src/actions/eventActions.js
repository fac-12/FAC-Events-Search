import { FETCH_EVENTS, ADD_EVENT } from "./types";
import axios from "axios";

export const fetchAllEvents = () => async dispatch => {
  try {
    const events = await axios.get("api/events");
    dispatch({ type: FETCH_EVENTS, payload: events.data });
  } catch (e) {
    console.log(e);
  }
};

export const addEvent = id => async dispatch => {
  try {
    const msg = await axios.post("/api/addMeetupEvent", { id });
    dispatch({ type: ADD_EVENT, payload: msg });
  } catch (e) {
    console.log(e);
  }
};

// export const addInterest = (event, user) => async dispatch => {
//   console.log(event, user);
//   // const success = await axios.post("api/addInterest", {event, user})
// };
