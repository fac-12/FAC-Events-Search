import _ from "lodash";
import {
  FETCH_EVENTS,
  ADD_EVENT,
  TOGGLE_EVENT_INTEREST,
  TOGGLE_HOST_INTEREST
} from "../actions/types";

export default function(state = {}, action) {
  switch (action.type) {
  case FETCH_EVENTS:
    if (action.payload) {
      return _.mapKeys(action.payload, "id");
    }
    return state;
  case ADD_EVENT:
    return { ...state, [action.payload.event.id]: action.payload.event };
  case TOGGLE_EVENT_INTEREST:
    const id = action.payload.events_id;
    return {
      ...state,
      [id]: {
        ...state[id],
        num_interested: state[id].interested
          ? parseInt(state[id].num_interested, 10) - 1
          : parseInt(state[id].num_interested, 10) + 1,
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
