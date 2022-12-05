import React from 'react'; 
import { Link } from 'react-router-dom';
import '../App.css';

function Nav() {
    return (

        <ul id="AllNav" className="navbar-nav ml-auto">
            <li className="nav-object"> <Link to='/' className="nav-item nav-link">Home</Link> </li>
            <li className="nav-object"> <Link to='/Settings' className="nav-item nav-link">Settings</Link> </li>
            <li className="nav-object"> <Link to='/addInflation' className="nav-item nav-link">Inflation DB</Link> </li>
        </ul>
    );
}

export default Nav;
