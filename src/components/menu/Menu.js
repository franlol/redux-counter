import React from 'react';
import { connect } from 'react-redux';
import { v4 as uuid } from 'uuid';

import './menu.css';

import * as actionTypes from '../../store/actions'

const Menu = props => {

    return (
        <section className="menu">
            <button onClick={props.onIncrement}>Increment</button>
            <button onClick={() => props.onAdd(10)}>Add 10</button>
            <button onClick={() => props.onSub(10)}>Sub 10</button>
            <button onClick={props.onDecrement}>Decrement</button>
            <button onClick={props.resultAdd}>Save</button>
        </section>
    );

};

const mapDispatchToProps = dispatch => {
    return {
        onIncrement: () => dispatch({ type: actionTypes.COUNTER_INC, payload: 1 }),
        onAdd: (val) => dispatch({ type: actionTypes.COUNTER_INC, payload: val }),
        onSub: (val) => dispatch({ type: actionTypes.COUNTER_DEC, payload: val }),
        onDecrement: () => dispatch({ type: actionTypes.COUNTER_DEC, payload: 1 }),
        resultAdd: () => dispatch({ type: actionTypes.RESULTS_ADD, payload: uuid() }),
    }
};

export default connect(null, mapDispatchToProps)(Menu);