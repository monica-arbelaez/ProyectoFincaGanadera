const axios = require("axios");
const animalServices = require("../../../../application/animal/use-cases/index");

const time = 10000;

describe("Create animal API", () => {
  beforeAll(() => {
    jest
      .spyOn(animalServices, "createAnimal")

    axios.defaults.baseURL = "http://localhost:3000/api/animals";
    axios.defaults.headers.common["Content-Type"] = "application/json";
    axios.defaults.validateStatus = function (status) {
      return status < 500;
    };
    
  });
  it(
    "POST HappyPath create an animal successfully",
    async () => {
      const animal = {
        breed: "Normando",
        age: 3,
        gender: "Macho",
      };

      const response = await axios.post("/create", animal);

      expect(response.status).toBe(201);
      expect(response.data.message).toBe("animal created");
      expect(response.data.dataId).toMatch(/^[0-9a-fA-F]{24}$/);
      // expect(animalServices.createAnimal).toHaveBeenCalled();
    },
    15000
  );
  it(
    "POST Sadpath create an animal whit breed validation Error",
    async () => {
      const animal = {
        //breed: "Normando",
        age: 3,
        gender: "Macho",
      };

      const response = await axios.post("/create", animal);
      expect(response.status).toBe(402);
      expect(response.data.error).toBe('ValidationError: "breed" is required');
    },
    time
  );
  it(
    "POST Sadpath create an animal whit age validation Error",
    async () => {
      const animal = {
        breed: "Normando",
        //age: 3,
        gender: "Macho",
      };

      const response = await axios.post("/create", animal);
      expect(response.status).toBe(402);
      expect(response.data.error).toBe('ValidationError: "age" is required');
    },
    time
  );
  it(
    "POST Sadpath create an animal whit gender validation Error",
    async () => {
      const animal = {
        breed: "Normando",
        age: 3,
        //gender: "Macho",
      };

      const response = await axios.post("/create", animal);
      expect(response.status).toBe(402);
      expect(response.data.error).toBe('ValidationError: "gender" is required');
    },
    time
  );
});
