import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRightIcon,
  CalendarIcon,
  CurrencyDollarIcon,
  CheckCircleIcon,
  ClockIcon,
  GiftIcon,
  AcademicCapIcon,
  UserGroupIcon
} from '@heroicons/react/24/outline';
import PageHeader from '../components/ui/PageHeader';
import SectionTitle from '../components/ui/SectionTitle';
import { courses } from '../data/collegeData';

const AdmissionsPage = () => {
  const [activeTab, setActiveTab] = useState('process');
  const [isSticky, setIsSticky] = useState(false);
  
  // Refs for each section
  const processRef = useRef(null);
  const datesRef = useRef(null);
  const programsRef = useRef(null);
  const feesRef = useRef(null);
  const scholarshipsRef = useRef(null);
  const faqRef = useRef(null);

  // Handle scroll for sticky navbar
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsSticky(scrollPosition > 400);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Function to scroll to section
  const scrollToSection = (sectionRef, tabId) => {
    setActiveTab(tabId);
    if (sectionRef.current) {
      const yOffset = -150; // Offset for sticky headers (navbar 64px + tabs 60px + extra space)
      const y = sectionRef.current.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  const steps = [
    { number: '01', title: 'Register', description: 'Create an account on our portal', icon: '📝', image: 'https://images.unsplash.com/photo-1516321497487-e288fb19713f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' },
    { number: '02', title: 'Fill Application', description: 'Complete the application form', icon: '📋', image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' },
    { number: '03', title: 'Upload Documents', description: 'Submit required documents', icon: '📎', image: 'https://images.unsplash.com/photo-1586281380349-632531db7ed4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' },
    { number: '04', title: 'Pay Fee', description: 'Pay the application fee', icon: '💰', image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' },
    { number: '05', title: 'Submit', description: 'Review and submit your application', icon: '✅', image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' },
  ];

  const importantDates = [
    { event: 'Application Starts', date: 'January 15, 2025', status: 'Ongoing', icon: '📅', image: 'https://images.unsplash.com/photo-1506784365847-bbad939e9335?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' },
    { event: 'Application Deadline', date: 'March 31, 2025', status: 'Upcoming', icon: '⏰', image: 'https://images.unsplash.com/photo-1506784365847-bbad939e9335?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' },
    { event: 'Entrance Exam', date: 'April 15, 2025', status: 'Upcoming', icon: '📝', image: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' },
    { event: 'Merit List', date: 'May 10, 2025', status: 'Upcoming', icon: '📊', image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' },
    { event: 'Counseling', date: 'May 20, 2025', status: 'Upcoming', icon: '🤝', image: 'https://images.unsplash.com/photo-1517048676732-d65bc937f952?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' },
    { event: 'Classes Begin', date: 'July 1, 2025', status: 'Upcoming', icon: '🎓', image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' },
  ];

  const scholarships = [
    {
      name: 'Merit Scholarship',
      amount: '100% Tuition Fee',
      eligibility: 'Top 5% in entrance exam',
      criteria: 'Maintain 85%+ throughout',
      icon: '🏆',
      image: 'https://images.unsplash.com/photo-1567427017947-545c5f8d16ad?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    },
    {
      name: 'Sports Quota',
      amount: '50% Tuition Fee',
      eligibility: 'State/National level players',
      criteria: 'Active participation',
      icon: '⚽',
      image: 'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    },
    {
      name: 'EWS Scholarship',
      amount: '100% Tuition Fee',
      eligibility: 'Family income < ₹5 LPA',
      criteria: 'Maintain 75% attendance',
      icon: '🤝',
      image: 'https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    },
    {
      name: 'Girl Child Scholarship',
      amount: '25% Tuition Fee',
      eligibility: 'All girl students',
      criteria: 'Automatic consideration',
      icon: '👩‍🎓',
      image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    },
  ];

  const faqs = [
    {
      q: 'What is the application deadline?',
      a: 'The last date to apply is March 31, 2025. Early applications are encouraged.',
    },
    {
      q: 'Is there an entrance exam?',
      a: 'Yes, for certain programs. Details will be shared after application submission.',
    },
    {
      q: 'Can I apply for multiple programs?',
      a: 'Yes, you can apply for up to 3 programs with a single application.',
    },
    {
      q: 'What documents are required?',
      a: 'Mark sheets, certificates, ID proof, passport size photos, and category certificate (if applicable).',
    },
  ];

  return (
    <div>
      <PageHeader 
        title="Admissions 2025-26"
        subtitle="Begin your journey at St. Andrew's College. Applications now open for all programs."
        image="https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
        breadcrumb="Admissions"
      />

      {/* Tab Navigation */}
      <div className="bg-white border-b transition-all duration-300 z-40">
        <div className="container-custom">
          <div className="flex flex-wrap justify-center gap-2 py-4">
            <button
              onClick={() => scrollToSection(processRef, 'process')}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-300 flex items-center gap-2
                ${activeTab === 'process' 
                  ? 'bg-primary-600 text-white shadow-lg' 
                  : 'bg-secondary-100 text-secondary-700 hover:bg-primary-50 hover:text-primary-600'}`}
            >
              <span>📋</span>
              Process
            </button>
            <button
              onClick={() => scrollToSection(datesRef, 'dates')}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-300 flex items-center gap-2
                ${activeTab === 'dates' 
                  ? 'bg-primary-600 text-white shadow-lg' 
                  : 'bg-secondary-100 text-secondary-700 hover:bg-primary-50 hover:text-primary-600'}`}
            >
              <span>📅</span>
              Dates
            </button>
            <button
              onClick={() => scrollToSection(programsRef, 'programs')}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-300 flex items-center gap-2
                ${activeTab === 'programs' 
                  ? 'bg-primary-600 text-white shadow-lg' 
                  : 'bg-secondary-100 text-secondary-700 hover:bg-primary-50 hover:text-primary-600'}`}
            >
              <span>🎓</span>
              Programs
            </button>
            <button
              onClick={() => scrollToSection(feesRef, 'fees')}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-300 flex items-center gap-2
                ${activeTab === 'fees' 
                  ? 'bg-primary-600 text-white shadow-lg' 
                  : 'bg-secondary-100 text-secondary-700 hover:bg-primary-50 hover:text-primary-600'}`}
            >
              <span>💰</span>
              Fees
            </button>
            <button
              onClick={() => scrollToSection(scholarshipsRef, 'scholarships')}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-300 flex items-center gap-2
                ${activeTab === 'scholarships' 
                  ? 'bg-primary-600 text-white shadow-lg' 
                  : 'bg-secondary-100 text-secondary-700 hover:bg-primary-50 hover:text-primary-600'}`}
            >
              <span>🎁</span>
              Scholarships
            </button>
            <button
              onClick={() => scrollToSection(faqRef, 'faq')}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-300 flex items-center gap-2
                ${activeTab === 'faq' 
                  ? 'bg-primary-600 text-white shadow-lg' 
                  : 'bg-secondary-100 text-secondary-700 hover:bg-primary-50 hover:text-primary-600'}`}
            >
              <span>❓</span>
              FAQ
            </button>
          </div>
        </div>
      </div>

      {/* Process Section */}
      <section ref={processRef} className="py-20 pt-32 -mt-12" id="process">
        <div className="container-custom">
          <SectionTitle 
            title="Admission Process"
            subtitle="Follow these simple steps to complete your application"
          />

          <div className="grid md:grid-cols-5 gap-4">
            {steps.map((step, index) => (
              <div key={step.number} className="relative group">
                <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
                  <img 
                    src={step.image} 
                    alt={step.title}
                    className="w-full h-32 object-cover"
                  />
                  <div className="p-4 text-center">
                    <div className="w-12 h-12 bg-primary-600 text-white rounded-full flex items-center justify-center text-lg font-bold mx-auto -mt-8 mb-3 border-4 border-white">
                      {step.number}
                    </div>
                    <h3 className="font-semibold mb-1">{step.title}</h3>
                    <p className="text-xs text-secondary-600">{step.description}</p>
                  </div>
                </div>
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-2 transform -translate-y-1/2 text-primary-400 text-xl">
                    →
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/admissions/apply" className="btn-primary text-lg px-8 py-3">
              Start Application
              <ArrowRightIcon className="w-5 h-5 ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* Important Dates*/}
      <section ref={datesRef} className="py-20 bg-secondary-50 pt-32 -mt-12" id="dates">
        <div className="container-custom">
          <SectionTitle 
            title="Important Dates"
            subtitle="Mark your calendar for key admission deadlines"
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {importantDates.map((item) => (
              <div key={item.event} className="bg-white rounded-2xl shadow-lg overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.event}
                  className="w-full h-32 object-cover"
                />
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-3xl">{item.icon}</span>
                    <h3 className="font-semibold">{item.event}</h3>
                  </div>
                  <p className="text-sm text-secondary-500 mb-3">{item.date}</p>
                  <span className={`inline-flex px-3 py-1 rounded-full text-xs font-medium
                    ${item.status === 'Ongoing' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'}`}>
                    {item.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Programs  */}
      <section ref={programsRef} className="py-20 bg-white pt-32 -mt-12" id="programs">
        <div className="container-custom">
          <SectionTitle 
            title="Programs Offered"
            subtitle="Choose from our wide range of programs"
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {courses.map((course) => (
              <div key={course.id} className="bg-white rounded-2xl shadow-lg overflow-hidden border border-secondary-100">
                <img 
                  src={course.image} 
                  alt={course.name}
                  className="w-full h-40 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-lg font-semibold mb-2">{course.name}</h3>
                  <div className="space-y-1 text-sm text-secondary-600 mb-4">
                    <p className="flex items-center">
                      <ClockIcon className="w-4 h-4 mr-2 text-primary-500" />
                      Duration: {course.duration}
                    </p>
                    <p className="flex items-center">
                      <UserGroupIcon className="w-4 h-4 mr-2 text-primary-500" />
                      Seats: {course.seats}
                    </p>
                    <p className="flex items-center">
                      <CurrencyDollarIcon className="w-4 h-4 mr-2 text-primary-500" />
                      Fees: {course.fees}
                    </p>
                  </div>
                  <p className="text-xs text-secondary-500 mb-3">
                    Eligibility: {course.eligibility}
                  </p>
                  <button className="text-primary-600 font-medium text-sm hover:text-primary-700">
                    View Details →
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Fee Structure - Add pt-20 to account for sticky header */}
      <section ref={feesRef} className="py-20 bg-secondary-50 pt-32 -mt-12" id="fees">
        <div className="container-custom">
          <SectionTitle 
            title="Fee Structure 2025-26"
            subtitle="Competitive fees with flexible payment options"
          />

          <div className="overflow-x-auto bg-white rounded-2xl shadow-lg">
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

          <div className="mt-8 p-6 bg-primary-50 rounded-2xl">
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

      {/* Scholarships - Add pt-20 to account for sticky header */}
      <section ref={scholarshipsRef} className="py-20 bg-white pt-32 -mt-12" id="scholarships">
        <div className="container-custom">
          <SectionTitle 
            title="Scholarships & Financial Aid"
            subtitle="Making quality education accessible to all"
          />

          <div className="grid md:grid-cols-2 gap-6">
            {scholarships.map((scholarship) => (
              <div key={scholarship.name} className="bg-white rounded-2xl shadow-lg overflow-hidden border border-secondary-100">
                <img 
                  src={scholarship.image} 
                  alt={scholarship.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <h3 className="text-xl font-bold">{scholarship.name}</h3>
                    <span className="bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-bold">
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

      {/* FAQ - Add pt-20 to account for sticky header */}
      <section ref={faqRef} className="py-20 bg-secondary-50 pt-32 -mt-12" id="faq">
        <div className="container-custom">
          <SectionTitle 
            title="Frequently Asked Questions"
            subtitle="Find answers to common questions about admissions"
          />

          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-md">
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

      {/* Apply Now CTA */}
      <section className="relative py-20 bg-primary-600">
        <div className="container-custom text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Apply?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-white/90">
            Take the first step towards a bright future at St. Andrew's College
          </p>
          <Link
            to="/admissions/apply"
            className="btn-primary bg-white text-primary-600 hover:bg-secondary-100 text-lg px-8 py-3"
          >
            Apply Now
            <ArrowRightIcon className="w-5 h-5 ml-2" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default AdmissionsPage;