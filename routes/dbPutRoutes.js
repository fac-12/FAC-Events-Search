const axios = require("axios");
const { updateUser } = require("../queries/userQueries");

module.exports = app => {
  app.put("/api/updateProfile", async (req, res) => {
    try {
      const userData = await updateUser(req.body);
      res.send(userData);
    } catch (e) {
      console.log("Update profile error", e);
    }
  });
};
