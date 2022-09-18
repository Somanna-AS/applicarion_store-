import React from "react";
import "./Register.css";



function Register() {
  return (
    <form>
      <div className="container">
        <h1>Register</h1>
        <p>Pleace provide your details</p>
        <label htmlFor="email">
          <b>Username</b>
        </label>
        <input
          type="text"
          name="username"
          placeholder="Enter Username"
          id="username"
          required
        />
        <label htmlFor="email">
          <b>Email</b>
        </label>
        <input
          type="text"
          name="email"
          placeholder="Enter Email"
          required
          id="email"
        />
        <label for="psw">
          <b>Password</b>
        </label>
        <input
          type="password"
          placeholder="Enter Password"
          name="psw"
          required
          id="password"
        ></input>
        <label for="email">
          <b>Phone Number</b>
        </label>
        <br />
        <input
          type="phone"
          name="phone"
          placeholder="Enter Phone number"
          id="phone"
          required
        ></input>
        <div className="clearfix">
          <button type="submit" className="btn" >
            Sign Up
          </button>
        </div>
      </div>
    </form>
  );
}

export default Register;