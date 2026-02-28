import React, { useState } from 'react';
import { CalendarIcon, ClockIcon, DocumentTextIcon, AcademicCapIcon } from '@heroicons/react/24/outline';
import StudentPanelLayout from '../../layouts/StudentPanelLayout';

const StudentExams = () => {
  const [selectedTab, setSelectedTab] = useState('schedule');

  const examSchedule = [
    { date: 'Mar 20, 2025', day: 'Thursday', time: '10:00 AM - 1:00 PM', subject: 'Data Structures', code: 'CS301', venue: 'Hall A', status: 'Upcoming' },
    { date: 'Mar 22, 2025', day: 'Saturday', time: '10:00 AM - 1:00 PM', subject: 'Database Systems', code: 'CS302', venue: 'Hall B', status: 'Upcoming' },
    { date: 'Mar 25, 2025', day: 'Tuesday', time: '2:00 PM - 5:00 PM', subject: 'Computer Networks', code: 'CS303', venue: 'Hall C', status: 'Upcoming' },
  ];

  const results = [
    { semester: 'Semester V', exam: 'End Semester', subject: 'Data Structures', marks: '85/100', grade: 'A', status: 'Pass' },
    { semester: 'Semester V', exam: 'End Semester', subject: 'Database Systems', marks: '78/100', grade: 'B+', status: 'Pass' },
    { semester: 'Semester V', exam: 'End Semester', subject: 'Computer Networks', marks: '92/100', grade: 'A+', status: 'Pass' },
  ];

  const marksheet = {
    name: 'Rahul Verma',
    rollNo: 'CS2022001',
    program: 'B.Tech Computer Science',
    semester: 'V',
    academicYear: '2024-25',
    subjects: [
      { code: 'CS301', name: 'Data Structures', internal: 28, external: 72, total: 100, grade: 'A' },
      { code: 'CS302', name: 'Database Systems', internal: 25, external: 68, total: 93, grade: 'B+' },
      { code: 'CS303', name: 'Computer Networks', internal: 30, external: 75, total: 105, grade: 'A+' },
    ],
    totalMarks: 298,
    percentage: '87.5%',
    cgpa: '8.9',
    result: 'PASS'
  };

  return (
    <StudentPanelLayout>
      {/* Tab Navigation */}
      <div className="bg-white rounded-xl shadow-sm p-2 mb-6 inline-flex">
        <button
          onClick={() => setSelectedTab('schedule')}
          className={`px-6 py-2 rounded-lg text-sm font-medium transition-colors ${
            selectedTab === 'schedule' 
              ? 'bg-primary-600 text-white' 
              : 'text-secondary-600 hover:bg-primary-50'
          }`}
        >
          Exam Schedule
        </button>
        <button
          onClick={() => setSelectedTab('results')}
          className={`px-6 py-2 rounded-lg text-sm font-medium transition-colors ${
            selectedTab === 'results' 
              ? 'bg-primary-600 text-white' 
              : 'text-secondary-600 hover:bg-primary-50'
          }`}
        >
          Results
        </button>
        <button
          onClick={() => setSelectedTab('marksheet')}
          className={`px-6 py-2 rounded-lg text-sm font-medium transition-colors ${
            selectedTab === 'marksheet' 
              ? 'bg-primary-600 text-white' 
              : 'text-secondary-600 hover:bg-primary-50'
          }`}
        >
          Marksheet
        </button>
      </div>

      {/* Exam Schedule Tab */}
      {selectedTab === 'schedule' && (
        <div className="bg-white rounded-xl shadow-sm p-6">
          <h2 className="text-lg font-semibold mb-4 flex items-center">
            <CalendarIcon className="w-5 h-5 mr-2 text-primary-600" />
            End Semester Exam Schedule (March 2025)
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-secondary-50">
                <tr>
                  <th className="px-4 py-3 text-left text-sm font-medium text-secondary-600">Date</th>
                  <th className="px-4 py-3 text-left text-sm font-medium text-secondary-600">Day</th>
                  <th className="px-4 py-3 text-left text-sm font-medium text-secondary-600">Time</th>
                  <th className="px-4 py-3 text-left text-sm font-medium text-secondary-600">Subject</th>
                  <th className="px-4 py-3 text-left text-sm font-medium text-secondary-600">Code</th>
                  <th className="px-4 py-3 text-left text-sm font-medium text-secondary-600">Venue</th>
                </tr>
              </thead>
              <tbody className="divide-y">
                {examSchedule.map((exam, index) => (
                  <tr key={index} className="hover:bg-secondary-50">
                    <td className="px-4 py-3 text-sm font-medium">{exam.date}</td>
                    <td className="px-4 py-3 text-sm">{exam.day}</td>
                    <td className="px-4 py-3 text-sm">{exam.time}</td>
                    <td className="px-4 py-3 text-sm">{exam.subject}</td>
                    <td className="px-4 py-3 text-sm">{exam.code}</td>
                    <td className="px-4 py-3 text-sm">{exam.venue}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* Results Tab */}
      {selectedTab === 'results' && (
        <div className="bg-white rounded-xl shadow-sm p-6">
          <h2 className="text-lg font-semibold mb-4 flex items-center">
            <AcademicCapIcon className="w-5 h-5 mr-2 text-primary-600" />
            Previous Results
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-secondary-50">
                <tr>
                  <th className="px-4 py-3 text-left text-sm font-medium text-secondary-600">Semester</th>
                  <th className="px-4 py-3 text-left text-sm font-medium text-secondary-600">Exam</th>
                  <th className="px-4 py-3 text-left text-sm font-medium text-secondary-600">Subject</th>
                  <th className="px-4 py-3 text-center text-sm font-medium text-secondary-600">Marks</th>
                  <th className="px-4 py-3 text-center text-sm font-medium text-secondary-600">Grade</th>
                </tr>
              </thead>
              <tbody className="divide-y">
                {results.map((result, index) => (
                  <tr key={index} className="hover:bg-secondary-50">
                    <td className="px-4 py-3 text-sm">{result.semester}</td>
                    <td className="px-4 py-3 text-sm">{result.exam}</td>
                    <td className="px-4 py-3 text-sm">{result.subject}</td>
                    <td className="px-4 py-3 text-center text-sm font-medium">{result.marks}</td>
                    <td className="px-4 py-3 text-center text-sm font-bold text-primary-600">{result.grade}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* Marksheet Tab */}
      {selectedTab === 'marksheet' && (
        <div className="bg-white rounded-xl shadow-sm p-6">
          <h2 className="text-lg font-semibold mb-4 flex items-center">
            <DocumentTextIcon className="w-5 h-5 mr-2 text-primary-600" />
            Semester V Marksheet
          </h2>
          
          {/* Student Info */}
          <div className="bg-secondary-50 p-4 rounded-lg mb-6 grid md:grid-cols-2 gap-4">
            <div>
              <p className="text-sm text-secondary-600">Name</p>
              <p className="font-semibold">{marksheet.name}</p>
            </div>
            <div>
              <p className="text-sm text-secondary-600">Roll Number</p>
              <p className="font-semibold">{marksheet.rollNo}</p>
            </div>
          </div>

          {/* Marks Table */}
          <div className="overflow-x-auto mb-6">
            <table className="w-full">
              <thead className="bg-primary-600 text-white">
                <tr>
                  <th className="px-4 py-3 text-left text-sm font-medium">Subject Code</th>
                  <th className="px-4 py-3 text-left text-sm font-medium">Subject Name</th>
                  <th className="px-4 py-3 text-center text-sm font-medium">Internal</th>
                  <th className="px-4 py-3 text-center text-sm font-medium">External</th>
                  <th className="px-4 py-3 text-center text-sm font-medium">Total</th>
                  <th className="px-4 py-3 text-center text-sm font-medium">Grade</th>
                </tr>
              </thead>
              <tbody className="divide-y">
                {marksheet.subjects.map((subject, index) => (
                  <tr key={index} className="hover:bg-secondary-50">
                    <td className="px-4 py-3 text-sm">{subject.code}</td>
                    <td className="px-4 py-3 text-sm">{subject.name}</td>
                    <td className="px-4 py-3 text-center text-sm">{subject.internal}</td>
                    <td className="px-4 py-3 text-center text-sm">{subject.external}</td>
                    <td className="px-4 py-3 text-center text-sm font-medium">{subject.total}</td>
                    <td className="px-4 py-3 text-center text-sm font-bold text-primary-600">{subject.grade}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </StudentPanelLayout>
  );
};

export default StudentExams;