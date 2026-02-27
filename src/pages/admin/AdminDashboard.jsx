import React from 'react';
import { Link } from 'react-router-dom';
import { 
  UserCircleIcon,
  UsersIcon,
  AcademicCapIcon,
  BuildingLibraryIcon,
  CurrencyDollarIcon,
  BellIcon,
  ChartBarIcon,
  CalendarIcon,
  PhotoIcon
} from '@heroicons/react/24/outline';

const AdminDashboard = () => {
  const stats = [
    { label: 'Total Students', value: '5,234', icon: UsersIcon, color: 'bg-blue-500', change: '+12%' },
    { label: 'Total Faculty', value: '342', icon: AcademicCapIcon, color: 'bg-green-500', change: '+5%' },
    { label: 'Total Revenue', value: '₹45.6L', icon: CurrencyDollarIcon, color: 'bg-purple-500', change: '+18%' },
    { label: 'New Admissions', value: '1,234', icon: BuildingLibraryIcon, color: 'bg-orange-500', change: '+23%' },
  ];

  const recentApplications = [
    { name: 'Rahul Sharma', program: 'B.Sc. CS', date: 'Today', status: 'Pending' },
    { name: 'Priya Patel', program: 'MBA', date: 'Yesterday', status: 'Approved' },
    { name: 'Amit Kumar', program: 'B.Com', date: '2 days ago', status: 'Pending' },
    { name: 'Neha Singh', program: 'BBA', date: '2 days ago', status: 'Reviewed' },
  ];

  const recentActivities = [
    { action: 'New student admission', user: 'Rahul Sharma', time: '5 mins ago' },
    { action: 'Faculty added', user: 'Dr. Sarah Williams', time: '1 hour ago' },
    { action: 'Fee payment received', user: 'Amit Kumar', time: '2 hours ago' },
    { action: 'Exam schedule updated', user: 'Admin', time: '3 hours ago' },
  ];

  const quickActions = [
    { label: 'Add New Student', icon: UsersIcon, link: '/admin/students/add', color: 'bg-blue-500' },
    { label: 'Add Faculty', icon: AcademicCapIcon, link: '/admin/faculty/add', color: 'bg-green-500' },
    { label: 'Create Event', icon: CalendarIcon, link: '/admin/events/create', color: 'bg-purple-500' },
    { label: 'Upload Gallery', icon: PhotoIcon, link: '/admin/gallery/upload', color: 'bg-orange-500' },
  ];

  return (
    <div className="min-h-screen bg-secondary-50 pt-20">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="container-custom py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-secondary-900">Admin Dashboard</h1>
              <p className="text-secondary-600">Welcome back, Admin</p>
            </div>
            <div className="flex items-center gap-4">
              <button className="relative">
                <BellIcon className="w-6 h-6 text-secondary-600" />
                <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 text-white text-xs rounded-full flex items-center justify-center">
                  8
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
                <span className="text-sm font-medium text-green-600">{stat.change}</span>
              </div>
              <div className="flex items-end justify-between">
                <div>
                  <p className="text-2xl font-bold text-secondary-900">{stat.value}</p>
                  <p className="text-secondary-600 text-sm">{stat.label}</p>
                </div>
                <ChartBarIcon className="w-8 h-8 text-secondary-300" />
              </div>
            </div>
          ))}
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-3 gap-6 mt-8">
          {/* Left Column - Recent Applications */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl shadow-sm p-6">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-lg font-semibold">Recent Applications</h2>
                <Link to="/admin/admissions" className="text-sm text-primary-600 hover:text-primary-700">
                  View All
                </Link>
              </div>
              <div className="space-y-4">
                {recentApplications.map((app, index) => (
                  <div key={index} className="flex items-center justify-between p-4 bg-secondary-50 rounded-lg">
                    <div>
                      <h3 className="font-medium">{app.name}</h3>
                      <p className="text-sm text-secondary-500">{app.program}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm text-secondary-500">{app.date}</p>
                      <span className={`text-xs px-2 py-1 rounded-full ${
                        app.status === 'Approved' ? 'bg-green-100 text-green-800' :
                        app.status === 'Pending' ? 'bg-yellow-100 text-yellow-800' :
                        'bg-blue-100 text-blue-800'
                      }`}>
                        {app.status}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-4 flex gap-2">
                <button className="btn-primary flex-1">Approve Selected</button>
                <button className="btn-outline flex-1">Review All</button>
              </div>
            </div>

            {/* Recent Activities */}
            <div className="bg-white rounded-xl shadow-sm p-6 mt-6">
              <h2 className="text-lg font-semibold mb-4">Recent Activities</h2>
              <div className="space-y-4">
                {recentActivities.map((activity, index) => (
                  <div key={index} className="flex items-center justify-between border-b last:border-0 pb-4 last:pb-0">
                    <div>
                      <p className="font-medium">{activity.action}</p>
                      <p className="text-sm text-secondary-500">by {activity.user}</p>
                    </div>
                    <span className="text-xs text-secondary-500">{activity.time}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Quick Actions */}
          <div>
            <div className="bg-white rounded-xl shadow-sm p-6">
              <h2 className="text-lg font-semibold mb-4">Quick Actions</h2>
              <div className="space-y-3">
                {quickActions.map((action) => (
                  <Link 
                    key={action.label}
                    to={action.link}
                    className="flex items-center gap-3 p-4 bg-secondary-50 rounded-lg hover:bg-primary-50 transition-colors"
                  >
                    <div className={`${action.color} w-10 h-10 rounded-lg flex items-center justify-center`}>
                      <action.icon className="w-5 h-5 text-white" />
                    </div>
                    <span className="font-medium">{action.label}</span>
                  </Link>
                ))}
              </div>
            </div>

            {/* Management Links */}
            <div className="bg-white rounded-xl shadow-sm p-6 mt-6">
              <h2 className="text-lg font-semibold mb-4">Management</h2>
              <div className="space-y-2">
                <Link to="/admin/students" className="block p-3 bg-secondary-50 rounded-lg hover:bg-primary-50 transition-colors">
                  <span className="font-medium">👥 Student Management</span>
                </Link>
                <Link to="/admin/faculty" className="block p-3 bg-secondary-50 rounded-lg hover:bg-primary-50 transition-colors">
                  <span className="font-medium">👨‍🏫 Faculty Management</span>
                </Link>
                <Link to="/admin/courses" className="block p-3 bg-secondary-50 rounded-lg hover:bg-primary-50 transition-colors">
                  <span className="font-medium">📚 Course Management</span>
                </Link>
                <Link to="/admin/fees" className="block p-3 bg-secondary-50 rounded-lg hover:bg-primary-50 transition-colors">
                  <span className="font-medium">💰 Fee Management</span>
                </Link>
                <Link to="/admin/exams" className="block p-3 bg-secondary-50 rounded-lg hover:bg-primary-50 transition-colors">
                  <span className="font-medium">📝 Exam Management</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;