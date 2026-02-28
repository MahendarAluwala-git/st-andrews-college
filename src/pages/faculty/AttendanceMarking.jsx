import React, { useState } from 'react';
import { 
  UsersIcon, 
  CalendarIcon,
  CheckCircleIcon,
  XCircleIcon,
  MagnifyingGlassIcon
} from '@heroicons/react/24/outline';
import FacultyPanelLayout from '../../layouts/FacultyPanelLayout';
import toast from 'react-hot-toast';

const AttendanceMarking = () => {
  const [selectedCourse, setSelectedCourse] = useState('CS301');
  const [selectedDate, setSelectedDate] = useState('2025-03-15');
  const [attendance, setAttendance] = useState({});

  const courses = [
    { code: 'CS301', name: 'Data Structures', batch: 'CSE 3rd Year', students: 65 },
    { code: 'CS302', name: 'Database Systems', batch: 'CSE 2nd Year', students: 72 },
    { code: 'CS304', name: 'Algorithm Design', batch: 'CSE 4th Year', students: 58 },
  ];

  const students = [
    { id: 1, rollNo: 'CS2022001', name: 'Rahul Verma' },
    { id: 2, rollNo: 'CS2022002', name: 'Priya Sharma' },
    { id: 3, rollNo: 'CS2022003', name: 'Amit Kumar' },
    { id: 4, rollNo: 'CS2022004', name: 'Neha Singh' },
    { id: 5, rollNo: 'CS2022005', name: 'Arjun Patel' },
  ];

  const handleAttendanceChange = (studentId, status) => {
    setAttendance(prev => ({ ...prev, [studentId]: status }));
  };

  const handleSubmit = () => {
    toast.success('Attendance marked successfully!');
  };

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
            <label className="block text-sm font-medium text-secondary-700 mb-2">Select Date</label>
            <input 
              type="date"
              value={selectedDate}
              onChange={(e) => setSelectedDate(e.target.value)}
              className="w-full px-4 py-2 border border-secondary-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-secondary-700 mb-2">Search Student</label>
            <div className="relative">
              <MagnifyingGlassIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-secondary-400" />
              <input 
                type="text"
                placeholder="Search by name"
                className="w-full pl-10 pr-4 py-2 border border-secondary-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Course Info */}
      <div className="bg-white rounded-xl shadow-sm p-6 mb-6">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-lg font-semibold">Course Information</h2>
            <p className="text-sm text-secondary-600 mt-1">
              {courses.find(c => c.code === selectedCourse)?.name} • {courses.find(c => c.code === selectedCourse)?.batch}
            </p>
          </div>
          <div className="text-right">
            <p className="text-sm text-secondary-600">Total Students</p>
            <p className="text-2xl font-bold text-green-600">
              {courses.find(c => c.code === selectedCourse)?.students}
            </p>
          </div>
        </div>
      </div>

      {/* Attendance Table */}
      <div className="bg-white rounded-xl shadow-sm p-6">
        <h2 className="text-lg font-semibold mb-4 flex items-center">
          <UsersIcon className="w-5 h-5 mr-2 text-green-600" />
          Student List
        </h2>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-secondary-50">
              <tr>
                <th className="px-4 py-3 text-left text-sm font-medium text-secondary-600">Roll No</th>
                <th className="px-4 py-3 text-left text-sm font-medium text-secondary-600">Student Name</th>
                <th className="px-4 py-3 text-center text-sm font-medium text-secondary-600">Attendance Status</th>
              </tr>
            </thead>
            <tbody className="divide-y">
              {students.map((student) => (
                <tr key={student.id} className="hover:bg-secondary-50">
                  <td className="px-4 py-3 text-sm font-medium">{student.rollNo}</td>
                  <td className="px-4 py-3 text-sm">{student.name}</td>
                  <td className="px-4 py-3">
                    <div className="flex items-center justify-center gap-2">
                      <button
                        onClick={() => handleAttendanceChange(student.id, 'present')}
                        className={`px-3 py-1 rounded-lg text-xs font-medium flex items-center gap-1 ${
                          attendance[student.id] === 'present'
                            ? 'bg-green-100 text-green-800 border-2 border-green-500'
                            : 'bg-secondary-100 text-secondary-600 hover:bg-green-50'
                        }`}
                      >
                        <CheckCircleIcon className="w-4 h-4" />
                        Present
                      </button>
                      <button
                        onClick={() => handleAttendanceChange(student.id, 'absent')}
                        className={`px-3 py-1 rounded-lg text-xs font-medium flex items-center gap-1 ${
                          attendance[student.id] === 'absent'
                            ? 'bg-red-100 text-red-800 border-2 border-red-500'
                            : 'bg-secondary-100 text-secondary-600 hover:bg-red-50'
                        }`}
                      >
                        <XCircleIcon className="w-4 h-4" />
                        Absent
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-6 pt-6 border-t flex justify-end">
          <button onClick={handleSubmit} className="btn-primary bg-green-600 hover:bg-green-700">
            Save Attendance
          </button>
        </div>
      </div>
    </FacultyPanelLayout>
  );
};

export default AttendanceMarking;