import React, { useState, useEffect } from 'react';
import '../styles/Profile.css';
import { FaLinkedin, FaGithub, FaTwitter, FaSun, FaMoon } from 'react-icons/fa';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Profile() {
  const [editing, setEditing] = useState(false);
  const [theme, setTheme] = useState('light');
  const [profile, setProfile] = useState({
    name: "Irakoze",
    title: "Software Engineer",
    email: "jane.doe@example.com",
    phone: "+250 788 123 456",
    location: "Kigali, Rwanda",
    company: "RagaTech250",
    position: "Full Stack Developer",
    linkedin: "https://linkedin.com/in/janedoe",
    university: "AUCA",
    graduation: "2020",
    degree: "BSc in Computer Science",
    bio: "Passionate developer with a love for building impactful solutions. Open to mentorship, networking, and opportunities to give back to AUCA.",
    skills: "React, Node.js, Docker, Flutter, Community Building"
  });
  const [avatar, setAvatar] = useState('profile.jpg');

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  const handleEdit = () => {
    if (editing) {
      toast.success("Profile updated successfully!");
    }
    setEditing(!editing);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfile(prev => ({ ...prev, [name]: value }));
  };

  const handleThemeToggle = () => {
    setTheme(prev => (prev === 'light' ? 'dark' : 'light'));
  };

  const handleAvatarChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setAvatar(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="profile-container">
      <ToastContainer />
      <div className="theme-toggle" onClick={handleThemeToggle}>
        {theme === 'light' ? <FaMoon /> : <FaSun />}
      </div>

      <div className="profile-card">
        <div className="profile-header">
          <label htmlFor="avatar-upload">
            <img src={avatar} alt="Profile" className="profile-avatar" />
          </label>
          {editing && (
            <input
              type="file"
              id="avatar-upload"
              accept="image/*"
              onChange={handleAvatarChange}
              style={{ display: 'none' }}
            />
          )}
          <div className="profile-basic-info">
            {editing ? (
              <>
                <input name="name" value={profile.name} onChange={handleChange} />
                <input name="title" value={profile.title} onChange={handleChange} />
              </>
            ) : (
              <>
                <h2>{profile.name}</h2>
                <p>{profile.title}</p>
                <p>Class of {profile.graduation}, Computer Science</p>
              </>
            )}
          </div>
        </div>

        <div className="profile-section">
          <h3>Contact Info</h3>
          {editing ? (
            <>
              <input name="email" value={profile.email} onChange={handleChange} />
              <input name="phone" value={profile.phone} onChange={handleChange} />
              <input name="location" value={profile.location} onChange={handleChange} />
            </>
          ) : (
            <>
              <p><strong>Email:</strong> {profile.email}</p>
              <p><strong>Phone:</strong> {profile.phone}</p>
              <p><strong>Location:</strong> {profile.location}</p>
            </>
          )}
        </div>

        <div className="profile-section">
          <h3>Career Info</h3>
          {editing ? (
            <>
              <input name="company" value={profile.company} onChange={handleChange} />
              <input name="position" value={profile.position} onChange={handleChange} />
              <input name="linkedin" value={profile.linkedin} onChange={handleChange} />
            </>
          ) : (
            <>
              <p><strong>Company:</strong> {profile.company}</p>
              <p><strong>Position:</strong> {profile.position}</p>
              <p><strong>LinkedIn:</strong> <a href={profile.linkedin} target="_blank" rel="noopener noreferrer">{profile.linkedin}</a></p>
              <div className="social-icons">
                <a href={profile.linkedin}><FaLinkedin /></a>
                <a href="#"><FaGithub /></a>
                <a href="#"><FaTwitter /></a>
              </div>
            </>
          )}
        </div>

        <div className="profile-section">
          <h3>Education</h3>
          {editing ? (
            <>
              <input name="degree" value={profile.degree} onChange={handleChange} />
              <input name="graduation" value={profile.graduation} onChange={handleChange} />
              <input name="university" value={profile.university} onChange={handleChange} />
            </>
          ) : (
            <>
              <p><strong>Degree:</strong> {profile.degree}</p>
              <p><strong>Graduation:</strong> {profile.graduation}</p>
              <p><strong>University:</strong> {profile.university}</p>
            </>
          )}
        </div>

        <div className="profile-section">
          <h3>Bio</h3>
          {editing ? (
            <textarea name="bio" value={profile.bio} onChange={handleChange} />
          ) : (
            <p>{profile.bio}</p>
          )}
        </div>

        <div className="profile-section">
          <h3>Skills & Interests</h3>
          {editing ? (
            <input name="skills" value={profile.skills} onChange={handleChange} />
          ) : (
            <p>{profile.skills}</p>
          )}
        </div>

        <div className="profile-section">
          <h3>Account Activity</h3>
          <p>Last Login: April 28, 2025</p>
          <p>IP Address: 196.15.67.102</p>
        </div>

        <div className="profile-actions">
          <button className="edit-profile-btn" onClick={handleEdit}>
            {editing ? 'Save Changes' : 'Edit Profile'}
          </button>
          <button className="delete-profile-btn">Delete Account</button>
        </div>
      </div>
    </div>
  );
}
