import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Linkedin, Mail } from 'lucide-react';
import '../..//styles/Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-grid">
          <div>
            <h3 className="footer-title">AUCA Alumni Association</h3>
            <p className="footer-description">
              Connecting graduates, fostering relationships, and supporting the continued growth of our university community.
            </p>
            <div className="footer-icons">
              <a href="#" className="footer-icon-link">
                <Facebook size={20} />
              </a>
              <a href="#" className="footer-icon-link">
                <Twitter size={20} />
              </a>
              <a href="#" className="footer-icon-link">
                <Instagram size={20} />
              </a>
              <a href="#" className="footer-icon-link">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="footer-title">Quick Links</h3>
            <ul className="footer-links">
              <li>
                <Link to="/directory" className="footer-link">Alumni Directory</Link>
              </li>
              <li>
                <Link to="/events" className="footer-link">Events Calendar</Link>
              </li>
              <li>
                <Link to="/jobs" className="footer-link">Job Opportunities</Link>
              </li>
              <li>
                <Link to="/donate" className="footer-link">Support AUCA</Link>
              </li>
              <li>
                <Link to="/chapters" className="footer-link">Global Chapters</Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="footer-title">Contact Us</h3>
            <p className="footer-contact">
              Alumni Relations Office<br />
              AUCA, 7/6 Aaly Tokombaev Street<br />
              Auca, Gishushu, 204 Room<br />
              Phone: +996 312 915 000<br />
            </p>
            <p className="footer-contact-email">
              <Mail size={16} className="footer-mail-icon" />
              <a href="mailto:alumni@auca.kg" className="footer-email-link">alumni@auca.kg</a>
            </p>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} AUCA Alumni Association. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
