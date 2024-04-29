// login.jsx
// import React from 'react';
import './login.css';

function Login() {
  return (
    <div className="container">
      <div className="login-container">
        <h1>Welcome Back</h1>
        <form className="login-form">
          <div className="form-group">
            <label htmlFor="email">Email Address</label>
            <input type="email" id="email" placeholder="Enter email" />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" placeholder="Password" />
          </div>
          <div className="form-group">
            <input type="checkbox" id="keepLoggedIn" />
            <label htmlFor="keepLoggedIn">Keep me logged in</label>
          </div>
          <button type="submit">Log in</button>
        </form>
        <p>Don&apos;t have an account? <a href="#">Sign up here</a></p>
      </div>
    </div>
  );
}

export default Login;
