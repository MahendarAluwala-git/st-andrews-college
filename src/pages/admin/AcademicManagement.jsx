import React, { useState } from 'react';
import { 
  BookOpenIcon, 
  BuildingLibraryIcon,
  AcademicCapIcon,
  CalendarIcon,
  PencilIcon,
  TrashIcon,
  PlusIcon,
  MagnifyingGlassIcon
} from '@heroicons/react/24/outline';
import AdminPanelLayout from '../../layouts/AdminPanelLayout';

const AcademicManagement = () => {
  const [activeTab, setActiveTab] = useState('courses');

  const courses = [
    { id: 1, code: 'CS301', name: 'Data Structures', department: 'Computer Science', credits: 4, semester: '5', faculty: 'Dr. Sharma' },
    { id: 2, code: 'CS302', name: 'Database Systems', department: 'Computer Science', credits: 4, semester: '5', faculty: 'Prof. Kumar' },
    { id: 3, code: 'CS303', name: 'Computer Networks', department: 'Computer Science', credits: 4, semester: '5', faculty: 'Dr. Singh' },
  ];

  const departments = [
    { id: 1, name: 'Computer Science', hod: 'Dr. James Anderson', faculty: 25, students: 850 },
    { id: 2, name: 'Mathematics', hod: 'Prof. Sarah Williams', faculty: 18, students: 450 },
    { id: 3, name: 'Physics', hod: 'Dr. Michael Chen', faculty: 15, students: 320 },
  ];

  const academicCalendar = [
    { event: 'Semester Commencement', date: 'Jan 15, 2025', type: 'Academic' },
    { event: 'Internal Assessment I', date: 'Feb 10-15, 2025', type: 'Exam' },
    { event: 'Internal Assessment II', date: 'Mar 10-15, 2025', type: 'Exam' },
    { event: 'Theory Examinations', date: 'Apr 15-30, 2025', type: 'Exam' },
  ];

  return (
    <AdminPanelLayout>
      {/* Header with Add Button */}
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold text-secondary-900">Academic Management</h1>
        <button className="btn-primary bg-purple-600 hover:bg-purple-700 flex items-center gap-2">
          <PlusIcon className="w-4 h-4" />
          Add New
        </button>
      </div>

      {/* Tabs */}
      <div className="bg-white rounded-xl shadow-sm p-2 mb-6 inline-flex">
        <button
          onClick={() => setActiveTab('courses')}
          className={`px-6 py-2 rounded-lg text-sm font-medium transition-colors ${
            activeTab === 'courses' 
              ? 'bg-purple-600 text-white' 
              : 'text-secondary-600 hover:bg-purple-50'
          }`}
        >
          <BookOpenIcon className="w-4 h-4 inline mr-2" />
          Courses
        </button>
        <button
          onClick={() => setActiveTab('departments')}
          className={`px-6 py-2 rounded-lg text-sm font-medium transition-colors ${
            activeTab === 'departments' 
              ? 'bg-purple-600 text-white' 
              : 'text-secondary-600 hover:bg-purple-50'
          }`}
        >
          <BuildingLibraryIcon className="w-4 h-4 inline mr-2" />
          Departments
        </button>
        <button
          onClick={() => setActiveTab('calendar')}
          className={`px-6 py-2 rounded-lg text-sm font-medium transition-colors ${
            activeTab === 'calendar' 
              ? 'bg-purple-600 text-white' 
              : 'text-secondary-600 hover:bg-purple-50'
          }`}
        >
          <CalendarIcon className="w-4 h-4 inline mr-2" />
          Calendar
        </button>
      </div>

      {/* Search Bar */}
      <div className="bg-white rounded-xl shadow-sm p-4 mb-6">
        <div className="relative">
          <MagnifyingGlassIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-secondary-400" />
          <input
            type="text"
            placeholder={`Search ${activeTab}...`}
            className="w-full pl-10 pr-4 py-2 border border-secondary-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
        </div>
      </div>

      {/* Courses Tab */}
      {activeTab === 'courses' && (
        <div className="bg-white rounded-xl shadow-sm overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-purple-600 text-white">
                <tr>
                  <th className="px-6 py-4 text-left text-sm font-semibold">Code</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold">Course Name</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold">Department</th>
                  <th className="px-6 py-4 text-center text-sm font-semibold">Credits</th>
                  <th className="px-6 py-4 text-center text-sm font-semibold">Semester</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold">Faculty</th>
                  <th className="px-6 py-4 text-center text-sm font-semibold">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y">
                {courses.map((course) => (
                  <tr key={course.id} className="hover:bg-purple-50">
                    <td className="px-6 py-4 text-sm font-medium">{course.code}</td>
                    <td className="px-6 py-4 text-sm">{course.name}</td>
                    <td className="px-6 py-4 text-sm">{course.department}</td>
                    <td className="px-6 py-4 text-center text-sm">{course.credits}</td>
                    <td className="px-6 py-4 text-center text-sm">{course.semester}</td>
                    <td className="px-6 py-4 text-sm">{course.faculty}</td>
                    <td className="px-6 py-4">
                      <div className="flex items-center justify-center gap-2">
                        <button className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg">
                          <PencilIcon className="w-4 h-4" />
                        </button>
                        <button className="p-2 text-red-600 hover:bg-red-50 rounded-lg">
                          <TrashIcon className="w-4 h-4" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* Departments Tab */}
      {activeTab === 'departments' && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {departments.map((dept) => (
            <div key={dept.id} className="bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition-shadow">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-lg font-semibold">{dept.name}</h3>
                  <p className="text-sm text-purple-600">HOD: {dept.hod}</p>
                </div>
                <div className="flex gap-2">
                  <button className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg">
                    <PencilIcon className="w-4 h-4" />
                  </button>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4 text-center">
                <div>
                  <p className="text-2xl font-bold text-purple-600">{dept.faculty}</p>
                  <p className="text-xs text-secondary-500">Faculty</p>
                </div>
                <div>
                  <p className="text-2xl font-bold text-green-600">{dept.students}</p>
                  <p className="text-xs text-secondary-500">Students</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Calendar Tab */}
      {activeTab === 'calendar' && (
        <div className="bg-white rounded-xl shadow-sm p-6">
          <h2 className="text-lg font-semibold mb-6">Academic Calendar 2025-26</h2>
          <div className="space-y-4">
            {academicCalendar.map((item, index) => (
              <div key={index} className="flex items-center justify-between p-4 bg-secondary-50 rounded-lg">
                <div>
                  <p className="font-medium">{item.event}</p>
                  <p className="text-sm text-secondary-500">{item.date}</p>
                </div>
                <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                  item.type === 'Exam' ? 'bg-red-100 text-red-800' : 'bg-blue-100 text-blue-800'
                }`}>
                  {item.type}
                </span>
              </div>
            ))}
          </div>
        </div>
      )}
    </AdminPanelLayout>
  );
};

export default AcademicManagement;