const { checkEvent, addEvent } = require("../queries/eventQueries");
const { checkHost, addHost } = require("../queries/hostQueries");

const checkAddEvent = data =>
  new Promise(async (resolve, reject) => {
    if (data.venue) {
      const eventData = {
        event_name: data.name,
        event_datetime: data.time,
        host_org_name: data.group.name,
        venue_name: data.venue.name,
        venue_address: data.venue.address_1,
        venue_postcode: data.venue.city,
        event_url: data.event_url,
        event_desc: data.description,
        event_lat: data.venue.lat,
        event_lon: data.venue.lon
      };
      try {
        const eventExists = await checkEvent(eventData);
        if (eventExists) {
          resolve({
            msg: "An event with that name, date and time already exists."
          });
        } else {
          const eventAdded = await addEvent(eventData);
          resolve({
            msg: `Thank you! Your event, ${
              eventAdded.event_name
            }, has been added.`,
            event: eventAdded
          });
        }
      } catch (e) {
        console.log("add Event error:", e);
      }
    } else {
      resolve({
        msg:
          "Sorry, this event cannot be added automatically from Meetup. Please enter the details manually."
      });
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
        resolve({ msg: "That organization is already included." });
      } else {
        const hostAdded = await addHost(hostData);
        resolve({
          org: hostAdded,
          msg: `Thank you! The organization ${hostAdded.name} has been added.`
        });
      }
    } catch (e) {
      console.log("add Host error:", e);
    }
  });

module.exports = { checkAddEvent, checkAddHost };
