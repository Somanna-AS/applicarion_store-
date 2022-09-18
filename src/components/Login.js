import React from "react";
import "./Login.css";

function Login() {
    return (
        <div id="login-card" className="card">
            <div className="card-body">
                <br />
                <form action="">
                    <div className="form-group">
                        <input type="email" className="form-contrrol" id="email" placeholder="Enter Email"/>

                    </div>
                    <div className="form-group">
                    <input type="password" className="form-control" id="Lemail" placeholder="Enter password" name="pswd"/>
                    </div>
                    <button type="submit" id="button" className="btn btn-primary deep-purple btn-block ">Submit</button>
                </form>
            </div>
        </div>
    );
}

export default Login;