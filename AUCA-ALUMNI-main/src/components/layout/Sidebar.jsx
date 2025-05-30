import '../..//styles/Sidebar.css';
import { NavLink } from 'react-router-dom';
import {
  Home, Users, Calendar, FileText, Briefcase,
  MessageSquare, Heart, BookOpen, Globe, Award,
  BarChart4, DollarSign, X
} from 'lucide-react';

const Sidebar = ({ isOpen, toggleSidebar, isLoggedIn }) => {
  const navItems = [
    { name: 'Dashboard', path: '/dashboard', icon: <Home size={20} /> },
    { name: 'Alumni Directory', path: '/directory', icon: <Users size={20} /> },
    { name: 'Events & Reunions', path: '/events', icon: <Calendar size={20} /> },
    { name: 'News & Announcements', path: '/news', icon: <FileText size={20} /> },
    { name: 'Mentorship Program', path: '/mentorship', icon: <Award size={20} /> },
    { name: 'Job Board', path: '/jobs', icon: <Briefcase size={20} /> },
    { name: 'Discussion Forums', path: '/forums', icon: <MessageSquare size={20} /> },
    { name: 'Donation & Fundraising', path: '/donate', icon: <DollarSign size={20} /> },
    { name: 'Alumni Stories', path: '/stories', icon: <BookOpen size={20} /> },
    { name: 'Global Chapters', path: '/chapters', icon: <Globe size={20} /> },
    { name: 'Learning Center', path: '/learning', icon: <BarChart4 size={20} /> },
  ];

  return (
    <>
      {isOpen && <div className="sidebar-backdrop" onClick={toggleSidebar}></div>}

      <aside className={`sidebar ${isOpen ? 'open' : 'closed'}`}>
        <div className="sidebar-header">
          <div className="sidebar-title">AUCA Alumni</div>
          <button onClick={toggleSidebar} className="close-btn">
            <X size={20} />
          </button>
        </div>

        {isLoggedIn && (
          <div className="sidebar-user">
            <div className="user-avatar">
              <Users size={20} />
            </div>
            <div>
              <div className="user-name">John Doe</div>
              <div className="user-class">Class of 2020</div>
            </div>
          </div>
        )}

        <nav className="sidebar-nav">
          <ul>
            {navItems.map((item) => (
              <li key={item.path}>
                <NavLink
                  to={item.path}
                  className={({ isActive }) =>
                    `sidebar-link ${isActive ? 'active' : ''}`
                  }
                >
                  <span className="icon">{item.icon}</span>
                  {item.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        <div className="sidebar-footer">
          <NavLink to="/donate" className="support-link">
            <Heart size={20} className="icon" />
            Support AUCA
          </NavLink>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
