const db = require("./db_connection");

const checkUser = id => db.query("SELECT * FROM users WHERE id = $1", [id]);

const addUser = profile =>
    db.query(
        `INSERT INTO users(id, name, github_username,email, bio) VALUES($1,$2,$3, $4, $5) RETURNING name, id`,
        [
            profile.id,
            profile.displayName,
            profile.username,
            profile._json.email,
            profile._json.bio
            // profile.photos[0].value
        ]
    );

module.exports = { addUser, checkUser };
