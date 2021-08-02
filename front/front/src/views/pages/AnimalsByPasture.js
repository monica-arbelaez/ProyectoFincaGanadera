import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import ListAnimalByPasture from "../components/ListAnimalByPasture";
import "../css/style.css";
import { listAnimalByPastureAction } from "../../application/actions/animalsByPasture";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { getAnimalsByPasture } from "../../application/selector/animalsByPasture";

const AnimalsByPasture = ({ listAnimalByPastureAction, animalsByPasture }) => {
  useEffect(() => {
    listAnimalByPastureAction();
  }, [listAnimalByPastureAction]);
  const history = useHistory();
  const goBack = () => {
    history.goBack();
  };
  return (
    <>
      <button className="btn btns mb-2 float-left" onClick={() => goBack()}>
        <i className="fa fa-angle-left"></i> ATRAS
      </button>
      <div className="album pastures">
        <div className="container target">
          <ListAnimalByPasture animalsByPasture={animalsByPasture} />
        </div>
      </div>
    </>
  );
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ listAnimalByPastureAction }, dispatch);
};

const mapStateToProps = (state) => {
  return {
    animalsByPasture: getAnimalsByPasture(state),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AnimalsByPasture);
