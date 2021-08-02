import React, { useEffect } from 'react'
import AnimalItem from './AnimalItem';
import { listAnimalsAction } from '../../application/actions/animals'
import { connect } from 'react-redux';
import { bindActionCreators } from "redux";
import { getAllAnimals } from '../../application/selector/animals'

const ListAnimal = ({ listAnimalsAction, animals }) => {

    useEffect(() => {
        listAnimalsAction()
    }, [listAnimalsAction])
    return (
        <>
            <div className="album py-5">
                <div className="target">
                    {
                        <AnimalItem animals={animals} />
                    }
                </div>
            </div >
        </>
    )
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({ listAnimalsAction }, dispatch);
};
// listPastureAction

const mapStateToProps = (state) => {
    return {
        animals: getAllAnimals(state)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ListAnimal);
