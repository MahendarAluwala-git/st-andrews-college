import React from 'react';
import { Link } from 'react-router-dom';

const PageHeader = ({ title, subtitle, breadcrumb }) => {
  return (
    <section className="relative py-16 sm:py-20 md:py-24 lg:py-28 bg-gradient-to-r from-primary-600 to-primary-700 text-white">
      <div className="container-custom px-4 sm:px-6 lg:px-8 text-center">
        {breadcrumb && (
          <div className="mb-2 sm:mb-3 md:mb-4">
            <Link to="/" className="text-white/60 hover:text-white text-xs sm:text-sm transition-colors">Home</Link>
            <span className="mx-2 text-white/60 text-xs sm:text-sm">/</span>
            <span className="text-white text-xs sm:text-sm">{breadcrumb}</span>
          </div>
        )}
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-2 sm:mb-3 md:mb-4" 
            dangerouslySetInnerHTML={{ __html: title }} />
        {subtitle && (
          <p className="text-sm sm:text-base md:text-lg text-white/90 max-w-2xl mx-auto px-4">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
};

export default PageHeader;