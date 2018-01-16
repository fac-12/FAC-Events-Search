import _ from "lodash";
import {
  FETCH_EVENTS,
  ADD_EVENT,
  TOGGLE_EVENT_INTEREST
} from "../actions/types";

export default function(state = {}, action) {
  switch (action.type) {
  case FETCH_EVENTS:
    if (action.payload) {
      return _.mapKeys(action.payload, "id");
    }
    return state;
  case ADD_EVENT:
    return { ...state, [action.payload.id]: action.payload };
  case TOGGLE_EVENT_INTEREST:
    const id = action.payload.events_id;
    return {
      ...state,
      [id]: {
        ...state[id],
        interested: !state[id].interested
      }
    };
  case TOGGLE_HOST_INTEREST:
    const org = action.payload.data.name;
    const affected = _.filter(state, event => event.host_org_name === org);
    const amended = _.mapKeys(
      affected.map(event => ({
        ...event,
        suggested: !event.suggested
      })),
      "id"
    );
    return { ...state, ...amended };

  default:
    return state;
  }
}
