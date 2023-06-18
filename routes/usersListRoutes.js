const express = require("express");

const users = require("./createUserRoutes");

const router = express.Router();

router.get("/usersList", (_, response) => {
  const userList = users.users;
  response.render("usersList", { userList });
});

module.exports = router;
