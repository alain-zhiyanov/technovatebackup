import React, { useState } from 'react';
import './SubscribePage.css';

function SubscribePage() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch('/api/Stateful2/triggers/When_a_HTTP_request_is_received/invoke?api-version=2022-05-01', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(email)
    })
      .then(response => response.json())
      .then(data => setMessage(data.message))
      .catch(error => console.error('Error subscribing:', error));
  };

  return (
    <div className="subscribe-page">
      <h1>Subscribe to our Newsletter</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">Email Address:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <button type="submit">Subscribe</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
}

export default SubscribePage;
