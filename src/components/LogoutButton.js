import React from 'react';

function LogoutButton({ onLogout }) {
  const handleLogout = () => {
    // Call the onLogout function to log the user out
    onLogout();
  };

  return (
    <button onClick={handleLogout}>Logout</button>
  );
}

export default LogoutButton;
