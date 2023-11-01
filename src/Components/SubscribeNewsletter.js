
import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Swal from 'sweetalert2';
function SubscribeNewsletter() {
  const [email, setEmail] = useState('');
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);
 

  const handleEmailInput = async (e) => {
    e.preventDefault();
    if (
      email === '' 
    ) {
      Swal.fire({
        icon: 'error',
        title: 'Validation Error',
        text: 'Please fill email address',
      });
    } else {
      try {
        const response = await fetch('https://backend-whdv.onrender.com/sub', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
           
            email,
          }),
        });

        if (response.ok) {
          
          Swal.fire({
            icon: 'success',
            title: 'Subscription Successful',
            text: 'You have successfully subscribed to our newsletter!',
          });
        
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
    <div className="ft-info-p2">
      <p className="ft-input-title">Stay Update to our Newsletter</p>
      <input
        type="text"
        inputMode="email"
        className="ft-input"
        placeholder="Enter your email address"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <button
        className="text-appointment-btn"
        type="button"
        disabled={isButtonDisabled}
        onClick={handleEmailInput}
      >
        Subscribe
      </button>

      <ToastContainer autoClose={4000} limit={1} closeButton={false} />
    </div>
  );
}

export default SubscribeNewsletter;




