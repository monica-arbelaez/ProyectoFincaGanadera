import React from 'react'
import pasture from '../pages/static/potrero.jpg'
import '../css/style.css'

const PastureItems = ({ pastures }) => {
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
                                <p className="card-text">Longitud [cerca]: {potrero.fence.length.length} mts    .</p>
                                <p className="card-text">Densidad [pasto]: {potrero.grass.density.density}</p>

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