import React, { useState } from 'react';
import './BookingCard.css';
import placeholderImage from '../assets/placeholder';

const BookingCard = ({ service, image, provider, price, onBookNow }) => {
  const [imgSrc, setImgSrc] = useState(image); // Initialize with the provided image URL
  
  const handleImageError = () => {
    setImgSrc(placeholderImage); // Fallback to placeholder image on error
  };

  return (
    <div className="booking-card"> 
      <div className="booking-card-image">
        <img 
          src={imgSrc} 
          alt={service} 
          onError={handleImageError}
        /> // Handle image loading error
      </div>
      {/* // Display service details */}
      <div className="booking-card-content">
        <h2 className="booking-card-title">{service}</h2>
        <p className="booking-card-provider">Provider: {provider}</p>
        <p className="booking-card-price">Rs.{price.toFixed(2)}</p>
        {/* // Button to book the service */}
        <button 
          className="booking-card-button"
          onClick={onBookNow}
          aria-label={`Book Rs.{service} now`}
        >
          Book Now
        </button>
      </div>
    </div>
  );
};

export default BookingCard;