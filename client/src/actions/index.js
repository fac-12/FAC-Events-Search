import { FETCH_USER, CUR_LOCATION } from "./types";
import axios from "axios";

export { fetchAllEvents, addEvent } from "./eventActions";
export {
  fetchHosts,
  addHost,
  addHostInterest,
  removeHostInterest,
  addEventInterest,
  removeEventInterest
} from "./hostActions";

export const fetchUser = () => async dispatch => {
  const user = await axios.get("/api/currentUser");
  dispatch({ type: FETCH_USER, payload: user.data });
};

export const setLocation = location => ({
  type: CUR_LOCATION,
  payload: location
});

// export default {
//   fetchAllEvents,
//   fetchHosts,
//   addHost,
//   addEvent
// };
