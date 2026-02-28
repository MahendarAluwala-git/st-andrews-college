import React, { useState } from 'react';
import { 
  UsersIcon, 
  EnvelopeIcon,
  PhoneIcon,
  MagnifyingGlassIcon
} from '@heroicons/react/24/outline';
import FacultyPanelLayout from '../../layouts/FacultyPanelLayout';

const StudentList = () => {
  const [selectedCourse, setSelectedCourse] = useState('CS301');
  const [searchTerm, setSearchTerm] = useState('');

  const courses = [
    { code: 'CS301', name: 'Data Structures', batch: 'CSE 3rd Year', students: 65 },
    { code: 'CS302', name: 'Database Systems', batch: 'CSE 2nd Year', students: 72 },
    { code: 'CS304', name: 'Algorithm Design', batch: 'CSE 4th Year', students: 58 },
  ];

  const students = [
    { id: 1, rollNo: 'CS2022001', name: 'Rahul Verma', email: 'rahul@standrews.edu', phone: '+91 98765 43210', attendance: 92, cgpa: 8.6 },
    { id: 2, rollNo: 'CS2022002', name: 'Priya Sharma', email: 'priya@standrews.edu', phone: '+91 98765 43211', attendance: 88, cgpa: 8.9 },
    { id: 3, rollNo: 'CS2022003', name: 'Amit Kumar', email: 'amit@standrews.edu', phone: '+91 98765 43212', attendance: 75, cgpa: 7.8 },
    { id: 4, rollNo: 'CS2022004', name: 'Neha Singh', email: 'neha@standrews.edu', phone: '+91 98765 43213', attendance: 95, cgpa: 9.2 },
  ];

  return (
    <FacultyPanelLayout>
      {/* Filters */}
      <div className="bg-white rounded-xl shadow-sm p-6 mb-6">
        <div className="grid md:grid-cols-3 gap-4">
          <div>
            <label className="block text-sm font-medium text-secondary-700 mb-2">Select Course</label>
            <select 
              value={selectedCourse}
              onChange={(e) => setSelectedCourse(e.target.value)}
              className="w-full px-4 py-2 border border-secondary-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
            >
              {courses.map(course => (
                <option key={course.code} value={course.code}>
                  {course.code} - {course.name} ({course.batch})
                </option>
              ))}
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-secondary-700 mb-2">Search</label>
            <div className="relative">
              <MagnifyingGlassIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-secondary-400" />
              <input 
                type="text"
                placeholder="Search by name or roll number"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-secondary-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Course Info */}
      <div className="bg-white rounded-xl shadow-sm p-6 mb-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="p-3 bg-green-100 rounded-lg">
              <UsersIcon className="w-6 h-6 text-green-600" />
            </div>
            <div>
              <h2 className="text-lg font-semibold">Course Information</h2>
              <p className="text-sm text-secondary-600">
                {courses.find(c => c.code === selectedCourse)?.name} • {courses.find(c => c.code === selectedCourse)?.batch}
              </p>
            </div>
          </div>
          <div className="text-right">
            <p className="text-sm text-secondary-600">Total Students</p>
            <p className="text-2xl font-bold text-green-600">
              {courses.find(c => c.code === selectedCourse)?.students}
            </p>
          </div>
        </div>
      </div>

      {/* Student Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {students.map((student) => (
          <div key={student.id} className="bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition-shadow">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
                {student.name.charAt(0)}
              </div>
              <div>
                <h3 className="font-semibold">{student.name}</h3>
                <p className="text-sm text-secondary-500">{student.rollNo}</p>
              </div>
            </div>

            <div className="space-y-2 text-sm mb-4">
              <div className="flex items-center text-secondary-600">
                <EnvelopeIcon className="w-4 h-4 mr-2 text-green-500" />
                {student.email}
              </div>
              <div className="flex items-center text-secondary-600">
                <PhoneIcon className="w-4 h-4 mr-2 text-green-500" />
                {student.phone}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-2 pt-4 border-t">
              <div className="text-center">
                <p className="text-sm text-secondary-500">Attendance</p>
                <p className={`text-lg font-semibold ${
                  student.attendance >= 85 ? 'text-green-600' : 'text-yellow-600'
                }`}>
                  {student.attendance}%
                </p>
              </div>
              <div className="text-center">
                <p className="text-sm text-secondary-500">CGPA</p>
                <p className="text-lg font-semibold text-green-600">{student.cgpa}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </FacultyPanelLayout>
  );
};

export default StudentList;