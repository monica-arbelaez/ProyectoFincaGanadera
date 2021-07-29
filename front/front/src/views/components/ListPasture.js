import React from 'react'
import PastureItems from './PastureItems'


export default function ListPasture({ pastures }) {
    return (
        <>
            {
                pastures.map((pasture, i) => {
                    return <PastureItems key={i} pasture={pasture} />
                })
            }
        </>

    )
}