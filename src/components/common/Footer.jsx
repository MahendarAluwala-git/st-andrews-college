import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerSections = [
    {
      title: 'Quick Links',
      links: [
        { name: 'About Us', path: '/about' },
        { name: 'Academics', path: '/academics' },
        { name: 'Admissions', path: '/admissions' },
        { name: 'Contact', path: '/contact' },
      ],
    },
    {
      title: 'Resources',
      links: [
        { name: 'Student Portal', path: '/student/login' },
        { name: 'Faculty Portal', path: '/faculty/login' },
        { name: 'Alumni', path: '/alumni' },
        { name: 'Careers', path: '/careers' },
      ],
    },
    {
      title: 'Support',
      links: [
        { name: 'Help Center', path: '/help' },
        { name: 'Privacy Policy', path: '/privacy' },
        { name: 'Terms of Use', path: '/terms' },
        { name: 'FAQ', path: '/faq' },
      ],
    },
  ];

  return (
    <footer className="bg-white border-t border-secondary-200">
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <Link to="/" className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-primary-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">SA</span>
              </div>
              <span className="font-semibold text-secondary-900">St. Andrew's</span>
            </Link>
            <p className="text-sm text-secondary-600 leading-relaxed">
              Empowering minds and transforming lives through excellence in education.
            </p>
          </div>

          {/* Footer Sections */}
          {footerSections.map((section) => (
            <div key={section.title}>
              <h4 className="font-semibold text-secondary-900 mb-4">{section.title}</h4>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.path}>
                    <Link
                      to={link.path}
                      className="text-sm text-secondary-600 hover:text-primary-600 transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-6 border-t border-secondary-200">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-secondary-600">
            <p>© {currentYear} St. Andrew's College. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link to="/privacy" className="hover:text-primary-600 transition-colors">Privacy</Link>
              <Link to="/terms" className="hover:text-primary-600 transition-colors">Terms</Link>
              <Link to="/sitemap" className="hover:text-primary-600 transition-colors">Sitemap</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;