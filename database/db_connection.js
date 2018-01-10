const pgp = require("pg-promise")();
const keys = require("../config/keys");
const url = require("url");

const params = url.parse(keys.DATABASE_URL);
const [username, password] = params.auth.split(":");

const connection = {
    host: params.hostname,
    database: params.pathname.split("/")[1],
    port: params.port
};

if (username) {
    connection.user = username;
}
if (password) {
    connection.password = password;
}

connection.ssl = connection.host !== "localhost";

const db = pgp(connection);
module.exports = db;
