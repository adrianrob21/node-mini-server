const landingRoutes = require("./landingRoutes");
const usersListRoutes = require("./usersListRoutes");
const createUserRoutes = require("./createUserRoutes");

module.exports = [landingRoutes, createUserRoutes.router, usersListRoutes];
