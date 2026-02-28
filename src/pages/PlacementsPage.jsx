import React from 'react';
import { Link } from 'react-router-dom';
import { 
  BriefcaseIcon,
  ChartBarIcon,
  BuildingOfficeIcon,
  CurrencyDollarIcon,
  StarIcon,
  ArrowRightIcon
} from '@heroicons/react/24/outline';
import PageHeader from '../components/ui/PageHeader';
import { imageUrls } from '../data/imageUrls';

const PlacementsPage = () => {
  const stats = [
    { value: '95%', label: 'Placement Rate', icon: ChartBarIcon },
    { value: '8.5 LPA', label: 'Average Package', icon: CurrencyDollarIcon },
    { value: '45 LPA', label: 'Highest Package', icon: StarIcon },
    { value: '200+', label: 'Recruiters', icon: BuildingOfficeIcon },
  ];

  const placementStats = [
    { year: '2024', placed: 808, students: 850, percentage: 95, average: '8.5 LPA', highest: '45 LPA' },
    { year: '2023', placed: 779, students: 820, percentage: 95, average: '8.2 LPA', highest: '42 LPA' },
    { year: '2022', placed: 741, students: 780, percentage: 95, average: '7.8 LPA', highest: '38 LPA' },
  ];

  const recruiters = [
    'TCS', 'Infosys', 'Wipro', 'Google', 'Microsoft', 'Amazon', 
    'Deloitte', 'KPMG', 'Accenture', 'IBM', 'HCL', 'Tech Mahindra',
    'Cognizant', 'Oracle', 'Adobe', 'Goldman Sachs', 'JP Morgan', 'PwC'
  ];

  const trainingPrograms = [
    { 
      name: 'Aptitude Training', 
      duration: '3 Months', 
      features: ['Quantitative Aptitude', 'Logical Reasoning', 'Verbal Ability'],
      image: imageUrls.campus.lab
    },
    { 
      name: 'Technical Training', 
      duration: '4 Months', 
      features: ['Coding Skills', 'Data Structures', 'Algorithms', 'System Design'],
      image: imageUrls.campus.lab
    },
    { 
      name: 'Soft Skills', 
      duration: '2 Months', 
      features: ['Communication', 'Group Discussion', 'Interview Skills', 'Personality Development'],
      image: imageUrls.campus.auditorium
    },
    { 
      name: 'Mock Interviews', 
      duration: '1 Month', 
      features: ['Technical Interviews', 'HR Interviews', 'Feedback Sessions'],
      image: imageUrls.campus.building
    },
  ];

  const successStories = [
    {
      name: 'Priya Sharma',
      role: 'Software Engineer @ Google',
      package: '45 LPA',
      image: imageUrls.profiles.student1,
      quote: 'The placement training and mock interviews helped me crack Google with a great package.'
    },
    {
      name: 'Rahul Verma',
      role: 'Consultant @ Deloitte',
      package: '18 LPA',
      image: imageUrls.profiles.student2,
      quote: 'The soft skills training and industry exposure were instrumental in my success.'
    },
    {
      name: 'Anjali Patel',
      role: 'Product Manager @ Amazon',
      package: '38 LPA',
      image: imageUrls.profiles.student3,
      quote: 'The mentorship from faculty and alumni helped me land my dream role.'
    },
  ];

  return (
    <div>
      {/* Hero Section */}
     <PageHeader 
  title="Placements & Careers"
  subtitle="Building successful careers through exceptional placement support"
  breadcrumb="Placements"
  bgImage="https://images.pexels.com/photos/669615/pexels-photo-669615.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop"
/>

      {/* Stats */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="container-custom px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-5">
            {stats.map((stat, index) => (
              <div key={index} className="bg-secondary-50 p-4 sm:p-5 md:p-6 rounded-xl text-center hover:shadow-md transition-shadow">
                <stat.icon className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 text-primary-600 mx-auto mb-2 sm:mb-3" />
                <div className="text-lg sm:text-xl md:text-2xl font-bold text-secondary-900 mb-1">{stat.value}</div>
                <div className="text-xs sm:text-sm text-secondary-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Placement Stats Table */}
      <section className="py-12 sm:py-16 bg-secondary-50">
        <div className="container-custom px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-6 sm:mb-8">Placement Statistics</h2>
          <div className="overflow-x-auto bg-white rounded-xl shadow-sm">
            <table className="w-full min-w-[600px]">
              <thead className="bg-primary-600 text-white">
                <tr>
                  <th className="px-4 sm:px-6 py-3 text-left text-xs sm:text-sm">Year</th>
                  <th className="px-4 sm:px-6 py-3 text-left text-xs sm:text-sm">Students Placed</th>
                  <th className="px-4 sm:px-6 py-3 text-left text-xs sm:text-sm">Percentage</th>
                  <th className="px-4 sm:px-6 py-3 text-left text-xs sm:text-sm">Average Package</th>
                  <th className="px-4 sm:px-6 py-3 text-left text-xs sm:text-sm">Highest Package</th>
                </tr>
              </thead>
              <tbody className="divide-y">
                {placementStats.map((stat) => (
                  <tr key={stat.year} className="hover:bg-secondary-50">
                    <td className="px-4 sm:px-6 py-3 text-xs sm:text-sm font-medium">{stat.year}</td>
                    <td className="px-4 sm:px-6 py-3 text-xs sm:text-sm">{stat.placed}/{stat.students}</td>
                    <td className="px-4 sm:px-6 py-3 text-xs sm:text-sm">
                      <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs">
                        {stat.percentage}%
                      </span>
                    </td>
                    <td className="px-4 sm:px-6 py-3 text-xs sm:text-sm">{stat.average}</td>
                    <td className="px-4 sm:px-6 py-3 text-xs sm:text-sm font-semibold text-primary-600">{stat.highest}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Recruiters */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="container-custom px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-6 sm:mb-8">Our Recruiters</h2>
          <div className="flex flex-wrap gap-2 sm:gap-3 justify-center">
            {recruiters.map((company, index) => (
              <span key={index} className="px-3 sm:px-4 py-1.5 sm:py-2 bg-secondary-100 rounded-full text-xs sm:text-sm font-medium text-secondary-700 hover:bg-primary-50 hover:text-primary-600 transition-colors">
                {company}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Training Programs */}
      <section className="py-12 sm:py-16 bg-secondary-50">
        <div className="container-custom px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-6 sm:mb-8">Training Programs</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
            {trainingPrograms.map((program, index) => (
              <div key={index} className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-md transition-shadow">
                <div className="h-40 overflow-hidden">
                  <img 
                    src={program.image} 
                    alt={program.name}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-sm sm:text-base font-bold mb-1">{program.name}</h3>
                  <p className="text-xs text-primary-600 mb-3">Duration: {program.duration}</p>
                  <ul className="space-y-1">
                    {program.features.map((feature, i) => (
                      <li key={i} className="text-xs text-secondary-600 flex items-start">
                        <span className="w-1 h-1 bg-primary-500 rounded-full mr-2 mt-1.5"></span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="container-custom px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-6 sm:mb-8">Success Stories</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
            {successStories.map((story, index) => (
              <div key={index} className="bg-secondary-50 p-4 sm:p-5 rounded-xl hover:shadow-md transition-shadow">
                <div className="flex items-center gap-3 mb-3">
                  <img 
                    src={story.image} 
                    alt={story.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <h3 className="text-sm sm:text-base font-bold">{story.name}</h3>
                    <p className="text-xs text-secondary-600">{story.role}</p>
                  </div>
                </div>
                <p className="text-xs sm:text-sm text-secondary-600 italic mb-2">"{story.quote}"</p>
                <p className="text-xs font-semibold text-primary-600">Package: {story.package}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 sm:py-16 bg-primary-600">
        <div className="container-custom px-4 sm:px-6 lg:px-8 text-center text-white">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4">Ready to Start Your Career Journey?</h2>
          <p className="text-sm sm:text-base text-white/90 mb-6 max-w-2xl mx-auto">
            Register for placement training and get access to our network of recruiters
          </p>
          <Link to="/contact" className="bg-white text-primary-600 px-6 py-2.5 sm:px-8 sm:py-3 rounded-lg font-semibold text-sm sm:text-base hover:bg-secondary-100 transition-colors inline-flex items-center">
            Register Now
            <ArrowRightIcon className="w-4 h-4 ml-2" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default PlacementsPage;