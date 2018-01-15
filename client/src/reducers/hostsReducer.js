import { FETCH_HOSTS, TOGGLE_HOST_INTEREST } from "../actions/types";

export default function(state = [], action) {
  switch (action.type) {
    case FETCH_HOSTS:
      console.log("payload:", action.payload);
      return action.payload || [];
    case TOGGLE_HOST_INTEREST:
      const item = state.find(host => host.id === action.payload.data.orgs_id);
      const index = state.indexOf(item);
      const { olditem: index, ...rest } = state;
      console.log(olditem);
      return state;
    default:
      return state;
  }
}

// const { github_username, ...rest } = action.payload[0];
// return { github_username: `@${github_username}`, ...rest };
