const axios = require("axios");
const queries = require("../database/queries");
const { addEvent, addHost } = require("../services/dbHelpers");

module.exports = app => {
  app.post("/api/addMeetupEvent", async (req, res) => {
    try {
      const allData = await axios.get(
        `https://api.meetup.com/2/events?event_id=${req.body.id}`
      );
      const returnMsg = await addEvent(allData.data.results[0]);
      res.send(returnMsg);
    } catch (e) {
      console.log("Add event error", e);
    }
  });

  app.post("/api/addHost", async (req, res) => {
    const urlArr = req.body.url.split("/");
    const urlOrg = urlArr[urlArr.length - 1]
      ? urlArr[urlArr.length - 1]
      : urlArr[urlArr.length - 2];
    try {
      const hostData = await axios.get(`https://api.meetup.com/${urlOrg}`);
      const returnMsg = await addHost(hostData.data);
      res.send(returnMsg);
    } catch (e) {
      console.log("Add host error", e);
    }
  });

  app.post("/api/addInterest", async (req, res) => {
    try {
      const returnMsg = await queries.addInterest(
        req.body.event,
        req.body.user
      );
      res.send(returnMsg);
    } catch (e) {
      console.log("Add interest error", e);
    }
  });

  app.post("/api/removeInterest", async (req, res) => {
    try {
      const returnMsg = await queries.removeInterest(
        req.body.event,
        req.body.user
      );
      res.send(returnMsg);
    } catch (e) {
      console.log("Remove interest error", e);
    }
  });
};
