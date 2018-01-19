import { FETCH_USER } from "../actions/types";

export default function(state = null, action) {
  switch (action.type) {
  case FETCH_USER:
    if (action.payload[0]) {
      const { github_username, ...rest } = action.payload[0];
      console.log("feeding into state: ", {
        github_username: `@${github_username}`,
        ...rest
      });
      return { github_username: `@${github_username}`, ...rest };
    }
    return false;
  default:
    return state;
  }
}
