const axios = require("axios");
const queries = require("../database/queries");

module.exports = app => {
  app.get("/api/events", async (req, res) => {
    try {
      const eventsData = await queries.getEvents();
      res.send(eventsData);
    } catch (e) {
      console.log("Fetch events error", e);
    }
  });

  app.get("/api/hosts", async (req, res) => {
    try {
      const hostsData = await queries.getHosts();
      res.send(hostsData);
    } catch (e) {
      console.log("Fetch hosts error", e);
    }
  });
};
