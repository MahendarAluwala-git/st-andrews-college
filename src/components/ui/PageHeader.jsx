import React from 'react';
import { Link } from 'react-router-dom';
import { SparklesIcon } from '@heroicons/react/24/outline';

const PageHeader = ({ title, subtitle, breadcrumb, bgImage }) => {
  // Default background image if none provided
  const defaultBgImage = "https://images.pexels.com/photos/207691/pexels-photo-207691.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop";
  
  return (
    <section className="relative w-full h-[60vh] min-h-[400px] max-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 w-full h-full">
        <div className="absolute inset-0 bg-gradient-to-r from-primary-900/90 to-primary-800/90 z-10"></div>
        <img 
          src={bgImage || defaultBgImage}
          alt={title}
          className="w-full h-full object-cover object-center"
        />
      </div>
      
      {/* Content */}
      <div className="relative z-20 w-full px-4 sm:px-6 lg:px-8 mx-auto max-w-7xl">
        <div className="flex flex-col items-center justify-center text-center">
          {/* Breadcrumb */}
          {breadcrumb && (
            <div className="mb-4 text-white/60 text-sm">
              <Link to="/" className="hover:text-white transition-colors">Home</Link>
              <span className="mx-2">/</span>
              <span className="text-white">{breadcrumb}</span>
            </div>
          )}
          
          {/* Badge */}
          <div className="inline-flex items-center bg-white/10 backdrop-blur-sm rounded-full 
                        px-3 sm:px-4 py-1 sm:py-1.5 mb-4 sm:mb-6 
                        text-xs sm:text-sm border border-white/20">
            <SparklesIcon className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2 text-yellow-300" />
            <span className="font-medium text-white">St. Andrew's College</span>
          </div>
          
          {/* Title */}
          <h1 className="font-bold text-white mb-4 sm:mb-6
                       text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl
                       leading-tight max-w-4xl mx-auto px-2">
            {title}
          </h1>
          
          {/* Subtitle */}
          {subtitle && (
            <p className="text-white/90 text-sm sm:text-base md:text-lg lg:text-xl
                        max-w-2xl mx-auto px-4">
              {subtitle}
            </p>
          )}
        </div>
      </div>
    </section>
  );
};

export default PageHeader;