import React, { useState } from 'react';
import { 
  UsersIcon, 
  MagnifyingGlassIcon,
  PencilIcon,
  TrashIcon,
  PlusIcon,
  EnvelopeIcon,
  PhoneIcon
} from '@heroicons/react/24/outline';
import AdminPanelLayout from '../../layouts/AdminPanelLayout';
import toast from 'react-hot-toast';

const StudentManagement = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedProgram, setSelectedProgram] = useState('all');

  const students = [
    { id: 1, rollNo: 'CS2022001', name: 'Rahul Verma', program: 'B.Tech CSE', semester: '6', email: 'rahul@standrews.edu', phone: '+91 98765 43210', status: 'Active' },
    { id: 2, rollNo: 'CS2022002', name: 'Priya Sharma', program: 'B.Tech CSE', semester: '6', email: 'priya@standrews.edu', phone: '+91 98765 43211', status: 'Active' },
    { id: 3, rollNo: 'CS2022003', name: 'Amit Kumar', program: 'B.Tech CSE', semester: '6', email: 'amit@standrews.edu', phone: '+91 98765 43212', status: 'Active' },
    { id: 4, rollNo: 'MBA2023001', name: 'Anjali Mehta', program: 'MBA', semester: '4', email: 'anjali@standrews.edu', phone: '+91 98765 43215', status: 'Active' },
  ];

  const programs = ['all', 'B.Tech CSE', 'MBA', 'B.Com'];

  const handleDelete = (id) => {
    if (window.confirm('Are you sure you want to delete this student?')) {
      toast.success('Student deleted successfully!');
    }
  };

  return (
    <AdminPanelLayout>
      {/* Header with Add Button */}
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold text-secondary-900">Student Management</h1>
        <button className="btn-primary bg-purple-600 hover:bg-purple-700 flex items-center gap-2">
          <PlusIcon className="w-4 h-4" />
          Add Student
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
                placeholder="Search by name or roll number..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-secondary-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>
          </div>
          <div>
            <select
              value={selectedProgram}
              onChange={(e) => setSelectedProgram(e.target.value)}
              className="w-full px-4 py-2 border border-secondary-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
            >
              {programs.map(program => (
                <option key={program} value={program}>
                  {program === 'all' ? 'All Programs' : program}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* Students Table */}
      <div className="bg-white rounded-xl shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-purple-600 text-white">
              <tr>
                <th className="px-6 py-4 text-left text-sm font-semibold">Roll No</th>
                <th className="px-6 py-4 text-left text-sm font-semibold">Name</th>
                <th className="px-6 py-4 text-left text-sm font-semibold">Program</th>
                <th className="px-6 py-4 text-center text-sm font-semibold">Semester</th>
                <th className="px-6 py-4 text-left text-sm font-semibold">Contact</th>
                <th className="px-6 py-4 text-center text-sm font-semibold">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y">
              {students.map((student) => (
                <tr key={student.id} className="hover:bg-purple-50">
                  <td className="px-6 py-4 text-sm font-medium">{student.rollNo}</td>
                  <td className="px-6 py-4 text-sm">{student.name}</td>
                  <td className="px-6 py-4 text-sm">{student.program}</td>
                  <td className="px-6 py-4 text-center text-sm">{student.semester}</td>
                  <td className="px-6 py-4">
                    <div className="text-sm">
                      <p className="flex items-center"><EnvelopeIcon className="w-3 h-3 mr-1" /> {student.email}</p>
                      <p className="flex items-center text-xs text-secondary-500"><PhoneIcon className="w-3 h-3 mr-1" /> {student.phone}</p>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center justify-center gap-2">
                      <button className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg">
                        <PencilIcon className="w-4 h-4" />
                      </button>
                      <button 
                        onClick={() => handleDelete(student.id)}
                        className="p-2 text-red-600 hover:bg-red-50 rounded-lg"
                      >
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
    </AdminPanelLayout>
  );
};

export default StudentManagement;