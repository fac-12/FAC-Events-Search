const db = require("../database/db_connection");

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

module.exports = {
  checkUser,
  addUser
};
