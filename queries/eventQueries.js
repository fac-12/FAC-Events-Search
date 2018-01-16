const db = require("../database/db_connection");

const checkEvent = data =>
  db
    .query(
      "SELECT * FROM events WHERE event_name = $1 AND event_date = $2 AND event_time = $3",
      [data.event_name, data.event_date, data.event_time]
    )
    .then(res => res.length > 0)
    .catch(e => console.log("db error", e));

const addEvent = data =>
  db
    .query(
      `INSERT INTO events(event_name, event_date, event_time, host_org_name, venue_name, venue_address, venue_postcode, event_url, event_desc, venue_lat, venue_lon) VALUES($1,$2,$3,$4,$5,$6,$7,$8, $9, $10, $11) RETURNING *`,
      [
        data.event_name,
        data.event_date,
        data.event_time,
        data.host_org_name,
        data.venue_name,
        data.venue_address,
        data.venue_postcode,
        data.event_url,
        data.event_desc,
        data.event_lat,
        data.event_lon
      ]
    )
    .then(res => res[0])
    .catch(e => console.log("add event db error", e));

const getEvents = (user, startDate, endDate) => {
  console.log(user, startDate, endDate);
  return db.query(
    `SELECT id, event_name, event_date, event_time, host_org_name, venue_name, venue_address, venue_postcode, event_url, event_desc, venue_lat, venue_lon, COUNT(interest.events_id) AS num_interested,
    (SELECT CASE WHEN EXISTS
      (SELECT * FROM suggested,included_orgs WHERE suggested.users_id='${user}' AND included_orgs.name=events.host_org_name AND included_orgs.id=suggested.orgs_id)
      THEN TRUE ELSE FALSE END as suggested),
    (SELECT CASE WHEN EXISTS
      (SELECT * from interest WHERE events_id = events.id AND users_id='${user}')
      THEN TRUE ELSE FALSE END AS interested)
    FROM events                                                                                FULL JOIN interest
    ON interest.events_id=events.id
    WHERE event_date >= '${startDate}' AND event_date <= '${endDate}'
    GROUP BY events.id
    ORDER BY event_date, event_time`
  );
};

module.exports = {
  checkEvent,
  addEvent,
  getEvents
};
