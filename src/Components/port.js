import React, { useState, useEffect } from "react";
import "../Styles/Port.css"; // Import the CSS file
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendarCheck,
} from "@fortawesome/free-solid-svg-icons";
import { useNavigate  } from "react-router-dom";

function Port() {
  const [user, setUser] = useState(null);
  const [userAppointments, setUserAppointments] = useState([]);

  
  useEffect(() => {
    // Fetch user details from the server using the JWT token
    const token = localStorage.getItem("token");
    if (token) {
      fetch("/getUserDetails", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
        .then((response) => response.json())
        .then((data) => {
          setUser(data);
        })
        .catch((error) => {
          console.error("Error fetching user details:", error);
        });
    }
  }, []);
    const navigate = useNavigate();
  
    const handleBookAppointmentClick = () => {
      navigate("/appointment");
    };

  const handleLink1Click = () => {
    // Fetch user's appointments when Link 1 is clicked
    if (user && user.username) {
      fetch(`/getAppointments?username=${user.username}`)
        .then((response) => response.json())
        .then((data) => {
          setUserAppointments(data);
        })
        .catch((error) => {
          console.error("Error fetching user appointments:", error);
        });
    }
  };

  return (
        <div className="content-container">
        <div className="image-container">
          <img
            src="https://www.greegfhc.com/wp-content/uploads/Banners-PatientPortal-004.jpg"
            alt="Patient Portal"
            className="image"
          />
          </div>
            <div className="right-container">  
        <div className="buttons-right">
   &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp; <button className="link link1" onClick={handleLink1Click} style={{height:"50px", borderRadius:"50px", fontSize:"22px"}}><b>My Appointments</b></button>
         &emsp; <button
          className="text-appointment-btn"
          type="button"
          onClick={handleBookAppointmentClick}
        >
          <FontAwesomeIcon icon={faCalendarCheck} /> Book Appointment
        </button>
        </div>
        <div className="img">
      <img
        src="https://img.freepik.com/free-photo/health-still-life-with-copy-space_23-2148854031.jpg?size=626&ext=jpg"
        alt="New Image"
        className="new-image"
        style={{width:"2200px",height:"560px"}}
      />
    </div>
    {userAppointments.length > 0 && (
        <div className="appointments-container">
          <h2>APPOINTMENTS:</h2><br></br><br></br>
          <ul>
            {userAppointments.map((appointment, index) => (
              <li key={index}>
                {`Date: ${appointment.appointmentTime}, Patient Name: ${appointment.patientName}`}<br></br><br></br>
              </li>
            ))}
          </ul>
        </div>
      )}
        </div>
        <div className="top-container">
        <div className="profile-icon">
           <img src={"https://cdn-icons-png.flaticon.com/512/3177/3177440.png"} alt="Profile Icon" className="profile-icon" />
           <br></br><br></br><br></br><br></br>
           {user && (
            <div>
              <p style={{fontSize:"22px",marginTop:"200px",color:"grey"}}><b>LOGGEDIN BY, {user.username}</b></p>
              {/* Add more user details here */}
            </div>
          )}
        </div>
        <div onClick={() => navigate('/')}>
        <img src={"https://cdn-icons-png.flaticon.com/512/1828/1828490.png"} alt="Cart Icon" className="logout" style={{marginRight:"-120px"}} />
       </div>
      </div>
   
      </div>
  
  );
}

export default Port;











