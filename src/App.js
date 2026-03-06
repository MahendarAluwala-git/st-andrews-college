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

// Login Pages
import StudentLogin from './pages/student/StudentLogin';
import FacultyLogin from './pages/faculty/FacultyLogin';
import AdminLogin from './pages/admin/AdminLogin';
import ParentLogin from './pages/ParentLogin';

// Student Portal Pages
import StudentDashboard from './pages/student/StudentDashboard';
import StudentProfile from './pages/student/StudentProfile';
import StudentAcademics from './pages/student/StudentAcademics';
import StudentAttendance from './pages/student/StudentAttendance';
import StudentExams from './pages/student/StudentExams';
import StudentFees from './pages/student/StudentFees';
import StudentNotifications from './pages/student/StudentNotifications';

// Faculty Portal Pages
import FacultyDashboard from './pages/faculty/FacultyDashboard';
import AttendanceMarking from './pages/faculty/AttendanceMarking';
import AssignmentUpload from './pages/faculty/AssignmentUpload';
import MarksEntry from './pages/faculty/MarksEntry';
import StudentList from './pages/faculty/StudentList';
import FacultyProfile from './pages/faculty/FacultyProfile';

// Admin Panel Pages
import AdminDashboard from './pages/admin/AdminDashboard';
import StudentManagement from './pages/admin/StudentManagement';
import FacultyManagement from './pages/admin/FacultyManagement';
import AcademicManagement from './pages/admin/AcademicManagement';
import AdmissionManagement from './pages/admin/AdmissionManagement';
import CMSManagement from './pages/admin/CMSManagement';
import ExaminationManagement from './pages/admin/ExaminationManagement';
import FeeManagement from './pages/admin/FeeManagement';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [pathname]);

  return null;
};

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen bg-secondary-50">
        <Toaster position="top-right" />
        <Routes>
          {/* ALL PUBLIC ROUTES WITH MAINLAYOUT (includes Header & Navbar) */}
          <Route path="/" element={<MainLayout />}>
            {/* Main Pages */}
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
            
            {/* LOGIN PAGES - NOW INSIDE MAINLAYOUT (will have Header & Navbar) */}
            <Route path="student/login" element={<StudentLogin />} />
            <Route path="faculty/login" element={<FacultyLogin />} />
            <Route path="admin/login" element={<AdminLogin />} />
            <Route path="parent/login" element={<ParentLogin />} />
          </Route>

          {/* PANEL PAGES - WITHOUT MAINLAYOUT (no Header/Navbar, only sidebar) */}
          <Route path="/student/dashboard" element={<StudentDashboard />} />
          <Route path="/student/profile" element={<StudentProfile />} />
          <Route path="/student/academics" element={<StudentAcademics />} />
          <Route path="/student/attendance" element={<StudentAttendance />} />
          <Route path="/student/exams" element={<StudentExams />} />
          <Route path="/student/fees" element={<StudentFees />} />
          <Route path="/student/notifications" element={<StudentNotifications />} />

          <Route path="/faculty/dashboard" element={<FacultyDashboard />} />
          <Route path="/faculty/attendance" element={<AttendanceMarking />} />
          <Route path="/faculty/assignments" element={<AssignmentUpload />} />
          <Route path="/faculty/marks" element={<MarksEntry />} />
          <Route path="/faculty/students" element={<StudentList />} />
          <Route path="/faculty/profile" element={<FacultyProfile />} />

          <Route path="/admin/dashboard" element={<AdminDashboard />} />
          <Route path="/admin/students" element={<StudentManagement />} />
          <Route path="/admin/faculty" element={<FacultyManagement />} />
          <Route path="/admin/academics" element={<AcademicManagement />} />
          <Route path="/admin/admissions" element={<AdmissionManagement />} />
          <Route path="/admin/cms" element={<CMSManagement />} />
          <Route path="/admin/exams" element={<ExaminationManagement />} />
          <Route path="/admin/fees" element={<FeeManagement />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;