import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './Components/Navbar';
import Footer from './Components/Footer'; // ✅ Import Footer
import GeminiChat from './Components/GeminiChat';

import Home from './Pages/Home';
import Profile from './Pages/Profile';
import Network from './Pages/Network';
import Blog from './Pages/Blog';
import Login from './Pages/Login';
import Signup from './Pages/Signup';
import SignInPage from './Pages/SignInPage';
import SignUpPage from './Pages/SignUpPage';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/network" element={<Network />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/sign-in" element={<SignInPage />} />
        <Route path="/sign-up" element={<SignUpPage />} />
      </Routes>
      <Footer /> {/* ✅ Footer visible on all routes */}
      <GeminiChat />
    </Router>
  );
}

export default App;
