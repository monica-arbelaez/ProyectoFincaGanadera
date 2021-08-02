import React, { useState } from 'react'
import { createAnimalAction } from '../../application/actions/animals'
import '../css/style.css'
import { connect } from 'react-redux';
import { bindActionCreators } from "redux";

const CreateAnimal = ({ createAnimalAction }) => {

    //Campos para crear agregado Animal
    //TODO: poner solo un estado
    const [breed, setBreed] = useState("")
    const [gender, setGender] = useState("")
    const [age, setAge] = useState()

    //Ejecutar action crear animal
    const createAnimal = (animal) => createAnimalAction(animal);

    const deleteData = () => {
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
        deleteData();
    }
    return (
        <>
            <div className="container">
                <div className="row d-flex justify-content-center">
                    <div className="col-xs-7 col-sm-8 col-md-9 form formulario">
                        <h1 className=" d-flex justify-content-center font-weight-bold  ">Nuevo Animal</h1>
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
                            <button type="submit" className="btn btn-primary mb-2 float-right">
                                Crear Animal
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({ createAnimalAction }, dispatch);
};

export default connect(null, mapDispatchToProps)(CreateAnimal);