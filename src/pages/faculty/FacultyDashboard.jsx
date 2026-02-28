import React from 'react';
import { Link } from 'react-router-dom';
import { 
  UsersIcon, 
  BookOpenIcon, 
  ClockIcon,
  DocumentTextIcon,
  BellIcon,
  CheckCircleIcon,
  PencilSquareIcon,
  ChartBarIcon
} from '@heroicons/react/24/outline';
import FacultyPanelLayout from '../../layouts/FacultyPanelLayout';

const FacultyDashboard = () => {
  const stats = [
    { label: 'Total Students', value: '156', icon: UsersIcon, color: 'bg-blue-500', change: '+12 this sem' },
    { label: 'Courses', value: '4', icon: BookOpenIcon, color: 'bg-green-500', change: 'Active courses' },
    { label: 'Classes Today', value: '3', icon: ClockIcon, color: 'bg-purple-500', change: 'Next in 30 min' },
    { label: 'Pending Tasks', value: '8', icon: DocumentTextIcon, color: 'bg-orange-500', change: 'Need attention' },
  ];

  const todaysClasses = [
    { subject: 'Data Structures', code: 'CS301', time: '10:00 - 11:30', batch: 'CSE 3rd Year', room: '401', students: 65 },
    { subject: 'Database Systems', code: 'CS302', time: '12:00 - 01:30', batch: 'CSE 2nd Year', room: 'Lab 3', students: 72 },
    { subject: 'Algorithm Design', code: 'CS304', time: '02:00 - 03:30', batch: 'CSE 4th Year', room: '205', students: 58 },
  ];

  const pendingTasks = [
    { task: 'Mark Attendance', course: 'Data Structures', deadline: 'Today, 11:30 AM', priority: 'high' },
    { task: 'Upload Assignment', course: 'Database Systems', deadline: 'Tomorrow, 5:00 PM', priority: 'medium' },
    { task: 'Grade Lab Reports', course: 'Algorithm Design', deadline: 'Mar 20, 2025', priority: 'low' },
  ];

  return (
    <FacultyPanelLayout>
      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat, index) => (
          <div key={index} className="bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition-shadow">
            <div className="flex items-center justify-between mb-4">
              <div className={`${stat.color} p-3 rounded-lg`}>
                <stat.icon className="w-6 h-6 text-white" />
              </div>
              <span className="text-sm font-medium text-green-600">{stat.change}</span>
            </div>
            <p className="text-2xl font-bold text-secondary-900">{stat.value}</p>
            <p className="text-sm text-secondary-600">{stat.label}</p>
          </div>
        ))}
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
        <Link to="/faculty/attendance" className="bg-white rounded-xl shadow-sm p-4 text-center hover:shadow-md transition-shadow">
          <CheckCircleIcon className="w-8 h-8 mx-auto text-green-600 mb-2" />
          <span className="text-sm font-medium">Mark Attendance</span>
        </Link>
        <Link to="/faculty/assignments" className="bg-white rounded-xl shadow-sm p-4 text-center hover:shadow-md transition-shadow">
          <PencilSquareIcon className="w-8 h-8 mx-auto text-purple-600 mb-2" />
          <span className="text-sm font-medium">Upload Assignment</span>
        </Link>
        <Link to="/faculty/marks" className="bg-white rounded-xl shadow-sm p-4 text-center hover:shadow-md transition-shadow">
          <ChartBarIcon className="w-8 h-8 mx-auto text-orange-600 mb-2" />
          <span className="text-sm font-medium">Enter Marks</span>
        </Link>
        <Link to="/faculty/students" className="bg-white rounded-xl shadow-sm p-4 text-center hover:shadow-md transition-shadow">
          <UsersIcon className="w-8 h-8 mx-auto text-blue-600 mb-2" />
          <span className="text-sm font-medium">Student List</span>
        </Link>
      </div>

      {/* Today's Classes */}
      <div className="grid lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-xl shadow-sm p-6">
          <h2 className="text-lg font-semibold mb-4 flex items-center">
            <ClockIcon className="w-5 h-5 mr-2 text-green-600" />
            Today's Classes
          </h2>
          <div className="space-y-4">
            {todaysClasses.map((cls, index) => (
              <div key={index} className="flex items-center justify-between p-4 bg-secondary-50 rounded-lg hover:bg-green-50 transition-colors">
                <div>
                  <p className="font-medium">{cls.subject} ({cls.code})</p>
                  <p className="text-sm text-secondary-600">{cls.batch} • Room {cls.room} • {cls.students} students</p>
                </div>
                <span className="text-sm font-medium text-green-600">{cls.time}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Pending Tasks */}
        <div className="bg-white rounded-xl shadow-sm p-6">
          <h2 className="text-lg font-semibold mb-4 flex items-center">
            <DocumentTextIcon className="w-5 h-5 mr-2 text-green-600" />
            Pending Tasks
          </h2>
          <div className="space-y-4">
            {pendingTasks.map((task, index) => (
              <div key={index} className="flex items-center justify-between p-4 bg-secondary-50 rounded-lg">
                <div>
                  <p className="font-medium">{task.task}</p>
                  <p className="text-sm text-secondary-600">{task.course}</p>
                </div>
                <div className="text-right">
                  <span className={`text-xs px-2 py-1 rounded-full ${
                    task.priority === 'high' ? 'bg-red-100 text-red-800' :
                    task.priority === 'medium' ? 'bg-yellow-100 text-yellow-800' :
                    'bg-blue-100 text-blue-800'
                  }`}>
                    {task.priority}
                  </span>
                  <p className="text-xs text-secondary-500 mt-1">{task.deadline}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </FacultyPanelLayout>
  );
};

export default FacultyDashboard;