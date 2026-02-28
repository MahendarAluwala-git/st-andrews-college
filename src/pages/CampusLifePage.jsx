import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRightIcon,
  UserGroupIcon,
  HeartIcon,
  TrophyIcon,
  CameraIcon
} from '@heroicons/react/24/outline';
import PageHeader from '../components/ui/PageHeader';
import { imageUrls } from '../data/imageUrls';

const CampusLifePage = () => {
  const clubs = [
    { name: 'Coding Club', members: '200+', icon: '💻', image: imageUrls.campus.lab },
    { name: 'Drama Society', members: '150+', icon: '🎭', image: imageUrls.campus.auditorium },
    { name: 'Music Club', members: '180+', icon: '🎵', image: imageUrls.campus.auditorium },
    { name: 'Debate Society', members: '120+', icon: '🎤', image: imageUrls.campus.auditorium },
    { name: 'Photography Club', members: '100+', icon: '📸', image: imageUrls.campus.building },
    { name: 'Robotics Club', members: '90+', icon: '🤖', image: imageUrls.campus.lab },
    { name: 'Sports Club', members: '300+', icon: '⚽', image: imageUrls.campus.sports },
    { name: 'Cultural Club', members: '250+', icon: '🎨', image: imageUrls.campus.auditorium },
  ];

  const sports = [
    { name: 'Cricket', facilities: '2 grounds', image: imageUrls.campus.sports },
    { name: 'Football', facilities: '2 fields', image: imageUrls.campus.sports },
    { name: 'Basketball', facilities: '4 courts', image: imageUrls.campus.sports },
    { name: 'Swimming', facilities: 'Olympic pool', image: imageUrls.campus.sports },
    { name: 'Tennis', facilities: '2 courts', image: imageUrls.campus.sports },
    { name: 'Athletics', facilities: 'Track field', image: imageUrls.campus.sports },
  ];

  const culturalEvents = [
    { name: 'Annual Cultural Fest', month: 'November', image: imageUrls.campus.auditorium },
    { name: 'Freshers Party', month: 'August', image: imageUrls.campus.auditorium },
    { name: 'Diwali Celebration', month: 'October', image: imageUrls.campus.auditorium },
    { name: 'Holi Fest', month: 'March', image: imageUrls.campus.sports },
    { name: 'Christmas Celebration', month: 'December', image: imageUrls.campus.auditorium },
    { name: 'Tech Fest', month: 'September', image: imageUrls.campus.lab },
  ];

  const achievements = [
    { title: 'National Coding Champions', year: '2024', image: '🏆', desc: 'Team of 4 students won first place' },
    { title: 'Inter-University Cricket Winners', year: '2023', image: '🏏', desc: 'Cricket team champions' },
    { title: 'Best Short Film Award', year: '2024', image: '🎬', desc: 'Film club won national award' },
    { title: 'Debate Competition Winners', year: '2024', image: '🎤', desc: 'State level debate champions' },
  ];

  return (
    <div>
      {/* Hero Section */}
      <PageHeader 
  title="Campus Life"
  subtitle="Experience a vibrant and enriching campus life beyond academics"
  breadcrumb="Campus Life"
  bgImage="https://images.pexels.com/photos/976866/pexels-photo-976866.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop"
/>

      {/* Overview */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="container-custom px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 items-center">
            <div className="order-2 lg:order-1">
              <span className="badge badge-primary mb-2 sm:mb-3 inline-block text-xs sm:text-sm">Life at St. Andrew's</span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4">More Than Just Academics</h2>
              <p className="text-sm sm:text-base text-secondary-600 mb-4 sm:mb-6 leading-relaxed">
                At St. Andrew's, we believe in holistic development. Our campus is a vibrant 
                community where students can explore their passions, develop new skills, and 
                create memories that last a lifetime.
              </p>
              <p className="text-sm sm:text-base text-secondary-600 mb-6 leading-relaxed">
                From state-of-the-art sports facilities to diverse cultural clubs, from 
                technical societies to creative arts - there's something for everyone.
              </p>
              <div className="grid grid-cols-2 gap-3 sm:gap-4">
                <div className="flex items-center gap-2">
                  <HeartIcon className="w-4 h-4 sm:w-5 sm:h-5 text-primary-600" />
                  <span className="text-xs sm:text-sm">20+ Clubs</span>
                </div>
                <div className="flex items-center gap-2">
                  <TrophyIcon className="w-4 h-4 sm:w-5 sm:h-5 text-primary-600" />
                  <span className="text-xs sm:text-sm">10+ Sports</span>
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <img 
                src={imageUrls.campus.building} 
                alt="Campus Life"
                className="rounded-xl shadow-lg w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Clubs */}
      <section className="py-12 sm:py-16 bg-secondary-50">
        <div className="container-custom px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-6 sm:mb-8">Clubs & Societies</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-5">
            {clubs.map((club, index) => (
              <div key={index} className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-md transition-shadow">
                <div className="h-40 overflow-hidden">
                  <img 
                    src={club.image} 
                    alt={club.name}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-xl">{club.icon}</span>
                    <h3 className="text-sm sm:text-base font-bold">{club.name}</h3>
                  </div>
                  <p className="text-xs sm:text-sm text-secondary-600">
                    <UserGroupIcon className="w-3 h-3 inline mr-1" />
                    {club.members} Members
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sports */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="container-custom px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-6 sm:mb-8">Sports Facilities</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
            {sports.map((sport, index) => (
              <div key={index} className="bg-secondary-50 rounded-xl overflow-hidden hover:shadow-md transition-shadow">
                <div className="h-40 overflow-hidden">
                  <img 
                    src={sport.image} 
                    alt={sport.name}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-sm sm:text-base font-bold mb-1">{sport.name}</h3>
                  <p className="text-xs sm:text-sm text-secondary-600">{sport.facilities}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cultural Events */}
      <section className="py-12 sm:py-16 bg-secondary-50">
        <div className="container-custom px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-6 sm:mb-8">Cultural Events</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
            {culturalEvents.map((event, index) => (
              <div key={index} className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-md transition-shadow">
                <div className="h-40 overflow-hidden">
                  <img 
                    src={event.image} 
                    alt={event.name}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-sm sm:text-base font-bold mb-1">{event.name}</h3>
                  <p className="text-xs sm:text-sm text-secondary-600">{event.month}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="container-custom px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-6 sm:mb-8">Student Achievements</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
            {achievements.map((achievement, index) => (
              <div key={index} className="bg-secondary-50 p-4 sm:p-5 rounded-xl flex items-center gap-3 sm:gap-4 hover:shadow-md transition-shadow">
                <span className="text-2xl sm:text-3xl">{achievement.image}</span>
                <div>
                  <h3 className="text-sm sm:text-base font-bold">{achievement.title}</h3>
                  <p className="text-xs sm:text-sm text-secondary-600">{achievement.desc}</p>
                  <p className="text-xs text-primary-600 font-semibold mt-1">{achievement.year}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 sm:py-16 bg-primary-600">
        <div className="container-custom px-4 sm:px-6 lg:px-8 text-center text-white">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4">Experience Campus Life Yourself</h2>
          <p className="text-sm sm:text-base text-white/90 mb-6 max-w-2xl mx-auto">
            Come visit our campus and see what makes St. Andrew's special
          </p>
          <Link to="/contact" className="bg-white text-primary-600 px-6 py-2.5 sm:px-8 sm:py-3 rounded-lg font-semibold text-sm sm:text-base hover:bg-secondary-100 transition-colors inline-flex items-center">
            Schedule a Visit
            <ArrowRightIcon className="w-4 h-4 ml-2" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default CampusLifePage;