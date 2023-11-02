import React, { useState, useEffect } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import '../Styles/Checkout.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Swal from 'sweetalert2';
import Cart from './Cart';
import Footer from '../Components/Footer';
import { Link, useNavigate } from 'react-router-dom'; 
import withReactContent from 'sweetalert2-react-content';

const MySwal = withReactContent(Swal);

function CheckoutForm({ onBook, onClose ,isAuthenticated, onLogout}) {
  const [patientId, setPatientId] = useState('');
  const [patientName, setPatientName] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [errors, setErrors] = useState({});
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);

  const navigate = useNavigate();

  const handleBookClick = () => {
    const validationErrors = {};

    if (!patientId.trim()) {
      validationErrors.patientId = 'Patient ID is required';
    }
    if (!patientName.trim()) {
      validationErrors.patientName = 'Patient Name is required';
    }
    if (!mobileNumber.trim()) {
      validationErrors.mobileNumber = 'Mobile Number is required';
    }

    // Check if there are validation errors before displaying the success message
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      MySwal.fire({
        icon: 'success',
        title: 'Your preferred tests are undertaken.',
        timer: 5000,
        timerProgressBar: true,
      }).then(() => {
        setIsFormOpen(false);
        if (typeof onClose === 'function') {
          onClose();
        }
      });

      setErrors({}); // Clear any previous errors
    }
  };
  const handleCardRemove = (cardIndex) => {
    const updatedCards = [...selectedCards];
    updatedCards.splice(cardIndex, 1);
    setSelectedCards(updatedCards);
  }

  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [selectedCards, setSelectedCards] = useState([]);

  const toggleCardSelection = (card) => {
    // Check if the card is already in the selectedCards array
    if (selectedCards.find((c) => c.title === card.title)) {
      // If it's already selected, remove it
      setSelectedCards(selectedCards.filter((c) => c.title !== card.title));
    } else {
      // If it's not selected, add it
      setSelectedCards([...selectedCards, card]);
    }
  };

  const [cards] = useState([
    {
      title:'T3 T4 TSH',
      text: `Known as Thyroid profile Total Blood`,
      report: `E-Reports on next day`,
      rupee:'Rs.400'
    },
    {
      title:' Blood Count',
      text: `Known as Complete Blood Count Automated
             Blood`,
             
      report: `E-Reports on next day`,
      rupee:'Rs.300'
    },
    
    {
      title:'Liver Function Test',
      text: `Known as Liver Function Tests Blood`,
      
      report:`E-Reports on next day`,
      rupee:'Rs.560'
    },
    {
      title:'HbA1c',
      text: `Known as Glycosylated Haemoglobin Blood`,
      
      report:`E-Reports on next day`,
      rupee:'Rs.270'
    },
    {
      title:'Vitamin B12',
      text: `Known as Vitamin B12 Conventional Blood`,
      report:`E-Reports on next day`,
      rupee:'Rs.490'
    },
    {
      title:'Thyroid Stimulating',
      text: `Known as Thyroid Stimulating Hormone Blood`,
      report:`E-Reports on next day`,
      rupee:'Rs.160'
    },
    {
      title:'Beta HCG',
      text: `Known as Beta Hcg Automated Blood`,
      report:`E-Reports on next day`,
      rupee:'Rs.300'
    },
    {
      title:'Fasting Blood Sugar',
      text: `Known as Glucose Fasting Blood



      `,
      report:`E-Reports on next day`,
      rupee:'Rs.150'
    },
    {
      title:' Quantitative Blood ',
      text: `Known as C Reactive Protein Quantitative Blood`,
      report:`E-Reports on next day`,
      rupee:'Rs.400'
    },
    {
      title:'Glucose-PPBS',
      text: `Known as GLucose Post Prandial blood`,
      report:`E-Reports on next day`,
      rupee:'Rs.150'
    },
    
  ]);
  const [gcards] = useState([
    {
      title:'Blood test ',
      text: `Known as analysis performed on a blood sample`,
      report: `E-Reports on next day`,
      rupee:'Rs.100'
    },
    {
      title:'Lipid profile',
      text: `Known as  a panel of blood tests used to find abnormalities in lipids, such as cholesterol and triglycerides.`,
             
      report: `E-Reports on next day`,
      rupee:'Rs.600'
    },
    
    {
      title:'Prothrombin time',
      text: `The prothrombin time – along with its derived measures of prothrombin ratio and international normalized ratio`,
      
      report:`E-Reports on next day`,
      rupee:'Rs.500'
    },
    {
      title:'Blood urea nitrogen',
      text: `Blood urea nitrogen is a medical test that measures the amount of urea nitrogen found in blood. `,
      
      report:`E-Reports on next day`,
      rupee:'Rs.250'
    },
    {
      title:'Bone marrow aspiration',
      text: `Analysis of samples of bone marrow obtained by bone marrow biopsy and bone marrow aspiration.`,
      report:`E-Reports on next day`,
      rupee:'Rs.490'
    },
    {
      title:'Pap test',
      text: `To detect potentially precancerous and cancerous processes in the cervix or colon.`,
      report:`E-Reports on next day`,
      rupee:'Rs.160'
    },
    {
      title:'Urinalysis',
      text: `Medical tests that includes physical examination of the urine, chemical evaluation using urine test strips, and microscopic examination.`,
      report:`E-Reports on next day`,
      rupee:'Rs.260'
    },
    {
      title:'Metabolic panel',
      text: `Known as Glucose Fasting Blood`,
      report:` Blood test consisting of a set of seven or eight biochemical tests.`,
      rupee:'Rs.250'
    },
    {
      title:'TSH test',
      text: `Blood test used to evaluate thyroid function and diagnose thyroid disorders.`,
      report:`E-Reports on next day`,
      rupee:'Rs.400'
    },
    {
      title:'Urine culture',
      text: `Known as urine culture, and histopathologic tests overall (surgicals).`,
      report:`E-Reports on next day`,
      rupee:'Rs.150'
    },
    {
      title:'Computerized tomography',
      text: `scans can be used to check the heart arteries for blockages.Also can be done with dye to check the heart and lung arteries for blockages and other problems.`,
      report:`E-Reports on next day`,
      rupee:'Rs.350'
    },
    {
      title:'Amniocentesis',
      text: `Analysis of fluid, removed by a needle inserted through the abdominal wall, to detect an abnormality in the fetus`,
      report:`E-Reports on next day`,
      rupee:'Rs.550'
    },
    
  ]);


    const nextCard = () => {
      if (currentCardIndex < cards.length - 5) {
        setCurrentCardIndex(currentCardIndex + 5);
      }
    };
    const prevCard = () => {
      if (currentCardIndex > 0) {
        setCurrentCardIndex(currentCardIndex - 5);
      }
    };
    const toggleCart = () => {
      setCartOpen(!cartOpen);
    };
    const [user, setUser] = useState(null);

  useEffect(() => {
    // Fetch user details from the server using the JWT token
    const token = localStorage.getItem('token');
    if (token) {
      fetch('https://backend-whdv.onrender.com/getUserDetails', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
        .then((response) => response.json())
        .then((data) => {
          setUser(data);
        })
        .catch((error) => {
          console.error('Error fetching user details:', error);
        });
    }
  }, []);

  return (
  
    <div><br></br><br></br><br></br><br></br><br></br><br></br>
    {user && (
        <div className="profile">
          <p style={{fontSize:"26px"}}><b>  {user.username}</b></p>
          <p style={{fontSize:"26px"}}><b>  {user.email}</b></p>
          {/* Add more user details here */}
        </div>
  )}
  
     <Carousel showThumbs={false} infiniteLoop={true} autoPlay={true} showStatus={false}>
        <div>
          <img src="https://www.clearstate.com/wp-content/uploads/2021/02/The-traditional-clinical-labs-evolve-scaled.jpg" alt="Image 1"
          style={{
            height:"920px",
           }} />
        </div>
        <div>
          <img src="https://scheermemorial.org/wp-content/uploads/2020/05/1-Clinical-Laboratory-scaled.jpg" alt="Image 2"
          style={{
            height:"920px",
           }} />
        </div>
        <div>
          <img src="https://excellclinical.com/wp-content/uploads/2022/09/resultsyoucan.png" alt="Image 3" 
          style={{
            height:"920px",
           }}/>
        </div>
        <div>
          <img src="https://d1zxene68j3keg.cloudfront.net/sites/default/files/Resouces/images/Doc%20Day_1.jpg" alt="Image 4"
          style={{
            height:"920px",
           }} />
        </div>
        <div>
          <img src="https://www.gebauer.com/hubfs/better%20patient%20relationships.jpg" alt="Image 5"
          style={{
            height:"920px",
           }} />
        </div>
        {/* Add more images as needed */}
      </Carousel>
      <img src={"https://cdn-icons-png.flaticon.com/512/3177/3177440.png"} alt="Profile Icon" className="profile-icon" />
      <div onClick={() => navigate('/lab')}>
  <img src={"https://cdn-icons-png.flaticon.com/512/1828/1828490.png"} alt="Cart Icon" className="logout"  />
</div>

      <section>
<div className="containe">
  <h1>MOST PREFERRED TESTS</h1>
  <div className="cards-container">
    {
     cards.slice(currentCardIndex, currentCardIndex + 5).map((card, i) => (
    <div key={i} className="card">
      <h3>{card.title}</h3><br></br><br></br>
      <p>{card.text}</p><br></br>
      <p><b>{card.report}</b></p><br></br>
      <h2>{card.rupee}</h2><br></br><br></br>
                    <button onClick={() => toggleCardSelection(card)}>
                      {selectedCards.find((c) => c.title === card.title) ? 'Remove' : 'Book test'}
                    </button>
      </div>
      ))
    }
  </div>
  <div className="button-container">
  {currentCardIndex > 0 && (
            <button onClick={prevCard} className="prev-button">
              PREVIOUS
            </button>
          )}
  {currentCardIndex < cards.length - 5 && (
            <button onClick={nextCard} className="next-button">
               NEXT
            </button>
          )}
</div>
<div className="cart-icon" onClick={toggleCart}>
        <img src={"https://cdn-icons-png.flaticon.com/512/825/825590.png"} />
        <h7 className="cart-count">{selectedCards.length}</h7>
      </div>
      {cartOpen && (
        <Cart selectedCards={selectedCards} onClose={toggleCart} />
      )}
</div>
</section><br></br><br></br>
<h1 style={{color:"#00043"}}>TESTS YOU LOOK FOR!</h1><br></br><br></br><br></br>
<div className="grid-container">
{gcards.slice().map((gcard, i) => (
      <div key={i} className="grid-item">
        <h3>{gcard.title}</h3><br></br>
        <p>{gcard.text}</p>
        <h2>{gcard.rupee}</h2>
        <button onClick={() => toggleCardSelection(gcard)}>
          {selectedCards.find((c) => c.title === gcard.title) ? 'Remove' : 'Book test'}
        </button>
      </div>
    ))}
        </div><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
        <Footer/>
    </div>
    
  );
}

export default CheckoutForm;
