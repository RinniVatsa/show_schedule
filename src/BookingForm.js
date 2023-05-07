import React, { useState } from 'react';

function BookingForm(props) {

const { show, onClose } = props;
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
   
    console.log({ show, name, email, phone });
    setSubmitted(true);
  }

  function handleReset() {
    setName('');
    setEmail('');
    setPhone('');
    setSubmitted(false);
    onClose();
  }

  if (submitted) {
    return (
      <div>
        <h1>Booking Submitted</h1>
        <p>Thank you for booking {show.name}, {name}!</p>
        <button onClick={handleReset}>OK</button>
      </div>
    );
  }

  return (
    <div>
      <h1>Book Ticket - {show.name}</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input
          id="name"
          type="text"
          value={name}
          onChange={event => setName(event.target.value)}
        />

        <label htmlFor="email">Email:</label>
        <input
          id="email"
          type="email"
          value={email}
          onChange={event => setEmail(event.target.value)}
        />

        <label htmlFor="phone">Phone:</label>
        <input
          id="phone"
          type="tel"
          value={phone}
          onChange={event => setPhone(event.target.value)}
        />

        <button type="submit">Submit</button>
        <button type="button" onClick={onClose}>
          Cancel
        </button>
      </form>
    </div>
  );

}

export default BookingForm;