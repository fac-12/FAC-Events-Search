import { FETCH_USER } from "../actions/types";

export default function(state = null, action) {
  switch (action.type) {
  case FETCH_USER:
    const { github_username, ...rest } = action.payload[0];
    return { github_username: `@${github_username}`, ...rest } || false;
  default:
    return state;
  }
}
