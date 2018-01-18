// Function to filter events according to criteria
import _ from "lodash";
import { createSelector } from "reselect";

const getHosts = state => state.hosts;

export const sortHosts = createSelector([getHosts], hosts => _.sortBy(hosts, "name"));
