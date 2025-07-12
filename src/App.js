import React from 'react';
import './App.css';
import BookingCard from './components/BookingCard';

function App() {
  // Sample data for booking cards
  const bookingServices = [
    {
      id: 1,
      service: "Spa Treatment",
      image: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      provider: "Relaxation Spa",
      price: 1299.99
    },
    {
      id: 2,
      service: "Yoga Class",
      image: "https://images.unsplash.com/photo-1545205597-3d9d02c29597?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      provider: "Mindful Yoga Studio",
      price: 999.00
    },
    {
      id: 3,
      service: "Hotel Room",
      image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      provider: "Luxury Stays",
      price: 1499.99
    }
  ];
  // Function to handle booking action
  const handleBookNow = (service) => {
    alert(`Booking ${service.service} with ${service.provider} for Rs.{service.price}`);
  };
  // Render the app component
  return (
    <div className="App">
      <header className="App-header">
        <h1>Available Services</h1>
      </header>
      <div className="booking-container">
        {bookingServices.map(service => (
          <BookingCard
            key={service.id}
            service={service.service}
            image={service.image}
            provider={service.provider}
            price={service.price}
            onBookNow={() => handleBookNow(service)}
            // Pass the booking
          />
        ))}
      </div>
    </div>
  );
}

export default App;
