import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRightIcon,
  GlobeAltIcon,
  HeartIcon,
  BuildingLibraryIcon,
  AcademicCapIcon,
  UserGroupIcon,
  TrophyIcon
} from '@heroicons/react/24/outline';
import PageHeader from '../components/ui/PageHeader';

const AboutPage = () => {
  const stats = [
    { value: '48+', label: 'Years of Excellence', icon: TrophyIcon },
    { value: '5000+', label: 'Students', icon: UserGroupIcon },
    { value: '300+', label: 'Faculty', icon: AcademicCapIcon },
    { value: '95%', label: 'Placement Rate', icon: BuildingLibraryIcon },
  ];

  const milestones = [
    { year: '1975', title: 'Foundation', description: 'College established with 100 students', icon: '🏛️' },
    { year: '1985', title: 'First Decade', description: 'Expanded to 10 departments', icon: '📚' },
    { year: '1995', title: 'NAAC A+ Grade', description: 'Received prestigious accreditation', icon: '⭐' },
    { year: '2005', title: 'Research Center', description: 'Established advanced research facilities', icon: '🔬' },
    { year: '2015', title: 'Global Partners', description: 'Tied up with 20+ international universities', icon: '🌍' },
    { year: '2024', title: 'Center of Excellence', description: 'Recognized as Center of Excellence', icon: '🏆' },
  ];

  const leadership = [
    {
      name: 'Dr. James Anderson',
      role: 'Principal',
      qualification: 'Ph.D. in Education',
      experience: '25+ years',
      image: '👨‍🏫',
    },
    {
      name: 'Prof. Sarah Williams',
      role: 'Dean of Academics',
      qualification: 'Ph.D. in Mathematics',
      experience: '20+ years',
      image: '👩‍🏫',
    },
    {
      name: 'Dr. Michael Chen',
      role: 'Dean of Research',
      qualification: 'Ph.D. in Physics',
      experience: '18+ years',
      image: '👨‍🔬',
    },
  ];

  const facilities = [
    { name: 'Smart Classrooms', count: '60+', icon: '💻' },
    { name: 'Library', count: '50K+', icon: '📚' },
    { name: 'Labs', count: '30+', icon: '🔬' },
    { name: 'Sports Complex', count: '10+', icon: '🏃' },
    { name: 'Hostels', count: '1000+', icon: '🏠' },
    { name: 'Auditorium', count: '1000+', icon: '🎭' },
  ];

  return (
    <div className="overflow-hidden">
      {/* Hero Section - Responsive */}
      <section className="relative py-16 sm:py-20 md:py-24 lg:py-28 bg-gradient-to-r from-primary-600 to-primary-700 text-white">
        <div className="container-custom px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center bg-white/10 backdrop-blur-sm rounded-full px-3 sm:px-4 py-1 sm:py-1.5 mb-4 sm:mb-6">
              <span className="text-xs sm:text-sm font-medium">Established 1975 • NAAC A+ Accredited</span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6">
              About St. Andrew's College
            </h1>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-white/90 max-w-2xl mx-auto px-4">
              Nurturing minds, building character, and shaping futures for nearly five decades
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section - Responsive */}
      <section className="py-12 sm:py-16 md:py-20 bg-white">
        <div className="container-custom px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
            {stats.map((stat, index) => (
              <div key={index} className="text-center p-4 sm:p-6 bg-secondary-50 rounded-xl">
                <stat.icon className="w-6 h-6 sm:w-8 sm:h-8 text-primary-600 mx-auto mb-2 sm:mb-3" />
                <div className="text-xl sm:text-2xl md:text-3xl font-bold text-secondary-900 mb-1">{stat.value}</div>
                <div className="text-xs sm:text-sm text-secondary-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* History Section - Responsive */}
      <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-br from-secondary-50 to-white">
        <div className="container-custom px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 items-center">
            <div className="order-2 lg:order-1">
              <span className="badge badge-primary mb-2 sm:mb-3 md:mb-4 inline-block text-xs sm:text-sm">Our Legacy</span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-secondary-900 mb-3 sm:mb-4">A Legacy of Excellence</h2>
              <p className="text-sm sm:text-base text-secondary-600 mb-3 sm:mb-4 leading-relaxed">
                Founded in 1975, St. Andrew's College has grown from a modest institution 
                into one of the most prestigious educational establishments in the region.
              </p>
              <p className="text-sm sm:text-base text-secondary-600 mb-4 sm:mb-6 leading-relaxed">
                What started with just 100 students and 5 faculty members has now blossomed 
                into a vibrant community of over 5000 students and 300 dedicated educators.
              </p>
              <div className="flex items-center gap-3 sm:gap-4">
                <div className="flex -space-x-2">
                  {[1,2,3,4].map((i) => (
                    <div key={i} className="w-8 h-8 sm:w-10 sm:h-10 bg-primary-500 rounded-full border-2 border-white flex items-center justify-center text-white font-bold text-xs sm:text-sm">
                      {String.fromCharCode(64 + i)}
                    </div>
                  ))}
                </div>
                <p className="text-xs sm:text-sm text-secondary-600">
                  <span className="font-bold text-primary-600">25,000+</span> Alumni
                </p>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <div className="grid grid-cols-2 gap-3 sm:gap-4">
                <div className="space-y-3 sm:space-y-4">
                  <div className="h-32 sm:h-40 md:h-48 bg-gradient-to-br from-primary-200 to-primary-300 rounded-xl"></div>
                  <div className="h-40 sm:h-48 md:h-56 bg-gradient-to-br from-primary-300 to-primary-400 rounded-xl"></div>
                </div>
                <div className="space-y-3 sm:space-y-4 pt-4 sm:pt-6 md:pt-8">
                  <div className="h-40 sm:h-48 md:h-56 bg-gradient-to-br from-primary-400 to-primary-500 rounded-xl"></div>
                  <div className="h-32 sm:h-40 md:h-48 bg-gradient-to-br from-primary-500 to-primary-600 rounded-xl"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission - Responsive */}
      <section className="py-12 sm:py-16 md:py-20 bg-white">
        <div className="container-custom px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-4 sm:gap-6">
            <div className="bg-secondary-50 p-6 sm:p-8 rounded-xl">
              <GlobeAltIcon className="w-8 h-8 sm:w-10 sm:h-10 text-primary-600 mb-3 sm:mb-4" />
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-2 sm:mb-3">Our Vision</h3>
              <p className="text-sm sm:text-base text-secondary-600 leading-relaxed">
                To be a globally recognized center of excellence in higher education, 
                fostering innovation, critical thinking, and holistic development.
              </p>
            </div>
            <div className="bg-secondary-50 p-6 sm:p-8 rounded-xl">
              <HeartIcon className="w-8 h-8 sm:w-10 sm:h-10 text-primary-600 mb-3 sm:mb-4" />
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-2 sm:mb-3">Our Mission</h3>
              <p className="text-sm sm:text-base text-secondary-600 leading-relaxed">
                To provide quality education that combines academic rigor with practical 
                skills, promote research and innovation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Milestones - Responsive */}
      <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-br from-secondary-50 to-white">
        <div className="container-custom px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-10 md:mb-12">
            <span className="badge badge-primary mb-2 sm:mb-3 md:mb-4 inline-block text-xs sm:text-sm">Our Journey</span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-secondary-900 mb-2 sm:mb-3">Key Milestones</h2>
            <p className="text-sm sm:text-base text-secondary-600 max-w-2xl mx-auto px-4">
              Significant achievements that shaped our institution
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {milestones.map((milestone, index) => (
              <div key={index} className="bg-white p-4 sm:p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <span className="text-3xl sm:text-4xl mb-2 block">{milestone.icon}</span>
                <span className="text-primary-600 font-bold text-base sm:text-lg block mb-1">{milestone.year}</span>
                <h3 className="text-base sm:text-lg font-semibold mb-1">{milestone.title}</h3>
                <p className="text-xs sm:text-sm text-secondary-600">{milestone.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership - Responsive */}
      <section className="py-12 sm:py-16 md:py-20 bg-white">
        <div className="container-custom px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-10 md:mb-12">
            <span className="badge badge-primary mb-2 sm:mb-3 md:mb-4 inline-block text-xs sm:text-sm">Our Leadership</span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-secondary-900 mb-2 sm:mb-3">Meet Our Leaders</h2>
            <p className="text-sm sm:text-base text-secondary-600 max-w-2xl mx-auto px-4">
              Experienced educators dedicated to your success
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {leadership.map((leader, index) => (
              <div key={index} className="bg-secondary-50 p-4 sm:p-6 rounded-xl text-center">
                <div className="w-20 h-20 sm:w-24 sm:h-24 mx-auto bg-gradient-to-br from-primary-100 to-primary-200 
                              rounded-full flex items-center justify-center text-3xl sm:text-4xl mb-3 sm:mb-4">
                  {leader.image}
                </div>
                <h3 className="text-base sm:text-lg font-bold mb-1">{leader.name}</h3>
                <p className="text-primary-600 text-xs sm:text-sm font-medium mb-2">{leader.role}</p>
                <p className="text-xs sm:text-sm text-secondary-500 mb-1">{leader.qualification}</p>
                <p className="text-xs sm:text-sm text-secondary-500">Exp: {leader.experience}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Facilities - Responsive */}
      <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-br from-secondary-50 to-white">
        <div className="container-custom px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-10 md:mb-12">
            <span className="badge badge-primary mb-2 sm:mb-3 md:mb-4 inline-block text-xs sm:text-sm">Infrastructure</span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-secondary-900 mb-2 sm:mb-3">World-Class Facilities</h2>
            <p className="text-sm sm:text-base text-secondary-600 max-w-2xl mx-auto px-4">
              State-of-the-art infrastructure for holistic learning
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {facilities.map((facility, index) => (
              <div key={index} className="bg-white p-4 sm:p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center gap-3 sm:gap-4 mb-3">
                  <span className="text-2xl sm:text-3xl">{facility.icon}</span>
                  <div>
                    <h3 className="text-sm sm:text-base font-semibold">{facility.name}</h3>
                    <p className="text-xs sm:text-sm text-primary-600 font-bold">{facility.count}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;