// const app = require("./app");
// const supertest = require("supertest");
// const request = supertest(app);

// describe("/test endpoint", () => {
//   it("should return a response", async () => {
//     const response = await supertest(app).get("/test");
//     expect(response.status).toBe(200);
//     expect(response.text).toBe("Hello world");
//   });
// });
const supertest = require('supertest');
const app = require('../your/app'); // Adjust the path as needed

describe('/test endpoint', () => {
  let server;

  beforeAll(() => {
    server = app.listen(3000);
  });

  afterAll((done) => {
    server.close(done);
  });

  it('should return a response', async () => {
    const response = await supertest(app).get('/test');
    expect(response.status).toBe(200);
    expect(response.text).toBe('Hello world');
  });
});

