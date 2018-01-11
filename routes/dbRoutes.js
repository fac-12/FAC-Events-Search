const axios = require("axios");
const queries = require("../database/queries");
const { addEvent } = require("../services/dbHelpers");

module.exports = app => {
  app.post("/api/addMeetupEvent", async (req, res) => {
    try {
      const allData = await axios.get(
        `https://api.meetup.com/2/events?event_id=${req.body.id}`
      );
      const returnMsg = await addEvent(allData.data.results[0]);
      res.send(returnMsg);
    } catch (e) {
      console.log(e);
    }
  });

  app.get("/api/events", async (req, res) => {
    try {
      const eventsData = await queries.getEvents();
      res.send(eventsData);
    } catch (e) {
      console.log(e);
    }
  });
};
