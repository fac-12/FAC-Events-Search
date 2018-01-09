const express = require("express");
const passport = require("passport");
const cookieSession = require("cookie-session");
const keys = require("./config/keys");

const app = express();
const PORT = process.env.PORT || 5000;

// set authentication routes
require("./routes/authRoutes")(app);

app.use(
    cookieSession({ maxAge: 30 * 24 * 60 * 60 * 1000, keys: [keys.COOKIE_KEY] })
);

app.use(passport.initialize());
app.use(passport.session());

app.disable("x-powered-by");
// app.use(express.static(path.join(__dirname, "..", "client", "build")));

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});
