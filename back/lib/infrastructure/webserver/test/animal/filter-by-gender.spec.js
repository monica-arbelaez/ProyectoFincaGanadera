const axios = require("axios");

const time = 10000;

describe("Filter by gender Api", () => {
  beforeAll(() => {

    axios.defaults.baseURL = "http://localhost:3000/api/animals";
    axios.defaults.headers.common["Content-Type"] = "application/json";
    axios.defaults.validateStatus = function (status) {
      return status < 500;
    };
    
  });
  it(
    'GET filter by gender successfully',
      async () => {
        const gender = "MACHO"

        const response = await axios.get(`/filter-by-gender/?value=${gender}`);

        expect(response.status).toBe(200);
        expect(response.data.message).toBe(`animals filtered by gender : ${gender}`);
        expect(response.data.data).toEqual(expect.any(Array))
    },
    time
  );
  
});
