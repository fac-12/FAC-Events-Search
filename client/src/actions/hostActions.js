import { FETCH_HOSTS, ADD_HOST, TOGGLE_HOST_INTEREST } from "./types";
import axios from "axios";

export const fetchHosts = user => async dispatch => {
  const hosts = await axios.get(`api/hosts?user=${user}`);
  dispatch({ type: FETCH_HOSTS, payload: hosts.data });
};

export const addHost = (url, callback) => async dispatch => {
  const res = await axios.post("api/addHost", { url });
  callback(res.data.msg);
  dispatch({ type: ADD_HOST, payload: res.data.org });
};

export const addHostInterest = (user, host) => async dispatch => {
  const res = await axios.post("api/addHostInterest", { user, host });
  dispatch({ type: TOGGLE_HOST_INTEREST, payload: res });
};

export const removeHostInterest = (user, host) => async dispatch => {
  const res = await axios.post("api/removeHostInterest", { user, host });
  dispatch({ type: TOGGLE_HOST_INTEREST, payload: res });
};
