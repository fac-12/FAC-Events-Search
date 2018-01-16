// Function to filter events according to criteria
import _ from "lodash";

export default (filterOption, eventsObj) => {
  console.log(eventsObj);
  switch (filterOption) {
  case "interested":
    console.log("interested");
    return _.mapKeys(_.filter(eventsObj, event => event.interested), "id");
  case "suggested":
    console.log("suggested");
    return _.mapKeys(_.filter(eventsObj, event => event.suggested), "id");
  case "popular":
    console.log("popular");
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
