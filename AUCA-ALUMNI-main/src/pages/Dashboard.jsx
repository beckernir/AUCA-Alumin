import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  Calendar,
  Users,
  Bell,
  Award,
  Briefcase,
  Heart,
  Globe,
  BookOpen,
} from 'lucide-react';
import '../styles/Dashboard.css';

// Mock data for dashboard
const upcomingEvents = [
  { id: 1, title: 'Class of 2020 Reunion', date: '2025-06-15', location: 'AUCA Campus' },
  { id: 2, title: 'Alumni Networking Night', date: '2025-05-20', location: 'Hyatt Regency Bishkek' },
  { id: 3, title: 'Career Development Workshop', date: '2025-05-25', location: 'Online' },
];

const recentNews = [
  { id: 1, title: 'AUCA Launches New MBA Program', date: '2025-05-02', category: 'Academic' },
  { id: 2, title: 'Alumni Association Annual Report 2024', date: '2025-04-28', category: 'Association' },
  { id: 3, title: 'Class of 2010 Donation Funds New Lab', date: '2025-04-15', category: 'Fundraising' },
];

const featuredAlumni = [
  { id: 1, name: 'Sarah Johnson', class: '2012', role: 'CEO at Tech Innovators', img: 'https://i.pravatar.cc/150?img=1' },
  { id: 2, name: 'David Chen', class: '2008', role: 'UN Human Rights Officer', img: 'https://i.pravatar.cc/150?img=2' },
  { id: 3, name: 'Aisha Karimova', class: '2015', role: 'Award-winning Journalist', img: 'https://i.pravatar.cc/150?img=3' },
];

const jobPostings = [
  { id: 1, title: 'Marketing Manager', company: 'Global Solutions', location: 'Bishkek', posted: '2025-05-01' },
  { id: 2, title: 'Software Developer', company: 'TechFlow Inc.', location: 'Remote', posted: '2025-04-29' },
  { id: 3, title: 'Financial Analyst', company: 'Central Bank', location: 'Almaty', posted: '2025-04-28' },
];

const Dashboard = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="dashboard-loading">
        <div className="dashboard-spinner"></div>
      </div>
    );
  }

  return (
    <div className="dashboard-container">
      <h1 className="dashboard-heading">Welcome to AUCA Alumni Network</h1>

      {/* Stats */}
      <div className="dashboard-stats">
        <div className="dashboard-stat-card bg-blue">
          <Users size={24} className="icon" />
          <div>
            <p className="label">Alumni Members</p>
            <p className="value">5,280</p>
          </div>
        </div>
        <div className="dashboard-stat-card bg-green">
          <Calendar size={24} className="icon" />
          <div>
            <p className="label">Events This Month</p>
            <p className="value">8</p>
          </div>
        </div>
        <div className="dashboard-stat-card bg-purple">
          <Award size={24} className="icon" />
          <div>
            <p className="label">Active Mentorships</p>
            <p className="value">124</p>
          </div>
        </div>
        <div className="dashboard-stat-card bg-red">
          <Heart size={24} className="icon" />
          <div>
            <p className="label">Donations (2025)</p>
            <p className="value">$45,230</p>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="dashboard-grid">
        {/* Left Column */}
        <div className="dashboard-main">
          {/* Events */}
          <section className="dashboard-card">
            <header className="card-header">
              <h2><Calendar size={20} /> Upcoming Events</h2>
              <Link to="/events">View All</Link>
            </header>
            <div className="card-body">
              {upcomingEvents.map((e) => (
                <div key={e.id} className="event-item">
                  <div>
                    <h3>{e.title}</h3>
                    <p>{e.location}</p>
                  </div>
                  <span>{new Date(e.date).toLocaleDateString()}</span>
                  <div className="event-actions">
                    <button className="btn-primary">RSVP</button>
                    <button className="btn-secondary">Details</button>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* News */}
          <section className="dashboard-card">
            <header className="card-header">
              <h2><Bell size={20} /> Latest News & Announcements</h2>
              <Link to="/news">View All</Link>
            </header>
            <div className="card-body">
              {recentNews.map((n) => (
                <div key={n.id} className="news-item">
                  <div className="news-header">
                    <h3>{n.title}</h3>
                    <span>{n.category}</span>
                  </div>
                  <p>{new Date(n.date).toLocaleDateString()}</p>
                  <Link to={`/news/${n.id}`}>Read more</Link>
                </div>
              ))}
            </div>
          </section>

          {/* Jobs */}
          <section className="dashboard-card">
            <header className="card-header">
              <h2><Briefcase size={20} /> Recent Job Opportunities</h2>
              <Link to="/jobs">View All</Link>
            </header>
            <div className="card-body">
              {jobPostings.map((job) => (
                <div key={job.id} className="job-item">
                  <div>
                    <h3>{job.title}</h3>
                    <p>{job.company} • {job.location}</p>
                  </div>
                  <span>{new Date(job.posted).toLocaleDateString()}</span>
                  <Link to={`/jobs/${job.id}`}>View Details</Link>
                </div>
              ))}
            </div>
          </section>
        </div>

        {/* Right Column */}
        <div className="dashboard-side">
          {/* Alumni */}
          <section className="dashboard-card">
            <header className="card-header">
              <h2><Award size={20} /> Featured Alumni</h2>
            </header>
            <div className="card-body">
              {featuredAlumni.map((a) => (
                <div key={a.id} className="alumni-item">
                  <img src={a.img} alt={a.name} />
                  <div>
                    <h3>{a.name}</h3>
                    <p>Class of {a.class}</p>
                    <small>{a.role}</small>
                  </div>
                </div>
              ))}
              <Link to="/directory" className="block-link">Explore Alumni Directory</Link>
            </div>
          </section>

          {/* Quick Links */}
          <section className="dashboard-card">
            <header className="card-header">
              <h2>Quick Links</h2>
            </header>
            <div className="quick-links">
              <Link to="/mentorship"><Award size={24} /> Mentorship</Link>
              <Link to="/donate"><Heart size={24} /> Donate</Link>
              <Link to="/chapters"><Globe size={24} /> Chapters</Link>
              <Link to="/stories"><BookOpen size={24} /> Stories</Link>
            </div>
          </section>

          {/* Campaigns */}
          <section className="dashboard-card">
            <header className="card-header">
              <h2><Heart size={20} /> Active Campaigns</h2>
            </header>
            <div className="card-body">
              <div className="campaign">
                <h3>Scholarship Fund <span>70%</span></h3>
                <div className="progress-bar">
                  <div style={{ width: '70%' }}></div>
                </div>
                <small>$35,000 of $50,000 goal</small>
              </div>
              <div className="campaign">
                <h3>Library Renovation <span>45%</span></h3>
                <div className="progress-bar">
                  <div style={{ width: '45%' }}></div>
                </div>
                <small>$22,500 of $50,000 goal</small>
              </div>
              <Link to="/donate" className="donate-btn">Support AUCA</Link>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
