const axios = require("axios");
const queries = require("../database/queries");

const addEvent = async data => {
  const datetime = new Date(data.time);
  const options = { year: "numeric", month: "long", day: "numeric" };
  const eventData = {
    event_name: data.name,
    event_date: datetime.toLocaleDateString("en-GB", options),
    event_time: datetime.toLocaleTimeString("en-GB"),
    host_org_name: data.group.name,
    venue_name: data.venue.name,
    venue_address: data.venue.address_1,
    venue_postcode: data.venue.city,
    event_url: data.event_url,
    event_desc: data.description
  };
  const res = await queries.addEvent(eventData);
  console.log("res is ", res);
  //   .then(res => console.log("checked", res).catch(e => console.log(e)));
};

module.exports = app => {
  app.post("/api/addMeetupEvent", async (req, res) => {
    const allData = await axios.get(
      `https://api.meetup.com/2/events?event_id=${req.body.id}`
    );
    // addEvent(allData.data.results[0]);
    res.send(allData.data.results[0].name);
  });
};
