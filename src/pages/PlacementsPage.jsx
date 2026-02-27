import React from 'react';
import { Link } from 'react-router-dom';
import { 
  BriefcaseIcon,
  ChartBarIcon,
  BuildingOfficeIcon,
  CurrencyDollarIcon,
  StarIcon
} from '@heroicons/react/24/outline';
import PageHeader from '../components/ui/PageHeader';

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

  const recruiters = ['TCS', 'Infosys', 'Wipro', 'Google', 'Microsoft', 'Amazon', 'Deloitte', 'KPMG', 'Accenture', 'IBM'];

  const trainingPrograms = [
    { name: 'Aptitude Training', duration: '3 Months', features: ['Quantitative Aptitude', 'Logical Reasoning'] },
    { name: 'Technical Training', duration: '4 Months', features: ['Coding Skills', 'Data Structures'] },
    { name: 'Soft Skills', duration: '2 Months', features: ['Communication', 'Interview Skills'] },
  ];

  return (
    <div>
      {/* Hero Section - Responsive */}
      <section className="relative py-16 sm:py-20 md:py-24 lg:py-28 bg-gradient-to-r from-primary-600 to-primary-700 text-white">
        <div className="container-custom px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-3 sm:mb-4">Placements & Careers</h1>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-white/90 max-w-3xl mx-auto px-4">
            Building successful careers through exceptional placement support
          </p>
        </div>
      </section>

      {/* Stats - Responsive */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="container-custom px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-5">
            {stats.map((stat, index) => (
              <div key={index} className="bg-secondary-50 p-4 sm:p-5 md:p-6 rounded-xl text-center">
                <stat.icon className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 text-primary-600 mx-auto mb-2 sm:mb-3" />
                <div className="text-lg sm:text-xl md:text-2xl font-bold text-secondary-900 mb-1">{stat.value}</div>
                <div className="text-xs sm:text-sm text-secondary-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Placement Stats Table - Responsive */}
      <section className="py-12 sm:py-16 bg-secondary-50">
        <div className="container-custom px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-6 sm:mb-8">Placement Statistics</h2>
          <div className="overflow-x-auto bg-white rounded-xl shadow-sm">
            <table className="w-full min-w-[600px]">
              <thead className="bg-primary-600 text-white">
                <tr>
                  <th className="px-4 sm:px-6 py-3 text-left text-xs sm:text-sm">Year</th>
                  <th className="px-4 sm:px-6 py-3 text-left text-xs sm:text-sm">Placed</th>
                  <th className="px-4 sm:px-6 py-3 text-left text-xs sm:text-sm">Percentage</th>
                  <th className="px-4 sm:px-6 py-3 text-left text-xs sm:text-sm">Average</th>
                  <th className="px-4 sm:px-6 py-3 text-left text-xs sm:text-sm">Highest</th>
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

      {/* Recruiters - Responsive */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="container-custom px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-6 sm:mb-8">Our Recruiters</h2>
          <div className="flex flex-wrap gap-2 sm:gap-3 justify-center">
            {recruiters.map((company, index) => (
              <span key={index} className="px-3 sm:px-4 py-1.5 sm:py-2 bg-secondary-100 rounded-full text-xs sm:text-sm font-medium text-secondary-700">
                {company}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Training Programs - Responsive */}
      <section className="py-12 sm:py-16 bg-secondary-50">
        <div className="container-custom px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-6 sm:mb-8">Training Programs</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
            {trainingPrograms.map((program, index) => (
              <div key={index} className="bg-white p-4 sm:p-5 md:p-6 rounded-xl shadow-sm">
                <h3 className="text-base sm:text-lg font-bold mb-2">{program.name}</h3>
                <p className="text-xs sm:text-sm text-primary-600 mb-3">Duration: {program.duration}</p>
                <ul className="space-y-1">
                  {program.features.map((feature, i) => (
                    <li key={i} className="text-xs sm:text-sm text-secondary-600 flex items-center">
                      <span className="w-1 h-1 bg-primary-500 rounded-full mr-2"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default PlacementsPage;