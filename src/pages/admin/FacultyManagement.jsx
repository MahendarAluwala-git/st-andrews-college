import React, { useState } from 'react';
import { 
  AcademicCapIcon,
  MagnifyingGlassIcon,
  PencilIcon,
  TrashIcon,
  PlusIcon,
  EnvelopeIcon,
  PhoneIcon
} from '@heroicons/react/24/outline';
import AdminPanelLayout from '../../layouts/AdminPanelLayout';
import toast from 'react-hot-toast';

const FacultyManagement = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedDepartment, setSelectedDepartment] = useState('all');

  const faculty = [
    { id: 1, name: 'Dr. James Anderson', facultyId: 'FAC001', department: 'Computer Science', designation: 'Professor', email: 'james@standrews.edu', phone: '+91 98765 43210', status: 'Active' },
    { id: 2, name: 'Prof. Sarah Williams', facultyId: 'FAC002', department: 'Mathematics', designation: 'Professor', email: 'sarah@standrews.edu', phone: '+91 98765 43211', status: 'Active' },
    { id: 3, name: 'Dr. Michael Chen', facultyId: 'FAC003', department: 'Physics', designation: 'Associate Professor', email: 'michael@standrews.edu', phone: '+91 98765 43212', status: 'Active' },
    { id: 4, name: 'Dr. Emily Brown', facultyId: 'FAC004', department: 'Economics', designation: 'Professor', email: 'emily@standrews.edu', phone: '+91 98765 43213', status: 'Active' },
  ];

  const departments = ['all', 'Computer Science', 'Mathematics', 'Physics', 'Economics'];

  const handleDelete = (id) => {
    if (window.confirm('Are you sure you want to delete this faculty member?')) {
      toast.success('Faculty member deleted successfully!');
    }
  };

  return (
    <AdminPanelLayout>
      {/* Header with Add Button */}
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold text-secondary-900">Faculty Management</h1>
        <button className="btn-primary bg-purple-600 hover:bg-purple-700 flex items-center gap-2">
          <PlusIcon className="w-4 h-4" />
          Add Faculty
        </button>
      </div>

      {/* Filters */}
      <div className="bg-white rounded-xl shadow-sm p-6 mb-6">
        <div className="grid md:grid-cols-3 gap-4">
          <div className="md:col-span-2">
            <div className="relative">
              <MagnifyingGlassIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-secondary-400" />
              <input
                type="text"
                placeholder="Search by name or faculty ID..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-secondary-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>
          </div>
          <div>
            <select
              value={selectedDepartment}
              onChange={(e) => setSelectedDepartment(e.target.value)}
              className="w-full px-4 py-2 border border-secondary-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
            >
              {departments.map(dept => (
                <option key={dept} value={dept}>
                  {dept === 'all' ? 'All Departments' : dept}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* Faculty Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {faculty.map((member) => (
          <div key={member.id} className="bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition-shadow">
            <div className="flex items-start gap-4 mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
                {member.name.charAt(0)}
              </div>
              <div className="flex-1">
                <h3 className="font-semibold">{member.name}</h3>
                <p className="text-sm text-purple-600">{member.facultyId}</p>
                <p className="text-xs text-secondary-500 mt-1">{member.designation}</p>
              </div>
            </div>

            <div className="space-y-2 text-sm mb-4">
              <p><span className="font-medium">Department:</span> {member.department}</p>
              <div className="flex items-center text-secondary-600">
                <EnvelopeIcon className="w-4 h-4 mr-2 text-purple-500" />
                {member.email}
              </div>
              <div className="flex items-center text-secondary-600">
                <PhoneIcon className="w-4 h-4 mr-2 text-purple-500" />
                {member.phone}
              </div>
            </div>

            <div className="pt-4 border-t flex items-center justify-between">
              <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-xs font-medium">
                {member.status}
              </span>
              <div className="flex gap-2">
                <button className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg">
                  <PencilIcon className="w-4 h-4" />
                </button>
                <button 
                  onClick={() => handleDelete(member.id)}
                  className="p-2 text-red-600 hover:bg-red-50 rounded-lg"
                >
                  <TrashIcon className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </AdminPanelLayout>
  );
};

export default FacultyManagement;