const test = require("tape");
const request = require("supertest");
const app = require("../index");

test("Testing queries", t => {
  request(app)
    .get("/")
    .expect(200)
    .expect("Content-Type", /json/) // check
    .end((err, res) => {
      t.equal(res.body[0].name, "Mohamed");
      t.error(err);
      t.end();
    });
});
