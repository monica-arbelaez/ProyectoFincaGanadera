const animalsMock = [
  {
    animalId: "60ff6523208c120015bb9e41",
    pastureId: { id: "60ff6523208c120015bb9e51" },
    breed: "simental",
    age: 6,
    dataSheet: { gender: { gender: "MACHO" } },
  },
  {
    animalId: "60ff6523208c120015bb9e42",
    pastureId: { id: "60ff6523208c120015bb9e52" },
    breed: "Brangus",
    age: 7,
    dataSheet: { gender: { gender: "HEMBRA" } },
  },
  {
    animalId: "60ff6523208c120015bb9e43",
    pastureId: { id: "60ff6523208c120015bb9e51" },
    breed: "Normando",
    age: 4,
    dataSheet: { gender: { gender: "MACHO" } },
  },
  {
    animalId: "60ff6523208c120015bb9e44",
    pastureId: { id: "60ff6523208c120015bb9e52" },
    breed: "Cebu",
    age: 7,
    dataSheet: { gender: { gender: "HEMBRA" } },
  },

  {
    animalId: "60ff6523208c120015bb9e45",
    pastureId: { id: "60ff6523208c120015bb9e53" },
    breed: "Gyr",
    age: 36,
    dataSheet: { gender: { gender: "MACHO" } },
  },
  {
    animalId: "60ff6523208c120015bb9e45",
    pastureId: null,
    breed: "Gyr",
    age: 36,
    dataSheet: { gender: { gender: "HEMBRA" } },
  },
];

const fiteredMale = [
  {
    animalId: "60ff6523208c120015bb9e41",
    pastureId: { id: "60ff6523208c120015bb9e51" },
    breed: "simental",
    age: 6,
    dataSheet: { gender: { gender: "MACHO" } },
  },
  {
    animalId: "60ff6523208c120015bb9e43",
    pastureId: { id: "60ff6523208c120015bb9e51" },
    breed: "Normando",
    age: 4,
    dataSheet: { gender: { gender: "MACHO" } },
  },

  {
    animalId: "60ff6523208c120015bb9e45",
    pastureId: { id: "60ff6523208c120015bb9e53" },
    breed: "Gyr",
    age: 36,
    dataSheet: { gender: { gender: "MACHO" } },
  },
];
module.exports = { animalsMock, fiteredMale };
