import React, { useState } from 'react';
import { 
  AcademicCapIcon, 
  ChartBarIcon,
  MagnifyingGlassIcon,
  CheckCircleIcon
} from '@heroicons/react/24/outline';
import FacultyPanelLayout from '../../layouts/FacultyPanelLayout';
import toast from 'react-hot-toast';

const MarksEntry = () => {
  const [selectedCourse, setSelectedCourse] = useState('CS301');
  const [selectedExam, setSelectedExam] = useState('Internal I');
  const [marks, setMarks] = useState({});

  const courses = [
    { code: 'CS301', name: 'Data Structures', batch: 'CSE 3rd Year' },
    { code: 'CS302', name: 'Database Systems', batch: 'CSE 2nd Year' },
    { code: 'CS304', name: 'Algorithm Design', batch: 'CSE 4th Year' },
  ];

  const examTypes = ['Internal I', 'Internal II', 'End Semester', 'Assignment'];

  const students = [
    { id: 1, rollNo: 'CS2022001', name: 'Rahul Verma', internal: 28, external: 72, total: 100, grade: 'A' },
    { id: 2, rollNo: 'CS2022002', name: 'Priya Sharma', internal: 25, external: 68, total: 93, grade: 'B+' },
    { id: 3, rollNo: 'CS2022003', name: 'Amit Kumar', internal: 22, external: 65, total: 87, grade: 'B' },
    { id: 4, rollNo: 'CS2022004', name: 'Neha Singh', internal: 30, external: 75, total: 105, grade: 'A+' },
  ];

  const handleSubmit = () => {
    toast.success('Marks saved successfully!');
  };

  return (
    <FacultyPanelLayout>
      {/* Filters */}
      <div className="bg-white rounded-xl shadow-sm p-6 mb-6">
        <div className="grid md:grid-cols-3 gap-4">
          <div>
            <label className="block text-sm font-medium text-secondary-700 mb-2">Select Course</label>
            <select 
              value={selectedCourse}
              onChange={(e) => setSelectedCourse(e.target.value)}
              className="w-full px-4 py-2 border border-secondary-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
            >
              {courses.map(course => (
                <option key={course.code} value={course.code}>
                  {course.code} - {course.name}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-secondary-700 mb-2">Exam Type</label>
            <select 
              value={selectedExam}
              onChange={(e) => setSelectedExam(e.target.value)}
              className="w-full px-4 py-2 border border-secondary-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
            >
              {examTypes.map(exam => (
                <option key={exam} value={exam}>{exam}</option>
              ))}
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-secondary-700 mb-2">Search Student</label>
            <div className="relative">
              <MagnifyingGlassIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-secondary-400" />
              <input 
                type="text"
                placeholder="Search by name"
                className="w-full pl-10 pr-4 py-2 border border-secondary-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Exam Info */}
      <div className="bg-white rounded-xl shadow-sm p-6 mb-6">
        <div className="flex items-center gap-4">
          <div className="p-3 bg-green-100 rounded-lg">
            <AcademicCapIcon className="w-6 h-6 text-green-600" />
          </div>
          <div>
            <h2 className="text-lg font-semibold">Exam Details</h2>
            <p className="text-sm text-secondary-600">
              {courses.find(c => c.code === selectedCourse)?.name} • {selectedExam} • Max Marks: 100
            </p>
          </div>
        </div>
      </div>

      {/* Marks Entry Table */}
      <div className="bg-white rounded-xl shadow-sm p-6">
        <h2 className="text-lg font-semibold mb-4 flex items-center">
          <ChartBarIcon className="w-5 h-5 mr-2 text-green-600" />
          Enter Marks
        </h2>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-secondary-50">
              <tr>
                <th className="px-4 py-3 text-left text-sm font-medium text-secondary-600">Roll No</th>
                <th className="px-4 py-3 text-left text-sm font-medium text-secondary-600">Student Name</th>
                <th className="px-4 py-3 text-center text-sm font-medium text-secondary-600">Internal (30)</th>
                <th className="px-4 py-3 text-center text-sm font-medium text-secondary-600">External (70)</th>
                <th className="px-4 py-3 text-center text-sm font-medium text-secondary-600">Total</th>
                <th className="px-4 py-3 text-center text-sm font-medium text-secondary-600">Grade</th>
              </tr>
            </thead>
            <tbody className="divide-y">
              {students.map((student) => (
                <tr key={student.id} className="hover:bg-secondary-50">
                  <td className="px-4 py-3 text-sm font-medium">{student.rollNo}</td>
                  <td className="px-4 py-3 text-sm">{student.name}</td>
                  <td className="px-4 py-3">
                    <input
                      type="number"
                      defaultValue={student.internal}
                      className="w-20 px-2 py-1 text-center border rounded-lg focus:ring-2 focus:ring-green-500 mx-auto block"
                    />
                  </td>
                  <td className="px-4 py-3">
                    <input
                      type="number"
                      defaultValue={student.external}
                      className="w-20 px-2 py-1 text-center border rounded-lg focus:ring-2 focus:ring-green-500 mx-auto block"
                    />
                  </td>
                  <td className="px-4 py-3 text-center font-semibold">{student.total}</td>
                  <td className="px-4 py-3 text-center">
                    <span className="px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
                      {student.grade}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-6 pt-6 border-t flex justify-end">
          <button onClick={handleSubmit} className="btn-primary bg-green-600 hover:bg-green-700">
            Save All Marks
          </button>
        </div>
      </div>
    </FacultyPanelLayout>
  );
};

export default MarksEntry;