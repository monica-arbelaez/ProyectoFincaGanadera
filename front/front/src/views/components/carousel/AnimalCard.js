import React from "react";
import { vaccinateAnimalAction } from "../../../application/actions/animals";
import { connect } from 'react-redux';
import { bindActionCreators } from "redux";

const AnimalCard = ({ vaccinateAnimalAction, index, data }) => {
  const vaccinate = (data) => vaccinateAnimalAction(data);

  return (
    <div key={index} className="col-xs-9 col-sm-9 col-md-6 col-lg-4">
      <div className="thumb-wrapper">
        <div className="img-box">
          <img
            src="https://storage.contextoganadero.com/s3fs-public/styles/noticias_one/public/ganaderia/field_image/2020-08/vaca_hda_el_cucharo.png?itok=vHl69J_t"
            className="img-responsive"
            alt=""
          />
        </div>
        <div className="thumb-content">
          <h4>{data.dataSheet.breed.breed}</h4>
          <p>{data.dataSheet.age.age} Meses</p>
          <p>{data.dataSheet.gender.gender}</p>
          <button className="btn btn-danger" onClick={() => vaccinate(data._id)}>
            VACUNAR <i className="fa fa-angle-right"></i>
          </button>
        </div>
      </div>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ vaccinateAnimalAction }, dispatch);
};

export default connect(null, mapDispatchToProps)(AnimalCard);