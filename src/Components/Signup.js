import React, { useState} from 'react';
import "../Styles/SignupForm.css";
import Nav from "../Components/Nav";
import { Link, useNavigate } from 'react-router-dom';
function Signup({onClose}) {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [contactNumber, setContactNumber] = useState('');
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();
    if (
    
      username === '' ||
      email === '' ||
      password === '' ||
      contactNumber === '' 
    ) {
      alert('Please fill in all fields');
    } else {
      try {
        const response = await fetch('https://backend-whdv.onrender.com/signup', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
           
            username,
           
            email,
            password,
            contactNumber,
          }),
        });
      
        if (response.ok) {
          
              navigate('/login');
            
          } else {
          const data = await response.json();
          console.error(data); // Log the error response to the console
          alert('An error occurred during registration');
        }
      } catch (error) {
        console.error(error); // Log any unhandled exceptions to the console
        alert('An error occurred during registration');
      }
    }      
  };

  return (
    <div className="home-section" style={{
     backgroundImage: 'url("https://t3.ftcdn.net/jpg/02/16/47/22/360_F_216472247_cT66WDoS0fp1s3wC7eaykMJNDGVbOBPq.jpg")',
    }}>
        <Nav />
    <div className="signup-form">
        <div className="form-container"style={{width: "750px"}}>
      <h2>Sign Up</h2>
      <div className="links">
            <Link to="/docsignup">Doctor</Link>
            <Link to="/signup">Patient</Link>
          </div>
      <form onSubmit={handleSignup}>
        <div className="form-group">
          <label>Name:</label>
          <input
                    type="text"
                    id="username"
                    name="username"
                    required
                    placeholder="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                  />
        </div>
        <div className="form-group">
          <label>Email:</label>
          <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
        </div>
        <div className="form-group">
          <label>Contact:</label>
          <input
                    type="tel"
                    id="contactNumber"
                    name="contactNumber"
                    required
                    placeholder="Contact Number"
                    value={contactNumber}
                    onChange={(e) => setContactNumber(e.target.value)}
                  />
        </div>
        <div className="form-group">
          <label>Password:</label>
          <input
                    type="password"
                    id="password"
                    name="password"
                    required
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
        </div>
        <button type="submit">Sign Up</button>
      </form>
      <p>already have an account? <Link to="/login"><b>Login</b></Link></p>
    </div>
    </div>
        
        </div>
  );
}

export default Signup;
