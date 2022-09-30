import React, { useState } from 'react';
import Swal from 'sweetalert2';

const Login = ({ setIsAuthenticated }) => {
  const adminEmail = 'adminpanel@company.com';
  const adminPassword = '123';
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = e => {
    e.preventDefault();

    if (email === adminEmail && password === adminPassword) {
      Swal.fire({
        timer: 1250,
        showConfirmButton: false,
        willOpen: () => {
          Swal.showLoading();
        },
        willClose: () => {
          localStorage.setItem('is_authenticated', true);
          setIsAuthenticated(true);

          Swal.fire({
            icon: 'success',
            title: 'Logged in!',
            text: 'Welcome back!',
            showConfirmButton: false,
            timer: 1250,
          });
        },
      });
    } 
    else {
      Swal.fire({
        timer: 1500,
        showConfirmButton: false,
        willOpen: () => {
          Swal.showLoading();
        },
        willClose: () => {
          Swal.fire({
            icon: 'error',
            title: 'Something went wrong!',
            text: 'Incorrect email or password!',
            showConfirmButton: true,
          });
        },
      });
    }
  };

  return (
    <div className="small-container">
      <form className="admin-form" onSubmit={handleLogin}>
        <h1>Login</h1>
        
        <input
          id="email"
          type="email"
          name="email"
          placeholder="email"
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
        
        <input
          id="password"
          type="password"
          name="password"
          placeholder="password"
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
        <div className="form-footer">
        <input id="login-submit" type="submit" value="Login" />
        </div>
      </form>
    </div>
  );
};

export default Login;