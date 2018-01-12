const db = require("./db_connection");

const checkUser = id => db.query("SELECT * FROM users WHERE id = $1", [id]);

const addUser = profile =>
  db.query(
    `INSERT INTO users(id, name, github_username,email, bio, photo_url) VALUES($1,$2,$3,$4,$5,$6) RETURNING id, name, github_username, email, bio, photo_url`,
    [
      profile.id,
      profile.displayName,
      profile.username,
      profile._json.email,
      profile._json.bio,
      profile._json.avatar_url
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

module.exports = { addUser, checkUser, checkEvent, addEvent, getEvents };
