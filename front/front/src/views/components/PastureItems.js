import React from 'react'
import potrero from '../pages/static/potrero.jpg'
import '../css/style.css'

const PastureItems = (props) => {
    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-md-10 col-center">
                        <div id="myCarousel" className="carousel slide" data-bs-ride="carousel">
                            <ol className="carousel-indicators">
                                <li data-target="#myCarousel" data-slide-to="0" className="active"></li>
                                <li data-target="#myCarousel" data-slide-to="1"></li>
                                <li data-target="#myCarousel" data-slide-to="2"></li>
                            </ol>
                            <div className="carousel-inner"></div>
                            <div className="item active">
                                <div className="row">
                                    {
                                        props.pasture.map(animal => {
                                            console.log(animal);
                                            return (
                                                <div className="col-sm-4" key={animal._id}>
                                                    <div className="thumb-wrapper">
                                                        <div className="img-box">
                                                            <img src={potrero} className="img-responsive" alt="potrero" />
                                                        </div>
                                                        <div className="thumb-content">
                                                            <h4>{animal.dataSheet.breed.breed}</h4>
                                                            <p>{animal.dataSheet.age.age}Meses</p>
                                                            <p>{animal.dataSheet.gender.gender}</p>
                                                            <button className="btn btn-primary">Delete <i className="fa fa-angle-right"></i></button>
                                                        </div>
                                                    </div>
                                                </div>
                                            )
                                        })
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <a className="carousel-control left" href="#myCarousel" data-bs-slide="prev">
                    <i className="fa fa-angle-left"></i>
                </a>
                <a className="carousel-control right" href="#myCarousel" data-bs-slide="next">
                    <i className="fa fa-angle-right"></i>
                </a>
            </div>
        </div>
    )
}

export default PastureItems;
