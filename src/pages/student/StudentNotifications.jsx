import React, { useState } from 'react';
import { BellIcon, CalendarIcon, MegaphoneIcon, AcademicCapIcon } from '@heroicons/react/24/outline';
import StudentPanelLayout from '../../layouts/StudentPanelLayout';

const StudentNotifications = () => {
  const [filter, setFilter] = useState('all');

  const notifications = [
    {
      id: 1,
      type: 'academic',
      title: 'Mid-Term Exam Schedule Released',
      message: 'The schedule for mid-term examinations has been published.',
      date: 'Mar 15, 2025',
      time: '10:30 AM',
      priority: 'high',
      read: false,
      icon: AcademicCapIcon,
    },
    {
      id: 2,
      type: 'event',
      title: 'Guest Lecture on AI & ML',
      message: 'Dr. Andrew Ng from Stanford will deliver a guest lecture.',
      date: 'Mar 14, 2025',
      time: '2:15 PM',
      priority: 'medium',
      read: false,
      icon: MegaphoneIcon,
    },
    {
      id: 3,
      type: 'fee',
      title: 'Fee Payment Reminder',
      message: 'Last date for semester fee payment without fine is April 15, 2025.',
      date: 'Mar 13, 2025',
      time: '9:00 AM',
      priority: 'high',
      read: true,
      icon: CalendarIcon,
    },
  ];

  const filteredNotifications = filter === 'all' 
    ? notifications 
    : notifications.filter(n => n.type === filter);

  return (
    <StudentPanelLayout>
      {/* Filter Buttons */}
      <div className="bg-white rounded-xl shadow-sm p-4 mb-6">
        <div className="flex flex-wrap gap-2">
          <button
            onClick={() => setFilter('all')}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              filter === 'all' 
                ? 'bg-primary-600 text-white' 
                : 'bg-secondary-100 text-secondary-700 hover:bg-primary-50'
            }`}
          >
            All
          </button>
          <button
            onClick={() => setFilter('academic')}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              filter === 'academic' 
                ? 'bg-primary-600 text-white' 
                : 'bg-secondary-100 text-secondary-700 hover:bg-primary-50'
            }`}
          >
            Academic
          </button>
          <button
            onClick={() => setFilter('event')}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              filter === 'event' 
                ? 'bg-primary-600 text-white' 
                : 'bg-secondary-100 text-secondary-700 hover:bg-primary-50'
            }`}
          >
            Events
          </button>
        </div>
      </div>

      {/* Notifications List */}
      <div className="space-y-4">
        {filteredNotifications.map((notification) => {
          const Icon = notification.icon;
          return (
            <div 
              key={notification.id} 
              className={`bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition-shadow ${
                !notification.read ? 'border-l-4 border-primary-500' : ''
              }`}
            >
              <div className="flex items-start gap-4">
                <div className={`p-3 rounded-lg ${
                  notification.priority === 'high' ? 'bg-red-100' :
                  notification.priority === 'medium' ? 'bg-yellow-100' : 'bg-blue-100'
                }`}>
                  <Icon className={`w-6 h-6 ${
                    notification.priority === 'high' ? 'text-red-600' :
                    notification.priority === 'medium' ? 'text-yellow-600' : 'text-blue-600'
                  }`} />
                </div>
                <div className="flex-1">
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="font-semibold text-lg">{notification.title}</h3>
                    {!notification.read && (
                      <span className="bg-primary-100 text-primary-800 text-xs px-2 py-1 rounded-full">
                        New
                      </span>
                    )}
                  </div>
                  <p className="text-sm text-secondary-600 mt-1">{notification.message}</p>
                  <div className="flex items-center gap-4 mt-3 text-xs text-secondary-500">
                    <span>{notification.date}</span>
                    <span>{notification.time}</span>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </StudentPanelLayout>
  );
};

export default StudentNotifications;