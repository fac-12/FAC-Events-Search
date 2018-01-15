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

const updateUser = profile =>
  db.query(
    `UPDATE users SET name=$1, github_username=$2, email=$3, bio=$4, photo_url=$5, cohort=$6 WHERE id=$7 RETURNING *`,
    [
      profile.name,
      profile.github_username,
      profile.email,
      profile.bio,
      profile.photo_url,
      profile.cohort,
      profile.id
    ]
  );

module.exports = {
  checkUser,
  addUser,
  updateUser
};
