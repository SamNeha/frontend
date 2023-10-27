import React from "react";
import InformationCard from "./InformationCard";
import { faHeartPulse, faTruckMedical, faBookMedical} from "@fortawesome/free-solid-svg-icons";
import "../Styles/Info.css";

function Info() {
  return (
    <div className="info-section" id="services">
      <div className="info-title-content">
        <h3 className="info-title">
          <span>What We Do</span>
        </h3>
        <p className="info-description">
          We bring healthcare to your convenience, offering a comprehensive
          range of on-demand medical services tailored to your needs. Our
          platform allows you to connect with experienced doctors who
          provide expert medical advice, issue prescriptions, and offer
          quick refills whenever you require them.
        </p>
      </div>

      <div className="info-cards-content">
        <InformationCard
          title="Emergency care"
          description="Our Emergency Care service is designed to be your reliable support
            in critical situations. Whether it's a sudden illness, injury, or
            any medical concern that requires immediate attention, our team of
            dedicated healthcare professionals is available 24/7 to provide
            prompt and efficient care."
          icon={faTruckMedical}
        />

        <InformationCard
          title="Laboratory and diagnostic care"
          description="Our team of experienced lab techs and medical experts perform limited 
          diagnostic testing, reference testing, and disease surveillance. They also
          provide emergency response support, perform applied research, and provide
          training for laboratory personnel."
          icon={faHeartPulse}
        />

        <InformationCard
          title="Patient portal"
          description="You can access all of your personal health information from all of your
          providers in one place. Patients can communicate with their healthcare providers 
          through secure messaging within the portal. Patient portals prioritize the security 
          and privacy of patient data, adhering to healthcare regulations."
          icon={faBookMedical}
        />
      </div>
    </div>
  );
}

export default Info;
