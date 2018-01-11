const axios = require("axios");
const queries = require("../database/queries");

const addEvent = data =>
  new Promise(async (resolve, reject) => {
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
    const eventExists = await queries.checkEvent(eventData);
    if (eventExists) {
      resolve("An event with that name, date and time already exists.");
    } else {
      const eventAdded = await queries.addEvent(eventData);
      resolve(`Thank you! Your event, ${eventAdded}, has been added.`);
    }
  });

module.exports = app => {
  app.post("/api/addMeetupEvent", async (req, res) => {
    const allData = await axios.get(
      `https://api.meetup.com/2/events?event_id=${req.body.id}`
    );
    const returnMsg = await addEvent(allData.data.results[0]);
    res.send(returnMsg);
  });
};
