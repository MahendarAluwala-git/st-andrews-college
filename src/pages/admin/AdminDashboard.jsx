import React from 'react';
import { Link } from 'react-router-dom';
import { 
  UsersIcon, 
  AcademicCapIcon,
  CurrencyDollarIcon,
  BuildingLibraryIcon,
  BellIcon,
  ChartBarIcon,
  DocumentTextIcon,
  CalendarIcon,
  NewspaperIcon,
  UserGroupIcon,
  ClipboardDocumentListIcon,
  CreditCardIcon
} from '@heroicons/react/24/outline';
import AdminPanelLayout from '../../layouts/AdminPanelLayout';

const AdminDashboard = () => {
  const stats = [
    { label: 'Total Students', value: '5,234', icon: UsersIcon, color: 'bg-blue-500', change: '+12.3%' },
    { label: 'Total Faculty', value: '342', icon: AcademicCapIcon, color: 'bg-green-500', change: '+5.2%' },
    { label: 'Total Revenue', value: '₹45.6L', icon: CurrencyDollarIcon, color: 'bg-purple-500', change: '+18.5%' },
    { label: 'New Admissions', value: '1,234', icon: BuildingLibraryIcon, color: 'bg-orange-500', change: '+23.1%' },
  ];

  const recentApplications = [
    { name: 'Rahul Sharma', program: 'B.Tech CS', date: 'Today', status: 'Pending' },
    { name: 'Priya Patel', program: 'MBA', date: 'Yesterday', status: 'Approved' },
    { name: 'Amit Kumar', program: 'B.Com', date: '2 days ago', status: 'Pending' },
  ];

  const upcomingEvents = [
    { event: 'Admission Deadline', date: 'Mar 31, 2025', priority: 'high' },
    { event: 'Entrance Exam', date: 'Apr 15, 2025', priority: 'high' },
    { event: 'Faculty Meeting', date: 'Apr 20, 2025', priority: 'medium' },
  ];

  return (
    <AdminPanelLayout>
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

      {/* Quick Actions Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 mb-8">
        <Link to="/admin/students" className="bg-white rounded-xl shadow-sm p-4 text-center hover:shadow-md transition-shadow">
          <UserGroupIcon className="w-8 h-8 mx-auto text-blue-600 mb-2" />
          <span className="text-sm font-medium">Students</span>
        </Link>
        <Link to="/admin/faculty" className="bg-white rounded-xl shadow-sm p-4 text-center hover:shadow-md transition-shadow">
          <AcademicCapIcon className="w-8 h-8 mx-auto text-green-600 mb-2" />
          <span className="text-sm font-medium">Faculty</span>
        </Link>
        <Link to="/admin/admissions" className="bg-white rounded-xl shadow-sm p-4 text-center hover:shadow-md transition-shadow">
          <ClipboardDocumentListIcon className="w-8 h-8 mx-auto text-purple-600 mb-2" />
          <span className="text-sm font-medium">Admissions</span>
        </Link>
        <Link to="/admin/fees" className="bg-white rounded-xl shadow-sm p-4 text-center hover:shadow-md transition-shadow">
          <CurrencyDollarIcon className="w-8 h-8 mx-auto text-orange-600 mb-2" />
          <span className="text-sm font-medium">Fees</span>
        </Link>
        <Link to="/admin/exams" className="bg-white rounded-xl shadow-sm p-4 text-center hover:shadow-md transition-shadow">
          <DocumentTextIcon className="w-8 h-8 mx-auto text-red-600 mb-2" />
          <span className="text-sm font-medium">Exams</span>
        </Link>
        <Link to="/admin/cms" className="bg-white rounded-xl shadow-sm p-4 text-center hover:shadow-md transition-shadow">
          <NewspaperIcon className="w-8 h-8 mx-auto text-pink-600 mb-2" />
          <span className="text-sm font-medium">CMS</span>
        </Link>
      </div>

      {/* Main Grid */}
      <div className="grid lg:grid-cols-2 gap-6">
        {/* Recent Applications */}
        <div className="bg-white rounded-xl shadow-sm p-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold">Recent Applications</h2>
            <Link to="/admin/admissions" className="text-sm text-purple-600 hover:text-purple-700">
              View All
            </Link>
          </div>
          <div className="space-y-4">
            {recentApplications.map((app, index) => (
              <div key={index} className="flex items-center justify-between p-4 bg-secondary-50 rounded-lg">
                <div>
                  <p className="font-medium">{app.name}</p>
                  <p className="text-sm text-secondary-600">{app.program}</p>
                </div>
                <div className="text-right">
                  <span className={`text-xs px-2 py-1 rounded-full ${
                    app.status === 'Approved' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
                  }`}>
                    {app.status}
                  </span>
                  <p className="text-xs text-secondary-500 mt-1">{app.date}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Upcoming Events */}
        <div className="bg-white rounded-xl shadow-sm p-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold">Upcoming Events</h2>
            <Link to="/admin/cms" className="text-sm text-purple-600 hover:text-purple-700">
              Manage
            </Link>
          </div>
          <div className="space-y-4">
            {upcomingEvents.map((event, index) => (
              <div key={index} className="flex items-center justify-between p-4 bg-secondary-50 rounded-lg">
                <div>
                  <p className="font-medium">{event.event}</p>
                  <p className="text-sm text-secondary-600">{event.date}</p>
                </div>
                <span className={`text-xs px-2 py-1 rounded-full ${
                  event.priority === 'high' ? 'bg-red-100 text-red-800' : 'bg-yellow-100 text-yellow-800'
                }`}>
                  {event.priority}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </AdminPanelLayout>
  );
};

export default AdminDashboard;