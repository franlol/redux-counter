import React from 'react';
import { connect } from 'react-redux';

import './results.css';

import * as actionTypes from '../../store/actions';

const Results = props => {

    const getResults = () => {
        return props.results.map(result => <li key={result.id}>{result.counter} <button onClick={() => props.deleteResult(result.id)}>Del</button></li>);
    }

    return (
        <div className="results">
            <ul>
                {getResults()}
            </ul>
        </div>
    );
};

const mapStateToProps = state => {
    return {
        results: state.results,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        deleteResult: index => dispatch({ type: actionTypes.RESULT_DELETE, payload: index })
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Results);