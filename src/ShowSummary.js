import React, { useState } from 'react';
import BookingForm from './BookingForm';

function ShowSummary(props) {
  const { show } = props;
  const [showBookingForm, setShowBookingForm] = useState(false);

  function handleBookButtonClick() {
    setShowBookingForm(true);
  }

  function handleCloseBookingForm() {
    setShowBookingForm(false);
  }

  return (
    <div>
      <h1>{show.name}</h1>
      <img src={show.image.medium} alt={show.name} />
      <p>{show.summary}</p>
      <button onClick={handleBookButtonClick}>Book Movie Ticket</button>
      {showBookingForm && (
        <BookingForm show={show} onClose={handleCloseBookingForm} />
      )}
    </div>
  );
}

export default ShowSummary;
