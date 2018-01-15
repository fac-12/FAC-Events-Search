const axios = require("axios");
const { getEvents } = require("../queries/eventQueries");
const { getHosts } = require("../queries/hostQueries");

module.exports = app => {
  app.get("/api/events", async (req, res) => {
    try {
      const eventsData = await getEvents();
      res.send(eventsData);
    } catch (e) {
      console.log("Fetch events error", e);
    }
  });

  app.get("/api/hosts", async (req, res) => {
    try {
      const hostsData = await getHosts("29644807");
      res.send(hostsData);
    } catch (e) {
      console.log("Fetch hosts error", e);
    }
  });
};
