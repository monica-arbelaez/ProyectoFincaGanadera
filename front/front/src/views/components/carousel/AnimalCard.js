import React from 'react'


export default function AnimalCard({ index, data }) {
    return (
        <div key={index} className="col-xs-9 col-sm-9 col-md-6 col-lg-4">
            <div className="thumb-wrapper">
                <div className="img-box">
                    <img src="https://storage.contextoganadero.com/s3fs-public/styles/noticias_one/public/ganaderia/field_image/2020-08/vaca_hda_el_cucharo.png?itok=vHl69J_t" className="img-responsive" alt="" />
                </div>
                <div className="thumb-content">
                    <h4>{data.breed.breed}</h4>
                    <p>{data.age.age} Meses</p>
                    <p>{data.gender.gender}</p>
                    <button className="btn btn-danger">Delete <i className="fa fa-angle-right"></i></button>
                </div>
            </div>
        </div>
    )
}