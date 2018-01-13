const { checkEvent, addEvent } = require("../queries/eventQueries");
const { checkHost, addHost } = require("../queries/hostQueries");

const checkAddEvent = data =>
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
    try {
      const eventExists = await checkEvent(eventData);
      if (eventExists) {
        resolve("An event with that name, date and time already exists.");
      } else {
        const eventAdded = await addEvent(eventData);
        resolve(`Thank you! Your event, ${eventAdded}, has been added.`);
      }
    } catch (e) {
      console.log("add Event error:", e);
    }
  });

const checkAddHost = data =>
  new Promise(async (resolve, reject) => {
    const hostData = {
      name: data.name,
      url: data.link
    };
    try {
      const hostExists = await checkHost(hostData.url);
      if (hostExists) {
        resolve("That organization is already included.");
      } else {
        const hostAdded = await addHost(hostData);
        resolve(`Thank you! The organization ${hostAdded} has been added.`);
      }
    } catch (e) {
      console.log("add Host error:", e);
    }
  });

module.exports = { checkAddEvent, checkAddHost };
