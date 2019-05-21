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
            <button onClick={() => props.resultAdd(props.counter)}>Save</button>
        </section>
    );

};

const mapStateToProps = state => {
    return {
        counter: state.counter.counter,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onIncrement: () => dispatch({ type: actionTypes.COUNTER_INC, payload: 1 }),
        onAdd: (val) => dispatch({ type: actionTypes.COUNTER_INC, payload: val }),
        onSub: (val) => dispatch({ type: actionTypes.COUNTER_DEC, payload: val }),
        onDecrement: () => dispatch({ type: actionTypes.COUNTER_DEC, payload: 1 }),
        resultAdd: (counter) => dispatch({ type: actionTypes.RESULTS_ADD, payload: { uuid: uuid(), counter } }),
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Menu);