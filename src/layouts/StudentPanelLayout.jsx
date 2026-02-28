import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { 
  HomeIcon,
  UserIcon,
  BookOpenIcon,
  ClockIcon,
  DocumentTextIcon,
  CreditCardIcon,
  BellIcon,
  Cog6ToothIcon,
  ArrowLeftOnRectangleIcon
} from '@heroicons/react/24/outline';
import toast from 'react-hot-toast';

const StudentPanelLayout = ({ children }) => {
  const location = useLocation();
  const navigate = useNavigate();

  const sidebarItems = [
    { name: 'Dashboard', path: '/student/dashboard', icon: HomeIcon },
    { name: 'My Profile', path: '/student/profile', icon: UserIcon },
    { name: 'Academics', path: '/student/academics', icon: BookOpenIcon },
    { name: 'Attendance', path: '/student/attendance', icon: ClockIcon },
    { name: 'Examinations', path: '/student/exams', icon: DocumentTextIcon },
    { name: 'Fee Details', path: '/student/fees', icon: CreditCardIcon },
    { name: 'Notifications', path: '/student/notifications', icon: BellIcon },
    { name: 'Settings', path: '/student/settings', icon: Cog6ToothIcon },
  ];

  const handleLogout = () => {
    toast.success('Logged out successfully!');
    setTimeout(() => {
      navigate('/student/login');
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-secondary-50 flex">
      {/* Sidebar */}
      <div className="w-64 bg-white shadow-lg fixed h-full flex flex-col">
        {/* Fixed Header */}
        <div className="p-6 border-b flex-shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-primary-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">SA</span>
            </div>
            <div>
              <h2 className="font-semibold">Student Portal</h2>
              <p className="text-xs text-secondary-500">Rahul Verma</p>
            </div>
          </div>
        </div>

        {/* Scrollable Navigation */}
        <div className="flex-1 overflow-y-auto py-4 px-4">
          <nav>
            <ul className="space-y-2">
              {sidebarItems.map((item) => {
                const Icon = item.icon;
                const isActive = location.pathname === item.path;
                return (
                  <li key={item.path}>
                    <Link
                      to={item.path}
                      className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                        isActive 
                          ? 'bg-primary-50 text-primary-600' 
                          : 'text-secondary-700 hover:bg-primary-50 hover:text-primary-600'
                      }`}
                    >
                      <Icon className="w-5 h-5" />
                      <span className="text-sm font-medium">{item.name}</span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>
        </div>

        {/* Logout Button */}
        <div className="p-4 border-t bg-white flex-shrink-0">
          <button
            onClick={handleLogout}
            className="w-full flex items-center gap-3 px-4 py-3 rounded-lg text-secondary-700 hover:bg-red-50 hover:text-red-600 transition-colors"
          >
            <ArrowLeftOnRectangleIcon className="w-5 h-5" />
            <span className="text-sm font-medium">Logout</span>
          </button>
        </div>

        {/* User Info */}
        <div className="p-4 border-t bg-white flex-shrink-0">
          <div className="flex items-center gap-3">
            <img 
              src="https://randomuser.me/api/portraits/men/32.jpg" 
              alt="Student"
              className="w-8 h-8 rounded-full"
            />
            <div className="flex-1">
              <p className="text-xs font-medium">Roll No: CS2022001</p>
              <p className="text-xs text-secondary-500">B.Tech CSE • Sem VI</p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 ml-64">
        <div className="p-8">
          {children}
        </div>
      </div>
    </div>
  );
};

export default StudentPanelLayout;