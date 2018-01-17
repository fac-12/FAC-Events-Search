// Function to filter events according to criteria
import _ from "lodash";
import { createSelector } from "reselect";

const getFilter = state => state.filter.filter;
const getEvents = state => state.events;

export const filterEvents = createSelector(
  [getFilter, getEvents],
  (eventFilter, events) => {
    switch (eventFilter) {
    case "interested":
      return _.mapKeys(_.filter(events, event => event.interested), "id");
    case "suggested":
      return _.mapKeys(_.filter(events, event => event.suggested), "id");
    case "popular":
      return _.mapKeys(
        _.sortBy(_.filter(events, event => event.num_interested > 0), [
          "num_interested"
        ]),
        "id"
      );
    default:
      return events;
    }
  }
);
