const db = require("../database/db_connection");

const addEventInterest = (event, user) =>
  db.query(
    `INSERT INTO interest(events_id,users_id) VALUES($1,$2) RETURNING events_id`,
    [event, user]
  );

const removeEventInterest = (event, user) =>
  db.query(
    `DELETE FROM interest WHERE events_id=$1 AND users_id=$2) RETURNING events_id`,
    [event, user]
  );

const addHostInterest = (host, user) =>
  db.query(
    `INSERT INTO suggested(orgs_id,users_id) VALUES($1,$2) RETURNING orgs_id`,
    [host, user]
  );

const removeHostInterest = (host, user) =>
  db.query(
    `DELETE FROM interest WHERE orgs_id=$1 AND users_id=$2) RETURNING orgs_id`,
    [host, user]
  );

module.exports = {
  addEventInterest,
  removeEventInterest,
  addHostInterest,
  removeHostInterest
};
