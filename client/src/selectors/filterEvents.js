// Function to filter events according to criteria
import _ from "lodash";
import { createSelector } from "reselect";
import { pInt } from "../helpers/conversions";

const getFilter = state => state.filter;
const getEvents = state => state.events;

const searchByTerm = createSelector(
  [getFilter, getEvents],
  (eventFilter, events) => {
    if (eventFilter.searchTerm.length > 0) {
      return _.filter(
        events,
        event =>
          (event.event_desc
            ? event.event_desc
              .toLowerCase()
              .includes(eventFilter.searchTerm.toLowerCase())
            : false) ||
          event.event_name
            .toLowerCase()
            .includes(eventFilter.searchTerm.toLowerCase())
      );
    }
    return events;
  }
);

const searchByDate = createSelector(
  [getFilter, searchByTerm],
  (eventFilter, events) =>
    _.filter(
      events,
      event =>
        pInt(event.event_datetime) >= pInt(eventFilter.startDate) &&
        pInt(event.event_datetime) <= pInt(eventFilter.endDate) + 86400000
    )
);

export const filterEvents = createSelector(
  [getFilter, searchByDate],
  (eventFilter, events) => {
    switch (eventFilter.filter) {
    case "interested":
      return _.sortBy(
        _.filter(events, event => event.interested),
        "event_datetime"
      );
    case "suggested":
      return _.sortBy(
        _.filter(events, event => event.suggested),
        "event_datetime"
      );
    case "popular":
      return _.reverse(
        _.sortBy(
          _.filter(events, event => event.num_interested > 0),
          "num_interested"
        )
      );
    default:
      return _.sortBy(events, "event_datetime");
    }
  }
);
