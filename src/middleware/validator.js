"use strict";

module.exports = (req, res, next) => {
  if (req.query.name === undefined || req.query.name === "" || req.query.name === null) {
    // console.log("validator ran");
    // console.log(`req.query.name === undefined >>> ${req.query.name === ""}`);
    // console.log(`req.query.name = "${req.query.name}"`);
    // console.log("typeof ", typeof req.query.name);
    throw new Error("missing a name query string");
  }
  // console.log(`req.query.name === undefined >>> ${req.query.name === ""}`);
  // console.log(`req.query.name = "${req.query.name}"`);
  // console.log("typeof ", typeof req.query.name);
  next();
};
