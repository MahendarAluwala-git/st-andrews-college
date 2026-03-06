import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  AcademicCapIcon,
  ClockIcon,
  UserGroupIcon,
  CurrencyDollarIcon,
  BookOpenIcon,
  ArrowRightIcon,
  CalendarIcon,
  DocumentTextIcon
} from '@heroicons/react/24/outline';
import PageHeader from '../components/ui/PageHeader';
import Navbar from '../components/common/Navbar';
import SectionTitle from '../components/ui/SectionTitle';

const AcademicsPage = () => {
  const [activeTab, setActiveTab] = useState('programs');

  const programs = {
    ug: [
      { name: 'B.Sc. Computer Science', duration: '3 Years', seats: 120, eligibility: '10+2 with Mathematics (50%)', category: 'Technology' },
      { name: 'B.Sc. Mathematics', duration: '3 Years', seats: 100, eligibility: '10+2 with Mathematics (50%)', category: 'Science' },
      { name: 'B.Sc. Physics', duration: '3 Years', seats: 80, eligibility: '10+2 with Science (50%)', category: 'Science' },
      { name: 'B.Sc. Chemistry', duration: '3 Years', seats: 80, eligibility: '10+2 with Science (50%)', category: 'Science' },
      { name: 'B.A. Economics', duration: '3 Years', seats: 100, eligibility: '10+2 Any Stream (50%)', category: 'Arts' },
      { name: 'B.Com', duration: '3 Years', seats: 150, eligibility: '10+2 Any Stream (50%)', category: 'Commerce' },
      { name: 'BBA', duration: '3 Years', seats: 100, eligibility: '10+2 Any Stream (50%)', category: 'Management' },
    ],
    pg: [
      { name: 'M.Sc. Computer Science', duration: '2 Years', seats: 60, eligibility: 'B.Sc. CS/IT (55%)', category: 'Technology' },
      { name: 'M.Sc. Mathematics', duration: '2 Years', seats: 50, eligibility: 'B.Sc. Mathematics (55%)', category: 'Science' },
      { name: 'M.Sc. Physics', duration: '2 Years', seats: 40, eligibility: 'B.Sc. Physics (55%)', category: 'Science' },
      { name: 'M.A. Economics', duration: '2 Years', seats: 50, eligibility: 'B.A. Economics (55%)', category: 'Arts' },
      { name: 'M.Com', duration: '2 Years', seats: 60, eligibility: 'B.Com (55%)', category: 'Commerce' },
      { name: 'MBA', duration: '2 Years', seats: 80, eligibility: 'Any Graduate (55%)', category: 'Management' },
    ],
    diploma: [
      { name: 'Diploma in Computer Applications', duration: '1 Year', seats: 100, eligibility: '10+2 Any Stream (45%)', category: 'Technology' },
      { name: 'Diploma in Business Management', duration: '1 Year', seats: 80, eligibility: '10+2 Any Stream (45%)', category: 'Management' },
      { name: 'Diploma in Digital Marketing', duration: '6 Months', seats: 60, eligibility: '10+2 Any Stream (45%)', category: 'Management' },
    ],
  };

  const departments = [
    { name: 'Computer Science', icon: '💻', color: 'from-blue-500 to-blue-600', students: 850, faculty: 25 },
    { name: 'Mathematics', icon: '📐', color: 'from-green-500 to-green-600', students: 450, faculty: 18 },
    { name: 'Physics', icon: '⚛️', color: 'from-purple-500 to-purple-600', students: 320, faculty: 15 },
    { name: 'Chemistry', icon: '🧪', color: 'from-red-500 to-red-600', students: 350, faculty: 16 },
    { name: 'Economics', icon: '📊', color: 'from-yellow-500 to-yellow-600', students: 400, faculty: 14 },
    { name: 'Commerce', icon: '💰', color: 'from-indigo-500 to-indigo-600', students: 600, faculty: 20 },
    { name: 'Management', icon: '📈', color: 'from-pink-500 to-pink-600', students: 550, faculty: 22 },
  ];

  const importantDates = [
    { event: 'Classes Commence', date: 'January 15, 2025', type: 'Academic' },
    { event: 'Internal Assessment I', date: 'February 10-15, 2025', type: 'Exam' },
    { event: 'Internal Assessment II', date: 'March 10-15, 2025', type: 'Exam' },
    { event: 'Practical Examinations', date: 'April 1-10, 2025', type: 'Exam' },
    { event: 'Theory Examinations', date: 'April 15-30, 2025', type: 'Exam' },
    { event: 'Vacation Begins', date: 'May 1, 2025', type: 'Holiday' },
  ];

  return (
    <div className="relative overflow-hidden">
      <PageHeader 
        title="Academics at St. Andrew's"
        subtitle="Excellence in education through innovative curriculum and experienced faculty"
        breadcrumb="Academics"
        page="academics"
      />

      {/* Navbar */}
      <Navbar />

      {/* Quick Stats */}
      <section className="py-12 sm:py-16 md:py-20 bg-white">
        <div className="container-custom px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="stat-card">
              <AcademicCapIcon className="w-10 h-10 mx-auto mb-3 text-primary-600" />
              <div className="stat-value">50+</div>
              <div className="stat-label">Programs</div>
            </div>
            <div className="stat-card">
              <UserGroupIcon className="w-10 h-10 mx-auto mb-3 text-primary-600" />
              <div className="stat-value">3500+</div>
              <div className="stat-label">Students</div>
            </div>
            <div className="stat-card">
              <BookOpenIcon className="w-10 h-10 mx-auto mb-3 text-primary-600" />
              <div className="stat-value">300+</div>
              <div className="stat-label">Faculty</div>
            </div>
            <div className="stat-card">
              <DocumentTextIcon className="w-10 h-10 mx-auto mb-3 text-primary-600" />
              <div className="stat-value">15:1</div>
              <div className="stat-label">Student-Faculty Ratio</div>
            </div>
          </div>
        </div>
      </section>

      {/* Navigation Tabs */}
      <div className="sticky top-16 z-40 py-4 bg-white border-b shadow-sm">
        <div className="container-custom">
          <div className="flex flex-wrap justify-center gap-3">
            {[
              { id: 'programs', label: 'Programs', icon: '🎓' },
              { id: 'departments', label: 'Departments', icon: '📚' },
              { id: 'curriculum', label: 'Curriculum', icon: '📋' },
              { id: 'calendar', label: 'Calendar', icon: '📅' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-300
                  ${activeTab === tab.id 
                    ? 'bg-primary-600 text-white shadow-lg' 
                    : 'bg-secondary-100 text-secondary-700 hover:bg-primary-50'}`}
              >
                <span className="mr-2">{tab.icon}</span>
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Programs Section */}
      {activeTab === 'programs' && (
        <section className="py-12 sm:py-16 md:py-20">
          <div className="container-custom px-4 sm:px-6 lg:px-8">
            <SectionTitle 
              tag="Programs Offered"
              title="Choose Your Path to Success"
              description="Explore our comprehensive range of programs designed for your future"
              centered
            />
            
            <div className="space-y-12">
              {/* UG Programs */}
              <div>
                <h3 className="text-2xl font-bold text-primary-600 mb-6">Undergraduate Programs</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {programs.ug.map((program, index) => (
                    <div key={index} className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow">
                      <span className="inline-block px-3 py-1 bg-primary-100 text-primary-800 rounded-full text-xs font-medium mb-3">
                        {program.category}
                      </span>
                      <h4 className="text-xl font-semibold mb-3">{program.name}</h4>
                      <div className="space-y-2 text-sm text-secondary-600 mb-4">
                        <p className="flex items-center">
                          <ClockIcon className="w-4 h-4 mr-2 text-primary-500" />
                          Duration: {program.duration}
                        </p>
                        <p className="flex items-center">
                          <UserGroupIcon className="w-4 h-4 mr-2 text-primary-500" />
                          Seats: {program.seats}
                        </p>
                        <p className="flex items-start">
                          <AcademicCapIcon className="w-4 h-4 mr-2 mt-0.5 text-primary-500" />
                          <span>Eligibility: {program.eligibility}</span>
                        </p>
                      </div>
                      <Link to="/admissions" className="text-primary-600 font-medium hover:text-primary-700">
                        Apply Now →
                      </Link>
                    </div>
                  ))}
                </div>
              </div>

              {/* PG Programs */}
              <div>
                <h3 className="text-2xl font-bold text-primary-600 mb-6">Postgraduate Programs</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {programs.pg.map((program, index) => (
                    <div key={index} className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow">
                      <span className="inline-block px-3 py-1 bg-primary-100 text-primary-800 rounded-full text-xs font-medium mb-3">
                        {program.category}
                      </span>
                      <h4 className="text-xl font-semibold mb-3">{program.name}</h4>
                      <div className="space-y-2 text-sm text-secondary-600 mb-4">
                        <p className="flex items-center">
                          <ClockIcon className="w-4 h-4 mr-2 text-primary-500" />
                          Duration: {program.duration}
                        </p>
                        <p className="flex items-center">
                          <UserGroupIcon className="w-4 h-4 mr-2 text-primary-500" />
                          Seats: {program.seats}
                        </p>
                        <p className="flex items-start">
                          <AcademicCapIcon className="w-4 h-4 mr-2 mt-0.5 text-primary-500" />
                          <span>Eligibility: {program.eligibility}</span>
                        </p>
                      </div>
                      <Link to="/admissions" className="text-primary-600 font-medium hover:text-primary-700">
                        Apply Now →
                      </Link>
                    </div>
                  ))}
                </div>
              </div>

              {/* Diploma Programs */}
              <div>
                <h3 className="text-2xl font-bold text-primary-600 mb-6">Diploma Programs</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {programs.diploma.map((program, index) => (
                    <div key={index} className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow">
                      <span className="inline-block px-3 py-1 bg-primary-100 text-primary-800 rounded-full text-xs font-medium mb-3">
                        {program.category}
                      </span>
                      <h4 className="text-xl font-semibold mb-3">{program.name}</h4>
                      <div className="space-y-2 text-sm text-secondary-600 mb-4">
                        <p className="flex items-center">
                          <ClockIcon className="w-4 h-4 mr-2 text-primary-500" />
                          Duration: {program.duration}
                        </p>
                        <p className="flex items-center">
                          <UserGroupIcon className="w-4 h-4 mr-2 text-primary-500" />
                          Seats: {program.seats}
                        </p>
                        <p className="flex items-start">
                          <AcademicCapIcon className="w-4 h-4 mr-2 mt-0.5 text-primary-500" />
                          <span>Eligibility: {program.eligibility}</span>
                        </p>
                      </div>
                      <Link to="/admissions" className="text-primary-600 font-medium hover:text-primary-700">
                        Apply Now →
                      </Link>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Departments Tab */}
      {activeTab === 'departments' && (
        <section className="py-12 sm:py-16 md:py-20">
          <div className="container-custom px-4 sm:px-6 lg:px-8">
            <SectionTitle 
              tag="Academic Departments"
              title="Explore Our Departments"
              description="Discover world-class departments with expert faculty"
              centered
            />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {departments.map((dept, index) => (
                <div key={index} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                  <div className={`h-32 bg-gradient-to-r ${dept.color} flex items-center justify-center`}>
                    <span className="text-5xl">{dept.icon}</span>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-3">{dept.name}</h3>
                    <div className="flex items-center justify-between text-sm text-secondary-600">
                      <span>{dept.students} Students</span>
                      <span>{dept.faculty} Faculty</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Curriculum Tab */}
      {activeTab === 'curriculum' && (
        <section className="py-12 sm:py-16 md:py-20">
          <div className="container-custom px-4 sm:px-6 lg:px-8">
            <SectionTitle 
              tag="Curriculum & Syllabus"
              title="Download Resources"
              description="Access detailed curriculum and syllabus for all programs"
              centered
            />

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {['Computer Science', 'Mathematics', 'Physics', 'Chemistry', 'Economics', 'Commerce'].map((dept, index) => (
                <div key={index} className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-semibold">{dept}</h3>
                    <DocumentTextIcon className="w-6 h-6 text-primary-500" />
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between p-3 bg-secondary-50 rounded-lg hover:bg-primary-50 transition-colors cursor-pointer">
                      <span className="text-sm">Undergraduate Syllabus</span>
                      <span className="text-xs text-primary-600">↓ PDF</span>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-secondary-50 rounded-lg hover:bg-primary-50 transition-colors cursor-pointer">
                      <span className="text-sm">Postgraduate Syllabus</span>
                      <span className="text-xs text-primary-600">↓ PDF</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Calendar Tab */}
      {activeTab === 'calendar' && (
        <section className="py-12 sm:py-16 md:py-20">
          <div className="container-custom px-4 sm:px-6 lg:px-8">
            <SectionTitle 
              tag="Academic Calendar"
              title="Important Dates 2025-26"
              description="Stay updated with key academic events and deadlines"
              centered
            />

            <div className="max-w-3xl mx-auto">
              <div className="bg-white rounded-xl shadow-md overflow-hidden">
                <div className="p-6 border-b bg-primary-50">
                  <h3 className="text-xl font-semibold text-primary-800">Even Semester (Jan - May 2025)</h3>
                </div>
                <div className="divide-y">
                  {importantDates.map((item, index) => (
                    <div key={index} className="flex items-center justify-between p-4 hover:bg-secondary-50 transition-colors">
                      <div className="flex items-center gap-3">
                        <CalendarIcon className={`w-5 h-5 ${
                          item.type === 'Exam' ? 'text-orange-500' : 
                          item.type === 'Academic' ? 'text-blue-500' : 'text-green-500'
                        }`} />
                        <span className="font-medium">{item.event}</span>
                      </div>
                      <span className="text-secondary-600">{item.date}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="text-center mt-8">
                <button className="btn-primary">
                  Download Full Calendar
                </button>
              </div>
            </div>
          </div>
        </section>
      )}
    </div>
  );
};

export default AcademicsPage;