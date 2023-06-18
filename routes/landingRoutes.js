const express = require("express");

const paths = require("../paths/paths");

const router = express.Router();

router.get("/", (_, response) => {
  response.render("landing");
});

module.exports = router;
