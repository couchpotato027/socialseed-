import React from 'react';
import '../CSS/Auth.css';

function Signup() {
  return (
    <div className="auth-container">
      <h2>Create Your SocialSeed Account</h2>
      <form className="auth-form">
        <input type="text" placeholder="Full Name" required />
        <input type="email" placeholder="Email" required />
        <input type="password" placeholder="Password" required />
        <button type="submit">Sign Up</button>
        <p>Already have an account? <a href="/login">Log In</a></p>
      </form>
    </div>
  );
}

export default Signup;
