import React, { useEffect } from 'react'
import PastureItem from './PastureItem';
import { listPastureAction, sortPastureByLengthAction, sortPastureByDensityAction } from '../../application/actions/pasture'
import { connect } from 'react-redux';
import { bindActionCreators } from "redux";
import { getAllPastures } from '../../application/selector/pastures'
const ListPasture = ({ sortPastureByDensityAction, sortPastureByLengthAction, pastures }) => {
    useEffect(() => {
        sortPastureByLengthAction()
        sortPastureByDensityAction()
    }, [sortPastureByDensityAction, sortPastureByLengthAction])
    const listarLength = () => sortPastureByLengthAction();
    // const listarLength = () => sortPastureByLengthAction();
    const listarDensity = () => sortPastureByDensityAction();
    return (
        <>
            <button className="btn btns mb-2 float-left"
            // onClick={() => listarDensity()}
            >
                Ordenar por Densidad</button>
            <button className="btn btns mb-2 float-left"
            // onClick={() => listarLength()}
            >
                Listar Potreros</button>
            {/* <button className="btn btn-primary mb-2 float-right"
            onClick={() =>}
            >
                Ordenar por longitud</button> */}

            <div className="album py-5">
                <div className="target">
                    {
                        <PastureItem pastures={pastures} />
                    }
                </div>
            </div >
        </>
    )
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({ sortPastureByDensityAction, sortPastureByLengthAction }, dispatch);
};
// listPastureAction

const mapStateToProps = (state) => {
    return {
        pastures: getAllPastures(state)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ListPasture);
