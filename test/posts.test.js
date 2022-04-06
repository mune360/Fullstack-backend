const request = require("supertest");

const app = require("../src/index");

describe("Calling /posts with GET", () => {
    test("It should give status 200",async () =>{
        const response = await request(app).get("/posts").send();
        expect(response.status).toBe(200);
    });
});

