import React, { useState } from 'react';
import { 
  NewspaperIcon,
  CalendarIcon,
  PhotoIcon,
  MegaphoneIcon,
  PencilIcon,
  TrashIcon,
  PlusIcon,
  EyeIcon
} from '@heroicons/react/24/outline';
import AdminPanelLayout from '../../layouts/AdminPanelLayout';
import toast from 'react-hot-toast';

const CMSManagement = () => {
  const [activeTab, setActiveTab] = useState('news');

  const news = [
    { id: 1, title: 'Admissions Open 2025-26', category: 'Admission', date: 'Jan 15, 2025', status: 'Published' },
    { id: 2, title: 'Annual Sports Day 2025', category: 'Event', date: 'Feb 10, 2025', status: 'Published' },
    { id: 3, title: 'Placement Drive 2025', category: 'Placement', date: 'Mar 5, 2025', status: 'Draft' },
  ];

  const events = [
    { id: 1, name: 'Tech Fest 2025', date: 'Mar 20, 2025', venue: 'Main Auditorium', status: 'Upcoming' },
    { id: 2, name: 'Cultural Night', date: 'Mar 25, 2025', venue: 'Open Air Theatre', status: 'Upcoming' },
  ];

  const gallery = [
    { id: 1, title: 'Campus Building', category: 'Campus', date: 'Mar 10, 2025' },
    { id: 2, title: 'Library Interior', category: 'Facilities', date: 'Mar 8, 2025' },
  ];

  const notices = [
    { id: 1, title: 'Holiday on March 29th', category: 'Holiday', date: 'Mar 25, 2025', priority: 'High' },
    { id: 2, title: 'Exam Schedule Released', category: 'Examination', date: 'Mar 20, 2025', priority: 'High' },
  ];

  const handleDelete = (id, type) => {
    if (window.confirm(`Delete this ${type}?`)) {
      toast.success(`${type} deleted!`);
    }
  };

  return (
    <AdminPanelLayout>
      {/* Header with Add Button */}
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold text-secondary-900">CMS Management</h1>
        <button className="btn-primary bg-purple-600 hover:bg-purple-700 flex items-center gap-2">
          <PlusIcon className="w-4 h-4" />
          Add Content
        </button>
      </div>

      {/* Tabs */}
      <div className="bg-white rounded-xl shadow-sm p-2 mb-6 inline-flex">
        <button
          onClick={() => setActiveTab('news')}
          className={`px-6 py-2 rounded-lg text-sm font-medium transition-colors ${
            activeTab === 'news' 
              ? 'bg-purple-600 text-white' 
              : 'text-secondary-600 hover:bg-purple-50'
          }`}
        >
          <NewspaperIcon className="w-4 h-4 inline mr-2" />
          News
        </button>
        <button
          onClick={() => setActiveTab('events')}
          className={`px-6 py-2 rounded-lg text-sm font-medium transition-colors ${
            activeTab === 'events' 
              ? 'bg-purple-600 text-white' 
              : 'text-secondary-600 hover:bg-purple-50'
          }`}
        >
          <CalendarIcon className="w-4 h-4 inline mr-2" />
          Events
        </button>
        <button
          onClick={() => setActiveTab('gallery')}
          className={`px-6 py-2 rounded-lg text-sm font-medium transition-colors ${
            activeTab === 'gallery' 
              ? 'bg-purple-600 text-white' 
              : 'text-secondary-600 hover:bg-purple-50'
          }`}
        >
          <PhotoIcon className="w-4 h-4 inline mr-2" />
          Gallery
        </button>
        <button
          onClick={() => setActiveTab('notices')}
          className={`px-6 py-2 rounded-lg text-sm font-medium transition-colors ${
            activeTab === 'notices' 
              ? 'bg-purple-600 text-white' 
              : 'text-secondary-600 hover:bg-purple-50'
          }`}
        >
          <MegaphoneIcon className="w-4 h-4 inline mr-2" />
          Notices
        </button>
      </div>

      {/* News Tab */}
      {activeTab === 'news' && (
        <div className="bg-white rounded-xl shadow-sm overflow-hidden">
          <table className="w-full">
            <thead className="bg-purple-600 text-white">
              <tr>
                <th className="px-6 py-4 text-left text-sm font-semibold">Title</th>
                <th className="px-6 py-4 text-left text-sm font-semibold">Category</th>
                <th className="px-6 py-4 text-left text-sm font-semibold">Date</th>
                <th className="px-6 py-4 text-left text-sm font-semibold">Status</th>
                <th className="px-6 py-4 text-center text-sm font-semibold">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y">
              {news.map((item) => (
                <tr key={item.id} className="hover:bg-purple-50">
                  <td className="px-6 py-4 text-sm font-medium">{item.title}</td>
                  <td className="px-6 py-4 text-sm">{item.category}</td>
                  <td className="px-6 py-4 text-sm">{item.date}</td>
                  <td className="px-6 py-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                      item.status === 'Published' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
                    }`}>
                      {item.status}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center justify-center gap-2">
                      <button className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg">
                        <EyeIcon className="w-4 h-4" />
                      </button>
                      <button className="p-2 text-green-600 hover:bg-green-50 rounded-lg">
                        <PencilIcon className="w-4 h-4" />
                      </button>
                      <button 
                        onClick={() => handleDelete(item.id, 'news')}
                        className="p-2 text-red-600 hover:bg-red-50 rounded-lg"
                      >
                        <TrashIcon className="w-4 h-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {/* Events Tab */}
      {activeTab === 'events' && (
        <div className="grid md:grid-cols-2 gap-6">
          {events.map((event) => (
            <div key={event.id} className="bg-white rounded-xl shadow-sm p-6 hover:shadow-md">
              <h3 className="text-lg font-semibold mb-2">{event.name}</h3>
              <p className="text-sm text-secondary-600 mb-1">{event.venue}</p>
              <p className="text-sm text-secondary-500 mb-4">{event.date}</p>
              <div className="flex justify-end gap-2">
                <button className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg">
                  <PencilIcon className="w-4 h-4" />
                </button>
                <button 
                  onClick={() => handleDelete(event.id, 'event')}
                  className="p-2 text-red-600 hover:bg-red-50 rounded-lg"
                >
                  <TrashIcon className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Gallery Tab */}
      {activeTab === 'gallery' && (
        <div className="grid md:grid-cols-3 gap-6">
          {gallery.map((item) => (
            <div key={item.id} className="bg-white rounded-xl shadow-sm overflow-hidden">
              <div className="h-40 bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-4xl">
                🖼️
              </div>
              <div className="p-4">
                <h3 className="font-semibold">{item.title}</h3>
                <p className="text-sm text-secondary-500">{item.category} • {item.date}</p>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Notices Tab */}
      {activeTab === 'notices' && (
        <div className="space-y-4">
          {notices.map((notice) => (
            <div key={notice.id} className="bg-white rounded-xl shadow-sm p-6">
              <div className="flex items-start justify-between">
                <div>
                  <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-xs font-medium mb-2 inline-block">
                    {notice.category}
                  </span>
                  <h3 className="text-lg font-semibold mb-1">{notice.title}</h3>
                  <p className="text-sm text-secondary-500">{notice.date}</p>
                </div>
                <div className="flex gap-2">
                  <button className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg">
                    <PencilIcon className="w-4 h-4" />
                  </button>
                  <button 
                    onClick={() => handleDelete(notice.id, 'notice')}
                    className="p-2 text-red-600 hover:bg-red-50 rounded-lg"
                  >
                    <TrashIcon className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </AdminPanelLayout>
  );
};

export default CMSManagement;