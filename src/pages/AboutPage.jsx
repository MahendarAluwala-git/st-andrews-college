import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRightIcon, GlobeAltIcon, HeartIcon } from '@heroicons/react/24/outline';
import PageHeader from '../components/ui/PageHeader';
import Navbar from '../components/common/Navbar';
import SectionTitle from '../components/ui/SectionTitle';
import { imageUrls } from '../data/imageUrls';

const AboutPage = () => {
  const stats = [
    { value: '48+', label: 'Years of Excellence' },
    { value: '5000+', label: 'Students' },
    { value: '300+', label: 'Faculty' },
    { value: '95%', label: 'Placement Rate' },
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
      image: imageUrls.profiles.principal,
    },
    {
      name: 'Prof. Sarah Williams',
      role: 'Dean of Academics',
      qualification: 'Ph.D. in Mathematics',
      experience: '20+ years',
      image: imageUrls.profiles.teacher2,
    },
    {
      name: 'Dr. Michael Chen',
      role: 'Dean of Research',
      qualification: 'Ph.D. in Physics',
      experience: '18+ years',
      image: imageUrls.profiles.teacher1,
    },
  ];

  const facilities = [
    { name: 'Smart Classrooms', count: '60+', icon: '💻', image: imageUrls.campus.lab },
    { name: 'Library', count: '50K+', icon: '📚', image: imageUrls.campus.library },
    { name: 'Labs', count: '30+', icon: '🔬', image: imageUrls.campus.lab },
    { name: 'Sports Complex', count: '10+', icon: '🏃', image: imageUrls.campus.sports },
    { name: 'Hostels', count: '1000+', icon: '🏠', image: imageUrls.campus.building },
    { name: 'Auditorium', count: '1000+', icon: '🎭', image: imageUrls.campus.auditorium },
  ];

  return (
    <div className="overflow-hidden">
      <PageHeader 
        title="About St. Andrew's College"
        subtitle="Nurturing minds, building character, and shaping futures for nearly five decades"
        breadcrumb="About Us"
        page="about"
      />

      {/* Navbar */}
      <Navbar />

      {/* Stats Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-white">
        <div className="container-custom px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <div key={index} className="stat-card animate-slide-up" style={{ animationDelay: `${index * 100}ms` }}>
                <div className="stat-value">{stat.value}</div>
                <div className="stat-label">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* History Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-br from-secondary-50 to-white">
        <div className="container-custom px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-up">
              <span className="section-tag">Our Legacy</span>
              <h2 className="section-title">A Legacy of Excellence Since 1975</h2>
              <p className="text-lg text-secondary-600 mb-6 leading-relaxed">
                Founded in 1975, St. Andrew's College has grown from a modest institution 
                into one of the most prestigious educational establishments in the region. 
                Our journey of nearly five decades has been marked by continuous growth, 
                innovation, and unwavering commitment to excellence.
              </p>
              <p className="text-lg text-secondary-600 mb-8 leading-relaxed">
                What started with just 100 students and 5 faculty members has now blossomed 
                into a vibrant community of over 5000 students and 300 dedicated educators.
              </p>
              <div className="flex items-center gap-4">
                <div className="flex -space-x-2">
                  {[1,2,3,4].map((i) => (
                    <div key={i} className="w-10 h-10 bg-primary-500 rounded-full border-2 border-white flex items-center justify-center text-white font-bold">
                      {String.fromCharCode(64 + i)}
                    </div>
                  ))}
                </div>
                <p className="text-secondary-600">
                  <span className="font-bold text-primary-600">25,000+</span> Alumni Worldwide
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4 animate-slide-up" style={{ animationDelay: '200ms' }}>
              <img src={imageUrls.campus.building} alt="College Building" className="rounded-2xl shadow-lg h-64 object-cover" />
              <img src={imageUrls.campus.library} alt="Library" className="rounded-2xl shadow-lg h-64 object-cover mt-8" />
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-12 sm:py-16 md:py-20 bg-white">
        <div className="container-custom px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-secondary-50 p-8 rounded-xl hover:shadow-md transition-shadow">
              <GlobeAltIcon className="w-12 h-12 text-primary-600 mb-4" />
              <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
              <p className="text-secondary-600 leading-relaxed">
                To be a globally recognized center of excellence in higher education, 
                fostering innovation, critical thinking, and holistic development.
              </p>
            </div>
            <div className="bg-secondary-50 p-8 rounded-xl hover:shadow-md transition-shadow">
              <HeartIcon className="w-12 h-12 text-primary-600 mb-4" />
              <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
              <p className="text-secondary-600 leading-relaxed">
                To provide quality education that combines academic rigor with practical 
                skills, promote research and innovation, and nurture values.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Milestones */}
      <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-br from-secondary-50 to-white">
        <div className="container-custom px-4 sm:px-6 lg:px-8">
          <SectionTitle 
            tag="Our Journey"
            title="Key Milestones"
            description="Significant achievements that shaped our institution"
            centered
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {milestones.map((milestone, index) => (
              <div key={index} className="card p-6 hover:-translate-y-2 transition-all duration-300 animate-slide-up" style={{ animationDelay: `${index * 100}ms` }}>
                <span className="text-4xl mb-3 block">{milestone.icon}</span>
                <span className="text-primary-600 font-bold text-xl">{milestone.year}</span>
                <h3 className="text-lg font-semibold mt-2">{milestone.title}</h3>
                <p className="text-secondary-600">{milestone.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="py-12 sm:py-16 md:py-20 bg-white">
        <div className="container-custom px-4 sm:px-6 lg:px-8">
          <SectionTitle 
            tag="Our Leadership"
            title="Meet Our Leaders"
            description="Experienced educators dedicated to your success"
            centered
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {leadership.map((leader, index) => (
              <div key={index} className="bg-secondary-50 rounded-xl overflow-hidden hover:shadow-lg transition-shadow">
                <div className="h-64 overflow-hidden">
                  <img 
                    src={leader.image} 
                    alt={leader.name}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-6 text-center">
                  <h3 className="text-xl font-bold mb-1">{leader.name}</h3>
                  <p className="text-primary-600 font-medium mb-2">{leader.role}</p>
                  <p className="text-secondary-600 text-sm mb-1">{leader.qualification}</p>
                  <p className="text-sm text-secondary-500">Experience: {leader.experience}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Facilities */}
      <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-br from-secondary-50 to-white">
        <div className="container-custom px-4 sm:px-6 lg:px-8">
          <SectionTitle 
            tag="Infrastructure"
            title="World-Class Facilities"
            description="State-of-the-art infrastructure for holistic learning"
            centered
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {facilities.map((facility, index) => (
              <div key={index} className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-md transition-shadow">
                <div className="h-48 overflow-hidden">
                  <img 
                    src={facility.image} 
                    alt={facility.name}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-4">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-semibold">{facility.name}</h3>
                    <span className="text-primary-600 font-bold">{facility.count}</span>
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