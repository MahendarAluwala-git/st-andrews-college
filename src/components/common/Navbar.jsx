import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  Bars3Icon, XMarkIcon, HomeIcon, 
  InformationCircleIcon, AcademicCapIcon, 
  UsersIcon, ClipboardDocumentListIcon, 
  HeartIcon, BriefcaseIcon, PhotoIcon,
  NewspaperIcon, EnvelopeIcon, ChevronDownIcon
} from '@heroicons/react/24/outline';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
    { name: 'Student', path: '/student/login' },
    { name: 'Faculty', path: '/faculty/login' },
    { name: 'Admin', path: '/admin/login' },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      scrolled ? 'bg-white shadow-sm py-2' : 'bg-white/95 backdrop-blur-sm py-3'
    }`}>
      <div className="container-custom">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 flex-shrink-0">
            <div className="w-9 h-9 bg-primary-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">SA</span>
            </div>
            <span className="font-semibold text-lg text-secondary-900 hidden md:block">St. Andrew's</span>
          </Link>

          {/* Desktop Navigation - Icons + Text */}
          <div className="hidden lg:flex items-center space-x-1">
            {navItems.slice(0, 5).map((item) => {
              const Icon = item.icon;
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`flex items-center space-x-1 px-3 py-2 text-sm font-medium rounded-lg transition-colors ${
                    isActive(item.path)
                      ? 'text-primary-600 bg-primary-50'
                      : 'text-secondary-700 hover:text-primary-600 hover:bg-primary-50'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span className="hidden xl:inline">{item.name}</span>
                </Link>
              );
            })}
            
            {/* More Dropdown with Icons */}
            <div className="relative group">
              <button className="flex items-center space-x-1 px-3 py-2 text-sm font-medium text-secondary-700 hover:text-primary-600 hover:bg-primary-50 rounded-lg transition-colors">
                <span>More</span>
                <ChevronDownIcon className="w-4 h-4 group-hover:rotate-180 transition-transform" />
              </button>
              
              <div className="absolute top-full right-0 mt-2 w-56 bg-white rounded-lg shadow-lg border border-secondary-100 py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                {navItems.slice(5).map((item) => {
                  const Icon = item.icon;
                  return (
                    <Link
                      key={item.path}
                      to={item.path}
                      className={`flex items-center space-x-2 px-4 py-2 text-sm ${
                        isActive(item.path)
                          ? 'text-primary-600 bg-primary-50'
                          : 'text-secondary-700 hover:text-primary-600 hover:bg-primary-50'
                      }`}
                    >
                      <Icon className="w-4 h-4" />
                      <span>{item.name}</span>
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Portal Links */}
          <div className="hidden lg:flex items-center space-x-2">
            {portalItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className="text-sm font-medium text-secondary-600 hover:text-primary-600 transition-colors px-2"
              >
                {item.name}
              </Link>
            ))}
            <Link
              to="/admissions"
              className="btn-primary text-sm px-4 py-2"
            >
              Apply
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded-lg text-secondary-600 hover:text-primary-600 hover:bg-primary-50 transition-colors"
          >
            {isOpen ? <XMarkIcon className="w-5 h-5" /> : <Bars3Icon className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden mt-4 pb-4 border-t border-secondary-100 pt-4">
            <div className="flex flex-col space-y-2">
              {navItems.map((item) => {
                const Icon = item.icon;
                return (
                  <Link
                    key={item.path}
                    to={item.path}
                    className={`flex items-center space-x-2 px-4 py-2 text-sm font-medium rounded-lg transition-colors ${
                      isActive(item.path)
                        ? 'text-primary-600 bg-primary-50'
                        : 'text-secondary-700 hover:text-primary-600 hover:bg-primary-50'
                    }`}
                    onClick={() => setIsOpen(false)}
                  >
                    <Icon className="w-4 h-4" />
                    <span>{item.name}</span>
                  </Link>
                );
              })}
              <div className="border-t border-secondary-100 pt-2 mt-2">
                {portalItems.map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    className="block px-4 py-2 text-sm text-secondary-600 hover:text-primary-600 hover:bg-primary-50 rounded-lg"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name} Portal
                  </Link>
                ))}
                <Link
                  to="/admissions"
                  className="block mt-2 btn-primary text-sm text-center"
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