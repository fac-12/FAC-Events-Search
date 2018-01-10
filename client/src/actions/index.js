import { FETCH_USER, CUR_LOCATION } from "./types";
import axios from "axios";

export const fetchUser = () => async dispatch => {
  const user = await axios.get("/api/currentUser");
  dispatch({ type: FETCH_USER, payload: user.data });
};

export const setLocation = location => ({
  type: CUR_LOCATION,
  payload: location
});
