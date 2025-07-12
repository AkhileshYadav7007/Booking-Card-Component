// BookingCard Component
const BookingCard = ({ service, image, provider, price, onBookNow }) => {
  const [imgSrc, setImgSrc] = React.useState(image);
  
  // Base64 encoded placeholder image for fallback
  const placeholderImage = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8cmVjdCB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCIgZmlsbD0iI2YwZjBmMCIgLz4KICA8dGV4dCB4PSIxNTAiIHk9IjE1MCIgZm9udC1mYW1pbHk9IkFyaWFsIiBmb250LXNpemU9IjE4IiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmaWxsPSIjOTk5Ij5JbWFnZSBQbGFjZWhvbGRlcjwvdGV4dD4KPC9zdmc+';
  
  const handleImageError = () => {
    setImgSrc(placeholderImage);
  };
// Render the booking card component
  return (
    <div className="booking-card">
      <div className="booking-card-image">
        <img 
          src={imgSrc} 
          alt={service} 
          onError={handleImageError}
        />
      </div>
      {/* // Content section of the booking card */}
      <div className="booking-card-content">
        <h2 className="booking-card-title">{service}</h2>
        <p className="booking-card-provider">Provider: {provider}</p>
        <p className="booking-card-price">${price.toFixed(2)}</p>
        {/* // Button for booking */}
        <button 
          className="booking-card-button"
          onClick={onBookNow}
          aria-label={`Book ${service} now`}
        >
          Book Now
        </button>
      </div>
    </div>
  );
};

// App Component
const App = () => {
  // Sample data for booking cards
  const bookingServices = [
    {
      id: 1,
      service: "Spa Treatment",
      image: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      provider: "Relaxation Spa",
      price: 1299
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
      price: 1299.99
    }
  ];
// Function to handle booking action
  const handleBookNow = (service) => {
    alert(`Booking ${service.service} with ${service.provider} for $${service.price}`);
  };

  return (
    <div className="booking-container">
      {bookingServices.map(service => (
        <BookingCard
          key={service.id}
          service={service.service}
          image={service.image}
          provider={service.provider}
          price={service.price}
          onBookNow={() => handleBookNow(service)}
        />
      ))}
    </div>
  );
};

// Render the App component to the DOM
ReactDOM.render(<App />, document.querySelector('.booking-container'));