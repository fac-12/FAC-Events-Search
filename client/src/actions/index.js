import { FETCH_USER, CUR_LOCATION } from "./types";
import axios from "axios";
import { fetchAllEvents, addEvent } from "./eventActions";
import { fetchHosts, addHost } from "./hostActions";

const fetchUser = () => async dispatch => {
  const user = await axios.get("/api/currentUser");
  dispatch({ type: FETCH_USER, payload: user.data });
};

const setLocation = location => ({
  type: CUR_LOCATION,
  payload: location
});

export default {
  fetchUser,
  setLocation,
  fetchAllEvents,
  fetchHosts,
  addHost,
  addEvent
};
