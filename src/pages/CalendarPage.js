import React, { useEffect, useState } from 'react';
import './CalendarPage.css';

function CalendarPage() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    fetch('/api/Stateful1/triggers/When_a_HTTP_request_is_received/invoke?api-version=2022-05-01')
      .then(response => response.json())
      .then(data => setEvents(data.value))
      .catch(error => console.error('Error fetching calendar events:', error));
  }, []);

  return (
    <div className="calendar-page">
      <h1>Calendar Events</h1>
      <div className="events-container">
        {events.map((event, index) => (
          <div key={index} className="event">
            <h2>{event.subject}</h2>
            <p><strong>Start:</strong> {new Date(event.startWithTimeZone).toLocaleString()}</p>
            <p><strong>End:</strong> {new Date(event.endWithTimeZone).toLocaleString()}</p>
            <p><strong>Location:</strong> {event.location}</p>
            <a href={event.webLink} target="_blank" rel="noopener noreferrer">View Event</a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CalendarPage;
