import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { EnvelopeIcon, LockClosedIcon } from '@heroicons/react/24/outline';
import toast from 'react-hot-toast';

const StudentLogin = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    rememberMe: false
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Mock login - replace with actual authentication
    toast.success('Login successful! Redirecting to dashboard...');
    setTimeout(() => {
      window.location.href = '/student/dashboard';
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-secondary-50 flex items-center justify-center py-12 px-4 pt-24">
      <div className="max-w-md w-full">
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          {/* Header Image */}
          <div className="h-32 bg-gradient-to-r from-primary-600 to-primary-400 relative">
            <div className="absolute inset-0 bg-black/20"></div>
            <div className="absolute -bottom-12 left-1/2 transform -translate-x-1/2">
              <div className="w-24 h-24 bg-white rounded-2xl shadow-lg flex items-center justify-center">
                <span className="text-4xl">🎓</span>
              </div>
            </div>
          </div>

          <div className="pt-16 pb-8 px-8">
            <h2 className="text-2xl font-bold text-center mb-2">Student Login</h2>
            <p className="text-secondary-600 text-center mb-8">Access your student portal</p>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="input-label">Email / Roll Number</label>
                <div className="relative">
                  <EnvelopeIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-secondary-400" />
                  <input
                    type="text"
                    className="input-field pl-10"
                    placeholder="Enter your email or roll number"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    required
                  />
                </div>
              </div>

              <div>
                <label className="input-label">Password</label>
                <div className="relative">
                  <LockClosedIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-secondary-400" />
                  <input
                    type="password"
                    className="input-field pl-10"
                    placeholder="Enter your password"
                    value={formData.password}
                    onChange={(e) => setFormData({...formData, password: e.target.value})}
                    required
                  />
                </div>
              </div>

              <div className="flex items-center justify-between">
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    className="mr-2"
                    checked={formData.rememberMe}
                    onChange={(e) => setFormData({...formData, rememberMe: e.target.checked})}
                  />
                  <span className="text-sm text-secondary-600">Remember me</span>
                </label>
                <Link to="/student/forgot-password" className="text-sm text-primary-600 hover:text-primary-700">
                  Forgot Password?
                </Link>
              </div>

              <button
                type="submit"
                className="btn-primary w-full"
              >
                Login
              </button>
            </form>

            <div className="mt-6 text-center">
              <p className="text-sm text-secondary-600">
                New student? <Link to="/admissions" className="text-primary-600 hover:text-primary-700 font-medium">Apply Now</Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentLogin;