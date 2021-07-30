import React from 'react'
import CarouselLayout from './CarouselLayout';
import CarouselSlide from './CarouselSlide';

const segmentAnimals = (dataList) => {
    var numbForEach = 3;
    // window.addEventListener("resize", function () {
    //     const width = window.innerWidth;
    //     if (width <= 767) {
    //         numbForEach = 1
    //     }
    //     if (width > 767 && width <= 992) {
    //         numbForEach = 2
    //     }
    //     if (width > 992) {
    //         numbForEach = 3
    //     }
    //     console.log(width);
    // });

    const segmentedAnimals = []
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
        <CarouselLayout index={props.index} >
            <CarouselSlide segmentedAnimals={segmentedAnimals} pastureId={pastureId} />
        </CarouselLayout>

    )
}

export default Carousel;
