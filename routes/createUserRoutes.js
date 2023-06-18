const express = require("express");

const router = express.Router();

const users = [];

router.get("/createUser", (_, response) => {
  response.render("createUser");
});

router.post("/createUser", (request, response) => {
  if (request.body.age >= 18) {
    users.push(request.body);
    response.status(201).render("userCreated");
  } else {
    response.status(401).render("userNotCreated");
  }
});

exports.users = users;
exports.router = router;
