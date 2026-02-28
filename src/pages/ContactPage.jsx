import React, { useState } from 'react';
import { MapPinIcon, PhoneIcon, EnvelopeIcon, ClockIcon } from '@heroicons/react/24/outline';
import PageHeader from '../components/ui/PageHeader';
import toast from 'react-hot-toast';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success('Message sent successfully! We\'ll get back to you soon.');
    setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
  };

  const departments = [
    { name: 'Admissions Office', email: 'admissions@standrews.edu', phone: '+1 234 567 8901' },
    { name: 'Academic Affairs', email: 'academics@standrews.edu', phone: '+1 234 567 8902' },
    { name: 'Student Support', email: 'support@standrews.edu', phone: '+1 234 567 8903' },
    { name: 'Placement Cell', email: 'placements@standrews.edu', phone: '+1 234 567 8904' },
  ];

  return (
    <div>
      {/* Hero Section - Responsive */}
      <PageHeader 
  title="Contact Us"
  subtitle="Get in touch with us for any queries or assistance"
  breadcrumb="Contact"
  bgImage="https://images.pexels.com/photos/256490/pexels-photo-256490.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop"
/>

      {/* Contact Info Cards - Responsive */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="container-custom px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
            <div className="bg-secondary-50 p-4 sm:p-5 md:p-6 rounded-xl text-center">
              <MapPinIcon className="w-5 h-5 sm:w-6 sm:h-6 text-primary-600 mx-auto mb-2 sm:mb-3" />
              <h3 className="text-sm sm:text-base font-semibold mb-1 sm:mb-2">Address</h3>
              <p className="text-xs sm:text-sm text-secondary-600">
                123 Education Street<br />Knowledge City, KC 12345
              </p>
            </div>
            <div className="bg-secondary-50 p-4 sm:p-5 md:p-6 rounded-xl text-center">
              <PhoneIcon className="w-5 h-5 sm:w-6 sm:h-6 text-primary-600 mx-auto mb-2 sm:mb-3" />
              <h3 className="text-sm sm:text-base font-semibold mb-1 sm:mb-2">Phone</h3>
              <p className="text-xs sm:text-sm text-secondary-600">
                +1 234 567 8900<br />+1 234 567 8901
              </p>
            </div>
            <div className="bg-secondary-50 p-4 sm:p-5 md:p-6 rounded-xl text-center">
              <EnvelopeIcon className="w-5 h-5 sm:w-6 sm:h-6 text-primary-600 mx-auto mb-2 sm:mb-3" />
              <h3 className="text-sm sm:text-base font-semibold mb-1 sm:mb-2">Email</h3>
              <p className="text-xs sm:text-sm text-secondary-600">
                info@standrews.edu<br />admissions@standrews.edu
              </p>
            </div>
            <div className="bg-secondary-50 p-4 sm:p-5 md:p-6 rounded-xl text-center">
              <ClockIcon className="w-5 h-5 sm:w-6 sm:h-6 text-primary-600 mx-auto mb-2 sm:mb-3" />
              <h3 className="text-sm sm:text-base font-semibold mb-1 sm:mb-2">Office Hours</h3>
              <p className="text-xs sm:text-sm text-secondary-600">
                Mon-Fri: 9AM-5PM<br />Sat: 9AM-1PM
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Map & Contact Form - Responsive */}
      <section className="py-12 sm:py-16 bg-secondary-50">
        <div className="container-custom px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12">
            {/* Map */}
            <div className="bg-white rounded-xl shadow-sm overflow-hidden h-64 sm:h-80 md:h-96">
              <div className="w-full h-full bg-gradient-to-br from-primary-300 to-primary-500 flex items-center justify-center">
                <span className="text-4xl sm:text-5xl">🗺️</span>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white rounded-xl shadow-sm p-4 sm:p-5 md:p-6">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold mb-4 sm:mb-6">Send us a Message</h2>
              
              <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-4">
                <div>
                  <label className="input-label text-xs sm:text-sm">Full Name *</label>
                  <input
                    type="text"
                    className="input-field text-sm"
                    placeholder="Enter your full name"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    required
                  />
                </div>

                <div>
                  <label className="input-label text-xs sm:text-sm">Email Address *</label>
                  <input
                    type="email"
                    className="input-field text-sm"
                    placeholder="Enter your email"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    required
                  />
                </div>

                <div>
                  <label className="input-label text-xs sm:text-sm">Subject *</label>
                  <input
                    type="text"
                    className="input-field text-sm"
                    placeholder="Enter subject"
                    value={formData.subject}
                    onChange={(e) => setFormData({...formData, subject: e.target.value})}
                    required
                  />
                </div>

                <div>
                  <label className="input-label text-xs sm:text-sm">Message *</label>
                  <textarea
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    required
                    rows="4"
                    className="input-field text-sm resize-none"
                    placeholder="Type your message here..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="btn-primary w-full text-sm sm:text-base py-2.5 sm:py-3"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Department Contacts - Responsive */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="container-custom px-4 sm:px-6 lg:px-8">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-center mb-6 sm:mb-8">Department Contacts</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
            {departments.map((dept, index) => (
              <div key={index} className="bg-secondary-50 p-4 sm:p-5 rounded-xl">
                <h3 className="text-sm sm:text-base font-bold mb-2 sm:mb-3">{dept.name}</h3>
                <div className="space-y-1 text-xs sm:text-sm">
                  <p className="flex items-center text-secondary-600">
                    <EnvelopeIcon className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2 text-primary-500" />
                    {dept.email}
                  </p>
                  <p className="flex items-center text-secondary-600">
                    <PhoneIcon className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2 text-primary-500" />
                    {dept.phone}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;