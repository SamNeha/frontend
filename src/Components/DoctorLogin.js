import React, { useState } from 'react';
import "../Styles/LoginForm.css";
import { Link } from 'react-router-dom';
import Nav from "../Components/Nav";
import { useNavigate } from 'react-router-dom';

function DoctorLogin() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [licenseNumber, setLicenseNumber] = useState('');
  const navigate = useNavigate();
  const handleSubmit = async(e) => {
    e.preventDefault();
    if (!username || !password || !licenseNumber) {
      alert('Please fill in all fields'); // Show an alert instead of using the error state
      return;
  }
  try {
    const response = await fetch('/doclogin', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, password, licenseNumber }),
    });

    if (response.ok) {
      const data = await response.json();
      localStorage.setItem('token', data.token);
      navigate('/docportal');
    } else {
      alert('Invalid email or password'); // Show an alert for errors
    }
  } catch (error) {
    console.error('Error:', error);
    alert('An error occurred during login.'); // Show an alert for errors
  }
};

  return (
    <div className="home-section"style={{
      backgroundImage: 'url("https://t3.ftcdn.net/jpg/02/16/47/22/360_F_216472247_cT66WDoS0fp1s3wC7eaykMJNDGVbOBPq.jpg")',
     }}>
      <Nav />
      <div className="login-form">
        <div className="form-container" style={{width: "750px"}}>
          <h2>Doctor Login</h2>
          <div className="links">
            <Link to="/loginform">Patient</Link>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Username:</label>
              <input
            type="text"
                  name="username"
                  required
                  placeholder="Username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
          />
            </div><br />
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
            </div><br />
            <div className="form-group">
              <label>License Number:</label>
              <input
            type="text"
                  name="licenceNumber"
                  required
                  placeholder="LicenceNumber"
                  value={licenseNumber}
                  onChange={(e) => setLicenseNumber(e.target.value)}
          />
            </div><br /><br />
            <button type="submit">Login</button>
          </form>
          <p>Don't have an account? <Link to="/doctorsignup"><b>Sign up</b></Link></p>
        </div>
      </div>
    </div>
  );
}

export default DoctorLogin;
