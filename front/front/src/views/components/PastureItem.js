import pasture from '../pages/static/potrero.jpg'
import '../css/style.css'
import { deletePastureAction } from '../../application/actions/pasture'
import { connect } from 'react-redux';
import { bindActionCreators } from "redux";
/**
 *TODO: Validar cuando se presiones un boton
 Para cambiar el boton de la variable
 style={{ color: 'red' }}
 */

const PastureItem = ({ deletePastureAction, pastures }) => {

    const deletePasture = (id) => {
        deletePastureAction(id)
    }
    return (
        <>
            {
                pastures.map(potrero => {
                    return (
                        <div key={potrero._id} className="card  sizeTarget">
                            <img src={pasture} className="card-img-top" alt="pasture" />
                            <div className="card-body">
                                <h5 className="card-title">{potrero.name.name}</h5>
                                <hr />
                                <p className="card-text">Area: {potrero.area.area}</p>
                                <p className="card-text ">Longitud [cerca]: {potrero.fence.longitude.longitude} mts.</p>
                                <p className="card-text">Densidad [pasto]: {potrero.grass.density.density}</p>

                                <button type="button" className="btn btn-danger float-right "
                                    onClick={() => deletePasture(potrero._id)}
                                >Delete</button>
                            </div>
                        </div>
                    )
                })
            }
        </>
    )
}
const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({ deletePastureAction }, dispatch);
};

// const mapStateToProps = (state) => {
//     return {
//         pastures: getAllPastures(state)
//     }
// }

export default connect(null, mapDispatchToProps)(PastureItem);