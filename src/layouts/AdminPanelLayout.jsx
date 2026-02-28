import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { 
  HomeIcon,
  UserGroupIcon,
  AcademicCapIcon,
  BookOpenIcon,
  ClipboardDocumentListIcon,
  NewspaperIcon,
  DocumentTextIcon,
  CreditCardIcon,
  Cog6ToothIcon,
  ArrowLeftOnRectangleIcon
} from '@heroicons/react/24/outline';
import toast from 'react-hot-toast';

const AdminPanelLayout = ({ children }) => {
  const location = useLocation();
  const navigate = useNavigate();

  const sidebarItems = [
    { name: 'Dashboard', path: '/admin/dashboard', icon: HomeIcon },
    { name: 'Student Management', path: '/admin/students', icon: UserGroupIcon },
    { name: 'Faculty Management', path: '/admin/faculty', icon: AcademicCapIcon },
    { name: 'Academic Management', path: '/admin/academics', icon: BookOpenIcon },
    { name: 'Admission Management', path: '/admin/admissions', icon: ClipboardDocumentListIcon },
    { name: 'CMS Management', path: '/admin/cms', icon: NewspaperIcon },
    { name: 'Examination Management', path: '/admin/exams', icon: DocumentTextIcon },
    { name: 'Fee Management', path: '/admin/fees', icon: CreditCardIcon },
    { name: 'Settings', path: '/admin/settings', icon: Cog6ToothIcon },
  ];

  const handleLogout = () => {
    toast.success('Logged out successfully!');
    setTimeout(() => {
      navigate('/admin/login');
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-secondary-50 flex">
      {/* Sidebar - Made scrollable with overflow-y-auto */}
      <div className="w-64 bg-white shadow-lg fixed h-full flex flex-col">
        {/* Fixed Header - Always visible */}
        <div className="p-6 border-b flex-shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-purple-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">AD</span>
            </div>
            <div>
              <h2 className="font-semibold">Admin Panel</h2>
              <p className="text-xs text-secondary-500">Super Admin</p>
            </div>
          </div>
        </div>

        {/* Scrollable Navigation Area */}
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
                          ? 'bg-purple-50 text-purple-600' 
                          : 'text-secondary-700 hover:bg-purple-50 hover:text-purple-600'
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

        {/* Fixed Logout Button - Always visible at bottom */}
        <div className="p-4 border-t bg-white flex-shrink-0">
          <button
            onClick={handleLogout}
            className="w-full flex items-center gap-3 px-4 py-3 rounded-lg text-secondary-700 hover:bg-red-50 hover:text-red-600 transition-colors"
          >
            <ArrowLeftOnRectangleIcon className="w-5 h-5" />
            <span className="text-sm font-medium">Logout</span>
          </button>
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

export default AdminPanelLayout;