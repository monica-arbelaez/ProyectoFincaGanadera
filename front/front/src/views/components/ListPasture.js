import React from 'react'
import Carousel from './carousel/Carousel'


export default function ListPasture({ pastures }) {
    if (pastures.length) {
        return (
            <div>
                {pastures.map((animalList, index) =>
                    <Carousel key={index} index={index} list={animalList} />)}
            </div>
        )
    }
    return (
        <p>No hay animales registrados</p>
    )
}