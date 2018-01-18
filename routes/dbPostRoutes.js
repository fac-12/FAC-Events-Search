const axios = require("axios");
const { checkAddEvent, checkAddHost } = require("../services/dbHelpers");
const { addEvent } = require("../queries/eventQueries");
const {
  addEventInterest,
  removeEventInterest,
  addHostInterest,
  removeHostInterest
} = require("../queries/otherQueries");

// app.post("/api/addMeetupEvent", async (req, res) => {
//   try {
//     const allData = await axios.get(
//       `https://api.meetup.com/2/events?event_id=${req.body.id}`
//     );
//     const returnMsg = await addEvent(allData.data.results[0]);
//     res.send(returnMsg);
//   } catch (e) {
//     console.log("Add event error", e);
//   }
// });

module.exports = app => {
  app.post("/api/addMeetupEvent", async (req, res) => {
    try {
      if (req.body.data.event_url.includes("www.meetup.com")) {
        const urlArr = req.body.data.event_url.split("/");
        const id = urlArr[urlArr.length - 1]
          ? urlArr[urlArr.length - 1]
          : urlArr[urlArr.length - 2];
        const allData = await axios.get(
          `https://api.meetup.com/2/events?event_id=${id}`
        );
        const meetupEventData = await checkAddEvent(allData.data.results[0]);
        res.send(meetupEventData);
      } else {
        const eventData = await checkAddEvent(req.body.data);
        const addEventData = await addEvent(req.body.data);
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
      res.send(returnMsg);
    } catch (e) {
      console.log("Remove interest error", e);
    }
  });

  app.post("/api/addHostInterest", async (req, res) => {
    try {
      await removeHostInterest(req.body.host, req.body.user);
      const returnMsg = await addHostInterest(req.body.host, req.body.user);
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
