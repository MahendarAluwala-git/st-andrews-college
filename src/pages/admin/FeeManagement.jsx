import React, { useState } from 'react';
import { 
  CurrencyDollarIcon,
  DocumentTextIcon,
  ReceiptPercentIcon,
  PlusIcon,
  PencilIcon,
  TrashIcon,
  EyeIcon,
  MagnifyingGlassIcon,
  CheckCircleIcon,
  ClockIcon,
  XCircleIcon
} from '@heroicons/react/24/outline';
import AdminPanelLayout from '../../layouts/AdminPanelLayout';
import toast from 'react-hot-toast';

const FeeManagement = () => {
  const [activeTab, setActiveTab] = useState('records');

  const feeRecords = [
    { id: 1, student: 'Rahul Verma', rollNo: 'CS2022001', program: 'B.Tech CSE', semester: '6', totalFee: 90000, paid: 75000, due: 15000, status: 'Partial' },
    { id: 2, student: 'Priya Sharma', rollNo: 'CS2022002', program: 'B.Tech CSE', semester: '6', totalFee: 90000, paid: 90000, due: 0, status: 'Paid' },
    { id: 3, student: 'Amit Kumar', rollNo: 'CS2022003', program: 'B.Tech CSE', semester: '6', totalFee: 90000, paid: 45000, due: 45000, status: 'Partial' },
    { id: 4, student: 'Neha Singh', rollNo: 'CS2022004', program: 'B.Tech CSE', semester: '6', totalFee: 90000, paid: 0, due: 90000, status: 'Pending' },
    { id: 5, student: 'Arjun Patel', rollNo: 'CS2022005', program: 'B.Tech CSE', semester: '6', totalFee: 90000, paid: 90000, due: 0, status: 'Paid' },
  ];

  const payments = [
    { id: 1, student: 'Rahul Verma', transactionId: 'TXN123456', date: 'Jan 10, 2025', amount: 50000, method: 'Credit Card', status: 'Success' },
    { id: 2, student: 'Rahul Verma', transactionId: 'TXN123789', date: 'Jan 15, 2025', amount: 25000, method: 'Net Banking', status: 'Success' },
    { id: 3, student: 'Amit Kumar', transactionId: 'TXN123012', date: 'Dec 05, 2024', amount: 45000, method: 'UPI', status: 'Success' },
    { id: 4, student: 'Priya Sharma', transactionId: 'TXN123345', date: 'Jan 20, 2025', amount: 90000, method: 'Debit Card', status: 'Success' },
  ];

  const feeStructure = [
    { id: 1, program: 'B.Tech CSE', semester: '1', tuitionFee: 60000, developmentFee: 15000, labFee: 10000, libraryFee: 5000, total: 90000 },
    { id: 2, program: 'B.Tech CSE', semester: '2', tuitionFee: 60000, developmentFee: 15000, labFee: 10000, libraryFee: 5000, total: 90000 },
    { id: 3, program: 'MBA', semester: '1', tuitionFee: 100000, developmentFee: 20000, libraryFee: 10000, total: 130000 },
    { id: 4, program: 'B.Com', semester: '1', tuitionFee: 40000, developmentFee: 10000, labFee: 5000, libraryFee: 3000, total: 58000 },
  ];

  const handleApprovePayment = (id) => {
    toast.success('Payment approved successfully!');
  };

  const getStatusColor = (status) => {
    switch(status) {
      case 'Paid':
      case 'Success':
        return 'bg-green-100 text-green-800';
      case 'Partial':
        return 'bg-yellow-100 text-yellow-800';
      case 'Pending':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-secondary-100 text-secondary-800';
    }
  };

  const getStatusIcon = (status) => {
    switch(status) {
      case 'Paid':
      case 'Success':
        return <CheckCircleIcon className="w-4 h-4" />;
      case 'Partial':
        return <ClockIcon className="w-4 h-4" />;
      case 'Pending':
        return <XCircleIcon className="w-4 h-4" />;
      default:
        return null;
    }
  };

  return (
    <AdminPanelLayout>
      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
        <div className="bg-white rounded-xl shadow-sm p-6">
          <p className="text-sm text-secondary-600">Total Collection</p>
          <p className="text-3xl font-bold text-purple-600">₹45.6L</p>
        </div>
        <div className="bg-white rounded-xl shadow-sm p-6">
          <p className="text-sm text-secondary-600">Pending Dues</p>
          <p className="text-3xl font-bold text-yellow-600">₹8.2L</p>
        </div>
        <div className="bg-white rounded-xl shadow-sm p-6">
          <p className="text-sm text-secondary-600">Total Transactions</p>
          <p className="text-3xl font-bold text-green-600">1,284</p>
        </div>
        <div className="bg-white rounded-xl shadow-sm p-6">
          <p className="text-sm text-secondary-600">Success Rate</p>
          <p className="text-3xl font-bold text-blue-600">94%</p>
        </div>
      </div>

      {/* Tabs */}
      <div className="bg-white rounded-xl shadow-sm p-2 mb-6 inline-flex">
        <button
          onClick={() => setActiveTab('records')}
          className={`px-6 py-2 rounded-lg text-sm font-medium transition-colors ${
            activeTab === 'records' 
              ? 'bg-purple-600 text-white' 
              : 'text-secondary-600 hover:bg-purple-50'
          }`}
        >
          <CurrencyDollarIcon className="w-4 h-4 inline mr-2" />
          Fee Records
        </button>
        <button
          onClick={() => setActiveTab('payments')}
          className={`px-6 py-2 rounded-lg text-sm font-medium transition-colors ${
            activeTab === 'payments' 
              ? 'bg-purple-600 text-white' 
              : 'text-secondary-600 hover:bg-purple-50'
          }`}
        >
          <ReceiptPercentIcon className="w-4 h-4 inline mr-2" />
          Payments
        </button>
        <button
          onClick={() => setActiveTab('structure')}
          className={`px-6 py-2 rounded-lg text-sm font-medium transition-colors ${
            activeTab === 'structure' 
              ? 'bg-purple-600 text-white' 
              : 'text-secondary-600 hover:bg-purple-50'
          }`}
        >
          <DocumentTextIcon className="w-4 h-4 inline mr-2" />
          Fee Structure
        </button>
      </div>

      {/* Search Bar */}
      <div className="bg-white rounded-xl shadow-sm p-4 mb-6">
        <div className="relative">
          <MagnifyingGlassIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-secondary-400" />
          <input
            type="text"
            placeholder={`Search ${activeTab}...`}
            className="w-full pl-10 pr-4 py-2 border border-secondary-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
        </div>
      </div>

      {/* Fee Records Tab */}
      {activeTab === 'records' && (
        <div className="bg-white rounded-xl shadow-sm overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-purple-600 text-white">
                <tr>
                  <th className="px-6 py-4 text-left text-sm font-semibold">Student</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold">Roll No</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold">Program</th>
                  <th className="px-6 py-4 text-center text-sm font-semibold">Sem</th>
                  <th className="px-6 py-4 text-right text-sm font-semibold">Total Fee</th>
                  <th className="px-6 py-4 text-right text-sm font-semibold">Paid</th>
                  <th className="px-6 py-4 text-right text-sm font-semibold">Due</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold">Status</th>
                  <th className="px-6 py-4 text-center text-sm font-semibold">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y">
                {feeRecords.map((record) => (
                  <tr key={record.id} className="hover:bg-purple-50">
                    <td className="px-6 py-4 text-sm font-medium">{record.student}</td>
                    <td className="px-6 py-4 text-sm">{record.rollNo}</td>
                    <td className="px-6 py-4 text-sm">{record.program}</td>
                    <td className="px-6 py-4 text-center text-sm">{record.semester}</td>
                    <td className="px-6 py-4 text-right text-sm">₹{record.totalFee.toLocaleString()}</td>
                    <td className="px-6 py-4 text-right text-sm text-green-600">₹{record.paid.toLocaleString()}</td>
                    <td className="px-6 py-4 text-right text-sm text-red-600">₹{record.due.toLocaleString()}</td>
                    <td className="px-6 py-4">
                      <span className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(record.status)}`}>
                        {getStatusIcon(record.status)}
                        {record.status}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center justify-center gap-2">
                        <button className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg">
                          <EyeIcon className="w-4 h-4" />
                        </button>
                        <button className="p-2 text-purple-600 hover:bg-purple-50 rounded-lg">
                          <DocumentTextIcon className="w-4 h-4" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* Payments Tab */}
      {activeTab === 'payments' && (
        <div className="bg-white rounded-xl shadow-sm overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-purple-600 text-white">
                <tr>
                  <th className="px-6 py-4 text-left text-sm font-semibold">Student</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold">Transaction ID</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold">Date</th>
                  <th className="px-6 py-4 text-right text-sm font-semibold">Amount</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold">Method</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y">
                {payments.map((payment) => (
                  <tr key={payment.id} className="hover:bg-purple-50">
                    <td className="px-6 py-4 text-sm font-medium">{payment.student}</td>
                    <td className="px-6 py-4 text-sm font-mono">{payment.transactionId}</td>
                    <td className="px-6 py-4 text-sm">{payment.date}</td>
                    <td className="px-6 py-4 text-right text-sm font-semibold">₹{payment.amount.toLocaleString()}</td>
                    <td className="px-6 py-4 text-sm">{payment.method}</td>
                    <td className="px-6 py-4">
                      <span className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(payment.status)}`}>
                        {getStatusIcon(payment.status)}
                        {payment.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* Fee Structure Tab */}
      {activeTab === 'structure' && (
        <div className="bg-white rounded-xl shadow-sm overflow-hidden">
          <div className="p-4 border-b flex justify-end">
            <button className="btn-primary bg-purple-600 hover:bg-purple-700 flex items-center gap-2">
              <PlusIcon className="w-4 h-4" />
              Add Structure
            </button>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-purple-600 text-white">
                <tr>
                  <th className="px-6 py-4 text-left text-sm font-semibold">Program</th>
                  <th className="px-6 py-4 text-center text-sm font-semibold">Semester</th>
                  <th className="px-6 py-4 text-right text-sm font-semibold">Tuition Fee</th>
                  <th className="px-6 py-4 text-right text-sm font-semibold">Development Fee</th>
                  <th className="px-6 py-4 text-right text-sm font-semibold">Lab Fee</th>
                  <th className="px-6 py-4 text-right text-sm font-semibold">Library Fee</th>
                  <th className="px-6 py-4 text-right text-sm font-semibold">Total</th>
                  <th className="px-6 py-4 text-center text-sm font-semibold">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y">
                {feeStructure.map((fee) => (
                  <tr key={fee.id} className="hover:bg-purple-50">
                    <td className="px-6 py-4 text-sm font-medium">{fee.program}</td>
                    <td className="px-6 py-4 text-center text-sm">{fee.semester}</td>
                    <td className="px-6 py-4 text-right text-sm">₹{fee.tuitionFee.toLocaleString()}</td>
                    <td className="px-6 py-4 text-right text-sm">₹{fee.developmentFee?.toLocaleString() || '-'}</td>
                    <td className="px-6 py-4 text-right text-sm">₹{fee.labFee?.toLocaleString() || '-'}</td>
                    <td className="px-6 py-4 text-right text-sm">₹{fee.libraryFee?.toLocaleString() || '-'}</td>
                    <td className="px-6 py-4 text-right text-sm font-bold text-purple-600">₹{fee.total.toLocaleString()}</td>
                    <td className="px-6 py-4">
                      <div className="flex items-center justify-center gap-2">
                        <button className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg">
                          <PencilIcon className="w-4 h-4" />
                        </button>
                        <button className="p-2 text-red-600 hover:bg-red-50 rounded-lg">
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
      )}
    </AdminPanelLayout>
  );
};

export default FeeManagement;