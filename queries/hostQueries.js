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

const getHosts = () => db.query("SELECT * FROM included_orgs");

module.exports = {
  checkHost,
  addHost,
  getHosts
};