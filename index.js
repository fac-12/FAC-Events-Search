const express = require("express");
const passport = require("passport");
const cookieSession = require("cookie-session");
const bodyParser = require("body-parser");
const keys = require("./config/keys");
require("./services/passportConfig");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cookieSession({ maxAge: 60 * 60 * 1000, keys: [keys.COOKIE_KEY] }));

app.use(passport.initialize());
app.use(passport.session());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// set routes
require("./routes/authRoutes")(app);
require("./routes/dbGetRoutes")(app);
require("./routes/dbPostRoutes")(app);
require("./routes/dbPutRoutes")(app);

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
  const path = require("path");
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(_dirname, "client", "build", "index.html"));
  });
}

app.disable("x-powered-by");

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});

module.exports = { app };
