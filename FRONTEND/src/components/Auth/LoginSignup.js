import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthContext';
import './LoginSignup.css';

function LoginSignup() {
  const [isLogin, setIsLogin] = useState(true);
  const [name, setName] = useState(''); 
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  const { login ,signup } = useContext(AuthContext); 

  const navigate = useNavigate();

  const toggleForm = () => {
    setIsLogin(!isLogin);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email || !password) {
      alert('Please enter email and password');
      return;
    }

    if (isLogin) {
      const success = await login(email, password);
      if (success) {
        navigate('/profile');
      }
    } else {
      const success = await signup(name, email, password);
      if (success) {
        navigate('/profile');
      }
    }
  };

  return (
    <div className="auth-container">
      <h2>{isLogin ? 'Login' : 'Signup'}</h2>
      <form onSubmit={handleSubmit}>
        {!isLogin && (
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        )}
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">{isLogin ? 'Login' : 'Signup'}</button>
      </form>
      <button onClick={toggleForm}>
        {isLogin ? 'Switch to Signup' : 'Switch to Login'}
      </button>
    </div>
  );
}

export default LoginSignup;
