import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import PastureItem from "./PastureItem";
import {
  listPastureAction,
  sortPastureByLengthAction,
  sortPastureByDensityAction,
  createPastureAction

} from "../../application/actions/pasture";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { getAllPastures } from "../../application/selector/pastures";
const ListPasture = ({
  listPastureAction,
  sortPastureByDensityAction,
  sortPastureByLengthAction,
  createPastureAction,
  pastures
}) => {
  useEffect(() => {
    listPastureAction();
  }, []);
  const history = useHistory();
  const crearPotrero = () => {
    history.push("/pasture")
    };

  const listarLength = () => sortPastureByLengthAction();
  const listarDensity = () => sortPastureByDensityAction();
  return (
    <>
      <button
        className="btn btns mb-2 float-left"
        onClick={() => listarDensity()}
      >
        Ordenar por Densidad
      </button>
      <button
        className="btn btns mb-2 float-left"
        onClick={() => listarLength()}
      >
        Ordenar por longitud
      </button>
      <button className="btn btns mb-2 float-right" onClick={() => crearPotrero()}>
        Crear Potrero
      </button>
      <div className="album py-5">
        <div className="target">{<PastureItem pastures={pastures} />}</div>
      </div>
    </>
  );
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    {
      listPastureAction,
      sortPastureByDensityAction,
      sortPastureByLengthAction,
      createPastureAction
    },
    dispatch
  );
};

const mapStateToProps = (state) => {
  return {
    pastures: getAllPastures(state),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ListPasture);
