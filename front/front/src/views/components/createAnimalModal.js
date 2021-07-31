import React, { useState } from 'react'
import { createAnimalAction } from '../../application/actions/animals'
import '../css/style.css'
import { connect } from 'react-redux';
import { bindActionCreators } from "redux";

const CreatePasture = ({ createAnimalAction }) => {

    //Campos para crear agregado Animal
    //TODO: poner solo un estado
    const [breed, setBreed] = useState("")
    const [gender, setGender] = useState("")
    const [age, setAge] = useState()

    //Ejecutar action crear animal
    const createAnimal = (animal) => createAnimalAction(animal);

    const deleteDataModal = () => {
        setBreed("")
        setGender("")
        setAge(0)
    }

    const submitCreateAnimal = (e) => {
        e.preventDefault();
        createAnimal({
            breed,
            age,
            gender,
        })
        deleteDataModal();
    }
    return (
        <>
            <button type="button" className="btn btn-primary" disabled="disabled" data-toggle="modal" data-target="#animalModal" data-whatever="@mdo"
            >Crear Animal</button>
            <div className="modal fade" id="animalModal" tabIndex="-1" role="dialog" aria-labelledby="animalModalLabel" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Nuevo Animal</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body text-left">
                            <form onSubmit={submitCreateAnimal}>
                                <div className="mb-2">
                                    <label className="form-label">Raza:</label>
                                    <select
                                        className="form-control"
                                        name="breed"
                                        type="text"
                                        required={true}
                                        value={breed}
                                        onChange={(e) => setBreed(e.target.value)}
                                    >
                                        <option></option>
                                        <option>Holstein</option>
                                        <option>Normando</option>
                                        <option>Brangus</option>
                                        <option>F1</option>
                                        <option>Cebú</option>
                                    </select>
                                </div>
                                <div className="mb-2">
                                    <label className="form-label">Sexo:</label>
                                    <select
                                        className="form-control"
                                        type="text"
                                        name="gender"
                                        required={true}
                                        value={gender}
                                        onChange={(e) => setGender(e.target.value)}
                                    >
                                        <option></option>
                                        <option>MACHO</option>
                                        <option>HEMBRA</option>
                                    </select>
                                </div>
                                <div className="form-group">
                                    <label className="col-form-label">Edad:</label>
                                    <input
                                        type="number"
                                        className="form-control"
                                        id="edad"
                                        name="age"
                                        min={0}
                                        max={100}
                                        required={true}
                                        value={age}
                                        onChange={(e) => setAge(e.target.value)}
                                    />
                                </div>
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-secondary" data-dismiss="modal" onClick={() => deleteDataModal()}>Cerrar</button>
                                    <button type="submit" className="btn btn-primary">Crear</button>
                                </div>
                            </form>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({ createAnimalAction }, dispatch);
};

export default connect(null, mapDispatchToProps)(CreatePasture);