"use strict";

const supertest = require("supertest");
const { server } = require("../src/server.js");
const request = supertest(server);

describe("express server", () => {
  it("should give status 500 when testing /person with an empty 'name' query", async () => {
    // arrange
    let route = "/person?name=";
    let status = 500;
    // act
    let res = await request.get(route);
    // assert
    // console.log(res);
    expect(res.status).toBe(status);
  });
  it("should give status 200 when testing /person with a defined 'name' query", async () => {
    // arrange
    let route = "/person?name=suhaib";
    let status = 200;
    // act
    let res = await request.get(route);
    // assert
    // console.log(res);
    expect(res.status).toBe(status);
  });
  it("should give the correct object when testing /person with a defined 'name' query", async () => {
    // arrange
    let route = "/person?name=suhaib";
    let obj = {name: 'suhaib'}
    // act
    let res = await request.get(route);
    // assert
    // console.log(">>>>>>>>>>>>>>>>>>>>>>>>> ",res.body);
    // console.log(">>>>>>>>>>>>>>>>>>>>>>>>> ",obj);
    
    expect(res.body).toEqual(obj);
  });
});
