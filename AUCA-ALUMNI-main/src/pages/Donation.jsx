// Donate.jsx
import React from "react";
import "../styles/Donate.css";

const Donation = () => {
  return (
    <div className="donate-page">
      <div className="donate-header">
        <h1>Support AUCA Alumni Programs</h1>
        <p>Your generosity empowers alumni engagement and future generations.</p>
      </div>

      <div className="donate-section">
        <div className="donate-info">
          <h2>Why Donate?</h2>
          <p>
            Donations help us organize mentorship programs, alumni reunions,
            professional workshops, and support current students through scholarships.
          </p>

          <h2>How Your Donation Helps</h2>
          <ul>
            <li>🎓 Alumni scholarships & grants</li>
            <li>📚 Career guidance & mentorship</li>
            <li>🤝 Networking events and reunions</li>
            <li>🏫 Campus development & community outreach</li>
          </ul>
        </div>

        <div className="donate-form">
          <h2>Make a Donation</h2>
          <form>
            <label>Full Name</label>
            <input type="text" placeholder="Your full name" required />

            <label>Email</label>
            <input type="email" placeholder="Your email address" required />

            <label>Amount (USD)</label>
            <input type="number" placeholder="e.g. 50" min="1" required />

            <label>Message (optional)</label>
            <textarea placeholder="Leave a message..."></textarea>

            <button type="submit">Donate Now</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Donation;
