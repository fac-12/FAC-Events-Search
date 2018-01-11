const db = require("./db_connection");

const checkUser = id => db.query("SELECT * FROM users WHERE id = $1", [id]);

const addUser = profile =>
  db.query(
    `INSERT INTO users(id, name, github_username,email, bio) VALUES($1,$2,$3, $4, $5) RETURNING name`,
    [
      profile.id,
      profile.displayName,
      profile.username,
      profile._json.email,
      profile._json.bio,
      profile.photos[0].value
    ]
  );

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
      `INSERT INTO events(event_name, event_date, event_time, host_org_name, venue_name, venue_address, venue_postcode, event_url, event_desc) VALUES($1,$2,$3,$4,$5,$6,$7,$8, $9) RETURNING event_name`,
      [
        data.event_name,
        data.event_date,
        data.event_time,
        data.host_org_name,
        data.venue_name,
        data.venue_address,
        data.venue_postcode,
        data.event_url,
        data.event_desc
      ]
    )
    .then(res => res[0].event_name)
    .catch(e => console.log("db error", e));

const getEvents = () => db.query("SELECT * FROM events");

const addInterest = (event, user) =>
  db.query(`INSERT INTO interest(events_id,users_id) VALUES($1,$2)`, [
    event,
    user
  ]);

const removeInterest = (event, user) =>
  db.query(`DELETE FROM interest WHERE events_id=$1 AND users_id=$2)`, [
    event,
    user
  ]);

module.exports = {
  addUser,
  checkUser,
  checkEvent,
  addEvent,
  getEvents,
  addInterest
};
