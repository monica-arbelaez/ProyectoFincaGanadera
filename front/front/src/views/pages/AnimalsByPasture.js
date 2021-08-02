import React, { useEffect } from 'react'
import ListAnimalByPasture from '../components/ListAnimalByPasture'
import '../css/style.css'
import { listAnimalByPastureAction } from '../../application/actions/animalsByPasture';
import { connect } from 'react-redux';
import { bindActionCreators } from "redux";
import { getAnimalsByPasture } from '../../application/selector/animalsByPasture'

const AnimalsByPasture = ({ listAnimalByPastureAction, animalsByPasture }) => {

    useEffect(() => {
        listAnimalByPastureAction();
    }, [listAnimalByPastureAction])
    return (
        <div className="album pastures">
            <div className="container target">
                <ListAnimalByPasture animalsByPasture={animalsByPasture} />
            </div>
        </div>
    )
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({ listAnimalByPastureAction }, dispatch);
};

const mapStateToProps = (state) => {
    return {
        animalsByPasture: getAnimalsByPasture(state)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AnimalsByPasture);