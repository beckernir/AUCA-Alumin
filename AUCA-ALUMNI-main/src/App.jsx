import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';

// Layout components
import Navbar from './components/layout/Navbar';
import Sidebar from './components/layout/Sidebar';
import Footer from './components/layout/Footer';

// Page components
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import Directory from './pages/Directory';
import Events from './pages/Events';
import News from './pages/News';
import Mentorship from './pages/Mentorship';
import JobBoard from './pages/JobBoard';
import Forums from './pages/Forums';
import Donation from './pages/Donation';
import AlumniStories from './pages/AlumniStories';
import GlobalChapters from './pages/GlobalChapters';
import Profile from './pages/Profile';
import LearningCenter from './pages/LearningCenter';
import Login from './pages/Login';
import Register from './pages/Register';
import NotFound from './pages/NotFound';

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <Router>
      <div className="flex h-screen bg-gray-100">
        <Toaster position="top-right" />
        <Sidebar isOpen={sidebarOpen} toggleSidebar={toggleSidebar} isLoggedIn={isLoggedIn} />
        
        <div className="flex flex-col flex-1 overflow-hidden">
          <Navbar toggleSidebar={toggleSidebar} isLoggedIn={isLoggedIn} handleLogout={handleLogout} />
          
          <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-100 p-4">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/directory" element={<Directory />} />
              <Route path="/events" element={<Events />} />
              <Route path="/news" element={<News />} />
              <Route path="/mentorship" element={<Mentorship />} />
              <Route path="/jobs" element={<JobBoard />} />
              <Route path="/forums" element={<Forums />} />
              <Route path="/donate" element={<Donation />} />
              <Route path="/stories" element={<AlumniStories />} />
              <Route path="/chapters" element={<GlobalChapters />} />
              <Route path="/profile" element={<Profile isLoggedIn={isLoggedIn} />} />
              <Route path="/learning" element={<LearningCenter />} />
              <Route path="/login" element={<Login handleLogin={handleLogin} />} />
              <Route path="/register" element={<Register />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
          
          <Footer />
        </div>
      </div>
    </Router>
  );
}

export default App;