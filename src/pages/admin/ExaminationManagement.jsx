import React, { useState } from 'react';
import { 
  DocumentTextIcon,
  AcademicCapIcon,
  CalendarIcon,
  PlusIcon,
  PencilIcon,
  TrashIcon,
  EyeIcon,
  MagnifyingGlassIcon
} from '@heroicons/react/24/outline';
import AdminPanelLayout from '../../layouts/AdminPanelLayout';
import toast from 'react-hot-toast';

const ExaminationManagement = () => {
  const [activeTab, setActiveTab] = useState('exams');

  const exams = [
    { id: 1, name: 'End Semester Examination', program: 'B.Tech CSE', semester: '6', date: 'Apr 15-30, 2025', status: 'Scheduled' },
    { id: 2, name: 'Internal Assessment I', program: 'MBA', semester: '4', date: 'Feb 10-15, 2025', status: 'Completed' },
    { id: 3, name: 'Internal Assessment II', program: 'B.Com', semester: '6', date: 'Mar 10-15, 2025', status: 'Ongoing' },
    { id: 4, name: 'Entrance Examination', program: 'All Programs', semester: '-', date: 'Apr 15, 2025', status: 'Upcoming' },
  ];

  const results = [
    { id: 1, exam: 'End Semester Examination', program: 'B.Tech CSE', semester: '5', published: 'Mar 10, 2025', students: 125, status: 'Published' },
    { id: 2, exam: 'Internal Assessment I', program: 'MBA', semester: '3', published: 'Feb 20, 2025', students: 80, status: 'Published' },
    { id: 3, exam: 'Internal Assessment II', program: 'B.Com', semester: '5', published: '-', students: 150, status: 'Processing' },
  ];

  const marksData = [
    { id: 1, student: 'Rahul Verma', rollNo: 'CS2022001', subject: 'Data Structures', marks: 85, grade: 'A' },
    { id: 2, student: 'Priya Sharma', rollNo: 'CS2022002', subject: 'Data Structures', marks: 92, grade: 'A+' },
    { id: 3, student: 'Amit Kumar', rollNo: 'CS2022003', subject: 'Data Structures', marks: 78, grade: 'B+' },
    { id: 4, student: 'Neha Singh', rollNo: 'CS2022004', subject: 'Data Structures', marks: 88, grade: 'A' },
  ];

  const handleCreateExam = () => {
    toast.success('Exam created successfully!');
  };

  const handlePublishResults = (id) => {
    toast.success('Results published successfully!');
  };

  return (
    <AdminPanelLayout>
      {/* Header with Add Button */}
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold text-secondary-900">Examination Management</h1>
        <button 
          onClick={handleCreateExam}
          className="btn-primary bg-purple-600 hover:bg-purple-700 flex items-center gap-2"
        >
          <PlusIcon className="w-4 h-4" />
          Create Exam
        </button>
      </div>

      {/* Tabs */}
      <div className="bg-white rounded-xl shadow-sm p-2 mb-6 inline-flex">
        <button
          onClick={() => setActiveTab('exams')}
          className={`px-6 py-2 rounded-lg text-sm font-medium transition-colors ${
            activeTab === 'exams' 
              ? 'bg-purple-600 text-white' 
              : 'text-secondary-600 hover:bg-purple-50'
          }`}
        >
          <CalendarIcon className="w-4 h-4 inline mr-2" />
          Exams
        </button>
        <button
          onClick={() => setActiveTab('results')}
          className={`px-6 py-2 rounded-lg text-sm font-medium transition-colors ${
            activeTab === 'results' 
              ? 'bg-purple-600 text-white' 
              : 'text-secondary-600 hover:bg-purple-50'
          }`}
        >
          <DocumentTextIcon className="w-4 h-4 inline mr-2" />
          Results
        </button>
        <button
          onClick={() => setActiveTab('marks')}
          className={`px-6 py-2 rounded-lg text-sm font-medium transition-colors ${
            activeTab === 'marks' 
              ? 'bg-purple-600 text-white' 
              : 'text-secondary-600 hover:bg-purple-50'
          }`}
        >
          <AcademicCapIcon className="w-4 h-4 inline mr-2" />
          Marks Entry
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

      {/* Exams Tab */}
      {activeTab === 'exams' && (
        <div className="bg-white rounded-xl shadow-sm overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-purple-600 text-white">
                <tr>
                  <th className="px-6 py-4 text-left text-sm font-semibold">Exam Name</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold">Program</th>
                  <th className="px-6 py-4 text-center text-sm font-semibold">Semester</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold">Date</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold">Status</th>
                  <th className="px-6 py-4 text-center text-sm font-semibold">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y">
                {exams.map((exam) => (
                  <tr key={exam.id} className="hover:bg-purple-50">
                    <td className="px-6 py-4 text-sm font-medium">{exam.name}</td>
                    <td className="px-6 py-4 text-sm">{exam.program}</td>
                    <td className="px-6 py-4 text-center text-sm">{exam.semester}</td>
                    <td className="px-6 py-4 text-sm">{exam.date}</td>
                    <td className="px-6 py-4">
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                        exam.status === 'Completed' ? 'bg-green-100 text-green-800' :
                        exam.status === 'Ongoing' ? 'bg-yellow-100 text-yellow-800' :
                        exam.status === 'Scheduled' ? 'bg-blue-100 text-blue-800' :
                        'bg-purple-100 text-purple-800'
                      }`}>
                        {exam.status}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center justify-center gap-2">
                        <button className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg">
                          <EyeIcon className="w-4 h-4" />
                        </button>
                        <button className="p-2 text-green-600 hover:bg-green-50 rounded-lg">
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

      {/* Results Tab */}
      {activeTab === 'results' && (
        <div className="bg-white rounded-xl shadow-sm overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-purple-600 text-white">
                <tr>
                  <th className="px-6 py-4 text-left text-sm font-semibold">Exam</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold">Program</th>
                  <th className="px-6 py-4 text-center text-sm font-semibold">Semester</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold">Published</th>
                  <th className="px-6 py-4 text-center text-sm font-semibold">Students</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold">Status</th>
                  <th className="px-6 py-4 text-center text-sm font-semibold">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y">
                {results.map((result) => (
                  <tr key={result.id} className="hover:bg-purple-50">
                    <td className="px-6 py-4 text-sm font-medium">{result.exam}</td>
                    <td className="px-6 py-4 text-sm">{result.program}</td>
                    <td className="px-6 py-4 text-center text-sm">{result.semester}</td>
                    <td className="px-6 py-4 text-sm">{result.published}</td>
                    <td className="px-6 py-4 text-center text-sm">{result.students}</td>
                    <td className="px-6 py-4">
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                        result.status === 'Published' ? 'bg-green-100 text-green-800' :
                        result.status === 'Processing' ? 'bg-yellow-100 text-yellow-800' :
                        'bg-gray-100 text-gray-800'
                      }`}>
                        {result.status}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center justify-center gap-2">
                        {result.status !== 'Published' && (
                          <button 
                            onClick={() => handlePublishResults(result.id)}
                            className="px-3 py-1 bg-purple-600 text-white text-xs rounded hover:bg-purple-700"
                          >
                            Publish
                          </button>
                        )}
                        <button className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg">
                          <EyeIcon className="w-4 h-4" />
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

      {/* Marks Entry Tab */}
      {activeTab === 'marks' && (
        <div className="bg-white rounded-xl shadow-sm overflow-hidden">
          <div className="p-4 border-b flex items-center justify-between">
            <h2 className="font-semibold">Data Structures - CS301 (Semester VI)</h2>
            <button className="btn-primary bg-purple-600 hover:bg-purple-700 text-sm py-2">
              Upload Marks
            </button>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-purple-600 text-white">
                <tr>
                  <th className="px-6 py-4 text-left text-sm font-semibold">Roll No</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold">Student Name</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold">Subject</th>
                  <th className="px-6 py-4 text-center text-sm font-semibold">Marks</th>
                  <th className="px-6 py-4 text-center text-sm font-semibold">Grade</th>
                </tr>
              </thead>
              <tbody className="divide-y">
                {marksData.map((mark) => (
                  <tr key={mark.id} className="hover:bg-purple-50">
                    <td className="px-6 py-4 text-sm font-medium">{mark.rollNo}</td>
                    <td className="px-6 py-4 text-sm">{mark.student}</td>
                    <td className="px-6 py-4 text-sm">{mark.subject}</td>
                    <td className="px-6 py-4">
                      <input
                        type="number"
                        defaultValue={mark.marks}
                        className="w-20 px-2 py-1 text-center border rounded focus:ring-2 focus:ring-purple-500 mx-auto block"
                      />
                    </td>
                    <td className="px-6 py-4 text-center text-sm font-semibold text-purple-600">{mark.grade}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="p-4 border-t flex justify-end">
            <button className="btn-primary bg-purple-600 hover:bg-purple-700">
              Save All Marks
            </button>
          </div>
        </div>
      )}
    </AdminPanelLayout>
  );
};

export default ExaminationManagement;