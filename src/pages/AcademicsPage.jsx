import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  AcademicCapIcon,
  ClockIcon,
  UserGroupIcon,
  CurrencyDollarIcon,
  BookOpenIcon,
  ArrowRightIcon
} from '@heroicons/react/24/outline';
import PageHeader from '../components/ui/PageHeader';

const AcademicsPage = () => {
  const [activeTab, setActiveTab] = useState('programs');

  const programs = {
    ug: [
      { name: 'B.Sc. Computer Science', duration: '3 Years', seats: 120, eligibility: '10+2 with Mathematics (50%)' },
      { name: 'B.Sc. Mathematics', duration: '3 Years', seats: 100, eligibility: '10+2 with Mathematics (50%)' },
      { name: 'B.Sc. Physics', duration: '3 Years', seats: 80, eligibility: '10+2 with Science (50%)' },
      { name: 'B.Sc. Chemistry', duration: '3 Years', seats: 80, eligibility: '10+2 with Science (50%)' },
      { name: 'B.A. Economics', duration: '3 Years', seats: 100, eligibility: '10+2 Any Stream (50%)' },
      { name: 'B.Com', duration: '3 Years', seats: 150, eligibility: '10+2 Any Stream (50%)' },
      { name: 'BBA', duration: '3 Years', seats: 100, eligibility: '10+2 Any Stream (50%)' },
    ],
    pg: [
      { name: 'M.Sc. Computer Science', duration: '2 Years', seats: 60, eligibility: 'B.Sc. CS/IT (55%)' },
      { name: 'M.Sc. Mathematics', duration: '2 Years', seats: 50, eligibility: 'B.Sc. Mathematics (55%)' },
      { name: 'M.Sc. Physics', duration: '2 Years', seats: 40, eligibility: 'B.Sc. Physics (55%)' },
      { name: 'M.A. Economics', duration: '2 Years', seats: 50, eligibility: 'B.A. Economics (55%)' },
      { name: 'M.Com', duration: '2 Years', seats: 60, eligibility: 'B.Com (55%)' },
      { name: 'MBA', duration: '2 Years', seats: 80, eligibility: 'Any Graduate (55%)' },
    ],
    diploma: [
      { name: 'Diploma in Computer Applications', duration: '1 Year', seats: 100, eligibility: '10+2 Any Stream (45%)' },
      { name: 'Diploma in Business Management', duration: '1 Year', seats: 80, eligibility: '10+2 Any Stream (45%)' },
      { name: 'Diploma in Digital Marketing', duration: '6 Months', seats: 60, eligibility: '10+2 Any Stream (45%)' },
    ],
  };

  const departments = [
    'Computer Science', 'Mathematics', 'Physics', 'Chemistry', 'Economics', 'Commerce', 'Management Studies'
  ];

  const importantDates = [
    { event: 'Classes Commence', date: 'January 15, 2025' },
    { event: 'Internal Assessment I', date: 'February 10-15, 2025' },
    { event: 'Internal Assessment II', date: 'March 10-15, 2025' },
    { event: 'Practical Examinations', date: 'April 1-10, 2025' },
    { event: 'Theory Examinations', date: 'April 15-30, 2025' },
  ];

  return (
    <div>
      {/* Hero Section - Responsive */}
      <section className="relative py-16 sm:py-20 md:py-24 lg:py-28 bg-gradient-to-r from-primary-600 to-primary-700 text-white">
        <div className="container-custom px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-3 sm:mb-4">Academics at St. Andrew's</h1>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-white/90 max-w-3xl mx-auto px-4">
            Excellence in education through innovative curriculum and experienced faculty
          </p>
        </div>
      </section>

      {/* Navigation Tabs - Responsive */}
      <section className="py-4 sm:py-6 bg-white border-b top-16 z-40 shadow-sm">
        <div className="container-custom px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-2">
            {[
              { id: 'programs', label: 'Programs', icon: '🎓' },
              { id: 'departments', label: 'Departments', icon: '📚' },
              { id: 'curriculum', label: 'Curriculum', icon: '📋' },
              { id: 'calendar', label: 'Calendar', icon: '📅' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-3 sm:px-4 md:px-6 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-medium transition-colors
                  ${activeTab === tab.id 
                    ? 'bg-primary-600 text-white' 
                    : 'bg-secondary-100 text-secondary-700 hover:bg-primary-50'}`}
              >
                <span className="mr-1 sm:mr-2">{tab.icon}</span>
                <span className="hidden xs:inline">{tab.label}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Programs Section - Responsive */}
      {activeTab === 'programs' && (
        <section className="py-12 sm:py-16">
          <div className="container-custom px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-6 sm:mb-8">Programs Offered</h2>
            
            <div className="space-y-8 sm:space-y-10">
              {/* UG Programs */}
              <div>
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-4 text-primary-600">Undergraduate Programs</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
                  {programs.ug.map((program) => (
                    <div key={program.name} className="bg-white p-4 sm:p-5 md:p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                      <h4 className="text-sm sm:text-base font-semibold mb-2">{program.name}</h4>
                      <div className="space-y-1 text-xs sm:text-sm text-secondary-600">
                        <p className="flex items-center">
                          <ClockIcon className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
                          Duration: {program.duration}
                        </p>
                        <p className="flex items-center">
                          <UserGroupIcon className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
                          Seats: {program.seats}
                        </p>
                        <p className="flex items-start">
                          <AcademicCapIcon className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2 mt-0.5" />
                          <span className="text-xs sm:text-sm">Eligibility: {program.eligibility}</span>
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* PG Programs */}
              <div>
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-4 text-primary-600">Postgraduate Programs</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
                  {programs.pg.map((program) => (
                    <div key={program.name} className="bg-white p-4 sm:p-5 md:p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                      <h4 className="text-sm sm:text-base font-semibold mb-2">{program.name}</h4>
                      <div className="space-y-1 text-xs sm:text-sm text-secondary-600">
                        <p className="flex items-center">
                          <ClockIcon className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
                          Duration: {program.duration}
                        </p>
                        <p className="flex items-center">
                          <UserGroupIcon className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
                          Seats: {program.seats}
                        </p>
                        <p className="flex items-start">
                          <AcademicCapIcon className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2 mt-0.5" />
                          <span className="text-xs sm:text-sm">Eligibility: {program.eligibility}</span>
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Diploma Programs */}
              <div>
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-4 text-primary-600">Diploma Programs</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
                  {programs.diploma.map((program) => (
                    <div key={program.name} className="bg-white p-4 sm:p-5 md:p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                      <h4 className="text-sm sm:text-base font-semibold mb-2">{program.name}</h4>
                      <div className="space-y-1 text-xs sm:text-sm text-secondary-600">
                        <p className="flex items-center">
                          <ClockIcon className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
                          Duration: {program.duration}
                        </p>
                        <p className="flex items-center">
                          <UserGroupIcon className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
                          Seats: {program.seats}
                        </p>
                        <p className="flex items-start">
                          <AcademicCapIcon className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2 mt-0.5" />
                          <span className="text-xs sm:text-sm">Eligibility: {program.eligibility}</span>
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Departments Section - Responsive */}
      {activeTab === 'departments' && (
        <section className="py-12 sm:py-16">
          <div className="container-custom px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-6 sm:mb-8">Academic Departments</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
              {departments.map((dept) => (
                <div key={dept} className="bg-white p-4 sm:p-5 md:p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                  <BookOpenIcon className="w-6 h-6 sm:w-8 sm:h-8 text-primary-500 mb-2 sm:mb-3" />
                  <h3 className="text-sm sm:text-base font-semibold">{dept}</h3>
                  <p className="text-xs sm:text-sm text-secondary-600 mt-1">
                    {dept} department with state-of-the-art facilities
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Curriculum Section - Responsive */}
      {activeTab === 'curriculum' && (
        <section className="py-12 sm:py-16">
          <div className="container-custom px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-6 sm:mb-8">Curriculum & Syllabus</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
              {['Computer Science', 'Mathematics', 'Physics', 'Chemistry', 'Economics', 'Commerce'].map((dept) => (
                <div key={dept} className="bg-white p-4 sm:p-5 md:p-6 rounded-xl shadow-sm">
                  <h3 className="text-sm sm:text-base font-semibold mb-3">{dept}</h3>
                  <div className="space-y-2">
                    <button className="w-full text-left px-3 py-2 bg-secondary-50 rounded-lg hover:bg-secondary-100 transition-colors flex justify-between items-center text-xs sm:text-sm">
                      <span>B.Sc. {dept} - Semester 1-6</span>
                      <span className="text-primary-500">📄</span>
                    </button>
                    <button className="w-full text-left px-3 py-2 bg-secondary-50 rounded-lg hover:bg-secondary-100 transition-colors flex justify-between items-center text-xs sm:text-sm">
                      <span>M.Sc. {dept} - Semester 1-4</span>
                      <span className="text-primary-500">📄</span>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Calendar Section - Responsive */}
      {activeTab === 'calendar' && (
        <section className="py-12 sm:py-16">
          <div className="container-custom px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-6 sm:mb-8">Academic Calendar 2024-25</h2>
            <div className="bg-white rounded-xl shadow-sm overflow-hidden">
              <div className="p-4 sm:p-5 md:p-6 border-b">
                <h3 className="text-base sm:text-lg md:text-xl font-semibold">Even Semester (Jan - May 2025)</h3>
              </div>
              <div className="divide-y">
                {importantDates.map((item) => (
                  <div key={item.event} className="flex flex-col xs:flex-row justify-between items-start xs:items-center p-3 sm:p-4 hover:bg-secondary-50 gap-1 xs:gap-0">
                    <span className="text-xs sm:text-sm font-medium">{item.event}</span>
                    <span className="text-xs sm:text-sm text-secondary-600">{item.date}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="text-center mt-6 sm:mt-8">
              <button className="btn-primary px-6 py-2.5 sm:px-8 sm:py-3 text-sm sm:text-base">
                Download Full Calendar
              </button>
            </div>
          </div>
        </section>
      )}
    </div>
  );
};

export default AcademicsPage;