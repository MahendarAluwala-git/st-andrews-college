import React, { useState } from 'react';
import { 
  BookOpenIcon, 
  ClockIcon, 
  AcademicCapIcon,
  DocumentTextIcon,
  ArrowDownTrayIcon
} from '@heroicons/react/24/outline';
import StudentPanelLayout from '../../layouts/StudentPanelLayout';

const StudentAcademics = () => {
  const [selectedSemester, setSelectedSemester] = useState('6');

  const subjects = [
    { code: 'CS301', name: 'Data Structures', type: 'Theory', credits: 4, faculty: 'Dr. Sharma', status: 'Ongoing' },
    { code: 'CS302', name: 'Database Systems', type: 'Theory', credits: 4, faculty: 'Prof. Kumar', status: 'Ongoing' },
    { code: 'CS303', name: 'Computer Networks', type: 'Theory', credits: 4, faculty: 'Dr. Singh', status: 'Ongoing' },
    { code: 'CS304', name: 'Algorithm Design', type: 'Theory', credits: 4, faculty: 'Prof. Gupta', status: 'Ongoing' },
    { code: 'CS305', name: 'Operating Systems', type: 'Theory', credits: 3, faculty: 'Dr. Patel', status: 'Ongoing' },
    { code: 'CS306', name: 'DBMS Lab', type: 'Lab', credits: 2, faculty: 'Prof. Kumar', status: 'Ongoing' },
  ];

  const timetable = [
    { day: 'Monday', periods: [
      { time: '10:00 - 11:30', subject: 'Data Structures', faculty: 'Dr. Sharma', room: '401' },
      { time: '11:30 - 01:00', subject: 'Database Systems', faculty: 'Prof. Kumar', room: '401' },
      { time: '02:00 - 03:30', subject: 'Computer Networks', faculty: 'Dr. Singh', room: '205' },
    ]},
    { day: 'Tuesday', periods: [
      { time: '10:00 - 11:30', subject: 'Algorithm Design', faculty: 'Prof. Gupta', room: '108' },
      { time: '11:30 - 01:00', subject: 'Operating Systems', faculty: 'Dr. Patel', room: '302' },
      { time: '02:00 - 05:00', subject: 'DBMS Lab', faculty: 'Prof. Kumar', room: 'Lab 3' },
    ]},
  ];

  const studyMaterials = [
    { subject: 'Data Structures', topic: 'Trees & Graphs', type: 'PDF', size: '2.4 MB', date: 'Mar 10, 2025' },
    { subject: 'Database Systems', topic: 'SQL Queries', type: 'PPT', size: '1.8 MB', date: 'Mar 8, 2025' },
    { subject: 'Computer Networks', topic: 'OSI Model', type: 'PDF', size: '3.1 MB', date: 'Mar 5, 2025' },
  ];

  return (
    <StudentPanelLayout>
      {/* Semester Selector */}
      <div className="bg-white rounded-xl shadow-sm p-4 mb-6">
        <div className="flex items-center gap-4">
          <label className="text-sm font-medium text-secondary-700">Select Semester:</label>
          <select 
            value={selectedSemester}
            onChange={(e) => setSelectedSemester(e.target.value)}
            className="px-4 py-2 border border-secondary-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
          >
            <option value="1">Semester 1</option>
            <option value="2">Semester 2</option>
            <option value="3">Semester 3</option>
            <option value="4">Semester 4</option>
            <option value="5">Semester 5</option>
            <option value="6">Semester 6</option>
          </select>
        </div>
      </div>

      {/* Subjects List */}
      <div className="bg-white rounded-xl shadow-sm p-6 mb-6">
        <h2 className="text-lg font-semibold mb-4 flex items-center">
          <BookOpenIcon className="w-5 h-5 mr-2 text-primary-600" />
          Current Subjects (Semester {selectedSemester})
        </h2>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-secondary-50">
              <tr>
                <th className="px-4 py-3 text-left text-sm font-medium text-secondary-600">Code</th>
                <th className="px-4 py-3 text-left text-sm font-medium text-secondary-600">Subject</th>
                <th className="px-4 py-3 text-left text-sm font-medium text-secondary-600">Type</th>
                <th className="px-4 py-3 text-center text-sm font-medium text-secondary-600">Credits</th>
                <th className="px-4 py-3 text-left text-sm font-medium text-secondary-600">Faculty</th>
                <th className="px-4 py-3 text-left text-sm font-medium text-secondary-600">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y">
              {subjects.map((subject, index) => (
                <tr key={index} className="hover:bg-secondary-50">
                  <td className="px-4 py-3 text-sm">{subject.code}</td>
                  <td className="px-4 py-3 text-sm font-medium">{subject.name}</td>
                  <td className="px-4 py-3 text-sm">{subject.type}</td>
                  <td className="px-4 py-3 text-center text-sm">{subject.credits}</td>
                  <td className="px-4 py-3 text-sm">{subject.faculty}</td>
                  <td className="px-4 py-3 text-sm">
                    <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs">
                      {subject.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Timetable */}
      <div className="bg-white rounded-xl shadow-sm p-6 mb-6">
        <h2 className="text-lg font-semibold mb-4 flex items-center">
          <ClockIcon className="w-5 h-5 mr-2 text-primary-600" />
          Weekly Timetable
        </h2>
        <div className="space-y-4">
          {timetable.map((day, idx) => (
            <div key={idx} className="border rounded-lg overflow-hidden">
              <div className="bg-primary-50 px-4 py-2 font-semibold text-primary-800">
                {day.day}
              </div>
              <div className="divide-y">
                {day.periods.map((period, pid) => (
                  <div key={pid} className="px-4 py-3 flex items-center justify-between hover:bg-secondary-50">
                    <div className="flex-1">
                      <p className="font-medium">{period.subject}</p>
                      <p className="text-sm text-secondary-500">{period.faculty} • Room {period.room}</p>
                    </div>
                    <p className="text-sm text-primary-600 font-medium">{period.time}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Study Materials */}
      <div className="bg-white rounded-xl shadow-sm p-6">
        <h2 className="text-lg font-semibold mb-4 flex items-center">
          <DocumentTextIcon className="w-5 h-5 mr-2 text-primary-600" />
          Study Materials
        </h2>
        <div className="grid md:grid-cols-2 gap-4">
          {studyMaterials.map((material, index) => (
            <div key={index} className="border rounded-lg p-4 hover:shadow-md transition-shadow">
              <div className="flex items-start justify-between mb-2">
                <div>
                  <h3 className="font-medium">{material.subject}</h3>
                  <p className="text-sm text-secondary-600">{material.topic}</p>
                </div>
                <button className="text-primary-600 hover:text-primary-700">
                  <ArrowDownTrayIcon className="w-5 h-5" />
                </button>
              </div>
              <div className="flex items-center gap-4 text-xs text-secondary-500">
                <span>{material.type}</span>
                <span>{material.size}</span>
                <span>{material.date}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </StudentPanelLayout>
  );
};

export default StudentAcademics;