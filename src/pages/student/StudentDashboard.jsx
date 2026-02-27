import React from 'react';
import { Link } from 'react-router-dom';
import { 
  UserCircleIcon,
  AcademicCapIcon,
  CalendarIcon,
  CurrencyDollarIcon,
  BellIcon,
  BookOpenIcon,
  ClockIcon,
  ChartBarIcon
} from '@heroicons/react/24/outline';

const StudentDashboard = () => {
  const stats = [
    { label: 'Attendance', value: '85%', icon: ClockIcon, color: 'bg-blue-500' },
    { label: 'CGPA', value: '8.5', icon: ChartBarIcon, color: 'bg-green-500' },
    { label: 'Courses', value: '6', icon: BookOpenIcon, color: 'bg-purple-500' },
    { label: 'Pending Fees', value: '₹25,000', icon: CurrencyDollarIcon, color: 'bg-orange-500' },
  ];

  const upcomingClasses = [
    { subject: 'Data Structures', time: '10:00 AM', venue: 'Room 401' },
    { subject: 'Database Systems', time: '11:30 AM', venue: 'Lab 3' },
    { subject: 'Computer Networks', time: '2:00 PM', venue: 'Room 205' },
  ];

  const announcements = [
    { title: 'Assignment Submission', desc: 'DS Assignment due on Friday', date: 'Today' },
    { title: 'Guest Lecture', desc: 'AI Workshop at 3 PM in Auditorium', date: 'Tomorrow' },
    { title: 'Exam Schedule', desc: 'Mid-term exams start from March 20', date: 'Mar 15' },
  ];

  return (
    <div className="min-h-screen bg-secondary-50 pt-20">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="container-custom py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-secondary-900">Student Dashboard</h1>
              <p className="text-secondary-600">Welcome back, John Doe!</p>
            </div>
            <div className="flex items-center gap-4">
              <button className="relative">
                <BellIcon className="w-6 h-6 text-secondary-600" />
                <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 text-white text-xs rounded-full flex items-center justify-center">
                  3
                </span>
              </button>
              <UserCircleIcon className="w-8 h-8 text-secondary-600" />
            </div>
          </div>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="container-custom py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat) => (
            <div key={stat.label} className="bg-white rounded-xl shadow-sm p-6">
              <div className="flex items-center justify-between mb-4">
                <div className={`${stat.color} p-3 rounded-lg`}>
                  <stat.icon className="w-6 h-6 text-white" />
                </div>
                <span className="text-2xl font-bold text-secondary-900">{stat.value}</span>
              </div>
              <p className="text-secondary-600">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-3 gap-6 mt-8">
          {/* Left Column - Upcoming Classes */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl shadow-sm p-6">
              <h2 className="text-lg font-semibold mb-4">Today's Schedule</h2>
              <div className="space-y-4">
                {upcomingClasses.map((cls, index) => (
                  <div key={index} className="flex items-center justify-between p-4 bg-secondary-50 rounded-lg">
                    <div>
                      <h3 className="font-medium">{cls.subject}</h3>
                      <p className="text-sm text-secondary-500">{cls.venue}</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <ClockIcon className="w-4 h-4 text-primary-500" />
                      <span className="text-sm font-medium">{cls.time}</span>
                    </div>
                  </div>
                ))}
              </div>
              <button className="mt-4 text-primary-600 font-medium hover:text-primary-700">
                View Full Schedule →
              </button>
            </div>

            {/* Attendance Overview */}
            <div className="bg-white rounded-xl shadow-sm p-6 mt-6">
              <h2 className="text-lg font-semibold mb-4">Attendance Overview</h2>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm">Data Structures</span>
                    <span className="text-sm font-medium">85%</span>
                  </div>
                  <div className="w-full bg-secondary-200 rounded-full h-2">
                    <div className="bg-primary-600 h-2 rounded-full" style={{ width: '85%' }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm">Database Systems</span>
                    <span className="text-sm font-medium">78%</span>
                  </div>
                  <div className="w-full bg-secondary-200 rounded-full h-2">
                    <div className="bg-primary-600 h-2 rounded-full" style={{ width: '78%' }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm">Computer Networks</span>
                    <span className="text-sm font-medium">92%</span>
                  </div>
                  <div className="w-full bg-secondary-200 rounded-full h-2">
                    <div className="bg-primary-600 h-2 rounded-full" style={{ width: '92%' }}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Announcements */}
          <div>
            <div className="bg-white rounded-xl shadow-sm p-6">
              <h2 className="text-lg font-semibold mb-4">Announcements</h2>
              <div className="space-y-4">
                {announcements.map((item, index) => (
                  <div key={index} className="border-b last:border-0 pb-4 last:pb-0">
                    <div className="flex justify-between mb-1">
                      <h3 className="font-medium">{item.title}</h3>
                      <span className="text-xs text-secondary-500">{item.date}</span>
                    </div>
                    <p className="text-sm text-secondary-600">{item.desc}</p>
                  </div>
                ))}
              </div>
              <button className="mt-4 text-primary-600 font-medium hover:text-primary-700">
                View All →
              </button>
            </div>

            {/* Quick Links */}
            <div className="bg-white rounded-xl shadow-sm p-6 mt-6">
              <h2 className="text-lg font-semibold mb-4">Quick Links</h2>
              <div className="space-y-2">
                <Link to="/student/profile" className="block p-3 bg-secondary-50 rounded-lg hover:bg-primary-50 transition-colors">
                  <span className="font-medium">📋 View Profile</span>
                </Link>
                <Link to="/student/academics" className="block p-3 bg-secondary-50 rounded-lg hover:bg-primary-50 transition-colors">
                  <span className="font-medium">📚 Academics</span>
                </Link>
                <Link to="/student/exams" className="block p-3 bg-secondary-50 rounded-lg hover:bg-primary-50 transition-colors">
                  <span className="font-medium">📝 Exam Schedule</span>
                </Link>
                <Link to="/student/fees" className="block p-3 bg-secondary-50 rounded-lg hover:bg-primary-50 transition-colors">
                  <span className="font-medium">💰 Fee Details</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentDashboard;