import React from 'react';
import { Link } from 'react-router-dom';
import { UserIcon, CreditCardIcon, AcademicCapIcon } from '@heroicons/react/24/outline';

const CollegeHeader = () => {
  return (
    <div className="bg-white py-4 border-b border-gray-200">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          
          {/* Logo and College Name */}
          <div className="flex items-center gap-4">
            {/* College Logo */}
            <img 
              src="/images/Logo.png" 
              alt="St. Andrew's College Logo"
              className="h-16 w-auto"
              onError={(e) => {
                e.target.onerror = null;
                e.target.style.display = 'none';
                e.target.parentElement.innerHTML += '<div class="w-16 h-16 bg-primary-600 rounded-lg flex items-center justify-center text-white font-bold text-2xl">SA</div>';
              }}
            />
            <div>
              <h1 className="text-2xl font-bold text-primary-700">St. Andrew's College</h1>
              <p className="text-sm text-gray-600">(GOVT. RECOGNISED & AFFILIATED TO C.B.S.E, DELHI)</p>
            </div>
          </div>

          {/* Quick Links - Updated with correct paths */}
          <div className="flex flex-wrap items-center gap-3">
            <Link 
              to="/parent/login" 
              className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-700 transition-all hover:shadow-lg hover:scale-105"
            >
              <UserIcon className="w-4 h-4" />
              Parents Login
            </Link>
            
            <Link 
              to="/online-fee" 
              className="flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded-lg text-sm font-medium hover:bg-green-700 transition-all hover:shadow-lg hover:scale-105"
            >
              <CreditCardIcon className="w-4 h-4" />
              Online Fee Payment
            </Link>
            
            <Link 
              to="/admissions" 
              className="flex items-center gap-2 px-4 py-2 bg-orange-600 text-white rounded-lg text-sm font-medium hover:bg-orange-700 transition-all hover:shadow-lg hover:scale-105"
            >
              <AcademicCapIcon className="w-4 h-4" />
              Admission Open 2026-27
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CollegeHeader;