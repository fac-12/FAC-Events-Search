const axios = require("axios");
const { getEvents, getEventInterest } = require("../queries/eventQueries");
const { getHosts } = require("../queries/hostQueries");

const NO_END_DATE = new Date(2099, 1, 1).getTime();

module.exports = app => {
  app.get("/api/events", async (req, res) => {
    const now = new Date(Date.now()).getTime();
    try {
      const eventsData = await getEvents(
        req.query.user,
        req.query.startDate || now,
        req.query.endDate || NO_END_DATE
      );
      res.send(eventsData);
    } catch (e) {
      console.log("Fetch events error", e);
    }
  });

  app.get("/api/getEventInterest", async (req, res) => {
    try {
      const eventInterestData = await getEventInterest(req.query.eventId);
      res.send(eventInterestData);
    } catch (e) {
      console.log("Fetch events error", e);
    }
  });

  app.get("/api/hosts", async (req, res) => {
    try {
      const hostsData = await getHosts(req.query.user);
      res.send(hostsData);
    } catch (e) {
      console.log("Fetch hosts error", e);
    }
  });
};
