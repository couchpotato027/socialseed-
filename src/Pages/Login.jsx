import React from 'react';
import '../CSS/Auth.css';

function Login() {
  return (
    <div className="auth-container">
      <h2>Log In to SocialSeed</h2>
      <form className="auth-form">
        <input type="email" placeholder="Email" required />
        <input type="password" placeholder="Password" required />
        <button type="submit">Log In</button>
        <p>Don't have an account? <a href="/signup">Sign Up</a></p>
      </form>
    </div>
  );
}

export default Login;
