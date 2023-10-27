import React, { useState } from 'react';
import { Form, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
function Cart({ selectedCards, onClose }) {
  const [showAlert, setShowAlert] = useState(false);
  const navigate = useNavigate();

  const handleCheckoutClick = () => {
    if (selectedCards.length === 0) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Please add tests to your cart before proceeding to checkout.',
      });
    } else {
      Swal.fire({
        icon: 'success',
        title: 'Success!',
        text: 'Your preferred tests are now undertaken.',
      });
    }
  }

  // Move the declaration of cartItems here
  const cartItems = selectedCards.map((card, index) => (
    <div key={index} className="cart-item">
      <h3>{card.title}</h3>
      <h2>{card.rupee}</h2>
    </div>
  ));

  const totalAmount = selectedCards.reduce((total, card) => total + parseFloat(card.rupee.replace('Rs.', '')), 0);

  if (!selectedCards || !Array.isArray(selectedCards) || selectedCards.length === 0) {
    // Use SweetAlert2 for the "Your cart is empty" message
    Swal.fire({
      icon: 'info',
      title: 'Your Cart',
      text: 'Your cart is empty.',
      showConfirmButton: false,
      showCancelButton: true,
      cancelButtonText: 'Close',
    }).then(() => {
      onClose();
    });
    // Return null to avoid rendering the default message
    return null;
  }

  return (
    <div className="cart-overlay">
      <div className="cart-modal">
        <h2>Your preferred tests</h2><hr/><br></br>
        {cartItems}<br></br>
        <p><b>Cost of tests: Rs. {totalAmount.toFixed(2)}</b></p><br />
        <button onClick={onClose}><b>Back</b></button>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
        <button onClick={handleCheckoutClick}><b>Checkout</b></button>
      </div>
      <div className={`alert${showAlert ? ' show' : ''}`}>
        <p>Please add tests to your cart before proceeding to checkout.</p>
        <button onClick={() => setShowAlert(false)}>Close</button>
      </div>
    </div>
  );
}

export default Cart;