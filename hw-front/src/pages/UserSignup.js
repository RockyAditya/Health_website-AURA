import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../pages/UserSignup.css';

const UserSignup = () => {
  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSignup = (e) => {
    e.preventDefault();
    // Check if all fields are filled before proceeding with signup
    if (name && username && email && password) {
      alert('Signup successful! Welcome, ' + name);
      // Clear input fields
      setName('');
      setUsername('');
      setEmail('');
      setPassword('');
      // Redirect to /horigin after successful signup
      navigate('/horigin');
    } else {
      alert('Please fill in all fields.');
    }
  };
//style={{ width: '300px', margin: 'auto', marginTop: '50px' }}
  return (
    <div className='bg'>
    <div className="centered">
<div class="card">
<div class="first-content">
<span>Signup Here</span>
  </div>
  <div class="second-content">
    <div className="signup-container" >
      <h2>User Signup</h2>
      <form onSubmit={handleSignup}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">Name</label>
          <input
            type="text"
            id="name"
            className="form-control"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="username" className="form-label">Username</label>
          <input
            type="text"
            id="username"
            className="form-control"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email</label>
          <input
            type="email"
            id="email"
            className="form-control"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">Password</label>
          <input
            type="password"
            id="password"
            className="form-control"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">Signup</button>
        <button type="button" className="btn btn-secondary" onClick={() => navigate('/')}>Back</button>
      </form>
    </div>
    </div>
                </div>
                </div>
                </div>
        
  );
};

export default UserSignup;
