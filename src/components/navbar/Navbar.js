import React from 'react';

import './navbar.css';

const Navbar = props => {

    return (
        <div className="navbar">
            <p>{props.counter}</p>
        </div>
    );

}

export default Navbar;