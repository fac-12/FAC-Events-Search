// Function to filter events according to criteria
import _ from "lodash";

export default (filterOption, eventsObj) => {
  console.log("filtering by", filterOption, "with", eventsObj);
  switch (filterOption) {
  case "interested":
    return _.mapKeys(_.filter(eventsObj, event => event.interested), "id");
  case "suggested":
    return _.mapKeys(_.filter(eventsObj, event => event.suggested), "id");
  case "popular":
    return _.mapKeys(
      _.sortBy(_.filter(eventsObj, event => event.num_interested > 1), [
        "num_interested"
      ]),
      "id"
    );
  default:
    return eventsObj;
  }
};
