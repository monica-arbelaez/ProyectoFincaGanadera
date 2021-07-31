const axios = require("axios");

const time = 10000;

describe("Sort animal by pasture API", () => {
  beforeAll(() => {
    axios.defaults.baseURL = "http://localhost:3000/api/animals";
    axios.defaults.headers.common["Content-Type"] = "application/json";
    axios.defaults.validateStatus = function (status) {
      return status < 500;
    };
  });
  it(
    "Sort animals by pasture successfully",
    async () => {
      const response = await axios.get("/sort-by-pasture");

      expect(response.status).toBe(200);
      expect(response.data.message).toBe("animals sorted by pasture");
      expect(response.data.data).toEqual(expect.any(Array));
    },
    time
  );
});
