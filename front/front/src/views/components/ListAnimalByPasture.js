import React from 'react'
import Carousel from './carousel/Carousel'


export default function ListAnimalByPasture({ animalsByPasture }) {
    return (animalsByPasture.length) ?
        (
            <div>
                {animalsByPasture.map((animalList, index) =>
                    <Carousel key={index} index={index} list={animalList} />)}
            </div>
        )
        :
        (
            <p>No hay animales registrados</p>
        )
}