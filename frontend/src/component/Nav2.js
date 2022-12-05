import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

function Nav2() {
    return (


        <div class="Nav2">
            <ul id="AllNav2" className="navbar-nav ml-auto">
                <li className="nav-object2"> <Link to='/' className="nav-item nav-link">Home</Link> </li>
                <li className="nav-object2"> <Link to='/Settings' className="nav-item nav-link">Settings</Link> </li>
                <li className="nav-object2"> <Link to='/addInflation' className="nav-item nav-link">Inflation DB</Link> </li>

            </ul>
        </div>

    );
}

export default Nav2;
