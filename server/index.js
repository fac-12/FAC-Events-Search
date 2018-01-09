const express = require("express");
const passport = require("passport");
const GithubStrategy = require("passport-github2").Strategy;
const { githubClientID, githubClientSecret } = require("./config/keys");
const queries = require("./database/queries");
const cookieSession = require("cookie-session");
const keys = require("./config/keys");

const app = express();
const PORT = process.env.PORT || 5000;

passport.use(
    new GithubStrategy(
        {
            clientID: githubClientID,
            clientSecret: githubClientSecret,
            callbackURL: "/auth/github/callback"
        },
        (accessToken, refreshToken, profile, done) => {
            queries.checkUser(profile.id).then(res => {
                if (res.length > 0) {
                    done(null, res[0]);
                } else {
                    queries
                        .addUser(profile)
                        .then(res => done(null, res[0]))
                        .catch(e => console.log(e));
                }
            });
        }
    )
);

passport.serializeUser((user, done) => {
    done(null, user.id);
});
passport.deserializeUser((id, done) => {
    queries.checkUser(id).then(user => done(null, user));
});
app.use(
    cookieSession({ maxAge: 30 * 24 * 60 * 60 * 1000, keys: [keys.COOKIE_KEY] })
);

app.use(passport.initialize());
app.use(passport.session());
app.get(
    "/auth/github",
    passport.authenticate("github", {
        scope: ["read:user", "read:org"]
    })
);

app.get("/currentUser", (req, res) => {
    res.send(req.user);
});

app.get("/auth/github/callback", passport.authenticate("github"));
app.disable("x-powered-by");
// app.use(express.static(path.join(__dirname, "..", "client", "build")));

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});
