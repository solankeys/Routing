import React from 'react';
import NavBar from '../components/NavBar';
import lookfood from '../img/lookfood.png';
import './Error.css';

function Error() {
    return (
        <div className="mainpage">
            <header>
            <NavBar />
            </header>
            <div>
                <div className="errormes">
                    <h1>404</h1>
                    <h2>We have a little problem here.</h2>
                    <p className="errorpg"> We can't find the page you're looking for.</p>
                    <button className="backbtn">Back</button>
                    <button className="backtohomebtn">Home</button>
                </div>
                <div className="confusimg">
                    <img alt="" src={lookfood}/>
                </div>
            </div>
        </div>
    );
}

export default Error;