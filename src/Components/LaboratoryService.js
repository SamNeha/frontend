import React, { useState }  from 'react';
import Doctor from "../Assets/lab.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../Styles/LaboratoryService.css";
import {
  faChevronLeft, faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { Link, useNavigate } from 'react-router-dom'; 


function LaboratoryService() {
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
      text: `Known as Glucose Fasting Blood`,
      report:`E-Reports on next day`,
      rupee:'Rs.150'
    },
    {
      title:'CRP Quantitative Blood ',
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

    const imageUrl = Doctor;
    const nextCard = () => {
      if (currentCardIndex < cards.length - 1) {
        setCurrentCardIndex(currentCardIndex + 1);
      }
    };
    const prevCard = () => {
      if (currentCardIndex > 0) {
        setCurrentCardIndex(currentCardIndex - 1);
      }
    };
    
  
    
  return (
    <div>
      <h1><b>Top Booked Diagnostic Tests</b></h1><br></br>
    <div className="lab-service-container">
      <img src={"https://www.dengeilac.com.tr/public/detay_resimler/banner-kurumsal.jpg"} alt="Laboratory" className="lab-image" />
      
      <section>
<div className="containe">
  
  <div className="cards">
    {
     cards.slice(currentCardIndex, currentCardIndex + 5).map((card, i) => (
    <div key={i} className="card">
      <h3>{card.title}</h3><br></br><br></br>
      <p>{card.text}</p><br></br>
      <p><b>{card.report}</b></p><br></br>
      <h2>{card.rupee}</h2><br></br><br></br>
      <Link to="/login">
                    <button onClick={() => toggleCardSelection(card)}>
                      {selectedCards.find((c) => c.title === card.title) ? 'Remove' : 'Book test'}
                    </button>
                  </Link>
      </div>
      ))
    }
  </div>
</div>
 </section>
    </div>
    </div>

    
    
  );
}

export default LaboratoryService;