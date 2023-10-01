import React, { useState } from 'react';

function Signup({ onLogin }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSignup = () => {
    // Perform form validation here (e.g., check for empty fields)
    if (!username || !password) {
      alert('Please fill in all fields.');
      return;
    }

    // Store user data in local storage (simulating a backend)
    localStorage.setItem(username, JSON.stringify({ username, password }));

    // Log in the user
    onLogin(username);
  };

  return (
    <div>
      <h2>Sign Up</h2>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleSignup}>Sign Up</button>
    </div>
  );
}

export default Signup;
