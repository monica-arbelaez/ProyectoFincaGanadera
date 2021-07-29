import React from 'react'
import potrero from '../pages/static/potrero.jpg'
import '../css/style.css'

const PastureItems = (props) => {
    return (
        <div>
            <div class="container">
                <div class="row">
                    <div class="col-md-10 col-center">
                        <div id="myCarousel" class="carousel slide" data-bs-ride="carousel">
                            {/* <ol class="carousel-indicators">
                                <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
                                <li data-target="#myCarousel" data-slide-to="1"></li>
                                <li data-target="#myCarousel" data-slide-to="2"></li>
                            </ol> */}
                            <div class="carousel-inner"></div>
                            <div class="item active">
                                <div class="row">
                                    {
                                        props.pasture.map(animal => {
                                            return (
                                                <div class="col-sm-4">
                                                    <div class="thumb-wrapper">
                                                        <div class="img-box">
                                                            <img src={potrero} class="img-responsive" alt="" />
                                                        </div>
                                                        <div class="thumb-content">
                                                            <h4>{animal.dataSheet.breed.breed}</h4>
                                                            <p>{animal.dataSheet.age.age} Meses</p>
                                                            <p>{animal.dataSheet.gender.gender}</p>
                                                            <a class="btn btn-primary">Delete <i class="fa fa-angle-right"></i></a>
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

                <a class="carousel-control left" href="#myCarousel" data-bs-slide="prev">
                    <i class="fa fa-angle-left"></i>
                </a>
                <a class="carousel-control right" href="#myCarousel" data-bs-slide="next">
                    <i class="fa fa-angle-right"></i>
                </a>
            </div>
        </div>
    )
}

export default PastureItems;
