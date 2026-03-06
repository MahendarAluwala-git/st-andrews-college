import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  Bars3Icon, XMarkIcon, HomeIcon, 
  InformationCircleIcon, AcademicCapIcon, 
  UsersIcon, ClipboardDocumentListIcon, 
  HeartIcon, BriefcaseIcon, PhotoIcon,
  NewspaperIcon, EnvelopeIcon, ChevronDownIcon,
  UserGroupIcon, BuildingLibraryIcon
} from '@heroicons/react/24/outline';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: 'Home', path: '/', icon: HomeIcon },
    { name: 'About', path: '/about', icon: InformationCircleIcon },
    { name: 'Academics', path: '/academics', icon: AcademicCapIcon },
    { name: 'Faculty', path: '/faculty', icon: UsersIcon },
    { name: 'Admissions', path: '/admissions', icon: ClipboardDocumentListIcon },
    { name: 'Campus Life', path: '/campus-life', icon: HeartIcon },
    { name: 'Placements', path: '/placements', icon: BriefcaseIcon },
    { name: 'Gallery', path: '/gallery', icon: PhotoIcon },
    { name: 'News', path: '/news-events', icon: NewspaperIcon },
    { name: 'Contact', path: '/contact', icon: EnvelopeIcon },
  ];

  const portalItems = [
    { name: 'Student', path: '/student/login', icon: UserGroupIcon, color: 'blue' },
    { name: 'Faculty', path: '/faculty/login', icon: AcademicCapIcon, color: 'green' },
    { name: 'Admin', path: '/admin/login', icon: BuildingLibraryIcon, color: 'purple' },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="w-full bg-gradient-to-r from-white to-secondary-50 shadow-md border-y border-secondary-200 sticky top-0 z-40">
      <div className="container-custom">
        <div className="flex items-center justify-between h-16">
          {/* Logo - visible on mobile only */}
          <Link to="/" className="flex items-center space-x-2 flex-shrink-0 lg:hidden">
            <div className="w-9 h-9 bg-gradient-to-br from-primary-500 to-primary-600 rounded-lg flex items-center justify-center shadow-md">
              <span className="text-white font-bold text-lg">SA</span>
            </div>
            <span className="font-semibold text-lg bg-gradient-to-r from-primary-600 to-primary-800 bg-clip-text text-transparent">
              St. Andrew's
            </span>
          </Link>

          {/* Desktop Navigation - Centered */}
          <div className="hidden lg:flex items-center justify-center flex-1">
            <div className="flex items-center space-x-1 bg-secondary-50/50 p-1 rounded-xl">
              {navItems.slice(0, 5).map((item) => {
                const Icon = item.icon;
                return (
                  <Link
                    key={item.path}
                    to={item.path}
                    className={`flex items-center space-x-2 px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200 ${
                      isActive(item.path)
                        ? 'bg-primary-600 text-white shadow-md shadow-primary-200'
                        : 'text-secondary-700 hover:bg-primary-50 hover:text-primary-600'
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                    <span>{item.name}</span>
                  </Link>
                );
              })}
              
              {/* More Dropdown */}
              <div className="relative group">
                <button className="flex items-center space-x-2 px-4 py-2 text-sm font-medium text-secondary-700 hover:text-primary-600 hover:bg-primary-50 rounded-lg transition-all duration-200">
                  <span>More</span>
                  <ChevronDownIcon className="w-4 h-4 group-hover:rotate-180 transition-transform duration-200" />
                </button>
                
                <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-xl shadow-xl border border-secondary-100 py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-70">
                  {navItems.slice(5).map((item) => {
                    const Icon = item.icon;
                    return (
                      <Link
                        key={item.path}
                        to={item.path}
                        className={`flex items-center space-x-3 px-4 py-3 text-sm ${
                          isActive(item.path)
                            ? 'bg-primary-50 text-primary-600 border-l-4 border-primary-600'
                            : 'text-secondary-700 hover:bg-primary-50 hover:text-primary-600'
                        }`}
                        onClick={() => setIsOpen(false)}
                      >
                        <Icon className="w-5 h-5" />
                        <span className="font-medium">{item.name}</span>
                      </Link>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>

          {/* Portal Links - Right side */}
          <div className="hidden lg:flex items-center space-x-3">
            {portalItems.map((item) => {
              const Icon = item.icon;
              const colorClasses = {
                blue: 'text-blue-600 hover:bg-blue-50 border-blue-200',
                green: 'text-green-600 hover:bg-green-50 border-green-200',
                purple: 'text-purple-600 hover:bg-purple-50 border-purple-200'
              };
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`flex items-center space-x-1 px-3 py-2 text-sm font-medium rounded-lg border transition-all duration-200 ${colorClasses[item.color]}`}
                >
                  <Icon className="w-4 h-4" />
                  <span>{item.name}</span>
                </Link>
              );
            })}
            <Link
              to="/admissions"
              className="bg-gradient-to-r from-primary-600 to-primary-700 text-white text-sm px-5 py-2 rounded-lg hover:shadow-lg hover:shadow-primary-200 hover:scale-105 transition-all duration-200 font-semibold"
            >
              Apply Now
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded-lg text-primary-600 hover:bg-primary-50 transition-colors"
          >
            {isOpen ? <XMarkIcon className="w-6 h-6" /> : <Bars3Icon className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden py-4 border-t border-secondary-200 animate-fadeIn">
            <div className="flex flex-col space-y-1">
              {navItems.map((item) => {
                const Icon = item.icon;
                return (
                  <Link
                    key={item.path}
                    to={item.path}
                    className={`flex items-center space-x-3 px-4 py-3 text-sm font-medium rounded-lg transition-colors ${
                      isActive(item.path)
                        ? 'bg-primary-600 text-white'
                        : 'text-secondary-700 hover:bg-primary-50 hover:text-primary-600'
                    }`}
                    onClick={() => setIsOpen(false)}
                  >
                    <Icon className="w-5 h-5" />
                    <span>{item.name}</span>
                  </Link>
                );
              })}
              <div className="border-t border-secondary-200 my-2 pt-2">
                <p className="px-4 py-2 text-xs font-semibold text-secondary-500 uppercase tracking-wider">Portals</p>
                {portalItems.map((item) => {
                  const Icon = item.icon;
                  return (
                    <Link
                      key={item.path}
                      to={item.path}
                      className="flex items-center space-x-3 px-4 py-3 text-sm text-secondary-700 hover:bg-primary-50 hover:text-primary-600 rounded-lg transition-colors"
                      onClick={() => setIsOpen(false)}
                    >
                      <Icon className="w-5 h-5" />
                      <span>{item.name} Portal</span>
                    </Link>
                  );
                })}
                <Link
                  to="/admissions"
                  className="block mt-3 mx-4 bg-gradient-to-r from-primary-600 to-primary-700 text-white text-sm text-center px-4 py-3 rounded-lg hover:shadow-lg font-semibold"
                  onClick={() => setIsOpen(false)}
                >
                  Apply Now
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;