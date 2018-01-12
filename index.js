const express = require("express");
const passport = require("passport");
const cookieSession = require("cookie-session");
const bodyParser = require("body-parser");
const keys = require("./config/keys");
require("./services/passportConfig");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(
  cookieSession({ maxAge: 30 * 24 * 60 * 60 * 1000, keys: [keys.COOKIE_KEY] })
);

app.use(passport.initialize());
app.use(passport.session());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// set authentication routes
require("./routes/authRoutes")(app);
// set db routes
require("./routes/dbGetRoutes")(app);
require("./routes/dbPostRoutes")(app);

app.disable("x-powered-by");
// app.use(express.static(path.join(__dirname, "..", "client", "build")));

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});

module.exports = { app };
