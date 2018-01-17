// Function to filter events according to criteria
import _ from "lodash";
import { createSelector } from "reselect";
import { pInt } from "../helpers/conversions";

const getFilter = state => state.filter;
const getEvents = state => state.events;

export const searchByDate = createSelector(
  [getFilter, getEvents],
  (eventFilter, events) =>
    _.mapKeys(
      _.filter(
        events,
        event =>
          pInt(event.event_datetime) >= pInt(eventFilter.startDate) &&
          pInt(event.event_datetime) <= pInt(eventFilter.endDate) + 86400000
      ),
      "id"
    )
);

export const filterEvents = createSelector(
  [getFilter, searchByDate],
  (eventFilter, events) => {
    switch (eventFilter.filter) {
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
