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
      profile._json.bio
      // profile.photos[0].value
    ]
  );

const checkEvent = data => {
  db.query("SELECT * FROM events");
};

const addEvent = data =>
  db.query(
    `INSERT INTO events(event_name, event_date, event_time, host_org_name, venue_name, venue_address, venue_postcode, event_url, event_desc) VALUES($1,$2,$3,$4,$5,$6,$7,$8, $9) RETURNING event_name, event_date, event_time`,
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
  );

module.exports = { addUser, checkUser, checkEvent, addEvent };
