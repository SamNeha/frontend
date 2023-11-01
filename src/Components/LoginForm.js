import React, { useState } from 'react';
import "../Styles/LoginForm.css";
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import Nav from "../Components/Nav";
function LoginForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const handleSubmit = async(e) => {
    e.preventDefault();
    if (!username || !password) {
      alert('Please fill in all fields'); // Show an alert instead of using the error state
      return;
    }
    if (password === '12345') {
      
      localStorage.setItem('token', 'yourAuthToken'); // Replace 'yourAuthToken' with your actual token
      alert('Login Successful');
      navigate('/checkout');
    } else {
      // Handle login failure for other passwords
      alert('Invalid username or password');
    }
  }

  return (
   
    <div className="home-section" style={{
      backgroundImage: 'url("https://t3.ftcdn.net/jpg/02/16/47/22/360_F_216472247_cT66WDoS0fp1s3wC7eaykMJNDGVbOBPq.jpg")',
     }}>
        <Nav /> 
    <div className="login-form">
      <div className="form-container"style={{width: "750px"}}>
      <h2>Login</h2>
      <div className="links">
            <Link to="/doctorlogin">Doctor</Link>
            <Link to="/loginform">Patient</Link>
          </div>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Username:</label>
          <input
            type="username"
                  name="username"
                  required
                  placeholder="Username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
          />
        </div><br></br>
        <div className="form-group">
          <label>Password:</label>
          <input
            type="password"
                  name="password"
                  required
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
          />
        </div><br></br><br></br>
        <button type="submit">Login</button>
      </form>
      <p>Don't have an account? <Link to="/signupform"><b>Sign up</b></Link></p>
    </div>
    </div>
        
      </div>
      
  );
}

export default LoginForm; 
