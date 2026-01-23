import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Home from './Home';
import Signup from './Signup';
import Login from './Login';
import Users from './Users';
import './App.css';

// Protected Route Component
function ProtectedRoute({ element }) {
  const user = localStorage.getItem('user');
  return user ? element : <Navigate to="/login" />;
}

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Signup />} />
          <Route path="/home" element={<ProtectedRoute element={<Home />} />} />
          <Route path="/login" element={<Login />} />
          <Route path="/users" element={<ProtectedRoute element={<Users />} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
