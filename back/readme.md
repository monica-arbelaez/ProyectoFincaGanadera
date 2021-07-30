BASE_URL = https://app-finca-ganadera.herokuapp.com/api/animals

post("/create") // crear animal => (array)

router.get("/sort-by-pasture"); // clasificar animales por potrero => (Array de arrays)

router.get("/filter-by-gender" + "?value=<generoRequerido>"); // Filtrar por genero mediante query tags => (Array)

router.patch("/vaccinate-animal"+"/<idAnimal>" , body:{issVcacinated:<true/false>} ); //Actualiza registro de vacunacion => (id actualizado)
