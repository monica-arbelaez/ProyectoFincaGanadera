import React from "react";

const CarouselLayout = (props) => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-10 col-center">
                     <h3 className="pasture-number">Potrero {props.index + 1}</h3> 
                        {props.children}
                </div>
            </div>
        </div>
    );
};
export default CarouselLayout;