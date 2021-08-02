import pasture from '../pages/static/potrero.jpg'
import '../css/style.css'
// import { deletePastureAction } from '../../application/actions/pasture'
// import { connect } from 'react-redux';
// import { bindActionCreators } from "redux";

const AnimalItem = ({ animals }) => {

    return (
        <>
            {
                animals.map(animal => {
                    return (
                        <div key={animal._id} className="card  sizeTarget">
                            <img src={pasture} className="card-img-top" alt="pasture" />
                            <div className="card-body">
                                <h5 className="card-title">Sexo: {animal.gender.gender}</h5>
                                <hr />
                                <p className="card-text">Raza: {animal.breed.breed}</p>
                                <p className="card-text ">Edad: {animal.age.age}</p>

                                <button type="button" className="btn btn-danger float-right"
                                >Vacunar</button>
                            </div>
                        </div>
                    )
                })
            }
        </>
    )
}
export default AnimalItem