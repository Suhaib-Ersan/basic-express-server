"use strict";

const supertest = require("supertest");
const { server } = require("../src/server.js");
const request = supertest(server);

describe("express server", () => {
  it("should give status 404 on a bad route", async () => {
    // arrange
    let route = "/noRoute";
    let status = 404;
    // act
    const res = await request.get(route);
    // assert
    expect(res.status).toBe(status);
  });
  it("should give status 404 on a bad method", async () => {
    // arrange
    let route = "/person";
    let status = 404;
    // act
    const res = await request.post(route);
    // assert
    expect(res.status).toBe(status);
  });
});
