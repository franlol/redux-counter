import React from 'react';
import { connect } from 'react-redux';

import './navbar.css';

const Navbar = props => {

    return (
        <div className="navbar">
            <p>{props.counter}</p>
        </div>
    );

}

const mapStateToProps = state => {
    return {
        counter: state.counter,
    }
};

export default connect(mapStateToProps)(Navbar);