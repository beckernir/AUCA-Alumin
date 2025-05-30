import { useState } from 'react';
import '../styles/Event.css';

const eventData = [
  {
    id: 1,
    title: "AUCA Alumni Networking Event",
    date: "June 15, 2025",
    location: "AUCA Campus, Bishkek",
    description: "Join us for an exciting evening of networking with fellow alumni. Reconnect, share experiences, and build new professional relationships.",
    image: "https://via.placeholder.com/800x400?text=Event+Image",  // Placeholder image
    link: "https://www.aucalumni.com/events/1",
  },
  {
    id: 2,
    title: "AUCA Career Development Webinar",
    date: "July 5, 2025",
    location: "Online",
    description: "Attend this webinar to gain insights into career development, resume building, and job-search strategies from top alumni.",
    image: "https://via.placeholder.com/800x400?text=Webinar+Image",  // Placeholder image
    link: "https://www.aucalumni.com/events/2",
  },
  // Add more events as needed...
];

const Events = () => {
  return (
    <div className="event-container">
      <h1 className="event-title">Upcoming Alumni Events</h1>
      <p className="event-subtitle">Stay connected and engaged with our AUCA alumni network.</p>

      <div className="event-list">
        {eventData.map(event => (
          <div key={event.id} className="event-card">
            <img src={event.image} alt={event.title} className="event-image" />
            <div className="event-details">
              <h3 className="event-card-title">{event.title}</h3>
              <p className="event-card-date">{event.date}</p>
              <p className="event-card-location">{event.location}</p>
              <p className="event-card-description">{event.description}</p>
              <a href={event.link} target="_blank" rel="noopener noreferrer" className="event-link">
                Learn More
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Events;
