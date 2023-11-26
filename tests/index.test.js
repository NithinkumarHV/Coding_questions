const request = require("supertest");
const app = require("../index");

describe("GET /", () => {
  it("Welcome to the homepage", async () => {
    const response = await request(app).get("/");

    expect(response.status).toBe(200);
    expect(response.body).toEqual({ message: "Welcome to the homepage" });
  });
});
