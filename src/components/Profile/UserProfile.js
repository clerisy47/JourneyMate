import React, { useContext } from 'react';
import { AuthContext } from '../../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';
import './UserProfile.css';

function UserProfile() {
  const { logout } = useContext(AuthContext);
  const navigate = useNavigate();
  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <div className="user-profile">
      <h2>User Profile</h2>
      <div className="user-info">
        <p>Name: John Doe</p> 
        <p>Email: johndoe@example.com</p> {/* We can later get this data from backend */}
      </div>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}

export default UserProfile;
