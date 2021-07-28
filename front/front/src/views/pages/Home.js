import React from 'react'
import '../css/style.css'
import finca from './static/finca.png'
const nixon = 'https://avatars.githubusercontent.com/u/48400263?v=4';
const monica = 'https://avatars.githubusercontent.com/u/66042760?s=60&amp;v=4';
const daniel = 'https://avatars.githubusercontent.com/u/22289902?v=4';

const Home = () => {
    return (
        <div className="container">
            <div className="row mt-4" >
                <div className="col mt-4 py-5 px-1">
                    <img className="finca" src={finca} />
                </div>
                <div className="col mt-5 py-4 px-4">
                    <div className="text-center">
                        <h3 >Equipo de desarrollo</h3>
                        👨‍💻👩‍💻👨‍💻
                    </div>
                    <hr />
                    <img className="foto" src={nixon} /><strong>Niñon Gamboa</strong>
                    <br />
                    <img className="foto" src={monica} /> <strong>Monica</strong>
                    <br />
                    <img className="foto" src={daniel} /> <strong>Nicolas Ramirez</strong>
                </div>
            </div>
            <hr />
        </div>
    )
}

export default Home;