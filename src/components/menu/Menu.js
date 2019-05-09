import React from 'react';
import { connect } from 'react-redux';
import './menu.css';

const Menu = props => {

    return (
        <section className="menu">
            <button onClick={props.onIncrement}>Increment</button>
            <button onClick={() => props.onAdd(10)}>Add 10</button>
            <button onClick={() => props.onSub(10)}>Sub 10</button>
            <button onClick={props.onDecrement}>Decrement</button>
        </section>
    );

};

const mapDispatchToProps = dispatch => {
    return {
        onIncrement: () => dispatch({ type: 'COUNTER_INC', payload: 1 }),
        onAdd: (val) => dispatch({ type: 'COUNTER_ADD', payload: val }),
        onSub: (val) => dispatch({ type: 'COUNTER_SUB', payload: val }),
        onDecrement: () => dispatch({ type: 'COUNTER_DEC', payload: 1 }),
    }
};

export default connect(null, mapDispatchToProps)(Menu);