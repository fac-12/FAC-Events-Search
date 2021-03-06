const db = require("../database/db_connection");

const checkHost = url =>
  db
    .query("SELECT * FROM included_orgs WHERE url = $1", [url])
    .then(res => res.length > 0)
    .catch(e => console.log("db error", e));

const addHost = data =>
  db
    .query(`INSERT INTO included_orgs(name, url) VALUES($1,$2) RETURNING *`, [
      data.name,
      data.url
    ])
    .then(res => res[0])
    .catch(e => console.log("db error", e));

const getHosts = user =>
  db.query(
    `SELECT *, 
    (SELECT CASE WHEN EXISTS 
      (SELECT * FROM suggested WHERE orgs_id=included_orgs.id AND users_id =$1) 
    THEN TRUE ELSE FALSE END as suggested) 
    FROM included_orgs`,
    [user]
  );

module.exports = {
  checkHost,
  addHost,
  getHosts
};
