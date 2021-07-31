import React, { useEffect } from 'react'
import PastureItems from './PastureItems';
import { listPastureAction } from '../../application/actions/pasture'
import { connect } from 'react-redux';
import { bindActionCreators } from "redux";
import { getAllPastures } from '../../application/selector/pastures'

const ListPasture = ({ listPastureAction, pastures }) => {
    useEffect(() => {
        listPastureAction();
    }, [listPastureAction])
    return (
        <div className="album py-5">
            <div className="target">
                {
                    <PastureItems pastures={pastures} />
                }
            </div>
        </div >
    )
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({ listPastureAction }, dispatch);
};

const mapStateToProps = (state) => {
    return {
        pastures: getAllPastures(state)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ListPasture);
