import React from 'react'
import SegmentAnimalCards from './SegmentAnimalCards'


export default function CarouselSlide({ pastureId, segmentedAnimals }) {
    return (
        <div key={pastureId} id={pastureId} className="carousel slide" data-ride="carousel" data-interval="5000">

            <ol className="carousel-indicators">
                {segmentedAnimals.map((segment, index) =>
                    <li key={index} data-target={`#${pastureId}`} data-slide-to={index} className={!index ? "active" : null}></li>)}
            </ol>

            <div className="carousel-inner">
                {segmentedAnimals.map((segment, index) =>
                    <SegmentAnimalCards key={index} index={index} segment={segment} />)}
            </div>

            <a className="carousel-control left" href={`#${pastureId}`} data-slide="prev">
                <i className="fa fa-angle-left"></i>
            </a>
            <a className="carousel-control right" href={`#${pastureId}`} data-slide="next">
                <i className="fa fa-angle-right"></i>
            </a>

        </div>
    )
}