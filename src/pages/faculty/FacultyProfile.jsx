import React, { useState } from 'react';
import { 
  UserCircleIcon, 
  EnvelopeIcon, 
  PhoneIcon, 
  CalendarIcon,
  MapPinIcon,
  AcademicCapIcon,
  BriefcaseIcon,
  CameraIcon
} from '@heroicons/react/24/outline';
import FacultyPanelLayout from '../../layouts/FacultyPanelLayout';
import toast from 'react-hot-toast';

const FacultyProfile = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [profileData, setProfileData] = useState({
    name: 'Dr. James Anderson',
    email: 'james.anderson@standrews.edu',
    phone: '+91 98765 43210',
    dob: '15 Mar 1975',
    address: '456 Faculty Quarters, College Campus',
    city: 'Mumbai',
    state: 'Maharashtra',
    pincode: '400001',
    facultyId: 'FAC001',
    department: 'Computer Science',
    designation: 'Professor & Head',
    qualification: 'Ph.D. (IIT Delhi)',
    experience: '22 years',
    specialization: 'Artificial Intelligence, Machine Learning',
    bloodGroup: 'O+',
    joiningDate: '15 Jul 2005'
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProfileData(prev => ({ ...prev, [name]: value }));
  };

  const handleSave = () => {
    setIsEditing(false);
    toast.success('Profile updated successfully!');
  };

  return (
    <FacultyPanelLayout>
      <div className="grid lg:grid-cols-3 gap-8">
        {/* Left Column - Profile Photo & Basic Info */}
        <div className="lg:col-span-1">
          <div className="bg-white rounded-xl shadow-sm p-6 sticky top-24">
            <div className="text-center">
              <div className="relative inline-block">
                <img 
                  src="https://randomuser.me/api/portraits/men/32.jpg" 
                  alt="Profile"
                  className="w-32 h-32 rounded-full object-cover border-4 border-green-500 mx-auto"
                />
                <button className="absolute bottom-0 right-0 bg-green-600 text-white p-2 rounded-full hover:bg-green-700 transition-colors">
                  <CameraIcon className="w-4 h-4" />
                </button>
              </div>
              <h2 className="text-xl font-bold mt-4">{profileData.name}</h2>
              <p className="text-green-600 text-sm">{profileData.facultyId}</p>
              <p className="text-secondary-500 text-sm mt-1">{profileData.designation}</p>
              <p className="text-secondary-500 text-xs">{profileData.department}</p>
              
              <div className="mt-6 pt-6 border-t border-secondary-200">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-secondary-600">Experience</span>
                  <span className="font-semibold">{profileData.experience}</span>
                </div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-secondary-600">Joined</span>
                  <span className="font-semibold">{profileData.joiningDate}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-secondary-600">Qualification</span>
                  <span className="font-semibold text-sm">{profileData.qualification}</span>
                </div>
              </div>

              <button
                onClick={() => setIsEditing(!isEditing)}
                className="mt-6 w-full btn-primary bg-green-600 hover:bg-green-700"
              >
                {isEditing ? 'Cancel Editing' : 'Edit Profile'}
              </button>
            </div>
          </div>
        </div>

        {/* Right Column - Detailed Information */}
        <div className="lg:col-span-2">
          <div className="bg-white rounded-xl shadow-sm p-6">
            <h3 className="text-lg font-semibold mb-6 flex items-center">
              <UserCircleIcon className="w-5 h-5 mr-2 text-green-600" />
              Personal Information
            </h3>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-secondary-700 mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={profileData.name}
                  onChange={handleInputChange}
                  disabled={!isEditing}
                  className="w-full px-4 py-2 border border-secondary-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 disabled:bg-secondary-50 disabled:text-secondary-600"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-secondary-700 mb-2">
                  Email Address
                </label>
                <div className="relative">
                  <EnvelopeIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-secondary-400" />
                  <input
                    type="email"
                    name="email"
                    value={profileData.email}
                    onChange={handleInputChange}
                    disabled={!isEditing}
                    className="w-full pl-10 pr-4 py-2 border border-secondary-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 disabled:bg-secondary-50 disabled:text-secondary-600"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-secondary-700 mb-2">
                  Phone Number
                </label>
                <div className="relative">
                  <PhoneIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-secondary-400" />
                  <input
                    type="text"
                    name="phone"
                    value={profileData.phone}
                    onChange={handleInputChange}
                    disabled={!isEditing}
                    className="w-full pl-10 pr-4 py-2 border border-secondary-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 disabled:bg-secondary-50 disabled:text-secondary-600"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-secondary-700 mb-2">
                  Date of Birth
                </label>
                <div className="relative">
                  <CalendarIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-secondary-400" />
                  <input
                    type="text"
                    name="dob"
                    value={profileData.dob}
                    onChange={handleInputChange}
                    disabled={!isEditing}
                    className="w-full pl-10 pr-4 py-2 border border-secondary-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 disabled:bg-secondary-50 disabled:text-secondary-600"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-secondary-700 mb-2">
                  Blood Group
                </label>
                <input
                  type="text"
                  name="bloodGroup"
                  value={profileData.bloodGroup}
                  onChange={handleInputChange}
                  disabled={!isEditing}
                  className="w-full px-4 py-2 border border-secondary-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 disabled:bg-secondary-50 disabled:text-secondary-600"
                />
              </div>
            </div>

            <h3 className="text-lg font-semibold mt-8 mb-6 flex items-center">
              <BriefcaseIcon className="w-5 h-5 mr-2 text-green-600" />
              Professional Information
            </h3>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-secondary-700 mb-2">
                  Faculty ID
                </label>
                <input
                  type="text"
                  value={profileData.facultyId}
                  disabled
                  className="w-full px-4 py-2 bg-secondary-50 border border-secondary-200 rounded-lg text-secondary-600"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-secondary-700 mb-2">
                  Department
                </label>
                <input
                  type="text"
                  value={profileData.department}
                  disabled
                  className="w-full px-4 py-2 bg-secondary-50 border border-secondary-200 rounded-lg text-secondary-600"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-secondary-700 mb-2">
                  Designation
                </label>
                <input
                  type="text"
                  value={profileData.designation}
                  disabled
                  className="w-full px-4 py-2 bg-secondary-50 border border-secondary-200 rounded-lg text-secondary-600"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-secondary-700 mb-2">
                  Qualification
                </label>
                <input
                  type="text"
                  value={profileData.qualification}
                  onChange={handleInputChange}
                  disabled={!isEditing}
                  className="w-full px-4 py-2 border border-secondary-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 disabled:bg-secondary-50 disabled:text-secondary-600"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-secondary-700 mb-2">
                  Experience
                </label>
                <input
                  type="text"
                  value={profileData.experience}
                  onChange={handleInputChange}
                  disabled={!isEditing}
                  className="w-full px-4 py-2 border border-secondary-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 disabled:bg-secondary-50 disabled:text-secondary-600"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-secondary-700 mb-2">
                  Specialization
                </label>
                <input
                  type="text"
                  value={profileData.specialization}
                  onChange={handleInputChange}
                  disabled={!isEditing}
                  className="w-full px-4 py-2 border border-secondary-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 disabled:bg-secondary-50 disabled:text-secondary-600"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-secondary-700 mb-2">
                  Joining Date
                </label>
                <input
                  type="text"
                  value={profileData.joiningDate}
                  disabled
                  className="w-full px-4 py-2 bg-secondary-50 border border-secondary-200 rounded-lg text-secondary-600"
                />
              </div>
            </div>

            <h3 className="text-lg font-semibold mt-8 mb-6 flex items-center">
              <MapPinIcon className="w-5 h-5 mr-2 text-green-600" />
              Address Information
            </h3>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-secondary-700 mb-2">
                  Address
                </label>
                <textarea
                  name="address"
                  value={profileData.address}
                  onChange={handleInputChange}
                  disabled={!isEditing}
                  rows="2"
                  className="w-full px-4 py-2 border border-secondary-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 disabled:bg-secondary-50 disabled:text-secondary-600"
                ></textarea>
              </div>

              <div className="grid md:grid-cols-3 gap-4">
                <div>
                  <label className="block text-sm font-medium text-secondary-700 mb-2">
                    City
                  </label>
                  <input
                    type="text"
                    name="city"
                    value={profileData.city}
                    onChange={handleInputChange}
                    disabled={!isEditing}
                    className="w-full px-4 py-2 border border-secondary-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 disabled:bg-secondary-50 disabled:text-secondary-600"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-secondary-700 mb-2">
                    State
                  </label>
                  <input
                    type="text"
                    name="state"
                    value={profileData.state}
                    onChange={handleInputChange}
                    disabled={!isEditing}
                    className="w-full px-4 py-2 border border-secondary-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 disabled:bg-secondary-50 disabled:text-secondary-600"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-secondary-700 mb-2">
                    Pincode
                  </label>
                  <input
                    type="text"
                    name="pincode"
                    value={profileData.pincode}
                    onChange={handleInputChange}
                    disabled={!isEditing}
                    className="w-full px-4 py-2 border border-secondary-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 disabled:bg-secondary-50 disabled:text-secondary-600"
                  />
                </div>
              </div>
            </div>

            {isEditing && (
              <div className="mt-8 flex gap-4">
                <button
                  onClick={handleSave}
                  className="flex-1 btn-primary bg-green-600 hover:bg-green-700"
                >
                  Save Changes
                </button>
                <button
                  onClick={() => setIsEditing(false)}
                  className="flex-1 btn-secondary"
                >
                  Cancel
                </button>
              </div>
            )}

            {/* Publications Section */}
            <div className="mt-8 pt-8 border-t border-secondary-200">
              <h3 className="text-lg font-semibold mb-4 flex items-center">
                <AcademicCapIcon className="w-5 h-5 mr-2 text-green-600" />
                Research & Publications
              </h3>
              <div className="space-y-3">
                <div className="p-4 bg-secondary-50 rounded-lg">
                  <p className="font-medium">"Deep Learning Approaches for Image Recognition"</p>
                  <p className="text-sm text-secondary-600">IEEE Transactions, 2024</p>
                </div>
                <div className="p-4 bg-secondary-50 rounded-lg">
                  <p className="font-medium">"Machine Learning in Healthcare: A Review"</p>
                  <p className="text-sm text-secondary-600">Journal of AI Research, 2023</p>
                </div>
                <div className="p-4 bg-secondary-50 rounded-lg">
                  <p className="font-medium">"Neural Networks for Natural Language Processing"</p>
                  <p className="text-sm text-secondary-600">ACM Computing Surveys, 2022</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </FacultyPanelLayout>
  );
};

export default FacultyProfile;