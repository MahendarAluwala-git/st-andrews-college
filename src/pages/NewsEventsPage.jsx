import React, { useState } from 'react';
import { CalendarIcon, ClockIcon, MapPinIcon } from '@heroicons/react/24/outline';
import PageHeader from '../components/ui/PageHeader';

const NewsEventsPage = () => {
  const [activeTab, setActiveTab] = useState('news');

  const news = [
    {
      title: 'Admissions Open 2025-26',
      date: 'Jan 15, 2025',
      category: 'Admission',
      excerpt: 'Applications now open for all undergraduate and postgraduate programs.',
    },
    {
      title: 'Annual Sports Day 2025',
      date: 'Feb 10, 2025',
      category: 'Event',
      excerpt: 'Join us for the annual sports day celebration with various competitions.',
    },
    {
      title: 'Placement Drive 2025',
      date: 'Mar 5, 2025',
      category: 'Placement',
      excerpt: 'Top companies visiting campus for placements. Register now!',
    },
  ];

  const events = [
    { name: 'Tech Fest 2025', date: 'Mar 20, 2025', time: '10:00 AM', venue: 'Main Auditorium' },
    { name: 'Cultural Night', date: 'Mar 25, 2025', time: '6:00 PM', venue: 'Open Air Theatre' },
    { name: 'Guest Lecture', date: 'Apr 5, 2025', time: '11:00 AM', venue: 'Seminar Hall' },
  ];

  const notices = [
    { title: 'Holiday on March 29th', date: 'Mar 25, 2025', category: 'Holiday' },
    { title: 'Exam Schedule Released', date: 'Mar 20, 2025', category: 'Examination' },
    { title: 'Fee Payment Deadline', date: 'Mar 15, 2025', category: 'Fee' },
  ];

  return (
    <div>
      {/* Hero Section - Responsive */}
      <section className="relative py-16 sm:py-20 md:py-24 lg:py-28 bg-gradient-to-r from-primary-600 to-primary-700 text-white">
        <div className="container-custom px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-3 sm:mb-4">News & Events</h1>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-white/90 max-w-3xl mx-auto px-4">
            Stay updated with the latest happenings at St. Andrew's
          </p>
        </div>
      </section>

      {/* Tab Navigation - Responsive */}
      <section className="py-4 sm:py-6 bg-white border-b sticky top-16 z-40 shadow-sm">
        <div className="container-custom px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center gap-2 sm:gap-4">
            <button
              onClick={() => setActiveTab('news')}
              className={`px-4 sm:px-6 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-medium transition-colors
                ${activeTab === 'news' 
                  ? 'bg-primary-600 text-white' 
                  : 'bg-secondary-100 text-secondary-700 hover:bg-primary-50'}`}
            >
              Latest News
            </button>
            <button
              onClick={() => setActiveTab('events')}
              className={`px-4 sm:px-6 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-medium transition-colors
                ${activeTab === 'events' 
                  ? 'bg-primary-600 text-white' 
                  : 'bg-secondary-100 text-secondary-700 hover:bg-primary-50'}`}
            >
              Upcoming Events
            </button>
            <button
              onClick={() => setActiveTab('notices')}
              className={`px-4 sm:px-6 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-medium transition-colors
                ${activeTab === 'notices' 
                  ? 'bg-primary-600 text-white' 
                  : 'bg-secondary-100 text-secondary-700 hover:bg-primary-50'}`}
            >
              Notices
            </button>
          </div>
        </div>
      </section>

      {/* News Section - Responsive */}
      {activeTab === 'news' && (
        <section className="py-12 sm:py-16">
          <div className="container-custom px-4 sm:px-6 lg:px-8">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4 sm:mb-6">Latest News</h2>
            <div className="space-y-4 sm:space-y-5">
              {news.map((item, index) => (
                <div key={index} className="bg-white p-4 sm:p-5 md:p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex flex-col xs:flex-row xs:items-center gap-2 xs:gap-3 mb-2">
                    <span className="badge badge-primary text-[10px] sm:text-xs w-fit">{item.category}</span>
                    <span className="text-[10px] sm:text-xs text-secondary-500">{item.date}</span>
                  </div>
                  <h3 className="text-sm sm:text-base font-semibold mb-2">{item.title}</h3>
                  <p className="text-xs sm:text-sm text-secondary-600">{item.excerpt}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Events Section - Responsive */}
      {activeTab === 'events' && (
        <section className="py-12 sm:py-16">
          <div className="container-custom px-4 sm:px-6 lg:px-8">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4 sm:mb-6">Upcoming Events</h2>
            <div className="space-y-4 sm:space-y-5">
              {events.map((event, index) => (
                <div key={index} className="bg-white p-4 sm:p-5 md:p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                  <h3 className="text-sm sm:text-base font-semibold mb-2">{event.name}</h3>
                  <div className="space-y-1 text-xs sm:text-sm text-secondary-600">
                    <p className="flex items-center">
                      <CalendarIcon className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2 text-primary-500" />
                      {event.date}
                    </p>
                    <p className="flex items-center">
                      <ClockIcon className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2 text-primary-500" />
                      {event.time}
                    </p>
                    <p className="flex items-center">
                      <MapPinIcon className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2 text-primary-500" />
                      {event.venue}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Notices Section - Responsive */}
      {activeTab === 'notices' && (
        <section className="py-12 sm:py-16">
          <div className="container-custom px-4 sm:px-6 lg:px-8">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4 sm:mb-6">Official Notices</h2>
            <div className="space-y-4 sm:space-y-5">
              {notices.map((notice, index) => (
                <div key={index} className="bg-white p-4 sm:p-5 md:p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex flex-wrap justify-between items-start gap-2 mb-2">
                    <h3 className="text-sm sm:text-base font-semibold">{notice.title}</h3>
                    <span className="badge badge-primary text-[10px] sm:text-xs">{notice.category}</span>
                  </div>
                  <p className="text-xs sm:text-sm text-secondary-500">{notice.date}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
};

export default NewsEventsPage;