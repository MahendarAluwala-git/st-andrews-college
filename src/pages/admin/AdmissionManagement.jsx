import React, { useState } from 'react';
import { 
  DocumentTextIcon,
  CheckCircleIcon,
  XCircleIcon,
  ClockIcon,
  EyeIcon,
  MagnifyingGlassIcon
} from '@heroicons/react/24/outline';
import AdminPanelLayout from '../../layouts/AdminPanelLayout';
import toast from 'react-hot-toast';

const AdmissionManagement = () => {
  const [selectedStatus, setSelectedStatus] = useState('all');

  const applications = [
    { id: 'APP001', name: 'Rahul Sharma', program: 'B.Tech Computer Science', score: '92%', date: '2025-03-15', status: 'Pending' },
    { id: 'APP002', name: 'Priya Patel', program: 'MBA', score: '88%', date: '2025-03-14', status: 'Approved' },
    { id: 'APP003', name: 'Amit Kumar', program: 'B.Com', score: '85%', date: '2025-03-14', status: 'Pending' },
    { id: 'APP004', name: 'Neha Singh', program: 'BBA', score: '90%', date: '2025-03-13', status: 'Reviewed' },
    { id: 'APP005', name: 'Arjun Reddy', program: 'M.Sc CS', score: '94%', date: '2025-03-12', status: 'Approved' },
  ];

  const statuses = ['all', 'Pending', 'Approved', 'Reviewed', 'Rejected'];

  const handleApprove = (id) => {
    toast.success(`Application ${id} approved!`);
  };

  const handleReject = (id) => {
    toast.error(`Application ${id} rejected.`);
  };

  const getStatusColor = (status) => {
    switch(status) {
      case 'Approved': return 'bg-green-100 text-green-800';
      case 'Pending': return 'bg-yellow-100 text-yellow-800';
      case 'Reviewed': return 'bg-blue-100 text-blue-800';
      case 'Rejected': return 'bg-red-100 text-red-800';
      default: return 'bg-secondary-100 text-secondary-800';
    }
  };

  return (
    <AdminPanelLayout>
      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
        <div className="bg-white rounded-xl shadow-sm p-6">
          <p className="text-sm text-secondary-600">Total Applications</p>
          <p className="text-3xl font-bold text-purple-600">1,284</p>
        </div>
        <div className="bg-white rounded-xl shadow-sm p-6">
          <p className="text-sm text-secondary-600">Pending Review</p>
          <p className="text-3xl font-bold text-yellow-600">342</p>
        </div>
        <div className="bg-white rounded-xl shadow-sm p-6">
          <p className="text-sm text-secondary-600">Approved</p>
          <p className="text-3xl font-bold text-green-600">856</p>
        </div>
        <div className="bg-white rounded-xl shadow-sm p-6">
          <p className="text-sm text-secondary-600">Rejected</p>
          <p className="text-3xl font-bold text-red-600">86</p>
        </div>
      </div>

      {/* Filters */}
      <div className="bg-white rounded-xl shadow-sm p-6 mb-6">
        <div className="grid md:grid-cols-3 gap-4">
          <div className="md:col-span-2">
            <div className="relative">
              <MagnifyingGlassIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-secondary-400" />
              <input
                type="text"
                placeholder="Search by name or application ID..."
                className="w-full pl-10 pr-4 py-2 border border-secondary-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>
          </div>
          <div>
            <select
              value={selectedStatus}
              onChange={(e) => setSelectedStatus(e.target.value)}
              className="w-full px-4 py-2 border border-secondary-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
            >
              {statuses.map(status => (
                <option key={status} value={status}>
                  {status === 'all' ? 'All Status' : status}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* Applications Table */}
      <div className="bg-white rounded-xl shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-purple-600 text-white">
              <tr>
                <th className="px-6 py-4 text-left text-sm font-semibold">App ID</th>
                <th className="px-6 py-4 text-left text-sm font-semibold">Name</th>
                <th className="px-6 py-4 text-left text-sm font-semibold">Program</th>
                <th className="px-6 py-4 text-center text-sm font-semibold">Score</th>
                <th className="px-6 py-4 text-left text-sm font-semibold">Date</th>
                <th className="px-6 py-4 text-left text-sm font-semibold">Status</th>
                <th className="px-6 py-4 text-center text-sm font-semibold">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y">
              {applications.map((app) => (
                <tr key={app.id} className="hover:bg-purple-50">
                  <td className="px-6 py-4 text-sm font-medium">{app.id}</td>
                  <td className="px-6 py-4 text-sm">{app.name}</td>
                  <td className="px-6 py-4 text-sm">{app.program}</td>
                  <td className="px-6 py-4 text-center text-sm font-semibold text-purple-600">{app.score}</td>
                  <td className="px-6 py-4 text-sm">{app.date}</td>
                  <td className="px-6 py-4">
                    <span className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(app.status)}`}>
                      {app.status === 'Pending' && <ClockIcon className="w-3 h-3" />}
                      {app.status === 'Approved' && <CheckCircleIcon className="w-3 h-3" />}
                      {app.status === 'Rejected' && <XCircleIcon className="w-3 h-3" />}
                      {app.status}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center justify-center gap-2">
                      <button className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg" title="View">
                        <EyeIcon className="w-4 h-4" />
                      </button>
                      {app.status === 'Pending' && (
                        <>
                          <button 
                            onClick={() => handleApprove(app.id)}
                            className="p-2 text-green-600 hover:bg-green-50 rounded-lg"
                            title="Approve"
                          >
                            <CheckCircleIcon className="w-4 h-4" />
                          </button>
                          <button 
                            onClick={() => handleReject(app.id)}
                            className="p-2 text-red-600 hover:bg-red-50 rounded-lg"
                            title="Reject"
                          >
                            <XCircleIcon className="w-4 h-4" />
                          </button>
                        </>
                      )}
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

export default AdmissionManagement;