const axios = require("axios");

const time = 10000;

describe("Create animal API", () => {
  beforeAll(() => {

    axios.defaults.baseURL = "http://localhost:3000/api/animals";
    axios.defaults.headers.common["Content-Type"] = "application/json";
    axios.defaults.validateStatus = function (status) {
      return status < 500;
    };
    
  });
  it(
    'GET get all animals successfully',
      async () => {
        const response = await axios.get('/');
        const animals = response.data.data;

        expect(response.status).toBe(200);
        expect(response.data.message).toBe('animals listed');
        expect(response.data.data).toEqual(expect.any(Array))
    },
    time
  );
  
});
