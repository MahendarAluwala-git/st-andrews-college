import React from 'react';
import { Link } from 'react-router-dom';
import { 
  UserCircleIcon,
  UsersIcon,
  BookOpenIcon,
  BellIcon,
  ChartBarIcon,
  ClockIcon,
  DocumentTextIcon
} from '@heroicons/react/24/outline';

const FacultyDashboard = () => {
  const stats = [
    { label: 'Total Students', value: '156', icon: UsersIcon, color: 'bg-blue-500' },
    { label: 'Courses', value: '4', icon: BookOpenIcon, color: 'bg-green-500' },
    { label: 'Classes Today', value: '3', icon: ClockIcon, color: 'bg-purple-500' },
    { label: 'Pending Tasks', value: '12', icon: DocumentTextIcon, color: 'bg-orange-500' },
  ];

  const todaysClasses = [
    { subject: 'Data Structures', time: '10:00 - 11:30', batch: 'CS 3rd Year', room: '401' },
    { subject: 'Database Systems', time: '12:00 - 1:30', batch: 'CS 2nd Year', room: 'Lab 3' },
    { subject: 'Algorithm Design', time: '2:00 - 3:30', batch: 'CS 4th Year', room: '205' },
  ];

  const pendingTasks = [
    { task: 'Attendance Entry', course: 'Data Structures', deadline: 'Today' },
    { task: 'Assignment Grading', course: 'Database Systems', deadline: 'Tomorrow' },
    { task: 'Marks Upload', course: 'Algorithm Design', deadline: 'Mar 20' },
  ];

  return (
    <div className="min-h-screen bg-secondary-50 pt-20">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="container-custom py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-secondary-900">Faculty Dashboard</h1>
              <p className="text-secondary-600">Welcome back, Dr. James Anderson</p>
            </div>
            <div className="flex items-center gap-4">
              <button className="relative">
                <BellIcon className="w-6 h-6 text-secondary-600" />
                <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 text-white text-xs rounded-full flex items-center justify-center">
                  5
                </span>
              </button>
              <UserCircleIcon className="w-8 h-8 text-secondary-600" />
            </div>
          </div>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="container-custom py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat) => (
            <div key={stat.label} className="bg-white rounded-xl shadow-sm p-6">
              <div className="flex items-center justify-between mb-4">
                <div className={`${stat.color} p-3 rounded-lg`}>
                  <stat.icon className="w-6 h-6 text-white" />
                </div>
                <span className="text-2xl font-bold text-secondary-900">{stat.value}</span>
              </div>
              <p className="text-secondary-600">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-3 gap-6 mt-8">
          {/* Left Column - Today's Classes */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl shadow-sm p-6">
              <h2 className="text-lg font-semibold mb-4">Today's Classes</h2>
              <div className="space-y-4">
                {todaysClasses.map((cls, index) => (
                  <div key={index} className="flex items-center justify-between p-4 bg-secondary-50 rounded-lg">
                    <div>
                      <h3 className="font-medium">{cls.subject}</h3>
                      <p className="text-sm text-secondary-500">{cls.batch} • Room {cls.room}</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <ClockIcon className="w-4 h-4 text-primary-500" />
                      <span className="text-sm font-medium">{cls.time}</span>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-4 flex gap-2">
                <button className="btn-primary flex-1">Mark Attendance</button>
                <button className="btn-outline flex-1">Upload Materials</button>
              </div>
            </div>

            {/* Pending Tasks */}
            <div className="bg-white rounded-xl shadow-sm p-6 mt-6">
              <h2 className="text-lg font-semibold mb-4">Pending Tasks</h2>
              <div className="space-y-4">
                {pendingTasks.map((task, index) => (
                  <div key={index} className="flex items-center justify-between p-3 border-b last:border-0">
                    <div>
                      <h3 className="font-medium">{task.task}</h3>
                      <p className="text-sm text-secondary-500">{task.course}</p>
                    </div>
                    <div>
                      <span className={`text-sm px-3 py-1 rounded-full ${
                        task.deadline === 'Today' 
                          ? 'bg-red-100 text-red-800' 
                          : 'bg-yellow-100 text-yellow-800'
                      }`}>
                        {task.deadline}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Quick Actions */}
          <div>
            <div className="bg-white rounded-xl shadow-sm p-6">
              <h2 className="text-lg font-semibold mb-4">Quick Actions</h2>
              <div className="space-y-3">
                <Link to="/faculty/attendance" className="block p-4 bg-secondary-50 rounded-lg hover:bg-primary-50 transition-colors">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center">
                      <UsersIcon className="w-5 h-5 text-primary-600" />
                    </div>
                    <div>
                      <span className="font-medium block">Mark Attendance</span>
                      <span className="text-xs text-secondary-500">For today's classes</span>
                    </div>
                  </div>
                </Link>
                <Link to="/faculty/assignments" className="block p-4 bg-secondary-50 rounded-lg hover:bg-primary-50 transition-colors">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center">
                      <DocumentTextIcon className="w-5 h-5 text-primary-600" />
                    </div>
                    <div>
                      <span className="font-medium block">Upload Assignment</span>
                      <span className="text-xs text-secondary-500">Create new assignment</span>
                    </div>
                  </div>
                </Link>
                <Link to="/faculty/marks" className="block p-4 bg-secondary-50 rounded-lg hover:bg-primary-50 transition-colors">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center">
                      <ChartBarIcon className="w-5 h-5 text-primary-600" />
                    </div>
                    <div>
                      <span className="font-medium block">Enter Marks</span>
                      <span className="text-xs text-secondary-500">For exams & assessments</span>
                    </div>
                  </div>
                </Link>
              </div>
            </div>

            {/* Student List Preview */}
            <div className="bg-white rounded-xl shadow-sm p-6 mt-6">
              <h2 className="text-lg font-semibold mb-4">Recent Students</h2>
              <div className="space-y-3">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="flex items-center gap-3 p-2 hover:bg-secondary-50 rounded-lg">
                    <div className="w-8 h-8 bg-primary-100 rounded-full flex items-center justify-center">
                      <span className="text-xs font-bold text-primary-600">S{i}</span>
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-medium">Student Name {i}</p>
                      <p className="text-xs text-secondary-500">CS 3rd Year</p>
                    </div>
                  </div>
                ))}
              </div>
              <Link to="/faculty/students" className="mt-4 block text-center text-primary-600 font-medium hover:text-primary-700">
                View All Students →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FacultyDashboard;