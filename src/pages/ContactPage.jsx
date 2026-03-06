import React, { useState } from 'react';
import { MapPinIcon, PhoneIcon, EnvelopeIcon, ClockIcon } from '@heroicons/react/24/outline';
import PageHeader from '../components/ui/PageHeader';
import Navbar from '../components/common/Navbar';
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

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const departments = [
    {
      name: 'Admissions Office',
      email: 'admissions@standrews.edu',
      phone: '+1 234 567 8901',
      image: 'https://images.pexels.com/photos/3768911/pexels-photo-3768911.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop'
    },
    {
      name: 'Academic Affairs',
      email: 'academics@standrews.edu',
      phone: '+1 234 567 8902',
      image: 'https://images.pexels.com/photos/3768916/pexels-photo-3768916.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop'
    },
    {
      name: 'Student Support',
      email: 'support@standrews.edu',
      phone: '+1 234 567 8903',
      image: 'https://images.pexels.com/photos/3768911/pexels-photo-3768911.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop'
    },
    {
      name: 'Placement Cell',
      email: 'placements@standrews.edu',
      phone: '+1 234 567 8904',
      image: 'https://images.pexels.com/photos/3768916/pexels-photo-3768916.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop'
    },
  ];

  const faqs = [
    {
      q: 'What are the office hours?',
      a: 'Monday to Friday: 9:00 AM - 5:00 PM, Saturday: 9:00 AM - 1:00 PM'
    },
    {
      q: 'How can I get a prospectus?',
      a: 'You can download it from our website or collect it from the admissions office.'
    },
    {
      q: 'Is campus visit possible?',
      a: 'Yes, please schedule an appointment through our contact form.'
    },
  ];

  return (
    <div>
      <PageHeader 
        title="Contact Us"
        subtitle="Get in touch with us for any queries or assistance"
        breadcrumb="Contact"
        page="contact"
      />

      {/* Navbar */}
      <Navbar />

      {/* Contact Info Cards */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-secondary-50 rounded-xl p-6 text-center">
              <div className="w-12 h-12 bg-primary-600 text-white rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPinIcon className="w-6 h-6" />
              </div>
              <h3 className="font-semibold mb-2">Address</h3>
              <p className="text-secondary-600 text-sm">
                123 Education Street<br />
                Knowledge City, KC 12345
              </p>
            </div>

            <div className="bg-secondary-50 rounded-xl p-6 text-center">
              <div className="w-12 h-12 bg-primary-600 text-white rounded-full flex items-center justify-center mx-auto mb-4">
                <PhoneIcon className="w-6 h-6" />
              </div>
              <h3 className="font-semibold mb-2">Phone</h3>
              <p className="text-secondary-600 text-sm">
                +1 234 567 8900<br />
                +1 234 567 8901
              </p>
            </div>

            <div className="bg-secondary-50 rounded-xl p-6 text-center">
              <div className="w-12 h-12 bg-primary-600 text-white rounded-full flex items-center justify-center mx-auto mb-4">
                <EnvelopeIcon className="w-6 h-6" />
              </div>
              <h3 className="font-semibold mb-2">Email</h3>
              <p className="text-secondary-600 text-sm">
                info@standrews.edu<br />
                admissions@standrews.edu
              </p>
            </div>

            <div className="bg-secondary-50 rounded-xl p-6 text-center">
              <div className="w-12 h-12 bg-primary-600 text-white rounded-full flex items-center justify-center mx-auto mb-4">
                <ClockIcon className="w-6 h-6" />
              </div>
              <h3 className="font-semibold mb-2">Office Hours</h3>
              <p className="text-secondary-600 text-sm">
                Mon-Fri: 9AM - 5PM<br />
                Sat: 9AM - 1PM
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Map & Contact Form */}
      <section className="py-16 bg-secondary-50">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Map */}
            <div className="bg-white rounded-xl shadow-sm overflow-hidden h-96">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.9663095343008!2d-73.9851079!3d40.758896!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25855c6480299%3A0x55194ec5a1ae072e!2sTimes%20Square!5e0!3m2!1sen!2sus!4v1710000000000!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="College Location"
                className="w-full h-full"
              ></iframe>
            </div>

            {/* Contact Form */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-2xl font-bold mb-6">Send us a Message</h2>
              
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="input-label">Full Name *</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="input-field"
                    placeholder="Enter your full name"
                  />
                </div>

                <div>
                  <label className="input-label">Email Address *</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="input-field"
                    placeholder="Enter your email"
                  />
                </div>

                <div>
                  <label className="input-label">Subject *</label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="input-field"
                    placeholder="Enter subject"
                  />
                </div>

                <div>
                  <label className="input-label">Message *</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="4"
                    className="input-field"
                    placeholder="Type your message here..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="btn-primary w-full"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Department Contacts */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-center mb-12">Department Contacts</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {departments.map((dept, index) => (
              <div key={index} className="bg-secondary-50 rounded-2xl overflow-hidden">
                <img 
                  src={dept.image} 
                  alt={dept.name}
                  className="w-full h-40 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-lg font-bold mb-3">{dept.name}</h3>
                  <div className="space-y-2 text-sm">
                    <p className="flex items-center text-secondary-600">
                      <EnvelopeIcon className="w-4 h-4 mr-2 text-primary-500" />
                      {dept.email}
                    </p>
                    <p className="flex items-center text-secondary-600">
                      <PhoneIcon className="w-4 h-4 mr-2 text-primary-500" />
                      {dept.phone}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-secondary-50">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>

          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white rounded-xl p-6">
                <h3 className="font-semibold mb-2 flex items-center gap-2">
                  <span className="text-primary-600">Q{index + 1}:</span> {faq.q}
                </h3>
                <p className="text-secondary-600 flex items-start gap-2">
                  <span className="text-primary-600 font-medium">A:</span> {faq.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;