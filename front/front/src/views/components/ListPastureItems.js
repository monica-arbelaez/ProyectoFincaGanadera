import React from 'react'
import PastureItems from './PastureItems';

const ListPastureItems = () => {
    const items = [
        {
            "_id": "6101de8ba1834c4d88e975cc",
            "area": {
                "area": 12
            },
            "name": {
                "name": "LA TAPIA2"
            },
            "fence": {
                "id": "21283b9a-d236-480a-aa28-d4ec76a3d400",
                "length": {
                    "length": 200
                }
            },
            "grass": {
                "id": "fa49a250-e030-42ed-ab74-3a3b6da8f524",
                "density": {
                    "density": 2
                }
            }
        },
        {
            "_id": "6101b1ecea8ac90015c7c88a",
            "id": null,
            "area": {
                "area": 13
            },
            "name": {
                "name": "LA LOMA"
            },
            "fence": {
                "id": "6911ade1-a35d-4e68-b85a-869952b893fa",
                "length": {
                    "length": 500
                }
            },
            "grass": {
                "id": "9a906625-0eae-4c10-81e6-dbebae014cf1",
                "density": {
                    "density": 11
                }
            }
        },
        {
            "_id": "6101b1ecea8ac90015c7c88a",
            "id": null,
            "area": {
                "area": 13
            },
            "name": {
                "name": "LA LOMA"
            },
            "fence": {
                "id": "6911ade1-a35d-4e68-b85a-869952b893fa",
                "length": {
                    "length": 500
                }
            },
            "grass": {
                "id": "9a906625-0eae-4c10-81e6-dbebae014cf1",
                "density": {
                    "density": 11
                }
            }
        }
    ]
    console.log(items);
    return (
        <div className="album py-5 bg-light">
            <div className="container target ">
                <PastureItems items={items} />
            </div>
        </div >
    )
}

export default ListPastureItems;
