import React, { useState } from 'react';
import { CalendarIcon, CheckCircleIcon, XCircleIcon } from '@heroicons/react/24/outline';
import StudentPanelLayout from '../../layouts/StudentPanelLayout';

const StudentAttendance = () => {
  const [selectedMonth, setSelectedMonth] = useState('March 2025');

  const attendanceData = [
    { subject: 'Data Structures', total: 25, present: 23, percentage: 92, status: 'Good' },
    { subject: 'Database Systems', total: 23, present: 18, percentage: 78, status: 'Warning' },
    { subject: 'Computer Networks', total: 25, present: 22, percentage: 88, status: 'Good' },
    { subject: 'Algorithm Design', total: 20, present: 19, percentage: 95, status: 'Excellent' },
    { subject: 'Operating Systems', total: 20, present: 14, percentage: 70, status: 'Critical' },
  ];

  const monthlyAttendance = [
    { date: 'Mar 01', subject: 'Data Structures', status: 'Present' },
    { date: 'Mar 01', subject: 'Database Systems', status: 'Present' },
    { date: 'Mar 02', subject: 'Computer Networks', status: 'Absent' },
    { date: 'Mar 02', subject: 'Algorithm Design', status: 'Present' },
    { date: 'Mar 03', subject: 'Operating Systems', status: 'Present' },
    { date: 'Mar 03', subject: 'Data Structures', status: 'Present' },
  ];

  const getStatusColor = (status) => {
    switch(status) {
      case 'Present': return 'text-green-600 bg-green-100';
      case 'Absent': return 'text-red-600 bg-red-100';
      case 'Late': return 'text-yellow-600 bg-yellow-100';
      default: return 'text-secondary-600 bg-secondary-100';
    }
  };

  return (
    <StudentPanelLayout>
      {/* Summary Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <div className="bg-white rounded-xl shadow-sm p-6">
          <p className="text-sm text-secondary-600 mb-2">Overall Attendance</p>
          <p className="text-3xl font-bold text-secondary-900">84.6%</p>
          <p className="text-xs text-secondary-500 mt-2">Required: 75%</p>
        </div>
        <div className="bg-white rounded-xl shadow-sm p-6">
          <p className="text-sm text-secondary-600 mb-2">Total Classes</p>
          <p className="text-3xl font-bold text-secondary-900">113</p>
          <p className="text-xs text-secondary-500 mt-2">This Semester</p>
        </div>
        <div className="bg-white rounded-xl shadow-sm p-6">
          <p className="text-sm text-secondary-600 mb-2">Classes Attended</p>
          <p className="text-3xl font-bold text-green-600">96</p>
          <p className="text-xs text-secondary-500 mt-2">85% of total</p>
        </div>
        <div className="bg-white rounded-xl shadow-sm p-6">
          <p className="text-sm text-secondary-600 mb-2">Classes Missed</p>
          <p className="text-3xl font-bold text-red-600">17</p>
          <p className="text-xs text-secondary-500 mt-2">15% of total</p>
        </div>
      </div>

      {/* Subject-wise Attendance */}
      <div className="bg-white rounded-xl shadow-sm p-6 mb-8">
        <h2 className="text-lg font-semibold mb-4">Subject-wise Attendance</h2>
        <div className="space-y-4">
          {attendanceData.map((item, index) => (
            <div key={index}>
              <div className="flex items-center justify-between mb-1">
                <div>
                  <span className="font-medium">{item.subject}</span>
                  <span className="text-sm text-secondary-500 ml-2">
                    ({item.present}/{item.total} classes)
                  </span>
                </div>
                <span className={`font-semibold ${
                  item.percentage >= 90 ? 'text-green-600' :
                  item.percentage >= 80 ? 'text-blue-600' :
                  item.percentage >= 75 ? 'text-yellow-600' : 'text-red-600'
                }`}>
                  {item.percentage}%
                </span>
              </div>
              <div className="w-full bg-secondary-200 rounded-full h-2.5">
                <div 
                  className={`h-2.5 rounded-full ${
                    item.percentage >= 90 ? 'bg-green-500' :
                    item.percentage >= 80 ? 'bg-blue-500' :
                    item.percentage >= 75 ? 'bg-yellow-500' : 'bg-red-500'
                  }`}
                  style={{ width: `${item.percentage}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Monthly Attendance */}
      <div className="bg-white rounded-xl shadow-sm p-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-semibold flex items-center">
            <CalendarIcon className="w-5 h-5 mr-2 text-primary-600" />
            Monthly Attendance
          </h2>
          <select 
            value={selectedMonth}
            onChange={(e) => setSelectedMonth(e.target.value)}
            className="px-4 py-2 border border-secondary-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
          >
            <option>March 2025</option>
            <option>February 2025</option>
            <option>January 2025</option>
          </select>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-secondary-50">
              <tr>
                <th className="px-4 py-3 text-left text-sm font-medium text-secondary-600">Date</th>
                <th className="px-4 py-3 text-left text-sm font-medium text-secondary-600">Subject</th>
                <th className="px-4 py-3 text-left text-sm font-medium text-secondary-600">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y">
              {monthlyAttendance.map((item, index) => (
                <tr key={index} className="hover:bg-secondary-50">
                  <td className="px-4 py-3 text-sm">{item.date}</td>
                  <td className="px-4 py-3 text-sm">{item.subject}</td>
                  <td className="px-4 py-3">
                    <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(item.status)}`}>
                      {item.status === 'Present' && <CheckCircleIcon className="w-3 h-3 mr-1" />}
                      {item.status === 'Absent' && <XCircleIcon className="w-3 h-3 mr-1" />}
                      {item.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </StudentPanelLayout>
  );
};

export default StudentAttendance;