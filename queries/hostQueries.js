const db = require("../database/db_connection");

const checkHost = url =>
  db
    .query("SELECT * FROM included_orgs WHERE url = $1", [url])
    .then(res => res.length > 0)
    .catch(e => console.log("db error", e));

const addHost = data =>
  db
    .query(
      `INSERT INTO included_orgs(name, url) VALUES($1,$2) RETURNING name`,
      [data.name, data.url]
    )
    .then(res => res[0].name)
    .catch(e => console.log("db error", e));

const getHosts = user => db.query(
  `SELECT included_orgs.id,included_orgs.url,included_orgs.name, (SELECT CASE WHEN EXISTS( SELECT orgs_id FROM suggested WHERE orgs_id=included_orgs.id AND users_id =$1) THEN CAST (1 AS BIT) ELSE CAST (0 AS BIT) END ) FROM included_orgs FULL JOIN suggested ON suggested.orgs_id = included_orgs.id `,
  [user]
);

module.exports = {
  checkHost,
  addHost,
  getHosts
};
