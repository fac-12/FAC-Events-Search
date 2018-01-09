const express = require("express");
const passport = require("passport");
const GithubStrategy = require("passport-github2").Strategy;
const { githubClientID, githubClientSecret } = require("./config/keys");

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
            console.log(profile);
        }
    )
);

app.get(
    "/auth/github",
    passport.authenticate("github", {
        scope: ["read:user", "read:org"]
    })
);

app.get("/auth/github/callback", passport.authenticate("github"));
app.disable("x-powered-by");
// app.use(express.static(path.join(__dirname, "..", "client", "build")));

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});
