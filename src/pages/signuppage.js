import React from 'react';
import foods from '../img/foods.png';
import './signuppage.css';

function Signuppage() {
    return (
        <div className="maindiv">
            <div className="foodimage">
                <img alt="decorated foods" src={ foods }/>
            </div>
            <div  className="largerdiv">
                <form className="signinform">
                        <div className="signupform">
                            <h1 className="title"> Sign in with your Restrob account</h1>
                            <p className="pg">Have your corporate username?&nbsp;
                            <a className="clickme" href="/">Click Here</a> </p>
                            <input placeholder="Username" className="userinput" /><br/>
                            <input placeholder="Password"  className="pwinput"/><br/>
                            <a href="/" className="resetpw">Reset Password</a><br/>
                            <button className="logbutton">Login</button>
                            <hr/>
                            <button className="logwithfb">
                            <i className="fab fa-facebook"></i>
                            Login using Facebook</button>
                            <button className="logwithgoogle">
                            <i className="fab fa-google-plus-g">
                            </i>Log in using Google</button>
                            <p className="pg1">Don't have an account?
                            <a className="clickme" href="/">Register</a></p>
                        </div>
                </form>
            </div>
            
        </div>
    )
}

export default Signuppage;
