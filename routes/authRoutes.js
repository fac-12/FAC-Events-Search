const passport = require("passport");

module.exports = app => {
  app.get(
    "/auth/github",
    passport.authenticate("github", {
      scope: ["read:user", "read:org"]
    })
  );

  app.get("/currentUser", (req, res) => {
    res.send(req.user);
  });

  app.get("/logout", (req, res) => {
    req.logout();
  });

  app.get("/auth/github/callback", passport.authenticate("github"));
};
