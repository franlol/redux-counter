import React from 'react';

const Menu = props => {

    const { increment, decrement, add, sub } = props.actions;

    return (
        <section className="menu">
            <button onClick={increment}>Increment</button>
            <button onClick={() => add(10)}>Add 10</button>
            <button onClick={() => sub(10)}>Sub 10</button>
            <button onClick={decrement}>Decrement</button>
        </section>
    );

};

export default Menu;