import React from "react";
import { useHistory } from "react-router-dom";
import ListAnimal from "../components/ListAnimal";

const Animals = () => {
  const history = useHistory();
  const crearAnimal = () => {
    history.push("/create-animal");
  };
  const listByPasture = () => {
    history.push("/animals-by-pasture");
  };

  return (
    <>
      <button
        className="btn btns mb-2 float-left"
        onClick={() => listByPasture()}
      >
        Clasificar por potrero
      </button>
      <button
        className="btn btns mb-2 float-right"
        onClick={() => crearAnimal()}
      >
        Crear animal
      </button>
      <ListAnimal />
    </>
  );
};

export default Animals;
