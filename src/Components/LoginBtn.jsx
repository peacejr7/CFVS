import React, { useState } from 'react';

function LoginButton() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userType, setUserType] = useState('');

  const handleLoginClick = () => {
    setIsLoggedIn(true);
  };

  const handleUserClick = () => {
    setUserType('User');
  };

  const handleAdminClick = () => {
    setUserType('Admin');
  };

  return (
    <div>
      {isLoggedIn ? (
        <p>You are logged in as {userType}</p>
      ) : (
        <button onClick={handleLoginClick}>Log In</button>
      )}
      {isLoggedIn && (
        <div>
          <button onClick={handleUserClick}>Log in as User</button>
          <button onClick={handleAdminClick}>Log in as Admin</button>
        </div>
      )}
    </div>
  );
}

export default LoginButton;