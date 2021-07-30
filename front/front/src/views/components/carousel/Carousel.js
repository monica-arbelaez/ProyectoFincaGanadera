import React from 'react'
import CarouselLayout from './CarouselLayout';
import CarouselSlide from './CarouselSlide';

const segmentAnimals = (dataList) => {
    const segmentedAnimals = []
    const numbForEach = 3;
    for (let i = 0; i < dataList.length; i += numbForEach) {
        let chunk = dataList.slice(i, i + numbForEach);
        segmentedAnimals.push(chunk);
    }
    return segmentedAnimals
}

const Carousel = (props) => {

    const dataList = props.list
    const pastureId = dataList[0].pastureId ? dataList[0].pastureId.id : "sinPasture"
    const segmentedAnimals = segmentAnimals(dataList)

    return (
        <CarouselLayout pastureId={pastureId} >
            <CarouselSlide segmentedAnimals={segmentedAnimals} pastureId={pastureId} />
        </CarouselLayout>

    )
}

export default Carousel;
