import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRightIcon, GlobeAltIcon, HeartIcon } from '@heroicons/react/24/outline';
import PageHeader from '../components/ui/PageHeader';
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

  return (
    <div className="animate-fade-in">
    <PageHeader 
  title="About St. Andrew's College"
  subtitle="Nurturing minds, building character, and shaping futures for nearly five decades"
  breadcrumb="About Us"
  bgImage="https://images.pexels.com/photos/256490/pexels-photo-256490.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop"
/>
      {/* Stats Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
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
      <section className="section-padding bg-gradient-to-br from-secondary-50 to-white">
        <div className="container-custom">
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
      <section className="section-padding bg-white">
        <div className="container-custom">
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
      <section className="section-padding bg-gradient-to-br from-secondary-50 to-white">
        <div className="container-custom">
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
    </div>
  );
};

export default AboutPage;