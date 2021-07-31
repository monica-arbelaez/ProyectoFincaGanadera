import React, { Fragment, useState } from 'react'
import potrero from './static/potrero.jpg'
import { useHistory } from "react-router-dom";
import '../css/style.css'
import { createPastureAction } from '../../application/actions/pasture'
import { connect } from 'react-redux';
import { bindActionCreators } from "redux";

const Pasture = ({ createPastureAction }) => {
    //Campos para crear agregado Animal
    //TODO: poner solo en un solo estado
    const [name, setName] = useState("")
    const [area, setArea] = useState(0)
    const [density, setDensity] = useState(0)
    const [length, setLength] = useState(0)

    //Ejecutar action crear animal
    const createPasture = (pasture) => createPastureAction(pasture);

    const deleteData = () => {
        setName("")
        setArea(0)
        setDensity(0)
        setLength(0)
    }
    const submitCreatePasture = (e) => {
        e.preventDefault();
        createPasture({
            area,
            name,
            length,
            density,
        })
        deleteData();
        // handleClick()
    }
    // const history = useHistory();
    // function handleClick() {
    //     history.push("/order-by-length");
    // }
    return (
        <Fragment>
            <div className="container">
                <div className="row d-flex justify-content-center">
                    <div className="col-xs-7 col-sm-8 col-md-9 form formulario">
                        <h1 className=" d-flex justify-content-center font-weight-bold  ">Nuevo Potrero</h1>
                        <form onSubmit={submitCreatePasture}>
                            <div className="mb-2">
                                <label className="form-label">Nombre</label>
                                <input
                                    className="form-control"
                                    required={true}
                                    minLength={1}
                                    maxLength={20}
                                    type="text"
                                    name="name"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                />
                            </div>
                            <div className="mb-2">
                                <label className="form-label">Area</label>
                                <input
                                    className="form-control"
                                    required={true}
                                    min={0}
                                    max={100}
                                    type="number"
                                    name="area"
                                    value={area}
                                    onChange={(e) => setArea(e.target.value)}
                                />
                            </div>
                            <div className="mb-2">
                                <label className="form-label">Densidad</label>
                                <input
                                    className="form-control"
                                    required={true}
                                    min={0}
                                    max={100}
                                    type="number"
                                    name="density"
                                    value={density}
                                    onChange={(e) => setDensity(e.target.value)}
                                />
                            </div>
                            <div className="mb-2">
                                <label className="form-label">Longitud</label>
                                <input
                                    className="form-control"
                                    required={true}
                                    min={0}
                                    max={100}
                                    type="number"
                                    name="length"
                                    value={length}
                                    onChange={(e) => setLength(e.target.value)}
                                />
                            </div>
                            <button type="submit" className="btn btn-dark mb-2 float-right">
                                Crear Potrero
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({ createPastureAction }, dispatch);
};

export default connect(null, mapDispatchToProps)(Pasture);