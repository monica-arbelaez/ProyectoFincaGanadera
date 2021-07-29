import React from 'react'
import PastureItems from '../components/PastureItem'


export default function ListPasture({ pastures }) {
    return (
        <>
            {
                pastures.map(pasture => {
                    return <PastureItems pasture={pasture} />
                })
            }
        </>

    )
}