import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

const Nav = props => {
    return (
        <div>
            <nav className="main-nav ">
                <div className="main-nav-logo">
                    <h1><NavLink to="/">Deed</NavLink></h1>
                </div>
                <nav className="main-nav-items">
                    <ul>
                        <li><NavLink to="/balance">Show Balance</NavLink></li>
                        <li><NavLink to="/withdraw">Withdraw</NavLink></li>
                            <React.Fragment>
                                <li><NavLink to="/highlights">Highlighted</NavLink></li>                            </React.Fragment>        
                    </ul>
                </nav>
            </nav>
            <hr style={{ width: '90%' }} />
        </div>
    )
}
export default Nav;