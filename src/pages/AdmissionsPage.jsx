import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRightIcon,
  CalendarIcon,
  CurrencyDollarIcon,
  CheckCircleIcon,
  ClockIcon,
  GiftIcon,
  UserGroupIcon,
  DocumentTextIcon,
  CreditCardIcon,
  AcademicCapIcon
} from '@heroicons/react/24/outline';
import PageHeader from '../components/ui/PageHeader';
import SectionTitle from '../components/ui/SectionTitle';
import { courses } from '../data/collegeData';
import { imageUrls } from '../data/imageUrls';

const AdmissionsPage = () => {
  const [activeTab, setActiveTab] = useState('process');

  const steps = [
    { 
      number: '01', 
      title: 'Register Online', 
      description: 'Create your account on our admission portal with basic details',
      icon: '📝',
      image: imageUrls.campus.students,
      color: 'from-blue-500 to-blue-600',
      details: ['Fill basic information', 'Create login credentials', 'Verify email address']
    },
    { 
      number: '02', 
      title: 'Fill Application', 
      description: 'Complete the application form with personal and academic details',
      icon: '📋',
      image: imageUrls.campus.lab,
      color: 'from-green-500 to-green-600',
      details: ['Personal information', 'Educational background', 'Program selection']
    },
    { 
      number: '03', 
      title: 'Upload Documents', 
      description: 'Submit required certificates, photos, and supporting documents',
      icon: '📎',
      image: imageUrls.campus.library,
      color: 'from-purple-500 to-purple-600',
      details: ['10th/12th mark sheets', 'Transfer certificate', 'Passport photos', 'ID proof']
    },
    { 
      number: '04', 
      title: 'Application Fee', 
      description: 'Pay the application fee online through secure payment gateway',
      icon: '💰',
      image: imageUrls.campus.building,
      color: 'from-yellow-500 to-yellow-600',
      details: ['₹500 application fee', 'Multiple payment options', 'Instant confirmation']
    },
    { 
      number: '05', 
      title: 'Entrance Test', 
      description: 'Appear for entrance exam (if applicable for your program)',
      icon: '📝',
      image: imageUrls.campus.auditorium,
      color: 'from-red-500 to-red-600',
      details: ['Program-specific test', 'Online/offline mode', 'Sample papers available']
    },
{ 
  number: '06', 
  title: 'Counselling', 
  description: 'Merit-based seat allotment and personal counselling session',
  icon: '🎯',
  image: 'https://images.pexels.com/photos/3768911/pexels-photo-3768911.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
  color: 'from-indigo-500 to-indigo-600',
  details: ['Merit list publication', 'Document verification', 'Seat acceptance']
},
    { 
      number: '07', 
      title: 'Pay Fees', 
      description: 'Complete the fee payment and confirm your admission',
      icon: '💳',
      image: imageUrls.campus.sports,
      color: 'from-pink-500 to-pink-600',
      details: ['Semester fee payment', 'Hostel booking', 'Transport options']
    },
    { 
      number: '08', 
      title: 'Welcome Aboard', 
      description: 'Receive enrollment confirmation and join orientation program',
      icon: '🎓',
      image: imageUrls.campus.students,
      color: 'from-teal-500 to-teal-600',
      details: ['Student ID card', 'Email account', 'Orientation schedule']
    },
  ];

  const importantDates = [
    { event: 'Application Starts', date: 'January 15, 2025', status: 'Ongoing', icon: '📅', color: 'green' },
    { event: 'Application Deadline', date: 'March 31, 2025', status: 'Upcoming', icon: '⏰', color: 'yellow' },
    { event: 'Entrance Exam', date: 'April 15, 2025', status: 'Upcoming', icon: '📝', color: 'blue' },
    { event: 'Merit List', date: 'May 10, 2025', status: 'Upcoming', icon: '📊', color: 'purple' },
    { event: 'Counseling', date: 'May 20, 2025', status: 'Upcoming', icon: '🤝', color: 'indigo' },
    { event: 'Classes Begin', date: 'July 1, 2025', status: 'Upcoming', icon: '🎓', color: 'orange' },
  ];

  const scholarships = [
    {
      name: 'Merit Scholarship',
      amount: '100% Tuition Fee',
      eligibility: 'Top 5% in entrance exam',
      criteria: 'Maintain 85%+ throughout',
      icon: '🏆',
      color: 'from-yellow-400 to-yellow-600',
      image: imageUrls.campus.auditorium,
    },
    {
      name: 'Sports Quota',
      amount: '50% Tuition Fee',
      eligibility: 'State/National level players',
      criteria: 'Active participation',
      icon: '⚽',
      color: 'from-green-400 to-green-600',
      image: imageUrls.campus.sports,
    },
    {
      name: 'EWS Scholarship',
      amount: '100% Tuition Fee',
      eligibility: 'Family income < ₹5 LPA',
      criteria: 'Maintain 75% attendance',
      icon: '🤝',
      color: 'from-blue-400 to-blue-600',
      image: imageUrls.campus.building,
    },
    {
      name: 'Girl Child Scholarship',
      amount: '25% Tuition Fee',
      eligibility: 'All girl students',
      criteria: 'Automatic consideration',
      icon: '👩‍🎓',
      color: 'from-pink-400 to-pink-600',
      image: imageUrls.campus.students,
    },
  ];

  const faqs = [
    {
      q: 'What is the application deadline?',
      a: 'The last date to apply is March 31, 2025. Early applications are encouraged.',
    },
    {
      q: 'Is there an entrance exam?',
      a: 'Yes, for certain programs like B.Tech, MBA, and M.Sc. Details will be shared after application submission.',
    },
    {
      q: 'Can I apply for multiple programs?',
      a: 'Yes, you can apply for up to 3 programs with a single application form.',
    },
    {
      q: 'What documents are required?',
      a: 'Mark sheets (10th, 12th), graduation certificates, ID proof, passport size photos, and category certificate (if applicable).',
    },
    {
      q: 'Is there any age limit?',
      a: 'No, there is no age limit for admission to any program at St. Andrew\'s College.',
    },
  ];

  return (
    <div>
      <PageHeader 
        title="Admissions 2025-26"
        subtitle="Begin your journey at St. Andrew's College. Applications now open for all programs."
        breadcrumb="Admissions"
      />

      {/* Tab Navigation */}
      <div className="bg-white border-b">
        <div className="container-custom">
          <div className="flex flex-wrap justify-center gap-2 py-4">
            {[
              { id: 'process', label: 'Process', icon: '📋' },
              { id: 'dates', label: 'Dates', icon: '📅' },
              { id: 'programs', label: 'Programs', icon: '🎓' },
              { id: 'fees', label: 'Fees', icon: '💰' },
              { id: 'scholarships', label: 'Scholarships', icon: '🎁' },
              { id: 'faq', label: 'FAQ', icon: '❓' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-4 sm:px-6 py-2 rounded-full text-xs sm:text-sm font-medium transition-colors
                  ${activeTab === tab.id 
                    ? 'bg-primary-600 text-white shadow-md' 
                    : 'bg-secondary-100 text-secondary-700 hover:bg-primary-50'}`}
              >
                <span className="mr-1 sm:mr-2">{tab.icon}</span>
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Process Section - IMPROVED DESIGN */}
      {activeTab === 'process' && (
        <section className="py-16 bg-gradient-to-b from-white to-secondary-50">
          <div className="container-custom">
            <SectionTitle 
              tag="Step by Step"
              title="Admission Process"
              description="Follow these 8 simple steps to complete your application successfully"
              centered
            />

            {/* Timeline Style Process */}
            <div className="relative mt-16">
              {/* Timeline Line (hidden on mobile) */}
              <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-primary-200 via-primary-400 to-primary-200 transform -translate-x-1/2"></div>
              
              <div className="space-y-12">
                {steps.map((step, index) => (
                  <div key={index} className={`relative flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-8 lg:gap-12`}>
                    {/* Timeline Dot */}
                    <div className="hidden lg:block absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
                      <div className={`w-8 h-8 rounded-full bg-gradient-to-r ${step.color} border-4 border-white shadow-lg flex items-center justify-center text-white text-xs font-bold`}>
                        {index + 1}
                      </div>
                    </div>

                    {/* Image Side */}
                    <div className="w-full lg:w-1/2">
                      <div className="relative group overflow-hidden rounded-2xl shadow-xl">
                        <img 
                          src={step.image} 
                          alt={step.title}
                          className="w-full h-56 sm:h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                          <div className="text-white">
                            <div className="flex items-center gap-2 mb-1">
                              <span className="text-2xl">{step.icon}</span>
                              <span className="text-sm font-medium bg-white/20 px-3 py-1 rounded-full">Step {step.number}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Content Side */}
                    <div className="w-full lg:w-1/2">
                      <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
                        <div className="flex items-center gap-3 mb-4">
                          <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${step.color} flex items-center justify-center text-white text-xl font-bold`}>
                            {step.number}
                          </div>
                          <div>
                            <span className="text-sm text-primary-600 font-medium">Step {step.number}</span>
                            <h3 className="text-xl sm:text-2xl font-bold text-secondary-900">{step.title}</h3>
                          </div>
                        </div>
                        
                        <p className="text-secondary-600 mb-4 text-sm sm:text-base">{step.description}</p>
                        
                        <ul className="space-y-2 mb-6">
                          {step.details.map((detail, i) => (
                            <li key={i} className="flex items-start gap-2 text-sm text-secondary-600">
                              <CheckCircleIcon className="w-4 h-4 text-primary-500 mt-0.5 flex-shrink-0" />
                              <span>{detail}</span>
                            </li>
                          ))}
                        </ul>

                        {index === 0 && (
                          <Link to="/admissions/apply" className="btn-primary inline-flex">
                            Start Application
                            <ArrowRightIcon className="w-4 h-4 ml-2" />
                          </Link>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-16">
              <div className="bg-white p-4 rounded-xl text-center shadow-sm">
                <div className="text-2xl font-bold text-primary-600">8</div>
                <div className="text-xs text-secondary-600">Simple Steps</div>
              </div>
              <div className="bg-white p-4 rounded-xl text-center shadow-sm">
                <div className="text-2xl font-bold text-primary-600">15</div>
                <div className="text-xs text-secondary-600">Minutes</div>
              </div>
              <div className="bg-white p-4 rounded-xl text-center shadow-sm">
                <div className="text-2xl font-bold text-primary-600">24/7</div>
                <div className="text-xs text-secondary-600">Support</div>
              </div>
              <div className="bg-white p-4 rounded-xl text-center shadow-sm">
                <div className="text-2xl font-bold text-primary-600">100%</div>
                <div className="text-xs text-secondary-600">Online</div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Important Dates */}
      {activeTab === 'dates' && (
        <section className="py-16 bg-white">
          <div className="container-custom">
            <SectionTitle 
              tag="Timeline"
              title="Important Dates"
              description="Mark your calendar for key admission deadlines"
              centered
            />

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {importantDates.map((item, index) => (
                <div key={index} className="bg-secondary-50 p-6 rounded-xl hover:shadow-lg transition-shadow">
                  <div className="flex items-start gap-4">
                    <div className={`text-3xl`}>{item.icon}</div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-secondary-900 mb-1">{item.event}</h3>
                      <p className="text-sm text-secondary-600 mb-2">{item.date}</p>
                      <span className={`inline-flex px-3 py-1 rounded-full text-xs font-medium
                        ${item.color === 'green' ? 'bg-green-100 text-green-800' : 
                          item.color === 'yellow' ? 'bg-yellow-100 text-yellow-800' :
                          item.color === 'blue' ? 'bg-blue-100 text-blue-800' :
                          item.color === 'purple' ? 'bg-purple-100 text-purple-800' :
                          item.color === 'indigo' ? 'bg-indigo-100 text-indigo-800' :
                          'bg-orange-100 text-orange-800'}`}>
                        {item.status}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Programs */}
      {activeTab === 'programs' && (
        <section className="py-16 bg-secondary-50">
          <div className="container-custom">
            <SectionTitle 
              tag="Programs Offered"
              title="Choose Your Program"
              description="Select from our wide range of undergraduate and postgraduate programs"
              centered
            />

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {courses.map((course) => (
                <div key={course.id} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300">
                  <div className="h-48 overflow-hidden">
                    <img 
                      src={course.image || imageUrls.courses[course.category.toLowerCase()] || imageUrls.campus.lab} 
                      alt={course.name}
                      className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-semibold mb-2">{course.name}</h3>
                    <div className="space-y-2 text-sm text-secondary-600 mb-4">
                      <p className="flex items-center">
                        <ClockIcon className="w-4 h-4 mr-2 text-primary-500" />
                        Duration: {course.duration}
                      </p>
                      <p className="flex items-center">
                        <UserGroupIcon className="w-4 h-4 mr-2 text-primary-500" />
                        Seats: {course.seats}
                      </p>
                    </div>
                    <p className="text-xs text-secondary-500 mb-4">
                      Eligibility: {course.eligibility}
                    </p>
                    <button className="text-primary-600 font-medium hover:text-primary-700 flex items-center">
                      View Details
                      <ArrowRightIcon className="w-4 h-4 ml-1" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Fee Structure */}
      {activeTab === 'fees' && (
        <section className="py-16 bg-white">
          <div className="container-custom">
            <SectionTitle 
              tag="Fee Structure"
              title="Program-Wise Fees 2025-26"
              description="Competitive fees with flexible payment options"
              centered
            />

            <div className="overflow-x-auto bg-white rounded-xl shadow-lg">
              <table className="w-full">
                <thead className="bg-primary-600 text-white">
                  <tr>
                    <th className="px-6 py-4 text-left">Program</th>
                    <th className="px-6 py-4 text-left">Duration</th>
                    <th className="px-6 py-4 text-left">Tuition Fee</th>
                    <th className="px-6 py-4 text-left">Total</th>
                  </tr>
                </thead>
                <tbody className="divide-y">
                  {courses.map((course) => (
                    <tr key={course.id} className="hover:bg-secondary-50">
                      <td className="px-6 py-4 font-medium">{course.name}</td>
                      <td className="px-6 py-4">{course.duration}</td>
                      <td className="px-6 py-4">{course.fees}</td>
                      <td className="px-6 py-4 font-semibold text-primary-600">
                        {course.fees}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="mt-8 p-6 bg-primary-50 rounded-xl">
              <div className="flex items-start gap-4">
                <GiftIcon className="w-8 h-8 text-primary-600 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold mb-2">Additional Benefits</h4>
                  <p className="text-secondary-600">
                    • 10% discount for siblings • 5% discount for early payment • 
                    Installment facility available • Education loan assistance
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Scholarships */}
      {activeTab === 'scholarships' && (
        <section className="py-16 bg-secondary-50">
          <div className="container-custom">
            <SectionTitle 
              tag="Financial Aid"
              title="Scholarships"
              description="Making quality education accessible to all"
              centered
            />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {scholarships.map((scholarship, index) => (
                <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden">
                  <div className="h-40 overflow-hidden">
                    <img 
                      src={scholarship.image} 
                      alt={scholarship.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <h3 className="text-xl font-bold">{scholarship.name}</h3>
                      <span className={`bg-gradient-to-r ${scholarship.color} text-white px-4 py-2 rounded-full text-sm font-bold`}>
                        {scholarship.amount}
                      </span>
                    </div>
                    <div className="space-y-3">
                      <div className="flex items-start gap-2">
                        <CheckCircleIcon className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                        <p className="text-secondary-600"><span className="font-medium">Eligibility:</span> {scholarship.eligibility}</p>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircleIcon className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                        <p className="text-secondary-600"><span className="font-medium">Criteria:</span> {scholarship.criteria}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* FAQ */}
      {activeTab === 'faq' && (
        <section className="py-16 bg-white">
          <div className="container-custom">
            <SectionTitle 
              tag="Got Questions?"
              title="Frequently Asked Questions"
              description="Find answers to common questions about admissions"
              centered
            />

            <div className="max-w-3xl mx-auto space-y-4">
              {faqs.map((faq, index) => (
                <div key={index} className="bg-secondary-50 rounded-xl p-6 hover:shadow-md transition-shadow">
                  <h3 className="font-semibold mb-2 flex items-center gap-2">
                    <span className="text-primary-600">Q{index + 1}:</span> {faq.q}
                  </h3>
                  <p className="text-secondary-600 flex items-start gap-2">
                    <span className="text-primary-600 font-medium">A:</span> {faq.a}
                  </p>
                </div>
              ))}
            </div>

            <div className="text-center mt-8">
              <Link to="/contact" className="btn-outline">
                Still have questions? Contact Us
              </Link>
            </div>
          </div>
        </section>
      )}
    </div>
  );
};

export default AdmissionsPage;