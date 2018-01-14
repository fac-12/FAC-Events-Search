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
    const event = await axios.post("/api/addMeetupEvent", { id });
    if (event.data.event) {
      dispatch({ type: ADD_EVENT, payload: event.data.event });
    } else {
      // /Handle showing error message
    }
  } catch (e) {
    console.log(e);
  }
};

// export const addInterest = (event, user) => async dispatch => {
//   console.log(event, user);
//   // const success = await axios.post("api/addInterest", {event, user})
// };
