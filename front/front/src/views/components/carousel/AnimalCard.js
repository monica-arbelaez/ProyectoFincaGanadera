import React from 'react'


export default function AnimalCard({index, data}) {
    return(
        <div key={index} className="col-sm-4">
            <div className="thumb-wrapper">
                <div className="img-box">
                    <img src="https://storage.contextoganadero.com/s3fs-public/ganaderia/field_image/2020-11/fertilidad-vaca-lechera.jpg" className="img-responsive" alt=""/>
                </div>
                <div className="thumb-content">
                    <h4>{data.breed.breed}</h4>
                    <p>{data.age.age} Meses</p>
                    <p>{data.gender.gender}</p>
                    <a href="#" className="btn btn-primary">Rotar <i className="fa fa-angle-right"></i></a>
                </div>						
            </div>
        </div>
    )  
}