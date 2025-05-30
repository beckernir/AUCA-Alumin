// News.jsx
import React from "react";
import "../styles/News.css";

export default function News() {
  const newsItems = [
    {
      title: "AUCA Alumni Summit 2025 Announced",
      date: "May 5, 2025",
      summary: "The annual AUCA Alumni Summit is scheduled for August 15, 2025. This year’s summit will feature keynote speeches, networking opportunities, and alumni awards.",
      image: "/images/summit.jpg"
    },
    {
      title: "AUCA Graduate Launches Tech Startup",
      date: "April 22, 2025",
      summary: "Alumni Jane Doe recently launched a Rwandan-based health-tech startup focused on remote diagnostics. The startup has already secured international funding.",
      image: "/images/startup.jpg"
    },
    {
      title: "New AUCA Alumni Chapters Formed Globally",
      date: "March 30, 2025",
      summary: "AUCA has launched new alumni chapters in the US, South Africa, and Germany to foster global community and collaboration.",
      image: "/images/chapters.jpg"
    }
  ];

  return (
    <div className="news-section">
      <h1 className="news-title">Latest Alumni News</h1>
      <div className="news-grid">
        {newsItems.map((item, index) => (
          <div key={index} className="news-card">
            <img src={item.image} alt={item.title} className="news-image" />
            <div className="news-content">
              <h2>{item.title}</h2>
              <p className="news-date">{item.date}</p>
              <p className="news-summary">{item.summary}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
} 

/* Make sure to place the corresponding images in the public/images directory */