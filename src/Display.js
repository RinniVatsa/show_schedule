import React, { useEffect, useState } from 'react';
import BookingForm from './BookingForm';

// Component to display list of shows
function ShowList(props) {
  const { shows, onShowClick } = props;

  return (
    <div>
      <h1>TV Shows</h1>
      <ul>
        {shows.map(show => (
          <li key={show.id}>
            <button onClick={() => onShowClick(show.id)}>
              {show.name}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

// Component to display show summary
function ShowSummary(props) {
//   const { show } = props;

//   return (
//     <div>
//       <h1>{show.name}</h1>
//       <img src={show.image.medium} alt={show.name} />
//       <p>{show.summary}</p>
//       <button onClick={()=> BookingForm(show.id)}>Book Movie Ticket</button>
//     </div>
//   );

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

export { ShowList, ShowSummary };