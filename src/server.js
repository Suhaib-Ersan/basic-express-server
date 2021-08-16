"use strict";

const express = require("express");
const server = express();

const errorHandler = require("./handlers/500.js");
const notFoundHandler = require("./handlers/404.js");
const loggerMiddleware = require("./middleware/logger.js")
const validatorMiddleware = require("./middleware/validator.js")


server.use(express.json());
server.use(loggerMiddleware)

server.get("/test", (req, res) => {
  res.status(200).send("working fine");
});

// http://localhost:3000/person?name=suhaib
server.get("/person", validatorMiddleware, (req, res) => {
  let obj = {
    name: req.query.name,
  };
  res.status(200).send(obj);
});

server.use("*", notFoundHandler);
server.use(errorHandler);


module.exports = {
  server,
  start: (port) => {
    server.listen(port, () => console.log(`server started at ${port}`));
  },
};
