import {React, useState, useEffect} from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import '../Styles/DoctorPortal.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeartPulse, faTruckMedical, faBookMedical} from "@fortawesome/free-solid-svg-icons";
import Footer from '../Components/Footer';
import profile1 from "../Assets/profile-1.png";
import profile2 from "../Assets/profile-2.png";
import profile3 from "../Assets/profile-3.png";
import profile4 from "../Assets/profile-4.png";
import Swall from "sweetalert2";
const DoctorPortal = () => {

  const [subject, setSubject] = useState('');
  const[user,setUser] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate(); 

  const handleBackClick = () => {
    navigate('/');
  };
  

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (
      email === '' ||
      subject === '' ||
      message === '' 
    ) {
      Swall.fire('Please fill in all fields','','error');
    } else {
          try {
      const response = await fetch('/docform', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(
          {
            email,
            subject,
            message,
          }
        ),
      });
  
      if (response.ok) {
        Swall.fire('Received successfully','','success');
      } else {
        const data = await response.json();
      console.error(data); // Log the error response to the console
    }
  } catch (error) {
    console.error(error); // Log any unhandled exceptions to the console
    
  }
}   
  };
  useEffect(() => {
    const storedEmail = localStorage.getItem('user');
    if (storedEmail) {
      setUser(storedEmail);
    }
  }, []);
  
  return (
    <div className="Container">
      <div className="Content">
        <div className="LeftSide">
        <button className="BackButton" onClick={handleBackClick}>Back</button>
       <br></br> <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
        <p className="BoldText">&emsp;Your New Smile<br></br>&emsp; Starts Here!</p><br></br><br></br>
          
        </div>
      </div>

      <div className="CardContainer">
        <div className="Card GreenCard">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHXvQEXVvGxjjHiBKzRNoLJf6XGtU26osKsRJmHJyfXWoDF0UPv0-5TBaEylEZxXF-HiA&usqp=CAU" alt="Clock" className="CardImage" />
          <h2>Opening Hours</h2>
  <p>We are open Monday to Friday, <br></br>9:00 AM - 6:00 PM.</p>
        </div>
        <div className="Card BlackCard">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKydhu3NHGbsffOqSmOzfJdje9tI44aSDjTA&usqp=CAU" alt="Location" className="CardImage" />
          <h2>Visit Our Location</h2>
  <p>Come and visit us at 123 Main Street, <br></br>City, Country.</p>
        </div>
        <div className="Card GreenCard">
          <img src="https://i.pinimg.com/564x/c4/19/8a/c4198af08cbf6b66b043b30748676ade.jpg" alt="Phone" className="CardImage" />
          <h2>Contact Now</h2>
  <p>Call us at +1 (123) 456-7890 <br>
  </br>to book an appointment.</p>
        </div>
      </div>
      <div className="ServicesContainer">
        <h2 style={{fontSize: "50px"}}>Services We Provide</h2><br></br>
        <div className="ServicePartitions">
          {/* Partition 1 */}
          <div className="ServicePartition" >
          <FontAwesomeIcon icon={faTruckMedical} className="ServiceIcon"/>
            <h3>Emergency care</h3><br></br><br></br>
            <p>Our Emergency Care service is designed to be your reliable support in critical situations. Whether it's a sudden illness, injury, or any medical concern that requires immediate attention, our team of dedicated healthcare professionals is available 24/7 to provide prompt and efficient care.</p>
          </div>
          {/* Partition 2 */}
          <div className="ServicePartition">
          <FontAwesomeIcon icon={faHeartPulse} className="ServiceIcon" />
            <h3>Laboratory and diagnostic care</h3><br></br><br></br>
            <p>Our team of experienced lab techs and medical experts perform limited diagnostic testing, reference testing, and disease surveillance. They also provide emergency response support, perform applied research, and provide training for laboratory personnel.</p>
          </div>
          {/* Partition 3 */}
          <div className="ServicePartition">
          <FontAwesomeIcon icon={faBookMedical} className="ServiceIcon" />
            <h3>Patient portal</h3><br></br><br></br>
            <p>You can access all of your personal health information from all of your providers in one place. Patients can communicate with their healthcare providers through secure messaging within the portal. Patient portals prioritize the security and privacy of patient data, adhering to healthcare regulations.</p>
          </div>
        </div>
      </div>
      <div className="OurDoctorsContainer">
  <h2 style={{fontSize: "50px"}}>Our Doctors</h2>
  <div className="DoctorProfiles">
    {/* Doctor 1 */}
    <div className="DoctorProfile">
      <img src={profile1} alt="Doctor 1" className="DoctorImage" />
      <h3>Dr. Kathryn Murphy</h3>
      <p>Specialty: General Surgeon</p>
    </div>

    {/* Doctor 2 */}
    <div className="DoctorProfile">
      <img src={profile2} alt="Doctor 2" className="DoctorImage" />
      <h3>Dr. Jacob Jones</h3>
      <p>Specialty: Hematologists</p>
    </div>

    {/* Doctor 3 */}
    <div className="DoctorProfile">
      <img src={profile3} alt="Doctor 3" className="DoctorImage" />
      <h3>Dr. Jenny Wilson</h3>
      <p>Specialty: Endocrinologists</p>
    </div>

    {/* Doctor 4 */}
    <div className="DoctorProfile">
      <img src={profile4} alt="Doctor 4" className="DoctorImage" />
      <h3>Dr. Albert Flores</h3>
      <p>Specialty: Hematologists</p>
    </div>
  </div>
  </div>
  <div className="BlackContainer" >
        <form className="ContactForm" onSubmit={handleSubmit}>
          <h1 style={{color: "grey"}}>Always Contact with us</h1><br></br><br></br>
          <h1>{user} here!</h1>
        <input type="email"
          id="email"
          name="email"
           placeholder="Your email" 
           value={email}
           onChange={(e) => setEmail(e.target.value)}
           style={{height: "80px"}}/><br></br><br></br>
           

          <input type="text"
          id="subject"
          name="subject"
           placeholder="Subject" 
           value={subject}
           onChange={(e) => setSubject(e.target.value)}
           style={{height: "80px"}} /><br></br><br></br>
          <textarea placeholder="Your message"
          value={message}
          id="message"
          name="message"
          onChange={(e) => setMessage(e.target.value)}
          style={{height: "120px"}}>
          </textarea><br></br><br></br>
          <button type="submit">Submit</button>
        </form>
      </div>
      <Footer/>
    </div>
   
  );
};

export default DoctorPortal;
