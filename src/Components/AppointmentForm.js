import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../Styles/AppointmentForm.css";
import { ToastContainer } from "react-toastify";
import Swall from "sweetalert2";

function AppointmentForm() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  const [patientName, setPatientName] = useState("");
  const [patientNumber, setPatientNumber] = useState("");
  const [patientGender, setPatientGender] = useState("default");
  const [appointmentTime, setAppointmentTime] = useState("");
 

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (
    
      patientName === '' ||
      patientNumber === '' ||
      patientGender === '' ||
      appointmentTime === '' 
      
    ) {
      Swall.fire('Please fill in all fields','','error');
    } else {
      try {
        const response = await fetch('https://backend-whdv.onrender.com/app', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
           
           patientName,
           patientNumber,
           patientGender,
           appointmentTime,
          }),
        });
      
        if (response.ok) {
          
          Swall.fire('Registered successfully','','success');
            
          } else {
          const data = await response.json();
          console.error(data); // Log the error response to the console
         
        }
      } catch (error) {
        console.error(error); // Log any unhandled exceptions to the console
        
      }
    }     

  };
  return (
    <div className="appointment-form-section">
      <h1 className="legal-siteTitle">
        <Link to="/">
          Health <span className="legal-siteSign">+</span>
        </Link>
      </h1>
      <div className="form-container" style={{width: "750px"}}>
        <h2 className="form-title">
          <span>Book Appointment Online</span>
        </h2>

        <form className="form-content" onSubmit={handleSubmit}>
          <label>
            Patient Full Name:
            <input
              type="text"
              id="patientName"
              name="patientName"
              value={patientName}
              onChange={(e) => setPatientName(e.target.value)}
              required
            />
          </label>

          <br/>
          <label>
            Patient Phone Number:
            <input
              type="tel"
              id="patientNumber"
              name="patientNumber"
              value={patientNumber}
              onChange={(e) => setPatientNumber(e.target.value)}
              required
            />
          </label>

          <br />
          <label>
            Patient Gender:
            <select
                          id="patientGender"
                          name="patientGender"
              value={patientGender}
              onChange={(e) => setPatientGender(e.target.value)}
              required
            >
              <option value="default">Select</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </label>

          <br />
          <label>
            Preferred Appointment Time:
            <input
              type="datetime-local"
              value={appointmentTime}
              onChange={(e) => setAppointmentTime(e.target.value)}
              id="appointmentTime"
              name="appointmentTime"
              required
            />
          </label>

          <br></br>
          <button type="submit" className="text-appointment-btn">
            Confirm Appointment
          </button>
        </form>
      </div>

      <div className="legal-footer">
       <p>© 2020-2025 Health+  All rights reserved.</p>
      </div>

      <ToastContainer autoClose={5000} limit={1} closeButton={false} />

    </div>
    
  );
}

export default AppointmentForm;
