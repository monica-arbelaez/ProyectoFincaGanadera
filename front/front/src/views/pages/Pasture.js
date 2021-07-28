import React, { Fragment } from 'react'
import potrero from './static/potrero.jpg'

const Pasture = () => {
    return (
        <Fragment>
            <div className="container">
                <div className="row">
                    <div className="col">
                        <img className="potrero" src={potrero} />
                    </div>
                    <div className="col">
                        <h1>Agregar un nuevo Potrero</h1>
                        <form>
                            <div className="mb-2">
                                <label className="form-label">Nombre</label>
                                <input
                                    className="form-control"
                                    required={true}
                                    type="text"
                                    name="name"
                                />
                            </div>
                            <div className="mb-2">
                                <label className="form-label">Area</label>
                                <input
                                    className="form-control"
                                    required={true}
                                    type="number"
                                    name="area"
                                />
                            </div>
                            <div className="mb-2">
                                <label className="form-label">Densidad</label>
                                <input
                                    className="form-control"
                                    required={true}
                                    type="number"
                                    name="area"
                                />
                            </div>
                            <div className="mb-2">
                                <label className="form-label">Longitud</label>
                                <input
                                    className="form-control"
                                    required={true}
                                    type="number"
                                    name="area"
                                />
                            </div>
                            <button type="submit" className="btn btn-dark ">
                                Crear Potrero
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default Pasture;