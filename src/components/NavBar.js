import React from 'react';
import logo from '../img/logo.png';
import { Link } from 'react-router-dom';
import './NavBar.css';

function NavBar() {
    return (
        <div className="navcomp">
            <div className="branchimg">
                <p className="navpg"> Main Office:<b> Baneswor</b></p> <br/>
                <img alt="restsroblogo" src={logo} className="navlogo"/>
            </div>
            <div className="navmenu">
                <ul className="upperlinks">
                    <li><Link to="/">Join your restaurant</Link></li>
                    <li><Link to="/">Help</Link></li>
                </ul><br/>
                <ul className="navlinks">
                    <li>
                        <Link to="/"> Home</Link>
                    </li>
                    
                    <li>
                        <Link href="/">Categories</Link>
                    </li>
                    <li><Link to="/"><i className="fas fa-book-open"></i></Link></li>
                    <li><Link href="/"><i className="far fa-bell"></i></Link></li>
                    <span className="borderline"></span>
                    <li className="lastlist">< img alt="imgcircle" src={logo} />
                        <label className="username">John doe</label>
                        <select>
                        </select>
                    </li>
                    </ul>
            </div>
        </div>
    )
}

export default NavBar;
