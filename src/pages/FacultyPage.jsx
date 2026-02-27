import React, { useState } from 'react';
import { EnvelopeIcon, AcademicCapIcon, BriefcaseIcon } from '@heroicons/react/24/outline';
import PageHeader from '../components/ui/PageHeader';

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
      image: '👨‍🏫',
    },
    {
      name: 'Prof. Sarah Williams',
      designation: 'Professor',
      department: 'Mathematics',
      qualification: 'Ph.D. (Cambridge)',
      experience: '18 years',
      expertise: 'Pure Mathematics',
      email: 'sarah.williams@standrews.edu',
      image: '👩‍🏫',
    },
    {
      name: 'Dr. Michael Chen',
      designation: 'Associate Professor',
      department: 'Physics',
      qualification: 'Ph.D. (MIT)',
      experience: '15 years',
      expertise: 'Quantum Physics',
      email: 'michael.chen@standrews.edu',
      image: '👨‍🔬',
    },
    {
      name: 'Dr. Emily Brown',
      designation: 'Professor',
      department: 'Economics',
      qualification: 'Ph.D. (LSE)',
      experience: '20 years',
      expertise: 'Macroeconomics',
      email: 'emily.brown@standrews.edu',
      image: '👩‍🔬',
    },
    {
      name: 'Prof. Robert Taylor',
      designation: 'Professor',
      department: 'Commerce',
      qualification: 'Ph.D., FCA',
      experience: '25 years',
      expertise: 'Financial Accounting',
      email: 'robert.taylor@standrews.edu',
      image: '👨‍🏫',
    },
  ];

  const departments = ['all', 'Computer Science', 'Mathematics', 'Physics', 'Economics', 'Commerce'];
  
  const filteredFaculty = selectedDepartment === 'all' 
    ? faculty 
    : faculty.filter(f => f.department === selectedDepartment);

  return (
    <div>
      {/* Hero Section - Responsive */}
      <section className="relative py-16 sm:py-20 md:py-24 lg:py-28 bg-gradient-to-r from-primary-600 to-primary-700 text-white">
        <div className="container-custom px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-3 sm:mb-4">Our Faculty</h1>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-white/90 max-w-3xl mx-auto px-4">
            Meet our distinguished faculty members dedicated to your success
          </p>
        </div>
      </section>

      {/* Faculty Section - Responsive */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="container-custom px-4 sm:px-6 lg:px-8">
          {/* Department Filter - Responsive */}
          <div className="flex flex-wrap gap-2 mb-6 sm:mb-8 justify-center">
            {departments.map((dept) => (
              <button
                key={dept}
                onClick={() => setSelectedDepartment(dept)}
                className={`px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-medium transition-colors
                  ${selectedDepartment === dept
                    ? 'bg-primary-600 text-white'
                    : 'bg-secondary-100 text-secondary-600 hover:bg-primary-50'}`}
              >
                {dept === 'all' ? 'All' : dept}
              </button>
            ))}
          </div>

          {/* Faculty Grid - Responsive */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-5 md:gap-6">
            {filteredFaculty.map((member, index) => (
              <div key={index} className="bg-secondary-50 rounded-xl overflow-hidden hover:shadow-md transition-shadow">
                <div className="h-32 sm:h-36 md:h-40 bg-gradient-to-br from-primary-500 to-primary-600 flex items-center justify-center">
                  <span className="text-4xl sm:text-5xl md:text-6xl">{member.image}</span>
                </div>
                <div className="p-4 sm:p-5">
                  <h3 className="text-sm sm:text-base font-bold mb-1">{member.name}</h3>
                  <p className="text-primary-600 text-xs sm:text-sm font-medium mb-2">{member.designation}</p>
                  <p className="text-xs sm:text-sm text-secondary-600 mb-2">{member.department}</p>
                  
                  <div className="space-y-1 text-xs sm:text-sm text-secondary-600 mb-3">
                    <p className="flex items-center">
                      <AcademicCapIcon className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2 text-primary-500" />
                      {member.qualification}
                    </p>
                    <p className="flex items-center">
                      <BriefcaseIcon className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2 text-primary-500" />
                      {member.experience}
                    </p>
                  </div>

                  <a 
                    href={`mailto:${member.email}`}
                    className="flex items-center justify-center gap-1 sm:gap-2 w-full bg-white border border-secondary-300 text-secondary-700 py-1.5 sm:py-2 rounded-lg hover:bg-secondary-50 transition-colors text-xs sm:text-sm"
                  >
                    <EnvelopeIcon className="w-3 h-3 sm:w-4 sm:h-4" />
                    Contact
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section - Responsive */}
      <section className="relative py-16 sm:py-20 bg-primary-600">
        <div className="container-custom px-4 sm:px-6 lg:px-8 text-center text-white">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4">Join Our Faculty</h2>
          <p className="text-sm sm:text-base text-white/90 mb-6 sm:mb-8 max-w-2xl mx-auto px-4">
            We're always looking for passionate educators to join our team.
          </p>
          <button className="bg-white text-primary-600 px-6 py-2.5 sm:px-8 sm:py-3 rounded-lg font-semibold text-sm sm:text-base hover:bg-secondary-100 transition-colors">
            View Open Positions
          </button>
        </div>
      </section>
    </div>
  );
};

export default FacultyPage;