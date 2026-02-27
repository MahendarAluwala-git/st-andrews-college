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

const CampusLifePage = () => {
  const clubs = [
    { name: 'Coding Club', members: '200+', icon: '💻', image: 'https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop' },
    { name: 'Drama Society', members: '150+', icon: '🎭', image: 'https://images.pexels.com/photos/976866/pexels-photo-976866.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop' },
    { name: 'Music Club', members: '180+', icon: '🎵', image: 'https://images.pexels.com/photos/1190298/pexels-photo-1190298.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop' },
    { name: 'Debate Society', members: '120+', icon: '🎤', image: 'https://images.pexels.com/photos/2774556/pexels-photo-2774556.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop' },
    { name: 'Photography Club', members: '100+', icon: '📸', image: 'https://images.pexels.com/photos/256417/pexels-photo-256417.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop' },
    { name: 'Robotics Club', members: '90+', icon: '🤖', image: 'https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop' },
  ];

  const sports = [
    { name: 'Cricket', facilities: '2 grounds', image: 'https://images.pexels.com/photos/976866/pexels-photo-976866.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop' },
    { name: 'Football', facilities: '2 fields', image: 'https://images.pexels.com/photos/46798/the-ball-stadion-football-the-pitch-46798.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop' },
    { name: 'Basketball', facilities: '4 courts', image: 'https://images.pexels.com/photos/1752757/pexels-photo-1752757.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop' },
    { name: 'Swimming', facilities: 'Olympic pool', image: 'https://images.pexels.com/photos/863988/pexels-photo-863988.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop' },
  ];

  const culturalEvents = [
    { name: 'Annual Cultural Fest', month: 'November', image: 'https://images.pexels.com/photos/1190298/pexels-photo-1190298.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop' },
    { name: 'Freshers Party', month: 'August', image: 'https://images.pexels.com/photos/976866/pexels-photo-976866.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop' },
    { name: 'Diwali Celebration', month: 'October', image: 'https://images.pexels.com/photos/2774556/pexels-photo-2774556.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop' },
  ];

  const achievements = [
    { title: 'National Coding Champions', year: '2024', image: '🏆' },
    { title: 'Inter-University Cricket Winners', year: '2023', image: '🏏' },
    { title: 'Best Short Film Award', year: '2024', image: '🎬' },
  ];

  return (
    <div>
      {/* Hero Section - Responsive */}
      <section className="relative py-16 sm:py-20 md:py-24 lg:py-28 bg-gradient-to-r from-primary-600 to-primary-700 text-white">
        <div className="container-custom px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-3 sm:mb-4">Campus Life</h1>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-white/90 max-w-3xl mx-auto px-4">
            Experience a vibrant and enriching campus life beyond academics
          </p>
        </div>
      </section>

      {/* Overview - Responsive */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="container-custom px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 items-center">
            <div className="order-2 lg:order-1">
              <span className="badge badge-primary mb-2 sm:mb-3 inline-block text-xs sm:text-sm">Life at St. Andrew's</span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4">More Than Just Academics</h2>
              <p className="text-sm sm:text-base text-secondary-600 mb-4 sm:mb-6 leading-relaxed">
                At St. Andrew's, we believe in holistic development. Our campus is a vibrant 
                community where students can explore their passions and develop new skills.
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
                src="https://images.pexels.com/photos/256490/pexels-photo-256490.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop" 
                alt="Campus Life"
                className="rounded-xl shadow-lg w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Clubs - Responsive */}
      <section className="py-12 sm:py-16 bg-secondary-50">
        <div className="container-custom px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-6 sm:mb-8">Clubs & Societies</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
            {clubs.map((club, index) => (
              <div key={index} className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-md transition-shadow">
                <img 
                  src={club.image} 
                  alt={club.name}
                  className="w-full h-32 sm:h-36 md:h-40 object-cover"
                />
                <div className="p-4 sm:p-5">
                  <div className="flex items-center gap-2 sm:gap-3 mb-2">
                    <span className="text-xl sm:text-2xl">{club.icon}</span>
                    <h3 className="text-sm sm:text-base font-bold">{club.name}</h3>
                  </div>
                  <p className="text-xs sm:text-sm text-secondary-600">
                    <UserGroupIcon className="w-3 h-3 sm:w-4 sm:h-4 inline mr-1" />
                    {club.members} Members
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sports - Responsive */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="container-custom px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-6 sm:mb-8">Sports Facilities</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
            {sports.map((sport, index) => (
              <div key={index} className="bg-secondary-50 rounded-xl overflow-hidden">
                <img 
                  src={sport.image} 
                  alt={sport.name}
                  className="w-full h-32 sm:h-36 object-cover"
                />
                <div className="p-3 sm:p-4">
                  <h3 className="text-sm sm:text-base font-bold mb-1">{sport.name}</h3>
                  <p className="text-xs sm:text-sm text-secondary-600">{sport.facilities}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cultural Events - Responsive */}
      <section className="py-12 sm:py-16 bg-secondary-50">
        <div className="container-custom px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-6 sm:mb-8">Cultural Events</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
            {culturalEvents.map((event, index) => (
              <div key={index} className="bg-white rounded-xl shadow-sm overflow-hidden">
                <img 
                  src={event.image} 
                  alt={event.name}
                  className="w-full h-32 sm:h-36 object-cover"
                />
                <div className="p-3 sm:p-4">
                  <h3 className="text-sm sm:text-base font-bold mb-1">{event.name}</h3>
                  <p className="text-xs sm:text-sm text-secondary-600">{event.month}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements - Responsive */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="container-custom px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-6 sm:mb-8">Student Achievements</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
            {achievements.map((achievement, index) => (
              <div key={index} className="bg-secondary-50 p-4 sm:p-5 rounded-xl flex items-center gap-3 sm:gap-4">
                <span className="text-2xl sm:text-3xl">{achievement.image}</span>
                <div>
                  <h3 className="text-sm sm:text-base font-bold">{achievement.title}</h3>
                  <p className="text-xs sm:text-sm text-primary-600">{achievement.year}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default CampusLifePage;