const axios = require("axios");
const { checkAddEvent, checkAddHost } = require("../services/dbHelpers");
const { addEvent } = require("../queries/eventQueries");
const {
  addEventInterest,
  removeEventInterest,
  addHostInterest,
  removeHostInterest
} = require("../queries/otherQueries");

module.exports = app => {
  app.post("/api/addMeetupEvent", async (req, res) => {
    try {
      if (req.body.data.event_url.includes("www.meetup.com")) {
        const allData = await axios.get(
          `https://api.meetup.com/2/events?event_id=${req.body.id}`
        );
        const meetupEventData = await checkAddEvent(allData.data.results[0]);
        console.log("Sent data is: ", meetupEventData);
        res.send(meetupEventData);
      } else {
        const eventData = await checkAddEvent(req.body.data);
        const addEventData = await addEvent(req.body.data);
        console.log("Sent data is: ", eventData);
        res.send(eventData);
      }
    } catch (e) {
      console.log("Add event error ", e);
    }
  });

  app.post("/api/addHost", async (req, res) => {
    const urlArr = req.body.url.split("/");
    const urlOrg = urlArr[urlArr.length - 1]
      ? urlArr[urlArr.length - 1]
      : urlArr[urlArr.length - 2];
    try {
      const hostData = await axios.get(`https://api.meetup.com/${urlOrg}`);
      const returnMsg = await checkAddHost(hostData.data);
      res.send(returnMsg);
    } catch (e) {
      console.log("Add host error", e);
    }
  });

  app.post("/api/addEventInterest", async (req, res) => {
    try {
      await removeEventInterest(req.body.event, req.body.user);
      const returnMsg = await addEventInterest(req.body.event, req.body.user);
      res.send(returnMsg);
    } catch (e) {
      console.log("Add event error", e);
    }
  });

  app.post("/api/removeEventInterest", async (req, res) => {
    try {
      const returnMsg = await removeEventInterest(
        req.body.event,
        req.body.user
      );
      console.log("remove", returnMsg);
      res.send(returnMsg);
    } catch (e) {
      console.log("Remove interest error", e);
    }
  });

  app.post("/api/addHostInterest", async (req, res) => {
    try {
      console.log("a");
      await removeHostInterest(req.body.host, req.body.user);
      console.log("c");
      const returnMsg = await addHostInterest(req.body.host, req.body.user);
      console.log("e");
      res.send(returnMsg);
    } catch (e) {
      console.log("Add interest error", e);
    }
  });

  app.post("/api/removeHostInterest", async (req, res) => {
    try {
      const returnMsg = await removeHostInterest(req.body.host, req.body.user);
      res.send(returnMsg);
    } catch (e) {
      console.log("Remove interest error", e);
    }
  });
};
