const passport = require("passport");
const { githubClientID, githubClientSecret } = require("./config/keys");
const GithubStrategy = require("passport-github2").Strategy;
const queries = require("./database/queries");

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
