const axios = require("axios");
const { getEvents, getEventInterest } = require("../queries/eventQueries");
const { getHosts } = require("../queries/hostQueries");

module.exports = app => {
  app.get("/api/events", async (req, res) => {
    const now = new Date(Date.now()).toJSON();
    try {
      const eventsData = await getEvents(
        req.query.user,
        req.query.startDate || now,
        req.query.endDate || "2099-01-01T00:00:00Z"
      );
      res.send(eventsData);
    } catch (e) {
      console.log("Fetch events error", e);
    }
  });

  app.get("/api/getEventInterest", async (req, res) => {
    try {
      console.log(req.query);
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
