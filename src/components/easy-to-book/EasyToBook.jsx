
import React from 'react';
import './EasyToBook.css';
import bookingImage from '/images/booking.jpg'; 

const EasyToBook = () => {
  return (
    <section className="easy-book-section">
      <div className="easy-book-container">

        <div className="easy-book-text">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Easy To Book</h2>
          <p>
            Booking a ride with Azad Limo NCC is simple and hassle-free. Whether you're headed to the airport, planning a private tour, or need a ride to an event — we’ve got you covered.
          </p>
          <a 
            href="https://wa.me/+393275933303" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="book-now-btn"
          >
            Book Now
          </a>
        </div>

        <div className="easy-book-image">
          <img src={bookingImage} alt="Booking Illustration" />
        </div>

      </div>
    </section>
  );
};

export default EasyToBook;
