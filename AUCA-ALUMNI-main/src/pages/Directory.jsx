import { useState } from 'react';
import { Search, Filter, MapPin, Mail, Phone, Briefcase, Calendar, ChevronDown, ChevronUp, Linkedin } from 'lucide-react';
import '../styles/Directory.css';

// Mock data for alumni
const alumniData = [
  // (mock data as you already provided)
];

const Directory = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filters, setFilters] = useState({
    class: '',
    major: '',
    country: '',
  });
  const [showFilters, setShowFilters] = useState(false);
  const [expandedProfile, setExpandedProfile] = useState(null);
  
  // Filter alumni based on search term and filters
  const filteredAlumni = alumniData.filter(alumni => {
    const matchesSearch = 
      alumni.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      alumni.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
      alumni.role.toLowerCase().includes(searchTerm.toLowerCase());
      
    const matchesClass = filters.class ? alumni.class === filters.class : true;
    const matchesMajor = filters.major ? alumni.major === filters.major : true;
    const matchesCountry = filters.country ? alumni.country === filters.country : true;
    
    return matchesSearch && matchesClass && matchesMajor && matchesCountry;
  });
  
  // Extract unique values for filter dropdowns
  const classes = [...new Set(alumniData.map(a => a.class))].sort((a, b) => b - a);
  const majors = [...new Set(alumniData.map(a => a.major))].sort();
  const countries = [...new Set(alumniData.map(a => a.country))].sort();
  
  const handleFilterChange = (field, value) => {
    setFilters(prev => ({
      ...prev,
      [field]: value
    }));
  };
  
  const clearFilters = () => {
    setFilters({
      class: '',
      major: '',
      country: '',
    });
    setSearchTerm('');
  };
  
  const toggleProfile = (id) => {
    setExpandedProfile(expandedProfile === id ? null : id);
  };

  return (
    <div className="directory-container">
      <div className="search-bar">
        <h1 className="title">Alumni Directory</h1>
        <p className="description">Connect with fellow AUCA graduates around the world</p>
        
        <div className="search-filter-container">
          <div className="search-box">
            <Search size={18} className="search-icon" />
            <input
              type="text"
              placeholder="Search by name, company, or role..."
              className="search-input"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          
          <button
            className="filter-button"
            onClick={() => setShowFilters(!showFilters)}
          >
            <Filter size={18} className="filter-icon" />
            {showFilters ? 'Hide Filters' : 'Show Filters'}
          </button>
        </div>
        
        {showFilters && (
          <div className="filters">
            <div className="filter-item">
              <label>Graduation Year</label>
              <select
                value={filters.class}
                onChange={(e) => handleFilterChange('class', e.target.value)}
              >
                <option value="">All Years</option>
                {classes.map(c => (
                  <option key={c} value={c}>{c}</option>
                ))}
              </select>
            </div>
            
            <div className="filter-item">
              <label>Major</label>
              <select
                value={filters.major}
                onChange={(e) => handleFilterChange('major', e.target.value)}
              >
                <option value="">All Majors</option>
                {majors.map(m => (
                  <option key={m} value={m}>{m}</option>
                ))}
              </select>
            </div>
            
            <div className="filter-item">
              <label>Country</label>
              <select
                value={filters.country}
                onChange={(e) => handleFilterChange('country', e.target.value)}
              >
                <option value="">All Countries</option>
                {countries.map(c => (
                  <option key={c} value={c}>{c}</option>
                ))}
              </select>
            </div>
            
            <button
              className="clear-filters"
              onClick={clearFilters}
            >
              Clear all filters
            </button>
          </div>
        )}
      </div>
      
      <div className="filtered-alumni-count">
        <p>{filteredAlumni.length} {filteredAlumni.length === 1 ? 'alumnus' : 'alumni'} found</p>
      </div>
      
      <div className="alumni-list">
        {filteredAlumni.length > 0 ? (
          filteredAlumni.map((alumni) => (
            <div key={alumni.id} className="alumni-card">
              <div 
                className="alumni-card-header"
                onClick={() => toggleProfile(alumni.id)}
              >
                <div className="alumni-info">
                  <img src={alumni.avatar} alt={alumni.name} className="alumni-avatar" />
                  <div>
                    <h3 className="alumni-name">{alumni.name}</h3>
                    <p className="alumni-role">{alumni.role} at {alumni.company}</p>
                    <div className="alumni-location">
                      <Calendar size={14} className="icon" />
                      <span>Class of {alumni.class}</span>
                      <MapPin size={14} className="icon" />
                      <span>{alumni.city}, {alumni.country}</span>
                    </div>
                  </div>
                </div>
                <div className="expand-icon">
                  {expandedProfile === alumni.id ? (
                    <ChevronUp size={20} className="icon" />
                  ) : (
                    <ChevronDown size={20} className="icon" />
                  )}
                </div>
              </div>
              
              {expandedProfile === alumni.id && (
                <div className="alumni-details">
                  <div className="details-grid">
                    <div>
                      <h4>About</h4>
                      <p>{alumni.bio}</p>
                      <h4>Education</h4>
                      <p>B.A. in {alumni.major}, Class of {alumni.class}</p>
                      <h4>Skills</h4>
                      <div className="skills">
                        {alumni.skills.map((skill, index) => (
                          <span key={index} className="skill">{skill}</span>
                        ))}
                      </div>
                    </div>
                    
                    <div>
                      <h4>Current Role</h4>
                      <div className="current-role">
                        <Briefcase size={18} className="icon" />
                        <div>
                          <p>{alumni.role}</p>
                          <p>{alumni.company}</p>
                        </div>
                      </div>
                      
                      <h4>Contact Information</h4>
                      <div className="contact-info">
                        <div className="contact-item">
                          <Mail size={18} className="icon" />
                          <a href={`mailto:${alumni.email}`}>{alumni.email}</a>
                        </div>
                        <div className="contact-item">
                          <Phone size={18} className="icon" />
                          <span>{alumni.phone}</span>
                        </div>
                        <div className="contact-item">
                          <Linkedin size={18} className="icon" />
                          <a href={`https://${alumni.linkedin}`} target="_blank" rel="noopener noreferrer">{alumni.linkedin}</a>
                        </div>
                      </div>
                      
                      <div className="buttons">
                        <button className="message-button">Send Message</button>
                        <button className="network-button">Add to Network</button>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))
        ) : (
          <div className="no-results">
            <p>No alumni found matching your search criteria.</p>
            <button className="clear-filters-again" onClick={clearFilters}>
              Clear filters and try again
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Directory;
