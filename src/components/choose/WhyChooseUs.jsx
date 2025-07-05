
import React from 'react';
import './WhyChooseUs.css';
import { FaCarSide, FaBusAlt, FaBuilding, FaUserTie } from 'react-icons/fa';

const cards = [
  {
    title: "Easy Rental",
    icon: <FaCarSide size={40} />,
    text: "Flexible rental options to suit every traveler’s need.",
  },
  {
    title: "Regular Transport",
    icon: <FaBusAlt size={40} />,
    text: "Consistent and reliable service for your daily needs.",
  },
  {
    title: "Corporate Transport",
    icon: <FaBuilding size={40} />,
    text: "Professional transport solutions tailored for businesses.",
  },
  {
    title: "Best Drivers",
    icon: <FaUserTie size={40} />,
    text: "Our skilled and courteous drivers ensure a safe journey.",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="why-choose-section">
      <div className="why-choose-container">
        <h2 className="text-4xl font-bold text-gray-800 mb-4">Why Choose Ahammed Luxury Taxi?</h2>
        <p>
          We are committed to providing top-tier transportation services with the highest standards of safety, professionalism, and comfort.
        </p>

        <div className="card-grid">
          {cards.map((card, idx) => (
            <div className="flip-card" key={idx}>
              <div className="flip-card-inner">
                <div className="flip-card-front">
                  {card.icon}
                  <h3>{card.title}</h3>
                </div>
                <div className="flip-card-back">
                  <p>{card.text}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
