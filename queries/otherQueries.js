const db = require("../database/db_connection");

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
  addInterest,
  removeInterest
};
