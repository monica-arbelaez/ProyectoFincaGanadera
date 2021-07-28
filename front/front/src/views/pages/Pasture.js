import React, { Fragment } from 'react'
import potrero from './static/potrero.jpg'
import '../css/style.css'

const Pasture = () => {
    return (
        <Fragment>
            <div className="container">
                <div className="row">
                    <div className="col mt-5 py-5 px-5">
                        <img className="potrero" src={potrero} />
                    </div>
                    <div className="col mt-5 py-5 px-5 form">
                        <h1>Nuevo Potrero</h1>
                        <form>
                            <div className="mb-2">
                                <label className="form-label">Nombre</label>
                                <input
                                    className="form-control"
                                    required={true}
                                    minLength={1}
                                    maxLength={20}
                                    type="text"
                                    name="name"
                                />
                            </div>
                            <div className="mb-2">
                                <label className="form-label">Area</label>
                                <input
                                    className="form-control"
                                    required={true}
                                    min={0}
                                    max={10}
                                    type="number"
                                    name="area"
                                />
                            </div>
                            <div className="mb-2">
                                <label className="form-label">Densidad</label>
                                <input
                                    className="form-control"
                                    required={true}
                                    min={0}
                                    max={10}
                                    type="number"
                                    name="area"
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
                                    name="area"
                                />
                            </div>
                            <button type="submit" className="btn btn-dark mb-2">
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