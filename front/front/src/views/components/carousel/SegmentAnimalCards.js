import React from 'react'
import AnimalCard from './AnimalCard'


export default function SegmentAnimalCards({ segment, index }) {
    return( 
        <div key={index} className={!index ?"item active": "item"}>
            <div className="row">
                {segment.map((animal,index)=>
                        <AnimalCard key={index} index={index} data={animal.dataSheet} />
                )}
            </div>
        </div>
    ) 
    

         

    
}