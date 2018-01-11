const axios = require("axios");
const queries = require("../database/queries");
const addEvent = require("../services/addEvent");

module.exports = app => {
  app.post("/api/addMeetupEvent", async (req, res) => {
    const allData = await axios.get(
      `https://api.meetup.com/2/events?event_id=${req.body.id}`
    );
    const returnMsg = await addEvent(allData.data.results[0]);
    res.send(returnMsg);
  });
};
