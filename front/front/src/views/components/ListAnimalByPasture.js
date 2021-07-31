import React from 'react'
import Carousel from './carousel/Carousel'


export default function ListAnimalByPasture({ pastures }) {
    return (pastures.length) ?
        (
            <div>
                {pastures.map((animalList, index) =>
                    <Carousel key={index} index={index} list={animalList} />)}
            </div>
        )
        :
        (
            <p>No hay animales registrados</p>
        )
}