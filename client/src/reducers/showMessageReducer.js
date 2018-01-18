import {
  ADD_EVENT_ERR,
  ADD_EVENT,
  RESET_MSG,
  HOST_MSG
} from "../actions/types";

export default function(state = {}, action) {
  switch (action.type) {
  case ADD_EVENT_ERR:
    return {
      ...state,
      addEvent: action.payload.msg
    };
  case ADD_EVENT:
    return {
      ...state,
      addEvent: action.payload.msg
    };
  case RESET_MSG:
    return {
      ...state,
      [action.payload]: null
    };
  case HOST_MSG:
    return {
      ...state,
      hosts: action.payload
    };
  default:
    return state;
  }
}
