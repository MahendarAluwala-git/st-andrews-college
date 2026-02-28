import React, { useState } from 'react';
import { 
  DocumentTextIcon, 
  CalendarIcon,
  ClockIcon,
  ArrowUpTrayIcon
} from '@heroicons/react/24/outline';
import FacultyPanelLayout from '../../layouts/FacultyPanelLayout';
import toast from 'react-hot-toast';

const AssignmentUpload = () => {
  const [formData, setFormData] = useState({
    title: '',
    course: '',
    description: '',
    dueDate: '',
    dueTime: '',
    maxMarks: ''
  });

  const courses = [
    { code: 'CS301', name: 'Data Structures' },
    { code: 'CS302', name: 'Database Systems' },
    { code: 'CS304', name: 'Algorithm Design' },
  ];

  const recentAssignments = [
    { id: 1, title: 'Binary Tree Implementation', course: 'CS301', due: 'Mar 18, 2025', submissions: 45, total: 65 },
    { id: 2, title: 'SQL Query Practice', course: 'CS302', due: 'Mar 20, 2025', submissions: 38, total: 72 },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success('Assignment uploaded successfully!');
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <FacultyPanelLayout>
      <div className="grid lg:grid-cols-3 gap-8">
        {/* Left Column - Upload Form */}
        <div className="lg:col-span-2">
          <div className="bg-white rounded-xl shadow-sm p-6">
            <h2 className="text-lg font-semibold mb-6 flex items-center">
              <DocumentTextIcon className="w-5 h-5 mr-2 text-green-600" />
              Create New Assignment
            </h2>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-secondary-700 mb-2">
                  Assignment Title *
                </label>
                <input
                  type="text"
                  name="title"
                  value={formData.title}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-2 border border-secondary-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                  placeholder="e.g., Implementation of Binary Search Tree"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-secondary-700 mb-2">
                  Select Course *
                </label>
                <select
                  name="course"
                  value={formData.course}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-2 border border-secondary-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                >
                  <option value="">Choose a course</option>
                  {courses.map(course => (
                    <option key={course.code} value={course.code}>
                      {course.code} - {course.name}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-secondary-700 mb-2">
                  Description *
                </label>
                <textarea
                  name="description"
                  value={formData.description}
                  onChange={handleInputChange}
                  required
                  rows="4"
                  className="w-full px-4 py-2 border border-secondary-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                  placeholder="Provide detailed instructions..."
                ></textarea>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-secondary-700 mb-2">
                    Due Date *
                  </label>
                  <div className="relative">
                    <CalendarIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-secondary-400" />
                    <input
                      type="date"
                      name="dueDate"
                      value={formData.dueDate}
                      onChange={handleInputChange}
                      required
                      className="w-full pl-10 pr-4 py-2 border border-secondary-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-secondary-700 mb-2">
                    Due Time
                  </label>
                  <div className="relative">
                    <ClockIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-secondary-400" />
                    <input
                      type="time"
                      name="dueTime"
                      value={formData.dueTime}
                      onChange={handleInputChange}
                      className="w-full pl-10 pr-4 py-2 border border-secondary-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                    />
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-secondary-700 mb-2">
                  Maximum Marks *
                </label>
                <input
                  type="number"
                  name="maxMarks"
                  value={formData.maxMarks}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-2 border border-secondary-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                  placeholder="e.g., 100"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-secondary-700 mb-2">
                  Attachments
                </label>
                <div className="border-2 border-dashed border-secondary-200 rounded-lg p-6 text-center hover:border-green-500 transition-colors cursor-pointer">
                  <ArrowUpTrayIcon className="w-8 h-8 mx-auto text-secondary-400 mb-2" />
                  <p className="text-sm font-medium">Click to upload or drag and drop</p>
                  <p className="text-xs text-secondary-500 mt-1">PDF, DOC (Max 10MB)</p>
                </div>
              </div>

              <button type="submit" className="w-full btn-primary bg-green-600 hover:bg-green-700">
                Upload Assignment
              </button>
            </form>
          </div>
        </div>

        {/* Right Column - Recent Assignments */}
        <div className="lg:col-span-1">
          <div className="bg-white rounded-xl shadow-sm p-6 sticky top-24">
            <h2 className="text-lg font-semibold mb-4">Recent Assignments</h2>
            <div className="space-y-4">
              {recentAssignments.map((assignment) => (
                <div key={assignment.id} className="border rounded-lg p-4 hover:shadow-md transition-shadow">
                  <h3 className="font-medium text-sm mb-1">{assignment.title}</h3>
                  <p className="text-xs text-secondary-500 mb-2">{assignment.course}</p>
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-secondary-600">Due: {assignment.due}</span>
                    <span className="text-green-600 font-medium">
                      {assignment.submissions}/{assignment.total}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </FacultyPanelLayout>
  );
};

export default AssignmentUpload;