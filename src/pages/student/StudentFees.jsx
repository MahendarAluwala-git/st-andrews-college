import React, { useState } from 'react';
import { CurrencyDollarIcon, DocumentTextIcon, CheckCircleIcon, ClockIcon } from '@heroicons/react/24/outline';
import StudentPanelLayout from '../../layouts/StudentPanelLayout';

const StudentFees = () => {
  const [selectedYear, setSelectedYear] = useState('2024-25');

  const feeSummary = {
    totalFees: 90000,
    paid: 75000,
    due: 15000,
    nextDue: 'April 15, 2025',
    status: 'Partially Paid'
  };

  const feeBreakdown = [
    { head: 'Tuition Fee', amount: 60000, paid: 60000, status: 'Paid', dueDate: 'Jan 15, 2025' },
    { head: 'Development Fee', amount: 10000, paid: 10000, status: 'Paid', dueDate: 'Jan 15, 2025' },
    { head: 'Laboratory Fee', amount: 5000, paid: 5000, status: 'Paid', dueDate: 'Jan 15, 2025' },
    { head: 'Library Fee', amount: 3000, paid: 0, status: 'Pending', dueDate: 'Apr 15, 2025' },
    { head: 'Sports Fee', amount: 2000, paid: 0, status: 'Pending', dueDate: 'Apr 15, 2025' },
    { head: 'Hostel Fee', amount: 10000, paid: 0, status: 'Pending', dueDate: 'Apr 15, 2025' },
  ];

  const paymentHistory = [
    { date: 'Jan 10, 2025', transactionId: 'TXN123456', description: 'Semester V Fee Payment', amount: 50000, status: 'Success' },
    { date: 'Jan 15, 2025', transactionId: 'TXN123789', description: 'Semester V Fee Payment', amount: 25000, status: 'Success' },
  ];

  return (
    <StudentPanelLayout>
      {/* Summary Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <div className="bg-white rounded-xl shadow-sm p-6">
          <p className="text-sm text-secondary-600 mb-2">Total Fees</p>
          <p className="text-3xl font-bold text-secondary-900">₹{feeSummary.totalFees.toLocaleString()}</p>
        </div>
        <div className="bg-white rounded-xl shadow-sm p-6">
          <p className="text-sm text-secondary-600 mb-2">Paid Amount</p>
          <p className="text-3xl font-bold text-green-600">₹{feeSummary.paid.toLocaleString()}</p>
        </div>
        <div className="bg-white rounded-xl shadow-sm p-6">
          <p className="text-sm text-secondary-600 mb-2">Due Amount</p>
          <p className="text-3xl font-bold text-orange-600">₹{feeSummary.due.toLocaleString()}</p>
        </div>
        <div className="bg-white rounded-xl shadow-sm p-6">
          <p className="text-sm text-secondary-600 mb-2">Next Due Date</p>
          <p className="text-xl font-bold text-secondary-900">{feeSummary.nextDue}</p>
        </div>
      </div>

      {/* Fee Breakdown */}
      <div className="bg-white rounded-xl shadow-sm p-6 mb-8">
        <h2 className="text-lg font-semibold mb-4 flex items-center">
          <CurrencyDollarIcon className="w-5 h-5 mr-2 text-primary-600" />
          Fee Breakdown - {selectedYear}
        </h2>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-secondary-50">
              <tr>
                <th className="px-4 py-3 text-left text-sm font-medium text-secondary-600">Fee Head</th>
                <th className="px-4 py-3 text-right text-sm font-medium text-secondary-600">Amount</th>
                <th className="px-4 py-3 text-right text-sm font-medium text-secondary-600">Paid</th>
                <th className="px-4 py-3 text-right text-sm font-medium text-secondary-600">Due</th>
                <th className="px-4 py-3 text-left text-sm font-medium text-secondary-600">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y">
              {feeBreakdown.map((item, index) => (
                <tr key={index} className="hover:bg-secondary-50">
                  <td className="px-4 py-3 text-sm font-medium">{item.head}</td>
                  <td className="px-4 py-3 text-right text-sm">₹{item.amount.toLocaleString()}</td>
                  <td className="px-4 py-3 text-right text-sm text-green-600">₹{item.paid.toLocaleString()}</td>
                  <td className="px-4 py-3 text-right text-sm text-red-600">₹{(item.amount - item.paid).toLocaleString()}</td>
                  <td className="px-4 py-3">
                    <span className={`inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium ${
                      item.status === 'Paid' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
                    }`}>
                      {item.status === 'Paid' ? <CheckCircleIcon className="w-3 h-3" /> : <ClockIcon className="w-3 h-3" />}
                      {item.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Payment History */}
      <div className="bg-white rounded-xl shadow-sm p-6">
        <h2 className="text-lg font-semibold mb-4 flex items-center">
          <DocumentTextIcon className="w-5 h-5 mr-2 text-primary-600" />
          Payment History
        </h2>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-secondary-50">
              <tr>
                <th className="px-4 py-3 text-left text-sm font-medium text-secondary-600">Date</th>
                <th className="px-4 py-3 text-left text-sm font-medium text-secondary-600">Transaction ID</th>
                <th className="px-4 py-3 text-left text-sm font-medium text-secondary-600">Description</th>
                <th className="px-4 py-3 text-right text-sm font-medium text-secondary-600">Amount</th>
                <th className="px-4 py-3 text-left text-sm font-medium text-secondary-600">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y">
              {paymentHistory.map((payment, index) => (
                <tr key={index} className="hover:bg-secondary-50">
                  <td className="px-4 py-3 text-sm">{payment.date}</td>
                  <td className="px-4 py-3 text-sm font-mono">{payment.transactionId}</td>
                  <td className="px-4 py-3 text-sm">{payment.description}</td>
                  <td className="px-4 py-3 text-right text-sm font-medium">₹{payment.amount.toLocaleString()}</td>
                  <td className="px-4 py-3">
                    <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs">
                      {payment.status}
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

export default StudentFees;