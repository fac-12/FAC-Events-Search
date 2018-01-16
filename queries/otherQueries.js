const db = require("../database/db_connection");

const addEventInterest = (event, user) =>
  db
    .query(
      `INSERT INTO interest(events_id,users_id) VALUES($1,$2) RETURNING events_id`,
      [event, user]
    )
    .then(res => {
      console.log("d", res);
      return res[0];
    })
    .catch(e => console.log("db error", e));

const removeEventInterest = (event, user) =>
  db.query(
    `DELETE FROM interest WHERE events_id=$1 AND users_id=$2 RETURNING events_id`,
    [event, user]
  );

const addHostInterest = (host, user) =>
  db
    .query(
      `INSERT INTO suggested(orgs_id,users_id) VALUES($1,$2) RETURNING orgs_id`,
      [host, user]
    )
    .then(res => {
      console.log("d");
      return res[0];
    })
    .catch(e => console.log("db error", e));

const removeHostInterest = (host, user) =>
  db
    .query(
      `DELETE FROM suggested WHERE orgs_id=$1 AND users_id=$2 RETURNING orgs_id`,
      [host, user]
    )
    .then(res => {
      console.log("b");
      return res[0];
    })
    .catch(e => console.log("db error", e));

module.exports = {
  addEventInterest,
  removeEventInterest,
  addHostInterest,
  removeHostInterest
};
