import React from 'react'
import '../css/style.css'

export default function CreatePasture() {
    return (
        <>
            <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal" data-whatever="@mdo">Crear Animal</button>

            <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog" role="document">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel">Nuevo Animal</h5>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div class="modal-body text-left">
                            <form>
                                <div className="mb-2">
                                    <label className="form-label">Raza:</label>
                                    <select
                                        className="form-control"
                                        name="breed"
                                    >
                                        <option></option>
                                        <option>Holstein</option>
                                        <option>Normando</option>
                                        <option>Brangus</option>
                                        <option>F1</option>
                                        <option>Cebú</option>
                                        <option>Otro</option>
                                    </select>
                                </div>
                                <div className="mb-2">
                                    <label className="form-label">Sexo:</label>
                                    <select
                                        className="form-control"
                                        name="gender"
                                    >
                                        <option></option>
                                        <option>MACHO</option>
                                        <option>HEMBRA</option>
                                    </select>
                                </div>
                                <div class="form-group">
                                    <label for="apellido" class="col-form-label">Edad:</label>
                                    <input type="number" name="age" class="form-control" id="edad" />
                                </div>
                                <div class="form-group">
                                    <label for="apellido" class="col-form-label">Fecha:</label>
                                    <input type="date" name="age" class="form-control" id="edad" />
                                </div>
                                <div className="mb-2">
                                    <label className="form-label">Vacunado:</label>
                                    <select
                                        className="form-control"
                                        name="isVaccinated"
                                    >
                                        <option></option>
                                        <option>SI</option>
                                        <option>NO</option>
                                    </select>
                                </div>
                            </form>
                        </div>

                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-dismiss="modal">Cerrar</button>
                            <button type="button" class="btn btn-primary">Crear</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
