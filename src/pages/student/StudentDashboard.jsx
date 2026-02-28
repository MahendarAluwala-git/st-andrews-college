import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  HomeIcon,
  UserIcon,
  BookOpenIcon,
  ClockIcon,
  DocumentTextIcon,
  CreditCardIcon,
  BellIcon,
  Cog6ToothIcon,
  CalendarIcon, 
  ChartBarIcon,
  ArrowRightIcon,
  UserCircleIcon
} from '@heroicons/react/24/outline';
import StudentPanelLayout from '../../layouts/StudentPanelLayout';

const StudentDashboard = () => {
  const location = useLocation();

  const stats = [
    { label: 'Overall Attendance', value: '85%', icon: ClockIcon, color: 'bg-blue-500', change: '+2%' },
    { label: 'Current CGPA', value: '8.6', icon: ChartBarIcon, color: 'bg-green-500', change: '+0.3' },
    { label: 'Courses Enrolled', value: '6', icon: BookOpenIcon, color: 'bg-purple-500', change: 'This Sem' },
    { label: 'Pending Fees', value: '₹25,000', icon: CreditCardIcon, color: 'bg-orange-500', change: 'Due Apr 15' },
  ];

  const upcomingClasses = [
    { subject: 'Data Structures', code: 'CS301', time: '10:00 AM - 11:30 AM', venue: 'Room 401', faculty: 'Dr. Sharma' },
    { subject: 'Database Systems', code: 'CS302', time: '12:00 PM - 1:30 PM', venue: 'Lab 3', faculty: 'Prof. Kumar' },
    { subject: 'Computer Networks', code: 'CS303', time: '2:00 PM - 3:30 PM', venue: 'Room 205', faculty: 'Dr. Singh' },
  ];

  const announcements = [
    { title: 'Guest Lecture on AI', desc: 'Dr. Andrew Ng from Stanford', date: 'Today, 3:00 PM', priority: 'high' },
    { title: 'Mid-Term Exam Schedule', desc: 'Check the examination portal', date: 'Released Today', priority: 'medium' },
  ];

  const attendanceData = [
    { subject: 'Data Structures', percentage: 92 },
    { subject: 'Database Systems', percentage: 78 },
    { subject: 'Computer Networks', percentage: 88 },
  ];

  return (
    <StudentPanelLayout>
      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat, index) => (
          <div key={index} className="bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition-shadow">
            <div className="flex items-center justify-between mb-4">
              <div className={`${stat.color} p-3 rounded-lg`}>
                <stat.icon className="w-6 h-6 text-white" />
              </div>
              <span className="text-sm font-medium text-green-600">{stat.change}</span>
            </div>
            <p className="text-2xl font-bold text-secondary-900">{stat.value}</p>
            <p className="text-sm text-secondary-600">{stat.label}</p>
          </div>
        ))}
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
        <Link to="/student/profile" className="bg-white rounded-xl shadow-sm p-4 text-center hover:shadow-md transition-shadow">
          <UserCircleIcon className="w-8 h-8 mx-auto text-primary-600 mb-2" />
          <span className="text-sm font-medium">My Profile</span>
        </Link>
        <Link to="/student/attendance" className="bg-white rounded-xl shadow-sm p-4 text-center hover:shadow-md transition-shadow">
          <ClockIcon className="w-8 h-8 mx-auto text-green-600 mb-2" />
          <span className="text-sm font-medium">Attendance</span>
        </Link>
        <Link to="/student/exams" className="bg-white rounded-xl shadow-sm p-4 text-center hover:shadow-md transition-shadow">
          <DocumentTextIcon className="w-8 h-8 mx-auto text-purple-600 mb-2" />
          <span className="text-sm font-medium">Exams</span>
        </Link>
        <Link to="/student/fees" className="bg-white rounded-xl shadow-sm p-4 text-center hover:shadow-md transition-shadow">
          <CreditCardIcon className="w-8 h-8 mx-auto text-orange-600 mb-2" />
          <span className="text-sm font-medium">Fee Details</span>
        </Link>
      </div>

      {/* Main Grid */}
      <div className="grid lg:grid-cols-2 gap-6">
        {/* Today's Schedule */}
        <div className="bg-white rounded-xl shadow-sm p-6">
          <h2 className="text-lg font-semibold mb-4 flex items-center">
            <CalendarIcon className="w-5 h-5 mr-2 text-primary-600" />
            Today's Schedule
          </h2>
          <div className="space-y-4">
            {upcomingClasses.map((cls, index) => (
              <div key={index} className="flex items-center justify-between p-4 bg-secondary-50 rounded-lg hover:bg-primary-50 transition-colors">
                <div>
                  <p className="font-medium">{cls.subject}</p>
                  <p className="text-sm text-secondary-600">{cls.venue} • {cls.faculty}</p>
                </div>
                <span className="text-sm font-medium text-primary-600">{cls.time}</span>
              </div>
            ))}
          </div>
          <Link to="/student/academics" className="mt-4 block text-center text-sm text-primary-600 hover:text-primary-700 font-medium">
            View Full Timetable
          </Link>
        </div>

        {/* Announcements */}
        <div className="bg-white rounded-xl shadow-sm p-6">
          <h2 className="text-lg font-semibold mb-4 flex items-center">
            <BellIcon className="w-5 h-5 mr-2 text-primary-600" />
            Announcements
          </h2>
          <div className="space-y-4">
            {announcements.map((item, index) => (
              <div key={index} className="p-4 bg-secondary-50 rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <p className="font-medium">{item.title}</p>
                  <span className={`text-xs px-2 py-1 rounded-full ${
                    item.priority === 'high' ? 'bg-red-100 text-red-800' : 'bg-yellow-100 text-yellow-800'
                  }`}>
                    {item.priority}
                  </span>
                </div>
                <p className="text-sm text-secondary-600">{item.desc}</p>
                <p className="text-xs text-secondary-500 mt-2">{item.date}</p>
              </div>
            ))}
          </div>
          <Link to="/student/notifications" className="mt-4 block text-center text-sm text-primary-600 hover:text-primary-700 font-medium">
            View All Notifications
          </Link>
        </div>

        {/* Attendance Overview */}
        <div className="bg-white rounded-xl shadow-sm p-6 lg:col-span-2">
          <h2 className="text-lg font-semibold mb-4">Attendance Overview</h2>
          <div className="space-y-4">
            {attendanceData.map((item, index) => (
              <div key={index}>
                <div className="flex justify-between text-sm mb-1">
                  <span>{item.subject}</span>
                  <span className="font-semibold text-primary-600">{item.percentage}%</span>
                </div>
                <div className="w-full bg-secondary-200 rounded-full h-2">
                  <div 
                    className={`h-2 rounded-full ${
                      item.percentage >= 85 ? 'bg-green-500' : 
                      item.percentage >= 75 ? 'bg-yellow-500' : 'bg-red-500'
                    }`}
                    style={{ width: `${item.percentage}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </StudentPanelLayout>
  );
};

export default StudentDashboard;