import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';

// Layout
import MainLayout from './layouts/MainLayout';

// Public Pages
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import AcademicsPage from './pages/AcademicsPage';
import FacultyPage from './pages/FacultyPage';
import AdmissionsPage from './pages/AdmissionsPage';
import CampusLifePage from './pages/CampusLifePage';
import PlacementsPage from './pages/PlacementsPage';
import GalleryPage from './pages/GalleryPage';
import NewsEventsPage from './pages/NewsEventsPage';
import ContactPage from './pages/ContactPage';

// Student Pages
import StudentLogin from './pages/student/StudentLogin';
import StudentDashboard from './pages/student/StudentDashboard';

// Faculty Pages
import FacultyLogin from './pages/faculty/FacultyLogin';
import FacultyDashboard from './pages/faculty/FacultyDashboard';

// Admin Pages
import AdminLogin from './pages/admin/AdminLogin';
import AdminDashboard from './pages/admin/AdminDashboard';

// ScrollToTop Component
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }, [pathname]);

  return null;
};

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen bg-white">
        <Toaster position="top-right" />
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<MainLayout />}>
            <Route index element={<HomePage />} />
            <Route path="about" element={<AboutPage />} />
            <Route path="academics" element={<AcademicsPage />} />
            <Route path="faculty" element={<FacultyPage />} />
            <Route path="admissions" element={<AdmissionsPage />} />
            <Route path="campus-life" element={<CampusLifePage />} />
            <Route path="placements" element={<PlacementsPage />} />
            <Route path="gallery" element={<GalleryPage />} />
            <Route path="news-events" element={<NewsEventsPage />} />
            <Route path="contact" element={<ContactPage />} />
            
            {/* Student Routes */}
            <Route path="student/login" element={<StudentLogin />} />
            <Route path="student/dashboard" element={<StudentDashboard />} />
            
            {/* Faculty Routes */}
            <Route path="faculty/login" element={<FacultyLogin />} />
            <Route path="faculty/dashboard" element={<FacultyDashboard />} />
            
            {/* Admin Routes */}
            <Route path="admin/login" element={<AdminLogin />} />
            <Route path="admin/dashboard" element={<AdminDashboard />} />
          </Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;