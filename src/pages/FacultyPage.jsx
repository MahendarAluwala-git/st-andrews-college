import React, { useState } from 'react';
import { EnvelopeIcon, AcademicCapIcon, BriefcaseIcon } from '@heroicons/react/24/outline';
import PageHeader from '../components/ui/PageHeader';
import Navbar from '../components/common/Navbar';
import { imageUrls } from '../data/imageUrls';

const FacultyPage = () => {
  const [selectedDepartment, setSelectedDepartment] = useState('all');

  const faculty = [
    {
      name: 'Dr. James Anderson',
      designation: 'Professor & Head',
      department: 'Computer Science',
      qualification: 'Ph.D. (IIT Delhi)',
      experience: '22 years',
      expertise: 'Artificial Intelligence',
      email: 'james.anderson@standrews.edu',
      image: imageUrls.profiles.teacher1,
    },
    {
      name: 'Prof. Sarah Williams',
      designation: 'Professor',
      department: 'Mathematics',
      qualification: 'Ph.D. (Cambridge)',
      experience: '18 years',
      expertise: 'Pure Mathematics',
      email: 'sarah.williams@standrews.edu',
      image: imageUrls.profiles.teacher2,
    },
    {
      name: 'Dr. Michael Chen',
      designation: 'Associate Professor',
      department: 'Physics',
      qualification: 'Ph.D. (MIT)',
      experience: '15 years',
      expertise: 'Quantum Physics',
      email: 'michael.chen@standrews.edu',
      image: imageUrls.profiles.teacher3,
    },
    {
      name: 'Dr. Emily Brown',
      designation: 'Professor',
      department: 'Economics',
      qualification: 'Ph.D. (LSE)',
      experience: '20 years',
      expertise: 'Macroeconomics',
      email: 'emily.brown@standrews.edu',
      image: imageUrls.profiles.teacher2,
    },
    {
      name: 'Prof. Robert Taylor',
      designation: 'Professor',
      department: 'Commerce',
      qualification: 'Ph.D., FCA',
      experience: '25 years',
      expertise: 'Financial Accounting',
      email: 'robert.taylor@standrews.edu',
      image: imageUrls.profiles.teacher1,
    },
    {
      name: 'Dr. Priya Patel',
      designation: 'Associate Professor',
      department: 'Computer Science',
      qualification: 'Ph.D. (IIT Bombay)',
      experience: '12 years',
      expertise: 'Data Science',
      email: 'priya.patel@standrews.edu',
      image: imageUrls.profiles.teacher2,
    },
  ];

  const departments = ['all', 'Computer Science', 'Mathematics', 'Physics', 'Economics', 'Commerce'];
  
  const filteredFaculty = selectedDepartment === 'all' 
    ? faculty 
    : faculty.filter(f => f.department === selectedDepartment);

  return (
    <div>
      <PageHeader 
        title="Our Faculty"
        subtitle="Meet our distinguished faculty members dedicated to your success"
        breadcrumb="Faculty"
        page="faculty"
      />

      {/* Navbar */}
      <Navbar />

      <section className="py-12 sm:py-16 bg-white">
        <div className="container-custom px-4 sm:px-6 lg:px-8">
          {/* Department Filter */}
          <div className="flex flex-wrap gap-2 mb-8 justify-center">
            {departments.map((dept) => (
              <button
                key={dept}
                onClick={() => setSelectedDepartment(dept)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors
                  ${selectedDepartment === dept
                    ? 'bg-primary-600 text-white'
                    : 'bg-secondary-100 text-secondary-600 hover:bg-primary-50'}`}
              >
                {dept === 'all' ? 'All Departments' : dept}
              </button>
            ))}
          </div>

          {/* Faculty Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredFaculty.map((member, index) => (
              <div key={index} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                <div className="h-64 overflow-hidden">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                  <p className="text-primary-600 font-medium mb-2">{member.designation}</p>
                  <p className="text-sm text-secondary-600 mb-3">{member.department}</p>
                  
                  <div className="space-y-2 text-sm text-secondary-600 mb-4">
                    <p className="flex items-center">
                      <AcademicCapIcon className="w-4 h-4 mr-2 text-primary-500" />
                      {member.qualification}
                    </p>
                    <p className="flex items-center">
                      <BriefcaseIcon className="w-4 h-4 mr-2 text-primary-500" />
                      Experience: {member.experience}
                    </p>
                  </div>

                  <a 
                    href={`mailto:${member.email}`}
                    className="flex items-center justify-center gap-2 w-full bg-primary-600 text-white py-2 rounded-lg hover:bg-primary-700 transition-colors"
                  >
                    <EnvelopeIcon className="w-4 h-4" />
                    Contact
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary-600">
        <div className="container-custom text-center text-white">
          <h2 className="text-3xl font-bold mb-4">Join Our Faculty</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto text-white/90">
            We're always looking for passionate educators to join our team.
          </p>
          <button className="bg-white text-primary-600 px-8 py-3 rounded-lg font-semibold hover:bg-secondary-100 transition-colors">
            View Open Positions
          </button>
        </div>
      </section>
    </div>
  );
};

export default FacultyPage;