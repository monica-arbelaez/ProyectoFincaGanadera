import React from 'react'
import pasture from '../pages/static/potrero.jpg'
import '../css/style.css'

const PastureItems = (props) => {
    return (
        <>
            {
                props.items.map(potrero => {
                    return (
                        <div key={potrero._id} className="card  sizeTarget">
                            <img src={pasture} className="card-img-top" alt="pasture" />
                            <div className="card-body">
                                <h5 className="card-title">{potrero.name.name}</h5>
                                <hr />
                                <p className="card-text">Area: {potrero.area.area}</p>
                                <p className="card-text">Longitud: {potrero.fence.length.length}</p>
                                <p className="card-text">Densidad: {potrero.grass.density.density}</p>

                                <button type="button" className="btn btn-danger float-right ">Delete</button>
                            </div>
                        </div>
                    )
                })
            }
        </>
    )
}

export default PastureItems;