import "../css/style.css";
import { vaccinateAnimalAction } from "../../application/actions/animals";
import { connect } from 'react-redux';
import { bindActionCreators } from "redux";
// import { deletePastureAction } from '../../application/actions/pasture'
// import { connect } from 'react-redux';
// import { bindActionCreators } from "redux";
const bovino =
  "https://secure.ganaderia.com/razas/Raza5931889151cc4_02062017.jpg";
const AnimalItem = ({vaccinateAnimalAction, animals }) => {
  const vaccinate = (animalId) => vaccinateAnimalAction(animalId);

  return (
    <>
      {animals.map((animal) => {
        return (
          <div key={animal._id} className="card  sizeTarget">
            <img src={bovino} className="card-img-top" alt="pasture" />
            <div className="card-body">
              <h5 className="card-title">
                Sexo: {animal.dataSheet.gender.gender}
              </h5>
              <hr />
              <p className="card-text">Raza: {animal.dataSheet.breed.breed}</p>
              <p className="card-text ">Edad: {animal.dataSheet.age.age}</p>
              <p className="card-text ">
                {animal.registry
                  ? `Vacunado el ${animal.registry.date.date}`
                  : "Sin vacunar"}
              </p>

              <button
                className="btn btns mb-2 float-right"
                onClick={() => vaccinate(animal._id)}
              >
                VACUNAR <i className="fa fa-angle-right"></i>
              </button>
            </div>
          </div>
        );
      })}
    </>
  );
};
const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ vaccinateAnimalAction }, dispatch);
};

export default connect(null, mapDispatchToProps)(AnimalItem);