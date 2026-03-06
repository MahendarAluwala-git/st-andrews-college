import React, { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  BriefcaseIcon,
  ChartBarIcon,
  BuildingOfficeIcon,
  CurrencyDollarIcon,
  StarIcon,
  ArrowRightIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  AcademicCapIcon,
  TrophyIcon,
  UserGroupIcon
} from '@heroicons/react/24/outline';
import PageHeader from '../components/ui/PageHeader';
import Navbar from '../components/common/Navbar';

const PlacementsPage = () => {
  const scrollRef = useRef(null);

  const stats = [
    { value: '95%', label: 'Placement Rate', icon: ChartBarIcon, color: 'from-blue-500 to-blue-600', change: '+5%' },
    { value: '8.5 LPA', label: 'Average Package', icon: CurrencyDollarIcon, color: 'from-green-500 to-green-600', change: '+12%' },
    { value: '45 LPA', label: 'Highest Package', icon: StarIcon, color: 'from-purple-500 to-purple-600', change: 'New Record' },
    { value: '200+', label: 'Recruiters', icon: BuildingOfficeIcon, color: 'from-orange-500 to-orange-600', change: '+25' },
  ];

  const placementStats = [
    { year: '2024', placed: 808, students: 850, percentage: 95, average: '8.5 LPA', highest: '45 LPA', color: 'from-green-400 to-green-600' },
    { year: '2023', placed: 779, students: 820, percentage: 95, average: '8.2 LPA', highest: '42 LPA', color: 'from-blue-400 to-blue-600' },
    { year: '2022', placed: 741, students: 780, percentage: 95, average: '7.8 LPA', highest: '38 LPA', color: 'from-purple-400 to-purple-600' },
  ];

  // Top companies with logos and packages
  const topCompanies = [
    { name: 'Google', logo: 'https://images.pexels.com/photos/3768916/pexels-photo-3768916.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop', package: '45 LPA', role: 'SDE', color: 'from-blue-500 to-blue-600' },
    { name: 'Microsoft', logo: 'https://images.pexels.com/photos/3768911/pexels-photo-3768911.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop', package: '42 LPA', role: 'Product Manager', color: 'from-green-500 to-green-600' },
    { name: 'Amazon', logo: 'https://images.pexels.com/photos/3768916/pexels-photo-3768916.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop', package: '38 LPA', role: 'SDE II', color: 'from-orange-500 to-orange-600' },
    { name: 'Deloitte', logo: 'https://images.pexels.com/photos/3768911/pexels-photo-3768911.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop', package: '18 LPA', role: 'Consultant', color: 'from-purple-500 to-purple-600' },
    { name: 'Goldman Sachs', logo: 'https://images.pexels.com/photos/3768916/pexels-photo-3768916.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop', package: '35 LPA', role: 'Analyst', color: 'from-yellow-500 to-yellow-600' },
    { name: 'Adobe', logo: 'https://images.pexels.com/photos/3768911/pexels-photo-3768911.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop', package: '32 LPA', role: 'Software Engineer', color: 'from-red-500 to-red-600' },
  ];

  // Horizontal scrolling company list
  const recruiterLogos = [
    'TCS', 'Infosys', 'Wipro', 'Google', 'Microsoft', 'Amazon', 'Deloitte', 'KPMG', 
    'Accenture', 'IBM', 'HCL', 'Tech Mahindra', 'Cognizant', 'Oracle', 'Adobe', 
    'Goldman Sachs', 'JP Morgan', 'PwC', 'Capgemini', 'Intel', 'Cisco', 'VMware'
  ];

  const trainingPrograms = [
    { 
      name: 'Aptitude Training', 
      duration: '3 Months', 
      features: ['Quantitative Aptitude', 'Logical Reasoning', 'Verbal Ability'],
      icon: '🧮',
      color: 'from-blue-500 to-blue-600',
      students: '500+',
      rating: '4.8'
    },
    { 
      name: 'Technical Training', 
      duration: '4 Months', 
      features: ['Coding Skills', 'Data Structures', 'Algorithms', 'System Design'],
      icon: '💻',
      color: 'from-green-500 to-green-600',
      students: '450+',
      rating: '4.9'
    },
    { 
      name: 'Soft Skills', 
      duration: '2 Months', 
      features: ['Communication', 'Group Discussion', 'Interview Skills', 'Personality Development'],
      icon: '🗣️',
      color: 'from-purple-500 to-purple-600',
      students: '600+',
      rating: '4.7'
    },
    { 
      name: 'Mock Interviews', 
      duration: '1 Month', 
      features: ['Technical Interviews', 'HR Interviews', 'Feedback Sessions'],
      icon: '🎯',
      color: 'from-orange-500 to-orange-600',
      students: '400+',
      rating: '4.9'
    },
  ];

  const successStories = [
    {
      name: 'Priya Sharma',
      role: 'Software Engineer @ Google',
      package: '45 LPA',
      image: 'https://randomuser.me/api/portraits/women/44.jpg',
      quote: 'The placement training and mock interviews helped me crack Google with a great package.',
      batch: '2024',
      placement: 'Google'
    },
    {
      name: 'Rahul Verma',
      role: 'Consultant @ Deloitte',
      package: '18 LPA',
      image: 'https://randomuser.me/api/portraits/men/32.jpg',
      quote: 'The soft skills training and industry exposure were instrumental in my success.',
      batch: '2023',
      placement: 'Deloitte'
    },
    {
      name: 'Anjali Patel',
      role: 'Product Manager @ Amazon',
      package: '38 LPA',
      image: 'https://randomuser.me/api/portraits/women/68.jpg',
      quote: 'The mentorship from faculty and alumni helped me land my dream role.',
      batch: '2024',
      placement: 'Amazon'
    },
    {
      name: 'Arjun Singh',
      role: 'SDE @ Microsoft',
      package: '42 LPA',
      image: 'https://randomuser.me/api/portraits/men/75.jpg',
      quote: 'The coding bootcamp and competitive programming practice made all the difference.',
      batch: '2023',
      placement: 'Microsoft'
    },
  ];

  const scroll = (direction) => {
    if (scrollRef.current) {
      const { current } = scrollRef;
      const scrollAmount = direction === 'left' ? -300 : 300;
      current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <div className="overflow-hidden">
      <PageHeader 
        title="Placements & Careers"
        subtitle="Building successful careers through exceptional placement support"
        breadcrumb="Placements"
      />

      <Navbar />

      {/* Stats Section with Glassmorphism */}
      <section className="py-16 bg-gradient-to-br from-gray-50 to-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="group relative bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className={`p-3 rounded-xl bg-gradient-to-br ${stat.color} shadow-lg`}>
                      <stat.icon className="w-6 h-6 text-white" />
                    </div>
                    <span className="text-sm font-semibold text-green-600 bg-green-50 px-3 py-1 rounded-full">
                      {stat.change}
                    </span>
                  </div>
                  <p className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</p>
                  <p className="text-gray-600">{stat.label}</p>
                </div>
                <div className={`h-1 w-full bg-gradient-to-r ${stat.color} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300`}></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Top Companies Grid */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <span className="text-primary-600 font-semibold text-sm uppercase tracking-wider mb-2 block">Dream Companies</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Top Recruiters 2024</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Our students have been placed in the world's most prestigious organizations</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {topCompanies.map((company, index) => (
              <div
                key={index}
                className="group relative bg-gradient-to-br from-gray-50 to-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${company.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>
                <div className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${company.color} flex items-center justify-center text-white font-bold text-2xl shadow-lg`}>
                      {company.name[0]}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900">{company.name}</h3>
                      <p className="text-gray-600">{company.role}</p>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className={`text-2xl font-bold bg-gradient-to-r ${company.color} bg-clip-text text-transparent`}>
                      {company.package}
                    </span>
                    <span className="text-sm text-gray-500">Highest Package</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Horizontal Scrolling Companies */}
      <section className="py-16 bg-gradient-to-br from-primary-50 to-white">
        <div className="container-custom">
          <div className="flex items-center justify-between mb-8">
            <div>
              <span className="text-primary-600 font-semibold text-sm uppercase tracking-wider mb-2 block">Our Partners</span>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">200+ Recruiting Partners</h2>
            </div>
            <div className="flex gap-2">
              <button
                onClick={() => scroll('left')}
                className="p-2 rounded-full bg-white shadow-md hover:shadow-lg transition-all hover:scale-110"
              >
                <ChevronLeftIcon className="w-5 h-5 text-gray-600" />
              </button>
              <button
                onClick={() => scroll('right')}
                className="p-2 rounded-full bg-white shadow-md hover:shadow-lg transition-all hover:scale-110"
              >
                <ChevronRightIcon className="w-5 h-5 text-gray-600" />
              </button>
            </div>
          </div>

          <div
            ref={scrollRef}
            className="overflow-x-auto scrollbar-hide flex gap-4 pb-4"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {recruiterLogos.concat(recruiterLogos).map((company, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-40 h-40 bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 flex items-center justify-center group hover:scale-105 cursor-pointer"
              >
                <div className="text-center">
                  <div className="w-16 h-16 mx-auto mb-2 bg-gradient-to-br from-primary-100 to-primary-200 rounded-full flex items-center justify-center">
                    <span className="text-2xl font-bold text-primary-600">{company[0]}</span>
                  </div>
                  <span className="font-semibold text-gray-700 group-hover:text-primary-600 transition-colors">
                    {company}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Placement Stats Timeline */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <span className="text-primary-600 font-semibold text-sm uppercase tracking-wider mb-2 block">Track Record</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Year-wise Performance</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Consistent excellence in placements year after year</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {placementStats.map((stat, index) => (
              <div key={index} className="relative">
                <div className="bg-white rounded-2xl shadow-xl p-8 text-center relative z-10 hover:transform hover:-translate-y-2 transition-all duration-300">
                  <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-5 rounded-2xl`}></div>
                  <div className={`w-20 h-20 mx-auto mb-4 rounded-full bg-gradient-to-br ${stat.color} flex items-center justify-center shadow-lg`}>
                    <span className="text-2xl font-bold text-white">{stat.year}</span>
                  </div>
                  <div className="text-4xl font-bold text-gray-900 mb-2">{stat.percentage}%</div>
                  <p className="text-gray-600 mb-4">Placement Rate</p>
                  <div className="flex justify-between text-sm border-t pt-4">
                    <span className="text-gray-600">Avg: {stat.average}</span>
                    <span className="text-primary-600 font-semibold">Highest: {stat.highest}</span>
                  </div>
                </div>
                {index < placementStats.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2 text-gray-300 text-2xl">
                    →
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Training Programs with Cards */}
      <section className="py-16 bg-gradient-to-br from-gray-50 to-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <span className="text-primary-600 font-semibold text-sm uppercase tracking-wider mb-2 block">Preparation</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Training Programs</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Comprehensive preparation for your dream job</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {trainingPrograms.map((program, index) => (
              <div
                key={index}
                className="group bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden"
              >
                <div className={`h-2 w-full bg-gradient-to-r ${program.color}`}></div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${program.color} flex items-center justify-center text-2xl shadow-lg`}>
                      {program.icon}
                    </div>
                    <div className="flex items-center gap-1">
                      <StarIcon className="w-4 h-4 text-yellow-400 fill-current" />
                      <span className="text-sm font-semibold">{program.rating}</span>
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{program.name}</h3>
                  <p className="text-sm text-primary-600 font-semibold mb-3">{program.duration}</p>
                  <ul className="space-y-2 mb-4">
                    {program.features.map((feature, i) => (
                      <li key={i} className="text-sm text-gray-600 flex items-center">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary-500 mr-2"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <div className="flex items-center justify-between text-sm border-t pt-4">
                    <span className="text-gray-500">{program.students} Students</span>
                    <span className="text-primary-600 font-semibold">Enroll →</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories with Cards */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <span className="text-primary-600 font-semibold text-sm uppercase tracking-wider mb-2 block">Alumni</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Success Stories</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Our alumni are making waves in top companies worldwide</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {successStories.map((story, index) => (
              <div
                key={index}
                className="group bg-gradient-to-br from-gray-50 to-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden"
              >
                <div className="relative h-32 bg-gradient-to-r from-primary-500 to-primary-600">
                  <div className="absolute -bottom-12 left-1/2 transform -translate-x-1/2">
                    <img
                      src={story.image}
                      alt={story.name}
                      className="w-24 h-24 rounded-full border-4 border-white shadow-xl object-cover"
                    />
                  </div>
                </div>
                <div className="pt-16 p-6 text-center">
                  <h3 className="text-lg font-bold text-gray-900 mb-1">{story.name}</h3>
                  <p className="text-sm text-primary-600 font-semibold mb-2">{story.role}</p>
                  <p className="text-xs text-gray-500 mb-3">Batch of {story.batch}</p>
                  <p className="text-sm text-gray-600 mb-4 italic">"{story.quote}"</p>
                  <div className="flex items-center justify-between border-t pt-4">
                    <span className="text-sm font-semibold text-gray-700">Placed at</span>
                    <span className="text-lg font-bold bg-gradient-to-r from-primary-600 to-primary-700 bg-clip-text text-transparent">
                      {story.placement}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/3768916/pexels-photo-3768916.jpeg?auto=compress&cs=tinysrgb&w=1920&h=600&fit=crop"
            alt="Placement"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary-900/90 to-primary-800/90"></div>
        </div>

        <div className="relative z-10 container-custom text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Start Your Career Journey?</h2>
          <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
            Join our placement training program and get access to 200+ recruiting partners
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-white text-primary-600 px-8 py-4 rounded-xl font-semibold hover:shadow-2xl hover:scale-105 transition-all duration-300 inline-flex items-center"
            >
              Register Now
              <ArrowRightIcon className="w-5 h-5 ml-2" />
            </Link>
            <Link
              to="/training"
              className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white/10 hover:scale-105 transition-all duration-300"
            >
              View Programs
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PlacementsPage;