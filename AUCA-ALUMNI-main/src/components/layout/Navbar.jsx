import { Link } from 'react-router-dom';
import { Menu, Bell, User, LogOut } from 'lucide-react';
import { useState } from 'react';
import '../../styles/Navbar.css'; // Import the CSS file

const Navbar = ({ toggleSidebar, isLoggedIn, handleLogout }) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <header className="navbar">
      <div className="navbar-container">
        <div className="navbar-left">
          <button onClick={toggleSidebar} className="menu-button">
            <Menu size={24} />
          </button>
          <Link to="/" className="brand">AUCA Alumni</Link>
          
        </div>

        <div className="navbar-search">
          <input
            type="text"
            placeholder="Search alumni, events, news..."
            className="search-input"
          />
        </div>

        <div className="navbar-right">
          {isLoggedIn ? (
            <>
              <button className="notification-button">
                <Bell size={20} />
                <span className="notification-badge">3</span>
              </button>
              <div className="profile-dropdown">
                <button
                  className="profile-button"
                  onClick={() => setDropdownOpen(!dropdownOpen)}
                >
                  <User size={20} />
                </button>
                {dropdownOpen && (
                  <div className="dropdown-menu">

                    <Link to="/profile">My Profile</Link>
                    <Link to="/settings">Settings</Link>
                    <button onClick={handleLogout} className="logout-button">
                      <LogOut size={18} /> Logout
                    </button>
                  </div>
                )}
              </div>
            </>
          ) : (
            <>
            <Link to="/" className="home-link">Home</Link>
              <Link to="/login" className="login-button">Login</Link>
              <Link to="/register" className="register-button">Register</Link>
            </>
          )}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
