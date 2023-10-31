import React, { useEffect, useState } from "react";
import video from "../Assets/video.mp4";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleUp, faVideo } from "@fortawesome/free-solid-svg-icons";
import "../Styles/Hero.css";


function Hero() {
  const [goUp, setGoUp] = useState(false);
  const [isVideoModalOpen, setVideoModalOpen] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  const openVideoModal = () => {
    setVideoModalOpen(true);
  };

  const closeVideoModal = () => {
    setVideoModalOpen(false);
  };

  useEffect(() => {
    const onPageScroll = () => {
      if (window.scrollY > 600) {
        setGoUp(true);
      } else {
        setGoUp(false);
      }
    };
    window.addEventListener("scroll", onPageScroll);
  },[]);
  return (
    <div className="section-container">
      <div className="hero-section">
        <div className="text-section">
          <p className="text-headline">❤️ Health comes first</p>
          <h2 className="text-title">
            Find your Doctor and make an Appointments
          </h2>
          <p className="text-descritpion">
            Talk to online doctors and get medical advice, online prescriptions,
            refills and medical notes within minutes. On-demand healthcare
            services at your fingertips.
          </p><br></br>
          <button
            className="text-appointment-btn"
            type="button"
            onClick={openVideoModal}>
            <FontAwesomeIcon icon={faVideo} /> Demo
          </button>
          <div className="text-stats">
            <div className="text-stats-container">
              <p>145k+</p>
              <p>Receive Patients</p>
            </div>

            <div className="text-stats-container">
              <p>50+</p>
              <p>Expert Doctors</p>
            </div>

            <div className="text-stats-container">
              <p>10+</p>
              <p>Years of Experience</p>
            </div>
          </div>
        </div>

        <div className="hero-image-section">
          <img className="hero-image1" src={"https://gaganaeyehospital.com/assets/images/doctor-about/doctor-img.png"} alt="Doctor" />
        </div>
      </div>
      

      <div
        onClick={scrollToTop}
        className={`scroll-up ${goUp ? "show-scroll" : ""}`}
      >
        <FontAwesomeIcon icon={faAngleUp} />
      </div>
      {isVideoModalOpen && (
        <div className="video-modal">
          <div className="video-modal-content">
            <span className="video-modal-close" onClick={closeVideoModal}>
              &times; 
            </span><br></br>
            <video controls>
              <source src={video} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      )}
    </div>
  );
}

export default Hero;
