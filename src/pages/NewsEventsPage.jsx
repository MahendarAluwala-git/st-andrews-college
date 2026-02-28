import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { CalendarIcon, MapPinIcon, ClockIcon } from '@heroicons/react/24/outline';
import PageHeader from '../components/ui/PageHeader';

const NewsEventsPage = () => {
  const [activeTab, setActiveTab] = useState('news');

  const news = [
    {
      id: 1,
      title: 'Admissions Open 2025-26',
      date: 'Jan 15, 2025',
      category: 'Admission',
      excerpt: 'Applications now open for all undergraduate and postgraduate programs. Apply by March 31, 2025.',
      image: 'https://images.pexels.com/photos/2774556/pexels-photo-2774556.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop'
    },
    {
      id: 2,
      title: 'Annual Sports Day 2025',
      date: 'Feb 10, 2025',
      category: 'Event',
      excerpt: 'Join us for the annual sports day celebration with various competitions and events.',
      image: 'https://images.pexels.com/photos/976866/pexels-photo-976866.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop'
    },
    {
      id: 3,
      title: 'Placement Drive 2025',
      date: 'Mar 5, 2025',
      category: 'Placement',
      excerpt: 'Top companies visiting campus for placements. Register now!',
      image: 'https://images.pexels.com/photos/669615/pexels-photo-669615.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop'
    },
    {
      id: 4,
      title: 'Research Conference',
      date: 'Apr 12, 2025',
      category: 'Academic',
      excerpt: 'International conference on emerging technologies in computer science.',
      image: 'https://images.pexels.com/photos/2774556/pexels-photo-2774556.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop'
    },
  ];

  const events = [
    {
      id: 1,
      name: 'Tech Fest 2025',
      date: 'Mar 20, 2025',
      time: '10:00 AM',
      venue: 'Main Auditorium',
      description: 'Annual technical festival with coding competitions, robotics, and workshops.',
      image: 'https://images.pexels.com/photos/976866/pexels-photo-976866.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop'
    },
    {
      id: 2,
      name: 'Cultural Night',
      date: 'Mar 25, 2025',
      time: '6:00 PM',
      venue: 'Open Air Theatre',
      description: 'Evening of music, dance, and cultural performances by students.',
      image: 'https://images.pexels.com/photos/1190298/pexels-photo-1190298.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop'
    },
    {
      id: 3,
      name: 'Guest Lecture',
      date: 'Apr 5, 2025',
      time: '11:00 AM',
      venue: 'Seminar Hall',
      description: 'Guest lecture by industry expert on artificial intelligence and future trends.',
      image: 'https://images.pexels.com/photos/2774556/pexels-photo-2774556.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop'
    },
  ];

  const notices = [
    { title: 'Holiday on March 29th', date: 'Mar 25, 2025', category: 'Holiday' },
    { title: 'Exam Schedule Released', date: 'Mar 20, 2025', category: 'Examination' },
    { title: 'Fee Payment Deadline', date: 'Mar 15, 2025', category: 'Fee' },
    { title: 'Library Timings Revised', date: 'Mar 10, 2025', category: 'Library' },
  ];

  return (
    <div>
      <PageHeader 
        title="News & Events"
        subtitle="Stay updated with the latest happenings at St. Andrew's"
        breadcrumb="News & Events"
        bgImage="https://images.pexels.com/photos/2774556/pexels-photo-2774556.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop"
      />

      {/* Tab Navigation */}
      <div className=" top-16 z-40 bg-white border-b shadow-sm">
        <div className="container-custom">
          <div className="flex justify-center gap-4 py-4">
            <button
              onClick={() => setActiveTab('news')}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-colors
                ${activeTab === 'news' 
                  ? 'bg-primary-600 text-white' 
                  : 'bg-secondary-100 text-secondary-700 hover:bg-primary-50'}`}
            >
              Latest News
            </button>
            <button
              onClick={() => setActiveTab('events')}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-colors
                ${activeTab === 'events' 
                  ? 'bg-primary-600 text-white' 
                  : 'bg-secondary-100 text-secondary-700 hover:bg-primary-50'}`}
            >
              Upcoming Events
            </button>
            <button
              onClick={() => setActiveTab('notices')}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-colors
                ${activeTab === 'notices' 
                  ? 'bg-primary-600 text-white' 
                  : 'bg-secondary-100 text-secondary-700 hover:bg-primary-50'}`}
            >
              Notices
            </button>
          </div>
        </div>
      </div>

      {/* News Section */}
      {activeTab === 'news' && (
        <section className="py-16 bg-white">
          <div className="container-custom">
            <h2 className="text-2xl font-bold mb-8">Latest News</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {news.map((item) => (
                <div key={item.id} className="bg-secondary-50 rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow">
                  <img src={item.image} alt={item.title} className="w-full h-48 object-cover" />
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="bg-primary-100 text-primary-800 px-3 py-1 rounded-full text-xs font-medium">
                        {item.category}
                      </span>
                      <span className="text-sm text-secondary-500">{item.date}</span>
                    </div>
                    <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                    <p className="text-secondary-600 mb-4">{item.excerpt}</p>
                    <Link to="#" className="text-primary-600 font-medium hover:text-primary-700">
                      Read More →
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Events Section */}
      {activeTab === 'events' && (
        <section className="py-16 bg-white">
          <div className="container-custom">
            <h2 className="text-2xl font-bold mb-8">Upcoming Events</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {events.map((event) => (
                <div key={event.id} className="bg-secondary-50 rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow">
                  <img src={event.image} alt={event.name} className="w-full h-48 object-cover" />
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-3">{event.name}</h3>
                    <div className="space-y-2 text-sm text-secondary-600 mb-4">
                      <p className="flex items-center">
                        <CalendarIcon className="w-4 h-4 mr-2 text-primary-500" />
                        {event.date}
                      </p>
                      <p className="flex items-center">
                        <ClockIcon className="w-4 h-4 mr-2 text-primary-500" />
                        {event.time}
                      </p>
                      <p className="flex items-center">
                        <MapPinIcon className="w-4 h-4 mr-2 text-primary-500" />
                        {event.venue}
                      </p>
                    </div>
                    <p className="text-secondary-600 text-sm mb-4">{event.description}</p>
                    <button className="text-primary-600 font-medium hover:text-primary-700">
                      Register Now →
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Notices Section */}
      {activeTab === 'notices' && (
        <section className="py-16 bg-white">
          <div className="container-custom">
            <h2 className="text-2xl font-bold mb-8">Official Notices</h2>
            <div className="space-y-4">
              {notices.map((notice, index) => (
                <div key={index} className="bg-secondary-50 rounded-xl p-6 hover:shadow-md transition-shadow">
                  <div className="flex flex-wrap justify-between items-start gap-4">
                    <div>
                      <span className="bg-primary-100 text-primary-800 px-3 py-1 rounded-full text-xs font-medium mb-2 inline-block">
                        {notice.category}
                      </span>
                      <h3 className="text-lg font-semibold mb-2">{notice.title}</h3>
                      <p className="text-sm text-secondary-500">Posted on: {notice.date}</p>
                    </div>
                    <button className="btn-outline text-sm px-4 py-2">
                      Download PDF
                    </button>
                  </div>
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